const NEW_WITHIN_DAYS = 14
const LOW_STOCK_THRESHOLD = 6

export function computeBadge(product: {
  createdAt: Date
  variants: { stock: number }[]
}): "New" | "Limited" | null {
  const totalStock = product.variants.reduce((sum, v) => sum + v.stock, 0)
  const isLimited = totalStock > 0 && totalStock <= LOW_STOCK_THRESHOLD
  if (isLimited) return "Limited"

  const newCutoff = Date.now() - NEW_WITHIN_DAYS * 24 * 60 * 60 * 1000
  if (product.createdAt.getTime() >= newCutoff) return "New"

  return null
}
