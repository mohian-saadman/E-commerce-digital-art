"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { formatBDT } from "@/lib/format"

type Variant = {
  id: string
  name: string
  price: number | null
  stock: number
}

export function ProductDetailInteractive({
  basePrice,
  variants,
}: {
  basePrice: number
  variants: Variant[]
}) {
  const [selectedId, setSelectedId] = useState(variants[0]?.id)
  const [quantity, setQuantity] = useState(1)

  const selected = variants.find((v) => v.id === selectedId) ?? variants[0]
  const price = selected?.price ?? basePrice
  const inStock = (selected?.stock ?? 0) > 0
  const maxQty = Math.min(selected?.stock ?? 0, 10)

  return (
    <div>
      <p className="text-2xl font-bold text-foreground">{formatBDT(price)}</p>

      {variants.length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-medium text-foreground">Size</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {variants.map((variant) => (
              <button
                key={variant.id}
                type="button"
                onClick={() => {
                  setSelectedId(variant.id)
                  setQuantity(1)
                }}
                disabled={variant.stock === 0}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  variant.id === selectedId
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-foreground hover:border-primary"
                } ${variant.stock === 0 ? "cursor-not-allowed opacity-40" : ""}`}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <p
        className={`mt-4 text-sm font-medium ${inStock ? "text-success" : "text-destructive"}`}
      >
        {inStock ? `In stock (${selected?.stock} available)` : "Out of stock"}
      </p>

      {inStock && (
        <div className="mt-6 flex items-center gap-3">
          <div className="flex items-center rounded-full border border-border">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="flex size-10 items-center justify-center text-lg text-foreground hover:text-primary"
            >
              −
            </button>
            <span className="w-8 text-center text-sm font-medium">{quantity}</span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQuantity((q) => Math.min(maxQty, q + 1))}
              className="flex size-10 items-center justify-center text-lg text-foreground hover:text-primary"
            >
              +
            </button>
          </div>
        </div>
      )}

      <Button
        size="lg"
        disabled={!inStock}
        className="mt-6 w-full rounded-full sm:w-auto sm:px-10"
      >
        {inStock ? "Add to cart" : "Out of stock"}
      </Button>
    </div>
  )
}
