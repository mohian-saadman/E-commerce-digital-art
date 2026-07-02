import Link from "next/link"
import { notFound } from "next/navigation"

import { Footer } from "@/components/site/footer"
import { Navbar } from "@/components/site/navbar"
import { ProductCard } from "@/components/site/product-card"
import { ProductDetailInteractive } from "@/components/site/product-detail-interactive"
import { ProductImage } from "@/components/site/product-image"
import { prisma } from "@/lib/prisma"

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      category: true,
      images: { orderBy: { sortOrder: "asc" } },
      variants: true,
    },
  })

  if (!product || product.status !== "active") {
    notFound()
  }

  const relatedProducts = await prisma.product.findMany({
    where: {
      status: "active",
      categoryId: product.categoryId,
      id: { not: product.id },
    },
    take: 4,
    include: {
      category: true,
      images: { orderBy: { sortOrder: "asc" }, take: 1 },
      variants: { select: { stock: true } },
    },
  })

  return (
    <>
      <Navbar cartCount={2} />
      <main className="flex flex-1 flex-col">
        <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted-foreground">
            <Link href="/products" className="hover:text-foreground">
              All prints
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/products?category=${product.category.slug}`}
              className="hover:text-foreground"
            >
              {product.category.name}
            </Link>
          </nav>

          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            <div>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                {product.images[0] && (
                  <ProductImage
                    url={product.images[0].url}
                    alt={product.images[0].alt}
                    className="absolute inset-0"
                  />
                )}
              </div>
              {product.images.length > 1 && (
                <div className="mt-3 grid grid-cols-4 gap-3">
                  {product.images.map((image) => (
                    <div
                      key={image.id}
                      className="relative aspect-square overflow-hidden rounded-lg"
                    >
                      <ProductImage
                        url={image.url}
                        alt={image.alt}
                        className="absolute inset-0"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <p className="text-sm font-medium text-primary">{product.category.name}</p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight text-foreground">
                {product.name}
              </h1>
              <p className="mt-4 text-muted-foreground">{product.description}</p>

              <div className="mt-6">
                <ProductDetailInteractive
                  basePrice={product.basePrice}
                  variants={product.variants}
                />
              </div>

              <dl className="mt-10 space-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
                <div className="flex gap-2">
                  <dt className="font-medium text-foreground">Delivery:</dt>
                  <dd>Cash on delivery available nationwide from Dhaka.</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-foreground">Printed on:</dt>
                  <dd>Archival matte, ready to frame.</dd>
                </div>
              </dl>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                You may also like
              </h2>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
                {relatedProducts.map((related) => (
                  <ProductCard key={related.slug} product={related} />
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
