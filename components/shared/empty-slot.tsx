"use client"

import React from "react"
import { useDroppable } from "@dnd-kit/core"

type Props = {
  id: string // формат slot-{row}-{col}
  index?: number
}

export default function EmptySlot({ id }: Props) {
  const { isOver, setNodeRef } = useDroppable({ id })

  return (
    <div
      ref={setNodeRef}
      className={`min-h-[160px] rounded-lg transition-colors duration-150 flex items-center justify-center
        ${isOver ? "bg-indigo-50 border border-indigo-300" : "bg-white/0 border border-dashed border-gray-200"}`}
    >
      {/* подсказку можно добавить */}
    </div>
  )
}