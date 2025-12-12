"use client";

import { useState, useRef, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import ProductCarousel from "@/components/shared/product-carousel";
import ProductImageSlider from "@/components/shared/ProductImageSlider";
import { AddToCart } from "@/components/shared/add-to-cart";

export default function Home() {
  // Управляем, развернут ли текст
  const [descExpanded, setDescExpanded] = useState(false);
  // Храним значение maxHeight для плавного раскрытия/сворачивания
  const [maxHeight, setMaxHeight] = useState("48px");

  // Ссылка на контейнер с текстом, чтобы вычислять полную высоту содержимого
  const descRef = useRef<HTMLDivElement>(null);

  // Длинный текст описания
  const description = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eaque vel,
    vero deleniti, porro at et facilis eos saepe sit earum incidunt dignissimos.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut impedit
    cupiditate officia! Perspiciatis suscipit, nulla vitae laborum, nemo sequi
    quia molestiae repellendus magni illo nam minima tempore placeat. Qui, numquam.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, voluptatum.
  `;

  // При загрузке и переключении состояния развернутости
  useEffect(() => {
    if (!descRef.current) return;

    if (descExpanded) {
      // Устанавливаем высоту равной полной высоте контента
      setMaxHeight(`${descRef.current.scrollHeight}px`);
    } else {
      // Примерно 3 строки текста (подбирается под ваш шрифт)
      setMaxHeight("48px");
    }
  }, [descExpanded]);

  // Обработчик переключения описания
  const toggleDescription = () => {
    setDescExpanded(!descExpanded);
  };

  return (
    <main className="w-full h-screen flex flex-col items-center bg-white text-black overflow-x-hidden">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-x-10 p-10">
        {/* Слайдер изображений слева */}
        <ProductImageSlider />

        {/* Правая часть (описание, размеры, кнопки, слайдер «You may also like») */}
        <div className="flex flex-col h-full max-w-full lg:max-w-[30%]">
          {/* Название и цена */}
          <p className="text-2xl font-medium">Shuba</p>
          <p className="text-lg font-bold mt-2">$65</p>

          {/* Описание с затуханием и анимацией раскрытия */}
          <div className="text-sm text-gray-600 mt-4">
            {/* Контейнер для текста с ограничением высоты */}
            <div
              ref={descRef}
              className="relative overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight }}
            >
              {description}
              {/* Градиент, если текст не развернут */}
              {!descExpanded && (
                <div className="pointer-events-none absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent" />
              )}
            </div>
            {/* Кнопка «Show more / Show less» */}
            <button onClick={toggleDescription} className="text-sm underline mt-2">
              {descExpanded ? "Show less" : "Show more"}
            </button>
          </div>

          {/* Блок кнопок выбора размера */}
          <div className="flex justify-between mt-4 items-center">
            <div className="flex space-x-2">
              <button className="transition-all border border-gray-300 hover:border-black px-4 py-1 text-sm rounded-lg">
                XS
              </button>
              <button className="transition-all border border-gray-300 hover:border-black px-4 py-1 text-sm rounded-lg">
                S
              </button>
              <button className="transition-all border border-gray-300 hover:border-black px-4 py-1 text-sm rounded-lg">
                M
              </button>
            </div>
            <div>
              <button className="text-sm underline">Size Guide</button>
            </div>
          </div>

          {/* Объединённый блок кнопок Add to Cart и Add to Wishlist */}
          <div className="mt-4">
            <div className="inline-flex rounded-lg overflow-hidden">
              <AddToCart />
              <button className="transition-all px-6 py-2 text-sm border border-gray-300 hover:border-black rounded-r-lg -ml-px">
                Add to Wishlist
              </button>
            </div>
          </div>

          <Separator className="my-10 w-full" />

          {/* Слайдер товаров (компонент «You may also like») */}
          <ProductCarousel />
        </div>
      </div>
    </main>
  );
}
