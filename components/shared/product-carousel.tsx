'use client'

import { cn } from "@/lib/utils";
import { useState, useRef } from "react";

interface Props {
  className?: string;
}

export default function ProductCarousel({ className }: Props) {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;
  const products = [
    { name: "Jacket", price: "$45", img: "https://iamyourfetish.com.ua/static/img_offer/2024-11-02%2021.54.11Min.jpg" },
    { name: "Coat", price: "$80", img: "https://iamyourfetish.com.ua/static/img_offer/2024-11-02%2021.54.11Min.jpg" },
    { name: "Sweater", price: "$30", img: "https://iamyourfetish.com.ua/static/img_offer/2024-11-02%2021.54.11Min.jpg" },
    { name: "Hoodie", price: "$50", img: "https://iamyourfetish.com.ua/static/img_offer/2024-11-02%2021.54.11Min.jpg" },
    { name: "Shirt", price: "$35", img: "https://iamyourfetish.com.ua/static/img_offer/2024-11-02%2021.54.11Min.jpg" },
  ];

  const maxIndex = products.length - visibleCount;

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      const minSwipeDistance = 50; // threshold for swipe

      if (distance > minSwipeDistance && index < maxIndex) {
        setIndex(index + 1); // swipe left
      } else if (distance < -minSwipeDistance && index > 0) {
        setIndex(index - 1); // swipe right
      }
    }

    // Reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="w-full text-left">
      <h2 className="text-2xl font-semibold mb-5">You may also like</h2>
      <div
        className={cn("relative w-full max-w-[525px] overflow-hidden", className)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 175}px)` }}
        >
          {products.map((product, i) => (
            <div
              key={i}
              className="flex flex-col items-center border rounded-lg p-4 w-[175px] shadow-sm hover:shadow-lg transition-all flex-shrink-0"
            >
              <img src={product.img} alt={product.name} className="w-full h-auto rounded-md" />
              <p className="mt-2 text-sm font-medium">{product.name}</p>
              <p className="text-base font-bold">{product.price}</p>
            </div>
          ))}
        </div>
        {index > 0 && (
  <button
    onClick={() => setIndex(index - 1)}
    className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-white px-2 py-1 shadow rounded"
  >
    ◀
  </button>
)}
{index < maxIndex && (
  <button
    onClick={() => setIndex(index + 1)}
    className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-white px-2 py-1 shadow rounded"
  >
    ▶
  </button>
)}
      </div>
    </div>
  );
}
