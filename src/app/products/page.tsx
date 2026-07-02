import Link from "next/link"
import { Search } from "lucide-react"

import { Footer } from "@/components/site/footer"
import { Navbar } from "@/components/site/navbar"
import { ProductCard } from "@/components/site/product-card"
import { ProductFilters } from "@/components/site/product-filters"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import type { Prisma } from "@/generated/prisma/client"
import { prisma } from "@/lib/prisma"

const PAGE_SIZE = 12

type SearchParams = {
  category?: string
  sort?: string
  q?: string
  page?: string
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const params = await searchParams
  const page = Math.max(1, Number(params.page) || 1)
  const sort = params.sort ?? "newest"
  const q = params.q?.trim()

  const where: Prisma.ProductWhereInput = {
    status: "active",
    ...(params.category ? { category: { slug: params.category } } : {}),
    ...(q
      ? {
          OR: [
            { name: { contains: q, mode: "insensitive" } },
            { description: { contains: q, mode: "insensitive" } },
          ],
        }
      : {}),
  }

  const orderBy: Prisma.ProductOrderByWithRelationInput =
    sort === "price_asc"
      ? { basePrice: "asc" }
      : sort === "price_desc"
        ? { basePrice: "desc" }
        : { createdAt: "desc" }

  const [products, total, categories] = await Promise.all([
    prisma.product.findMany({
      where,
      orderBy,
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
      include: {
        category: true,
        images: { orderBy: { sortOrder: "asc" }, take: 1 },
        variants: { select: { stock: true } },
      },
    }),
    prisma.product.count({ where }),
    prisma.category.findMany({ orderBy: { sortOrder: "asc" } }),
  ])

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))

  function pageHref(p: number) {
    const sp = new URLSearchParams()
    if (params.category) sp.set("category", params.category)
    if (params.sort) sp.set("sort", params.sort)
    if (params.q) sp.set("q", params.q)
    if (p > 1) sp.set("page", String(p))
    const qs = sp.toString()
    return qs ? `/products?${qs}` : "/products"
  }

  return (
    <>
      <Navbar cartCount={2} />
      <main className="flex flex-1 flex-col">
        <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground">
                {q ? `Results for "${q}"` : "All prints"}
              </h1>
              <p className="mt-2 text-muted-foreground">
                {total} {total === 1 ? "print" : "prints"} found
              </p>
            </div>
            <ProductFilters categories={categories} />
          </div>

          {products.length === 0 ? (
            <div className="mt-16 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border py-20 text-center">
              <Search className="size-8 text-muted-foreground" />
              <p className="text-lg font-medium text-foreground">No prints found</p>
              <p className="max-w-sm text-sm text-muted-foreground">
                Try a different search term or clear the category filter.
              </p>
              <Link
                href="/products"
                className="text-sm font-semibold text-primary hover:text-primary/80"
              >
                Clear filters
              </Link>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <Pagination className="mt-12">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={pageHref(Math.max(1, page - 1))}
                    aria-disabled={page === 1}
                    className={page === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <PaginationItem key={p}>
                    <PaginationLink href={pageHref(p)} isActive={p === page}>
                      {p}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    href={pageHref(Math.min(totalPages, page + 1))}
                    aria-disabled={page === totalPages}
                    className={page === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
