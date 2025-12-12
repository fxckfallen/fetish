"use client"

import React from "react"

export default function ColumnSelector({
  columns,
  onChange,
}: {
  columns: number
  onChange: (n: number) => void
}) {
  return (
    <div className="flex items-center gap-2 bg-white border rounded-md px-3 py-1">
      <span className="text-sm text-gray-700 mr-2">Колонки:</span>
      {[1, 2, 3].map((n) => (
        <button
          key={n}
          onClick={() => onChange(n)}
          className={`px-2 py-1 rounded ${columns === n ? "bg-indigo-600 text-white" : "text-gray-700"}`}
        >
          {n}
        </button>
      ))}
    </div>
  )
}