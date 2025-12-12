"use client"

import React, { useEffect, useState } from "react"

export type SizeEntry = {
  id: string
  label: string
  count: number
}

export type Offer = {
  id: string
  title: string
  description?: string
  description_ua?: string
  price_usd?: string
  price_eur?: string
  discount_usd?: string
  discount_eur?: string
  type?: string
  condition?: string
  imageUrl?: string
  sizes?: SizeEntry[]
}

type Props = {
  open: boolean
  item: Offer | null
  onClose: () => void
  onSave: (updated: Offer) => void
  onDelete?: (id: string) => void
}

export default function ProductEditModal({ open, item, onClose, onSave, onDelete }: Props) {
  const [mounted, setMounted] = useState<boolean>(false)
  const [state, setState] = useState<"entering" | "entered" | "leaving">("entering")

  // локальное состояние полей
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [descriptionUa, setDescriptionUa] = useState<string>("")
  const [priceUsd, setPriceUsd] = useState<string>("")
  const [priceEur, setPriceEur] = useState<string>("")
  const [discountUsd, setDiscountUsd] = useState<string>("")
  const [discountEur, setDiscountEur] = useState<string>("")
  const [typeVal, setTypeVal] = useState<string>("")
  const [condition, setCondition] = useState<string>("new")
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined)
  const [sizes, setSizes] = useState<SizeEntry[]>([])

  const DURATION = 200
  const API_BASE = "http://localhost:8080"

  useEffect(() => {
    if (item) {
      setTitle(item.title ?? "")
      setDescription(item.description ?? "")
      setDescriptionUa(item.description_ua ?? "")
      setPriceUsd(item.price_usd ?? "")
      setPriceEur(item.price_eur ?? "")
      setDiscountUsd(item.discount_usd ?? "")
      setDiscountEur(item.discount_eur ?? "")
      setTypeVal(item.type ?? "")
      setCondition(item.condition ?? "new")
      setImageUrl(item.imageUrl ?? undefined)
      setSizes(
        item.sizes && item.sizes.length
          ? item.sizes.map((s) => ({ ...s }))
          : [
              { id: "size-s", label: "S", count: 0 },
              { id: "size-xs", label: "XS", count: 0 },
              { id: "size-m-l", label: "M/L", count: 0 },
            ]
      )
    }
  }, [item])

  useEffect(() => {
    let t: number | undefined
    if (open && item) {
      setMounted(true)
      setState("entering")
      t = window.setTimeout(() => setState("entered"), 16)
    } else if (!open && mounted) {
      setState("leaving")
      t = window.setTimeout(() => {
        setMounted(false)
        onClose()
      }, DURATION + 20)
    }
    return () => {
      if (t) clearTimeout(t)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, item])

  if (!mounted || !item) return null

  const overlayStyle: React.CSSProperties = {
    transition: `opacity ${DURATION}ms ease`,
    opacity: state === "entered" ? 1 : 0,
  }

  const modalStyle: React.CSSProperties = {
    transition: `opacity ${DURATION}ms ease, transform ${DURATION}ms ease`,
    opacity: state === "entered" ? 1 : 0,
    transform: state === "entered" ? "translateY(0)" : "translateY(-8px)",
  }

  function finishClose() {
    setMounted(false)
    onClose()
  }

  function closeWithAnimation() {
    setState("leaving")
    setTimeout(() => {
      finishClose()
    }, DURATION + 10)
  }

  async function handleSave() {
    if (!item) return
    const updated: Offer = {
      ...item,
      title: title.trim() || item.title,
      description,
      description_ua: descriptionUa,
      price_usd: priceUsd,
      price_eur: priceEur,
      discount_usd: discountUsd,
      discount_eur: discountEur,
      type: typeVal,
      condition,
      imageUrl,
      sizes,
    }

    // оптимистично обновляем UI
    onSave(updated)

    // отправляем на сервер
    try {
      await fetch(`${API_BASE}/edit-offer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ offer: updated }),
      })
    } catch (err) {
      console.error("edit-offer failed", err)
    }

    setState("leaving")
    setTimeout(() => {
      finishClose()
    }, DURATION + 10)
  }

  async function handleDelete() {
    if (!item) return
    if (onDelete) {
      // локальное удаление будет выполнено родителем; уведомим сервер
      try {
        await fetch(`${API_BASE}/delete-offer`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: item.id }),
        })
      } catch (err) {
        console.error("delete-offer failed", err)
      }
      onDelete(item.id)
    }
    setState("leaving")
    setTimeout(() => {
      finishClose()
    }, DURATION + 10)
  }

  // image upload (local preview only)
  function onPickImage(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    if (!f) return
    const url = URL.createObjectURL(f)
    setImageUrl(url)
  }

  // sizes manipulation helpers...
  function incSize(i: number) {
    setSizes((prev) => {
      const next = prev.map((s) => ({ ...s }))
      next[i].count += 1
      return next
    })
  }
  function decSize(i: number) {
    setSizes((prev) => {
      const next = prev.map((s) => ({ ...s }))
      next[i].count = Math.max(0, next[i].count - 1)
      return next
    })
  }
  function addSize() {
    setSizes((prev) => {
      const id = `size-${Date.now()}`
      return [...prev, { id, label: "+", count: 0 }]
    })
  }
  function updateSizeLabel(i: number, val: string) {
    setSizes((prev) => {
      const next = prev.map((s) => ({ ...s }))
      next[i].label = val
      return next
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto">
      <div className="absolute inset-0 bg-black/50" onClick={closeWithAnimation} style={overlayStyle} />
      <div role="dialog" aria-modal="true" className="relative bg-white rounded-md shadow-2xl w-full max-w-4xl p-4 z-10" style={modalStyle}>
        {/* header */}
        <div className="flex items-center justify-between mb-3 px-2">
          <div className="text-sm text-gray-500">Item {item.id}</div>
          <button aria-label="Close" onClick={closeWithAnimation} className="p-1 rounded hover:bg-gray-100">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>

        <div className="flex gap-4">
          {/* left: image */}
          <div className="w-1/3 flex flex-col items-center">
            <div className="w-full bg-gray-50 rounded border p-3 flex items-center justify-center">
              {imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={imageUrl} alt="preview" className="max-h-64 object-contain" />
              ) : (
                <div className="text-gray-400">No image</div>
              )}
            </div>

            <label className="mt-3 w-full">
              <input type="file" accept="image/*" onChange={onPickImage} className="hidden" />
              <div className="mt-2 text-sm text-center text-indigo-600 cursor-pointer">Upload image</div>
            </label>
          </div>

          {/* right: form */}
          <div className="w-2/3">
            <div className="mb-3">
              <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full px-3 py-2 border rounded" />
            </div>

            <div className="flex gap-3 mb-3">
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="w-1/2 h-32 p-2 border rounded resize-none" />
              <textarea value={descriptionUa} onChange={(e) => setDescriptionUa(e.target.value)} placeholder="Description Ukraine" className="w-1/2 h-32 p-2 border rounded resize-none" />
            </div>

            <div className="grid grid-cols-3 gap-3 mb-2">
              <input value={priceUsd} onChange={(e) => setPriceUsd(e.target.value)} placeholder="Price $" className="px-2 py-2 border rounded" />
              <input value={priceEur} onChange={(e) => setPriceEur(e.target.value)} placeholder="Price €" className="px-2 py-2 border rounded" />
              <select value={typeVal} onChange={(e) => setTypeVal(e.target.value)} className="px-2 py-2 border rounded">
                <option value="">Type</option>
                <option value="clothes">Clothes</option>
                <option value="accessory">Accessory</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-3">
              <input value={discountUsd} onChange={(e) => setDiscountUsd(e.target.value)} placeholder="Discount $" className="px-2 py-2 border rounded" />
              <input value={discountEur} onChange={(e) => setDiscountEur(e.target.value)} placeholder="Discount €" className="px-2 py-2 border rounded" />
              <select value={condition} onChange={(e) => setCondition(e.target.value)} className="px-2 py-2 border rounded">
                <option value="new">New</option>
                <option value="used">Used</option>
              </select>
            </div>

            {/* sizes */}
            <div className="flex items-start gap-4">
              <div className="flex flex-wrap gap-2">
                {sizes.map((s, i) => (
                  <div key={s.id} className="flex flex-col items-center">
                    <button type="button" className="px-3 py-2 border rounded text-sm mb-2" onClick={() => {
                      const label = prompt("Edit size label", s.label) || s.label
                      updateSizeLabel(i, label)
                    }}>
                      {s.label}
                    </button>
                    <div className="flex items-center gap-2">
                      <button type="button" className="w-8 h-8 border rounded text-sm" onClick={() => decSize(i)}>-</button>
                      <div className="min-w-[24px] text-center">{s.count}</div>
                      <button type="button" className="w-8 h-8 border rounded text-sm" onClick={() => incSize(i)}>+</button>
                    </div>
                  </div>
                ))}

                <button type="button" onClick={addSize} className="ml-2 w-8 h-8 flex items-center justify-center border rounded text-lg" title="Add size">+</button>
              </div>

              <div className="ml-auto flex flex-col items-end gap-3">
                <button onClick={handleDelete} className="bg-black text-white px-6 py-3 rounded shadow">Delete</button>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 mt-4">
              <button onClick={closeWithAnimation} className="px-3 py-2 rounded border">Cancel</button>
              <button onClick={handleSave} className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-500">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}