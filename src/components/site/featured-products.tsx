import Link from "next/link"

import { ProductCard } from "@/components/site/product-card"
import { prisma } from "@/lib/prisma"

export async function FeaturedProducts() {
  const products = await prisma.product.findMany({
    where: { status: "active" },
    orderBy: { createdAt: "desc" },
    take: 8,
    include: {
      category: true,
      images: { orderBy: { sortOrder: "asc" }, take: 1 },
      variants: { select: { stock: true } },
    },
  })

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
          <Link
            href="/products"
            className="text-sm font-semibold text-primary transition hover:text-primary/80"
          >
            View all &rarr;
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
