import { Truck } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#241B14]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#C1552C]/25 blur-3xl" />
        <div className="absolute top-24 right-0 h-80 w-80 rounded-full bg-[#C89B3C]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-[#F0E4D6]">
          <Truck className="size-4 text-[#C89B3C]" />
          Cash on delivery, nationwide from Dhaka
        </span>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-[#FDF8F3] sm:text-5xl lg:text-6xl">
          Hi-res AI art,{" "}
          <span className="bg-gradient-to-r from-[#E0A458] to-[#C1552C] bg-clip-text text-transparent">
            made for your walls
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-[#D9CBBB]">
          Curated, print-ready AI-generated pieces — delivered to your door
          across Bangladesh. Pay on delivery or online.
        </p>

        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button
            size="lg"
            className="h-12 rounded-full bg-[#C1552C] px-8 text-base font-semibold text-[#FDF8F3] hover:bg-[#A94A26]"
          >
            Shop the collection
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-white/20 bg-white/5 px-8 text-base font-semibold text-[#FDF8F3] hover:bg-white/10"
          >
            Browse categories
          </Button>
        </div>

        <dl className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-10">
          {[
            ["500+", "Prints"],
            ["64", "Districts reached"],
            ["COD", "or online pay"],
          ].map(([stat, label]) => (
            <div key={label}>
              <dt className="sr-only">{label}</dt>
              <dd className="text-2xl font-bold text-[#FDF8F3] sm:text-3xl">
                {stat}
              </dd>
              <p className="mt-1 text-sm text-[#B8A99A]">{label}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
