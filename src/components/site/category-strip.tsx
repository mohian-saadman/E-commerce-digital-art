import { categories } from "@/lib/placeholder-products"

export function CategoryStrip() {
  return (
    <section id="categories" className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
          Shop by category
        </h2>

        <div className="mt-6 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] sm:grid sm:grid-cols-3 sm:overflow-visible md:grid-cols-6">
          {categories.map((category) => (
            <a
              key={category.slug}
              href="#"
              className="group flex w-28 shrink-0 flex-col items-center gap-2.5 sm:w-auto"
            >
              <div
                className={`flex size-20 items-center justify-center rounded-full bg-gradient-to-br ${category.gradient} shadow-sm ring-1 ring-border transition group-hover:scale-105 sm:size-24`}
              />
              <span className="text-center text-sm font-medium text-foreground">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
