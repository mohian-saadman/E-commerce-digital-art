/**
 * Placeholder catalog for Phase 1 (homepage shell).
 * Shape mirrors the Product entity in context/06-data-model.md — basePrice is
 * stored in poisha (int) and formatted to ৳ only at display time.
 * Real data + Postgres arrive in Phase 2.
 */

export type Category = {
  slug: string
  name: string
  gradient: string
}

export type Product = {
  slug: string
  name: string
  categorySlug: string
  basePrice: number // poisha
  badge?: "New" | "Trending" | "Limited" | "Sold out"
  gradient: string
}

export const categories: Category[] = [
  { slug: "portraits", name: "Portraits", gradient: "from-[#C1552C] to-[#7A3520]" },
  { slug: "landscapes", name: "Landscapes", gradient: "from-[#4A6B4F] to-[#233A28]" },
  { slug: "abstract", name: "Abstract", gradient: "from-[#C89B3C] to-[#8A5A1E]" },
  { slug: "cyberpunk", name: "Cyberpunk", gradient: "from-[#5B4B8A] to-[#2B2350]" },
  { slug: "architecture", name: "Architecture", gradient: "from-[#5C6B73] to-[#2B3339]" },
  { slug: "fantasy", name: "Fantasy", gradient: "from-[#8A3B5C] to-[#3E1A2C]" },
]

export const products: Product[] = [
  {
    slug: "amber-monsoon",
    name: "Amber Monsoon",
    categorySlug: "landscapes",
    basePrice: 185000,
    badge: "Trending",
    gradient: "from-[#C1552C] via-[#B8532E] to-[#7A3520]",
  },
  {
    slug: "still-water-portrait",
    name: "Still Water Portrait",
    categorySlug: "portraits",
    basePrice: 240000,
    badge: "New",
    gradient: "from-[#8A5A3C] via-[#C89B3C] to-[#5C3E1E]",
  },
  {
    slug: "neon-rickshaw",
    name: "Neon Rickshaw",
    categorySlug: "cyberpunk",
    basePrice: 320000,
    badge: "Limited",
    gradient: "from-[#5B4B8A] via-[#8A3B5C] to-[#2B2350]",
  },
  {
    slug: "terracotta-drift",
    name: "Terracotta Drift",
    categorySlug: "abstract",
    basePrice: 95000,
    gradient: "from-[#C89B3C] via-[#B8532E] to-[#7A3520]",
  },
  {
    slug: "old-dhaka-lines",
    name: "Old Dhaka Lines",
    categorySlug: "architecture",
    basePrice: 275000,
    gradient: "from-[#5C6B73] via-[#3E4A50] to-[#1E2528]",
  },
  {
    slug: "banyan-dusk",
    name: "Banyan Dusk",
    categorySlug: "landscapes",
    basePrice: 165000,
    badge: "Trending",
    gradient: "from-[#4A6B4F] via-[#6B8A5F] to-[#233A28]",
  },
  {
    slug: "gilded-veil",
    name: "Gilded Veil",
    categorySlug: "fantasy",
    basePrice: 450000,
    badge: "Limited",
    gradient: "from-[#8A3B5C] via-[#C89B3C] to-[#3E1A2C]",
  },
  {
    slug: "clay-and-copper",
    name: "Clay and Copper",
    categorySlug: "abstract",
    basePrice: 120000,
    gradient: "from-[#B8532E] via-[#C89B3C] to-[#8A5A1E]",
  },
]

export function formatBDT(poisha: number): string {
  const taka = poisha / 100
  return `৳${taka.toLocaleString("en-BD", { maximumFractionDigits: 0 })}`
}
