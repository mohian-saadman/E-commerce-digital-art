import { CategoryStrip } from "@/components/site/category-strip"
import { FeaturedProducts } from "@/components/site/featured-products"
import { Footer } from "@/components/site/footer"
import { Hero } from "@/components/site/hero"
import { Navbar } from "@/components/site/navbar"
import { PromoBanner } from "@/components/site/promo-banner"

export const revalidate = 60

export default function Home() {
  return (
    <>
      <Navbar cartCount={2} />
      <main className="flex flex-1 flex-col">
        <Hero />
        <CategoryStrip />
        <FeaturedProducts />
        <PromoBanner />
      </main>
      <Footer />
    </>
  )
}
