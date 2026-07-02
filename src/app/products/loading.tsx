import { Footer } from "@/components/site/footer"
import { Navbar } from "@/components/site/navbar"

export default function Loading() {
  return (
    <>
      <Navbar cartCount={2} />
      <main className="flex flex-1 flex-col">
        <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="h-9 w-40 animate-pulse rounded-md bg-muted" />
          <div className="mt-3 h-5 w-28 animate-pulse rounded-md bg-muted" />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <div className="h-10 w-full animate-pulse rounded-md bg-muted sm:w-48" />
            <div className="h-10 w-full animate-pulse rounded-md bg-muted sm:w-52" />
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="overflow-hidden rounded-xl ring-1 ring-border">
                <div className="aspect-square animate-pulse bg-muted" />
                <div className="space-y-2 p-4">
                  <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
                  <div className="h-3 w-1/2 animate-pulse rounded bg-muted" />
                  <div className="h-4 w-1/3 animate-pulse rounded bg-muted" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
