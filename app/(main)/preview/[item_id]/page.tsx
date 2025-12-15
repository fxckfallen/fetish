"use client";

import { useState, useRef, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import ProductCarousel from "@/components/shared/product-carousel";
import ProductImageSlider from "@/components/shared/ProductImageSlider";
import { AddToCart } from "@/components/shared/add-to-cart";
import { getOffer } from "@/lib/dummy_api";

interface PageProps {
    params: Promise<{ item_id: string }>
}

export default function Home({ params }: PageProps) {
  const [offer, setOffer] = useState<any>(null);
  const [descExpanded, setDescExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState("48px");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const descRef = useRef<HTMLDivElement>(null);

  // Разворачиваем Promise params
  useEffect(() => {
    const loadOffer = async () => {
      const { item_id } = await params;
      const id = parseInt(item_id, 10);
      const fetchedOffer = getOffer(id);

      if (fetchedOffer) {
        setOffer(fetchedOffer);

        // Устанавливаем дефолтный размер: первый доступный с qty > 0
        const availableSize = fetchedOffer.sizes?.find((s: any) => s.qty > 0);
        setSelectedSize(availableSize ? availableSize.size : null);
      }
    };
    loadOffer();
  }, [params]);

  // Управление maxHeight для плавного раскрытия описания
  useEffect(() => {
    if (!descRef.current) return;

    if (descExpanded) {
      setMaxHeight(`${descRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("48px");
    }
  }, [descExpanded, offer]);

  const toggleDescription = () => setDescExpanded(!descExpanded);

  if (!offer) return <div>Loading...</div>;

  // Проверка наличия на складе
  const inStock =
    offer.sizes?.some((s: any) => s.qty > 0) ?? false;

  return (
    <main className="w-full h-screen flex flex-col items-center bg-white text-black overflow-x-hidden">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-x-10 p-10">
        {/* Слайдер изображений слева */}
        <ProductImageSlider images={offer.images} />

        {/* Правая часть (описание, размеры, кнопки, слайдер «You may also like») */}
        <div className="flex flex-col h-full max-w-full lg:max-w-[30%]">
          {/* Название и цена */}
          <p className="text-2xl font-medium">{offer.title}</p>
          <p className="text-lg font-bold mt-2">${offer.price}</p>

          {/* Описание с затуханием и анимацией */}
          <div className="text-sm text-gray-600 mt-4">
            <div
              ref={descRef}
              className="relative overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight }}
            >
              {offer.description}
              {!descExpanded && (
                <div className="pointer-events-none absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent" />
              )}
            </div>
            <button onClick={toggleDescription} className="text-sm underline mt-2">
              {descExpanded ? "Show less" : "Show more"}
            </button>
          </div>

          {/* Блок выбора размеров */}
          <div className="flex justify-between mt-4 items-center">
            <div className="flex space-x-2">
              {offer.sizes?.length ? (
                offer.sizes.map((s: any) => (
                  <button
                    key={s.size}
                    disabled={s.qty <= 0}
                    className={`transition-all border px-4 py-1 text-sm rounded-lg ${
                      selectedSize === s.size
                        ? "border-black"
                        : "border-gray-300 hover:border-black"
                    } ${s.qty <= 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() => s.qty > 0 && setSelectedSize(s.size)}
                  >
                    {s.size}
                  </button>
                ))
              ) : (
                <span className="text-sm">Out of Stock</span>
              )}
            </div>
            <div>
              <button className="text-sm underline">Size Guide</button>
            </div>
          </div>

          {/* Кнопки Add to Cart и Add to Wishlist */}
          <div className="mt-4">
            <div className="inline-flex rounded-lg overflow-hidden">
              <AddToCart id = {offer.id} size={selectedSize} disabled={!inStock} />
              <button className="transition-all px-6 py-2 text-sm border border-gray-300 hover:border-black rounded-r-lg -ml-px">
                Add to Wishlist
              </button>
            </div>
          </div>

          {/* {!inStock && (
            <p className="text-red-600 mt-2">Out of Stock</p>
          )} */}

          <Separator className="my-10 w-full" />

          {/* Слайдер «You may also like» */}
          <ProductCarousel />
        </div>
      </div>
    </main>
  );
}
