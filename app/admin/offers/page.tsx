"use client"

import React, { useState } from "react"
import OffersGrid from "@/components/shared/offers-grid"
import AddOfferButton from "@/components/shared/add-offer-button"

type Offer = {
  id: string
  title: string
}

function chunkToRows(items: Offer[], columns = 3): Offer[][] {
  const rows: Offer[][] = []
  for (let i = 0; i < items.length; i += columns) {
    rows.push(items.slice(i, i + columns))
  }
  return rows
}

export default function Home() {
  const initialFlat: Offer[] = Array.from({ length: 7 }).map((_, i) => ({
    id: `offer-${i + 1}`,
    title: `Offer ${i + 1}`,
  }))

  const [rows, setRows] = useState<Offer[][]>(() => chunkToRows(initialFlat, 3))

  const addOfferAsNewRow = async (created?: any) => {
    if (created && created.id) {
      setRows((prev) => [...prev, [{ id: created.id, title: created.title }]])
    } else {
      // fallback: local new row
      const nextId = `offer-${Date.now()}`
      setRows((prev) => [...prev, [{ id: nextId, title: `Offer ${nextId}` }]])
    }
  }

  return (
    <main className="w-full pl-[159px] py-[100px] pr-[100px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Offers</h1>
          <AddOfferButton onAdd={addOfferAsNewRow} />
        </div>

        <OffersGrid rows={rows} setRows={setRows} />
      </div>
    </main>
  )
}