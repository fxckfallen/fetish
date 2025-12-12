"use client"

import React, { useState } from "react"
import dynamic from "next/dynamic"
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  MeasuringStrategy,
  closestCenter,
  UniqueIdentifier,
} from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"
import OfferCard from "./offer-card"
import EmptySlot from "./empty-slot"
import ProductEditModal, { Offer as OfferType } from "./product-edit-modal"

// 🔥 динамический импорт, SSR выключен
const DraggableOffer = dynamic(() => import("./draggable-offer"), { ssr: false })

type Props = {
  rows: OfferType[][]
  setRows: (rows: OfferType[][]) => void
}

const COLUMNS = 3
const GAP_PX = 16
const API_BASE = "http://localhost:8080"

export default function OffersGrid({ rows, setRows }: Props) {
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }))
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)
  const [editing, setEditing] = useState<{ row: number; col: number; item: OfferType } | null>(null)

  function findItemPosition(rowsState: OfferType[][], itemId: string) {
    for (let r = 0; r < rowsState.length; r++) {
      for (let c = 0; c < rowsState[r].length; c++) {
        if (rowsState[r][c].id === itemId) return { row: r, col: c }
      }
    }
    return null
  }

  function cascadeInsert(rowsState: OfferType[][], item: OfferType, targetRow: number, targetCol: number) {
    while (rowsState.length <= targetRow) {
      rowsState.push([])
    }

    const insertIndex = Math.min(targetCol, rowsState[targetRow].length)
    rowsState[targetRow].splice(insertIndex, 0, item)

    let currentRow = targetRow
    while (rowsState[currentRow].length > COLUMNS) {
      const overflow = rowsState[currentRow].pop() as OfferType
      currentRow += 1
      if (rowsState.length <= currentRow) {
        rowsState.push([overflow])
      } else {
        rowsState[currentRow].splice(0, 0, overflow)
      }
    }
  }

  async function syncOrder(rowsState: OfferType[][]) {
    try {
      const payload = rowsState.flatMap((row, r) =>
        row.map((item, c) => ({
          id: item.id,
          row: r,
          col: c,
        }))
      )
      await fetch(`${API_BASE}/offers-sort-change`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ layout: payload }),
      })
    } catch (err) {
      console.error("syncOrder failed", err)
    }
  }

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
        onDragStart={(e) => setActiveId(e.active.id)}
        onDragEnd={async (e) => {
          setActiveId(null)
          const { active, over } = e
          if (!over) return

          const activeIdStr = String(active.id)
          if (!activeIdStr.startsWith("item-")) return

          const originalRows = rows.map((r) => [...r])
          const originalRowsCount = originalRows.length

          const srcPosOriginal = findItemPosition(originalRows, activeIdStr.replace("item-", ""))
          if (!srcPosOriginal) return

          const next = originalRows.map((r) => [...r])

          const [moved] = next[srcPosOriginal.row].splice(srcPosOriginal.col, 1)
          const srcRowEmptied = originalRows[srcPosOriginal.row].length === 1
          if (srcRowEmptied) {
            next.splice(srcPosOriginal.row, 1)
          }

          const overStr = String(over.id)

          if (overStr.startsWith("slot-")) {
            const parts = overStr.split("-")
            const targetRowParsed = parseInt(parts[1], 10)
            const targetCol = parseInt(parts[2], 10)

            if (Number.isNaN(targetRowParsed) || Number.isNaN(targetCol)) {
              setRows(next)
              await syncOrder(next)
              return
            }

            let adjustedTargetRow: number

            if (targetRowParsed >= originalRowsCount) {
              adjustedTargetRow = next.length
            } else {
              adjustedTargetRow = targetRowParsed
              if (srcPosOriginal.row < targetRowParsed && srcRowEmptied) {
                adjustedTargetRow = targetRowParsed - 1
              }
              if (adjustedTargetRow < 0) adjustedTargetRow = 0
              if (adjustedTargetRow > next.length) adjustedTargetRow = next.length
            }

            cascadeInsert(next, moved, adjustedTargetRow, targetCol)
            setRows(next)
            await syncOrder(next)
            return
          }

          if (overStr.startsWith("item-")) {
            const overItemId = overStr.replace("item-", "")
            const pos = findItemPosition(next, overItemId)
            if (!pos) {
              setRows(next)
              await syncOrder(next)
              return
            }

            cascadeInsert(next, moved, pos.row, pos.col)
            setRows(next)
            await syncOrder(next)
            return
          }

          setRows(next)
          await syncOrder(next)
        }}
        onDragCancel={() => setActiveId(null)}
      >
        <div className="flex flex-col gap-4">
          {rows.map((row, rowIndex) => {
            const totalGap = (COLUMNS - 1) * GAP_PX
            const colWidth = `calc((100% - ${totalGap}px) / ${COLUMNS})`
            const rowStyle: React.CSSProperties = {
              display: "grid",
              gridAutoFlow: "column",
              gridAutoColumns: colWidth,
              gap: `${GAP_PX}px`,
              justifyContent: "center",
              alignItems: "start",
            }

            return (
              <div key={`row-${rowIndex}`}>
                <div style={rowStyle}>
                  {Array.from({ length: COLUMNS }).map((_, colIndex) => {
                    const item = row[colIndex]
                    const slotId = `slot-${rowIndex}-${colIndex}`
                    if (item) {
                      return (
                        <div key={item.id} className="min-h-[160px]">
                          <DraggableOffer
                            id={`item-${item.id}`}
                            title={item.title}
                            onEdit={(rawId) => {
                              const pos = findItemPosition(rows, rawId)
                              if (!pos) return
                              setEditing({ row: pos.row, col: pos.col, item: rows[pos.row][pos.col] })
                            }}
                          />
                        </div>
                      )
                    } else {
                      return (
                        <div key={slotId} className="min-h-[160px]">
                          <EmptySlot id={slotId} index={colIndex} />
                        </div>
                      )
                    }
                  })}
                </div>
              </div>
            )
          })}

          <div>
            <div
              style={{
                display: "grid",
                gridAutoFlow: "column",
                gridAutoColumns: `calc((100% - ${(COLUMNS - 1) * GAP_PX}px) / ${COLUMNS})`,
                gap: `${GAP_PX}px`,
                justifyContent: "center",
              }}
            >
              {Array.from({ length: COLUMNS }).map((_, colIndex) => {
                const slotId = `slot-${rows.length}-${colIndex}`
                return (
                  <div key={slotId} className="min-h-[160px]">
                    <EmptySlot id={slotId} index={colIndex} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <DragOverlay>
          {activeId && String(activeId).startsWith("item-") ? (
            <div style={{ width: "100%" }}>
              <OfferCard title={String(activeId).replace("item-", "")} dragging />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>

      <ProductEditModal
        open={!!editing}
        item={editing?.item ?? null}
        onClose={() => setEditing(null)}
        onSave={async (updated) => {
          setRows((prev) => {
            const next = prev.map((r) => [...r])
            for (let r = 0; r < next.length; r++) {
              for (let c = 0; c < next[r].length; c++) {
                if (next[r][c].id === updated.id) {
                  next[r][c] = { ...next[r][c], ...updated }
                  return next
                }
              }
            }
            return next
          })
          try {
            await fetch(`${API_BASE}/edit-offer`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ offer: updated }),
            })
          } catch (err) {
            console.error("edit-offer failed", err)
          }
        }}
        onDelete={async (id) => {
          try {
            await fetch(`${API_BASE}/delete-offer`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id }),
            })
          } catch (err) {
            console.error("delete-offer failed", err)
          }
          setRows((prev) => {
            const next = prev.map((r) => [...r])
            for (let r = next.length - 1; r >= 0; r--) {
              const idx = next[r].findIndex((it) => it.id === id)
              if (idx !== -1) {
                next[r].splice(idx, 1)
                if (next[r].length === 0) next.splice(r, 1)
                return next
              }
            }
            return next
          })
        }}
      />
    </>
  )
}
