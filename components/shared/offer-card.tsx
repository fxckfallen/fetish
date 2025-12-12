"use client"

import React from "react"

type Props = {
  title: string
  dragging?: boolean
  onEdit?: () => void
}

export default function OfferCard({ title, dragging = false, onEdit }: Props) {
  return (
    <div
      className={`bg-white rounded-lg border shadow-sm p-4 h-40 flex flex-col justify-between transition-transform duration-200 ${
        dragging ? "ring-2 ring-indigo-400 shadow-lg transform scale-105" : ""
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
          img
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-500">Product description</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">Price</span>
        <button
          onClick={onEdit}
          className="text-sm text-indigo-600 hover:underline"
          aria-label="Edit offer"
        >
          Edit
        </button>
      </div>
    </div>
  )
}