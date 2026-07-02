import { Footer } from "@/components/site/footer"
import { Navbar } from "@/components/site/navbar"

export default function Loading() {
  return (
    <>
      <Navbar cartCount={2} />
      <main className="flex flex-1 flex-col">
        <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="h-5 w-40 animate-pulse rounded-md bg-muted" />

          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            <div className="aspect-square animate-pulse rounded-2xl bg-muted" />
            <div className="space-y-4">
              <div className="h-4 w-24 animate-pulse rounded bg-muted" />
              <div className="h-8 w-2/3 animate-pulse rounded bg-muted" />
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
              <div className="h-8 w-32 animate-pulse rounded bg-muted" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
