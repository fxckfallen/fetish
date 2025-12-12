"use client"

import React from "react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import OfferCard from "./offer-card"

type Props = {
  id: string // формат item-{id}
  title: string
  onEdit?: (id: string) => void
}

export default function DraggableOffer({ id, title, onEdit }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
  id,
})

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : undefined,
  }

  const rawId = String(id).startsWith("item-") ? String(id).replace("item-", "") : String(id)

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <OfferCard title={title} dragging={isDragging} onEdit={() => onEdit?.(rawId)} />
    </div>
  )
}