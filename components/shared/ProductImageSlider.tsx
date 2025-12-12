"use client";

import { useState } from "react";

export default function ProductImageSlider() {
  // Массив с несколькими изображениями товара
  const images = [
    "https://iamyourfetish.com.ua/static/img_offer/2025-01-30%2022.36.17.jpg",
    "https://iamyourfetish.com.ua/static/img_offer/9hw6s0P9XylEcZVZRYKnP202jKi5lh7N.jpg",
    "https://iamyourfetish.com.ua/static/img_offer/2024-11-02%2021.54.11Min.jpg",
  ];

  // Текущее изображение
  const [currentIndex, setCurrentIndex] = useState(0);

  // Переход к следующему изображению
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Переход к предыдущему изображению
  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // -----------------------------
  // Обработчики свайпа
  // -----------------------------
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Минимальное расстояние для переключения (порог)
  const swipeThreshold = 50;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null); // при новом касании сбрасываем touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    // Если сдвиг влево больше порога -> next
    if (distance > swipeThreshold) {
      nextImage();
    }
    // Если сдвиг вправо больше порога -> prev
    if (distance < -swipeThreshold) {
      prevImage();
    }

    // Сбрасываем значения
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      className="relative w-[500px] overflow-hidden group border-b pb-20 lg:border-r lg:border-b-transparent border-[#e6e6e6] pr-5"
      // Вешаем обработчики на контейнер
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Контейнер со всеми изображениями в ряд */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 500}px)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="w-[500px] flex-shrink-0 relative">
            <img
              src={img}
              alt={`Product Image ${i}`}
              className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Кнопки переключения (стрелки) — видны только при наведении */}
      {images.length > 1 && (
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1 shadow rounded
                     opacity-0 group-hover:opacity-100 transition-opacity"
        >
          ◀
        </button>
      )}
      {images.length > 1 && (
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1 shadow rounded
                     opacity-0 group-hover:opacity-100 transition-opacity"
        >
          ▶
        </button>
      )}

      {/* Индикаторы (точки) внизу */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all
                ${i === currentIndex ? "bg-black" : "bg-gray-300"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
