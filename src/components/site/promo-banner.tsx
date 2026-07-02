"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function PromoBanner() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#C1552C] via-[#B8532E] to-[#7A3520] px-6 py-14 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[#C89B3C]/25 blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white">
              First order offer
            </span>
            <h2 className="mx-auto mt-5 max-w-xl text-3xl font-bold text-white sm:text-4xl">
              ৳200 off your first print
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[#F3E2D2]">
              Subscribe for early access to new drops and an exclusive
              discount code — Cash on Delivery available everywhere we ship.
            </p>

            <form
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                required
                placeholder="Enter your email"
                className="h-12 rounded-full border-white/25 bg-white/10 px-5 text-white placeholder:text-[#F3E2D2]/70 focus-visible:ring-white/40"
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 shrink-0 rounded-full bg-white px-6 text-[#B8532E] hover:bg-[#FDF8F3]"
              >
                Claim discount
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
