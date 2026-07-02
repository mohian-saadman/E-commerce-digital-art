import { PrismaPg } from "@prisma/adapter-pg"

import { PrismaClient } from "../src/generated/prisma/client"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

const categories = [
  { slug: "portraits", name: "Portraits", sortOrder: 0, gradient: ["#C1552C", "#7A3520"] },
  { slug: "landscapes", name: "Landscapes", sortOrder: 1, gradient: ["#4A6B4F", "#233A28"] },
  { slug: "abstract", name: "Abstract", sortOrder: 2, gradient: ["#C89B3C", "#8A5A1E"] },
  { slug: "cyberpunk", name: "Cyberpunk", sortOrder: 3, gradient: ["#5B4B8A", "#2B2350"] },
  { slug: "architecture", name: "Architecture", sortOrder: 4, gradient: ["#5C6B73", "#2B3339"] },
  { slug: "fantasy", name: "Fantasy", sortOrder: 5, gradient: ["#8A3B5C", "#3E1A2C"] },
] as const

const products = [
  {
    slug: "amber-monsoon",
    name: "Amber Monsoon",
    categorySlug: "landscapes",
    description:
      "Rain-lit paddy fields rendered in warm amber and rust tones, generated at gallery resolution.",
    basePrice: 185000,
    gradient: ["#C1552C", "#7A3520"],
    stock: [18, 6],
  },
  {
    slug: "still-water-portrait",
    name: "Still Water Portrait",
    categorySlug: "portraits",
    description:
      "A contemplative AI-generated portrait study in muted gold and umber, printed on archival matte.",
    basePrice: 240000,
    gradient: ["#8A5A3C", "#5C3E1E"],
    stock: [12, 3],
  },
  {
    slug: "neon-rickshaw",
    name: "Neon Rickshaw",
    categorySlug: "cyberpunk",
    description:
      "Dhaka streets reimagined through a neon-soaked cyberpunk lens — bold violets against midnight blue.",
    basePrice: 320000,
    gradient: ["#5B4B8A", "#2B2350"],
    stock: [4, 2],
  },
  {
    slug: "terracotta-drift",
    name: "Terracotta Drift",
    categorySlug: "abstract",
    description:
      "Flowing abstract forms in terracotta and ochre, generated for a warm, grounded statement piece.",
    basePrice: 95000,
    gradient: ["#C89B3C", "#7A3520"],
    stock: [30, 14],
  },
  {
    slug: "old-dhaka-lines",
    name: "Old Dhaka Lines",
    categorySlug: "architecture",
    description:
      "Angular rooftops and narrow lanes of Old Dhaka distilled into a minimal architectural study.",
    basePrice: 275000,
    gradient: ["#5C6B73", "#1E2528"],
    stock: [9, 5],
  },
  {
    slug: "banyan-dusk",
    name: "Banyan Dusk",
    categorySlug: "landscapes",
    description:
      "A lone banyan tree at dusk, generated with soft sage-green gradients and long shadow light.",
    basePrice: 165000,
    gradient: ["#4A6B4F", "#233A28"],
    stock: [22, 10],
  },
  {
    slug: "gilded-veil",
    name: "Gilded Veil",
    categorySlug: "fantasy",
    description:
      "A fantasy portrait wrapped in gilded fabric textures — rich magenta fading into gold.",
    basePrice: 450000,
    gradient: ["#8A3B5C", "#3E1A2C"],
    stock: [3, 1],
  },
  {
    slug: "clay-and-copper",
    name: "Clay and Copper",
    categorySlug: "abstract",
    description:
      "Sculptural abstract gradients in clay and copper, suited to a warm, minimal interior.",
    basePrice: 120000,
    gradient: ["#B8532E", "#8A5A1E"],
    stock: [25, 11],
  },
] as const

async function main() {
  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: { name: category.name, sortOrder: category.sortOrder },
      create: {
        slug: category.slug,
        name: category.name,
        sortOrder: category.sortOrder,
      },
    })
  }

  for (const product of products) {
    const category = await prisma.category.findUniqueOrThrow({
      where: { slug: product.categorySlug },
    })

    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: {
        slug: product.slug,
        name: product.name,
        description: product.description,
        basePrice: product.basePrice,
        categoryId: category.id,
        images: {
          create: {
            url: `gradient:${product.gradient[0]},${product.gradient[1]}`,
            alt: product.name,
            sortOrder: 0,
          },
        },
        variants: {
          create: [
            {
              name: "12x16 in",
              sku: `${product.slug}-s`,
              stock: product.stock[0],
              attributes: { size: "12x16 in" },
            },
            {
              name: "18x24 in",
              sku: `${product.slug}-l`,
              price: Math.round(product.basePrice * 1.6),
              stock: product.stock[1],
              attributes: { size: "18x24 in" },
            },
          ],
        },
      },
    })
  }

  console.log(`Seeded ${categories.length} categories and ${products.length} products.`)
}

main()
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
