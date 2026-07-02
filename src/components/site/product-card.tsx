import Link from "next/link"
import { Plus } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ProductImage } from "@/components/site/product-image"
import { formatBDT } from "@/lib/format"
import { computeBadge } from "@/lib/product-badge"

export type ProductCardData = {
  slug: string
  name: string
  basePrice: number
  createdAt: Date
  category: { name: string }
  images: { url: string; alt: string }[]
  variants: { stock: number }[]
}

export function ProductCard({ product }: { product: ProductCardData }) {
  const badge = computeBadge(product)

  return (
    <Card className="group gap-0 py-0 ring-border">
      <div className="relative aspect-square overflow-hidden rounded-t-xl">
        <Link href={`/products/${product.slug}`} className="absolute inset-0 block">
          {product.images[0] && (
            <ProductImage
              url={product.images[0].url}
              alt={product.images[0].alt}
              className="absolute inset-0"
            />
          )}
        </Link>
        {badge && (
          <Badge
            className={`pointer-events-none absolute left-3 top-3 border-none ${
              badge === "Limited"
                ? "bg-foreground text-background"
                : "bg-accent text-accent-foreground"
            }`}
          >
            {badge}
          </Badge>
        )}
        <button
          type="button"
          aria-label={`Add ${product.name} to cart`}
          className="absolute bottom-3 right-3 flex size-10 items-center justify-center rounded-full bg-background text-foreground opacity-0 shadow-lg ring-1 ring-border transition [transition:opacity_150ms] group-hover:opacity-100 hover:bg-muted focus-visible:opacity-100"
        >
          <Plus className="size-5" />
        </button>
      </div>
      <CardContent className="px-4 py-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold text-foreground hover:text-primary">
            {product.name}
          </h3>
        </Link>
        <p className="mt-0.5 text-sm text-muted-foreground">{product.category.name}</p>
        <p className="mt-3 font-semibold text-foreground">{formatBDT(product.basePrice)}</p>
      </CardContent>
    </Card>
  )
}
