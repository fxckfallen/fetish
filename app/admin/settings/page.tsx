"use client"

import React, { useState } from "react"
import dynamic from "next/dynamic"
import { ChevronDown, ChevronUp } from "lucide-react"

// импорт редактора (new версия без findDOMNode)
import "react-quill-new/dist/quill.snow.css"
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false })

export default function SettingsPage() {
  const [background, setBackground] = useState<File | null>(null)
  const [subscriptionBg, setSubscriptionBg] = useState<File | null>(null)
  const [archiveImg, setArchiveImg] = useState<File | null>(null)

  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [texts, setTexts] = useState({
    customerCare: { en: "", uk: "" },
    delivery: { en: "", uk: "" },
    returns: { en: "", uk: "" },
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (type === "background") setBackground(file)
      if (type === "subscription") setSubscriptionBg(file)
      if (type === "archive") setArchiveImg(file)
    }
  }

  const handleTextChange = (category: string, lang: "en" | "uk", value: string) => {
    setTexts(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [lang]: value,
      },
    }))
  }

  const handleSubmit = () => {
    const formData = new FormData()
    if (background) formData.append("background", background)
    if (subscriptionBg) formData.append("subscriptionBg", subscriptionBg)
    if (archiveImg) formData.append("archiveImg", archiveImg)

    formData.append("texts", JSON.stringify(texts))

    fetch("https://localhost:5000/api/admin/settings", {
      method: "POST",
      body: formData,
    }).then(() => {
      alert("Зміни збережено ✅")
    })
  }

  return (
    <main className="w-full pl-[159px] py-[100px] pr-[100px] space-y-8">
      {/* Background */}
      <div className="border p-4 rounded-xl shadow">
        <h2 className="font-bold mb-2">Background</h2>
        <input type="file" accept="image/*" onChange={e => handleFileChange(e, "background")} />
        {background && <p className="mt-2 text-sm text-gray-500">📂 {background.name}</p>}
      </div>

      {/* Subscription background */}
      <div className="border p-4 rounded-xl shadow">
        <h2 className="font-bold mb-2">Subscription Background</h2>
        <input type="file" accept="image/*" onChange={e => handleFileChange(e, "subscription")} />
        {subscriptionBg && <p className="mt-2 text-sm text-gray-500">📂 {subscriptionBg.name}</p>}
      </div>

      {/* Archive */}
      <div className="border p-4 rounded-xl shadow">
        <h2 className="font-bold mb-2">Archive Image</h2>
        <input type="file" accept="image/*" onChange={e => handleFileChange(e, "archive")} />
        {archiveImg && <p className="mt-2 text-sm text-gray-500">📂 {archiveImg.name}</p>}
      </div>

      {/* Customer Care Editor */}
      <div className="border p-4 rounded-xl shadow">
        <h2 className="font-bold mb-4">Customer Care</h2>
        {Object.keys(texts).map(category => (
          <div key={category} className="mb-4">
            <button
              className="flex justify-between items-center w-full font-semibold text-lg border-b py-2"
              onClick={() => setOpenCategory(openCategory === category ? null : category)}
            >
              {category}
              {openCategory === category ? <ChevronUp /> : <ChevronDown />}
            </button>

            {openCategory === category && (
              <div className="mt-2 space-y-4">
                <div>
                  <p className="font-medium">English</p>
                  <ReactQuill
                    theme="snow"
                    value={texts[category as keyof typeof texts].en}
                    onChange={value => handleTextChange(category, "en", value)}
                  />
                </div>
                <div>
                  <p className="font-medium">Українська</p>
                  <ReactQuill
                    theme="snow"
                    value={texts[category as keyof typeof texts].uk}
                    onChange={value => handleTextChange(category, "uk", value)}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        className="bg-black text-white px-6 py-3 rounded-xl shadow-lg"
        onClick={handleSubmit}
      >
        ЗБЕРЕГТИ ЗМІНИ
      </button>
    </main>
  )
}
