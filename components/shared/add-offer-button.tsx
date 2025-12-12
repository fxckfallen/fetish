"use client"

import React from "react"

const API_BASE = "http://localhost:5000"

export default function AddOfferButton({ onAdd }: { onAdd: (created?: any) => void }) {
  async function handleAdd() {
    try {
      const res = await fetch(`${API_BASE}/add-offer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: `New offer ${Date.now()}`,
        }),
      })
      const data = await res.json()
      // data.offer expected
      onAdd(data.offer)
    } catch (err) {
      console.error("add-offer failed", err)
      onAdd(undefined)
    }
  }

  return (
    <button onClick={handleAdd} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition">
      Добавить карточку (новый ряд)
    </button>
  )
}