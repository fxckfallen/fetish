"use client"

import { useState } from "react"

const photos = [
  { id: 1, src: "https://iamyourfetish.com.ua/static/images/adPopupImage.jpg", title: "Фотосессия 01" },
  { id: 2, src: "https://iamyourfetish.com.ua/static/images/logo.png", title: "Фотосессия 02" },
  { id: 3, src: "https://iamyourfetish.com.ua/static/images/adPopupImage.jpg", title: "Фотосессия 03" },
  { id: 4, src: "https://iamyourfetish.com.ua/static/images/logo.png", title: "Фотосессия 04" },
  { id: 5, src: "https://iamyourfetish.com.ua/static/images/adPopupImage.jpg", title: "Фотосессия 05" },
  { id: 6, src: "https://iamyourfetish.com.ua/static/images/logo.png", title: "Фотосессия 06" },
]

export default function Archive() {
  const [selected, setSelected] = useState<number | null>(null)

  const nextPhoto = () => {
    if (selected === null) return
    setSelected((prev) => (prev! + 1) % photos.length)
  }

  const prevPhoto = () => {
    if (selected === null) return
    setSelected((prev) => (prev! - 1 + photos.length) % photos.length)
  }

  return (
    <main className="flex-grow mt-6 md:mt-10 w-full px-4">
      

      {/* Галерея */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {photos.map((photo, idx) => (
          <div
            key={photo.id}
            className="cursor-pointer group relative"
            onClick={() => setSelected(idx)}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="rounded-xl shadow-lg object-cover h-[350px] w-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="mt-2 text-center font-medium">{photo.title}</div>
          </div>
        ))}
      </div>

      {/* Модальное окно (Lightbox) */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          {/* Кнопка закрытия */}
          <button
            className="absolute top-4 right-6 text-white text-3xl hover:scale-110 transition"
            onClick={() => setSelected(null)}
          >
            ✕
          </button>

          {/* Кнопка назад */}
          <button
            className="absolute left-4 text-white text-5xl hover:scale-110 transition"
            onClick={prevPhoto}
          >
            ‹
          </button>

          {/* Изображение */}
          <img
            src={photos[selected].src}
            alt={photos[selected].title}
            className="max-h-[90%] max-w-[90%] object-contain rounded-lg shadow-2xl"
          />

          {/* Кнопка вперёд */}
          <button
            className="absolute right-4 text-white text-5xl hover:scale-110 transition"
            onClick={nextPhoto}
          >
            ›
          </button>
        </div>
      )}
    </main>
  )
}
