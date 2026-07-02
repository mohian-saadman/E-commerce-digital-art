import Link from "next/link"

import { prisma } from "@/lib/prisma"

const FALLBACK_GRADIENT = "from-muted to-muted-foreground/30"

const CATEGORY_GRADIENTS: Record<string, string> = {
  portraits: "from-[#C1552C] to-[#7A3520]",
  landscapes: "from-[#4A6B4F] to-[#233A28]",
  abstract: "from-[#C89B3C] to-[#8A5A1E]",
  cyberpunk: "from-[#5B4B8A] to-[#2B2350]",
  architecture: "from-[#5C6B73] to-[#2B3339]",
  fantasy: "from-[#8A3B5C] to-[#3E1A2C]",
}

export async function CategoryStrip() {
  const categories = await prisma.category.findMany({
    orderBy: { sortOrder: "asc" },
  })

  return (
    <section id="categories" className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
          Shop by category
        </h2>

        <div className="mt-6 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] sm:grid sm:grid-cols-3 sm:overflow-visible md:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className="group flex w-28 shrink-0 flex-col items-center gap-2.5 sm:w-auto"
            >
              <div
                className={`flex size-20 items-center justify-center rounded-full bg-gradient-to-br ${
                  CATEGORY_GRADIENTS[category.slug] ?? FALLBACK_GRADIENT
                } shadow-sm ring-1 ring-border transition group-hover:scale-105 sm:size-24`}
              />
              <span className="text-center text-sm font-medium text-foreground">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
