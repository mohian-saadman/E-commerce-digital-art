import { Plus } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { formatBDT, products } from "@/lib/placeholder-products"

const badgeVariant: Record<string, string> = {
  New: "bg-accent text-accent-foreground",
  Trending: "bg-primary text-primary-foreground",
  Limited: "bg-foreground text-background",
  "Sold out": "bg-muted text-muted-foreground",
}

export function FeaturedProducts() {
  return (
    <section id="featured" className="bg-muted/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Featured prints
            </h2>
            <p className="mt-2 text-muted-foreground">
              Hi-res AI-generated pieces, printed and shipped across
              Bangladesh.
            </p>
          </div>
          <a
            href="#"
            className="text-sm font-semibold text-primary transition hover:text-primary/80"
          >
            View all &rarr;
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.slug} className="group gap-0 py-0 ring-border">
              <div
                className={`relative aspect-square rounded-t-xl bg-gradient-to-br ${product.gradient}`}
              >
                {product.badge && (
                  <Badge
                    className={`absolute left-3 top-3 border-none ${badgeVariant[product.badge]}`}
                  >
                    {product.badge}
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
                <h3 className="font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-0.5 text-sm capitalize text-muted-foreground">
                  {product.categorySlug.replace("-", " ")}
                </p>
                <p className="mt-3 font-semibold text-foreground">
                  {formatBDT(product.basePrice)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
