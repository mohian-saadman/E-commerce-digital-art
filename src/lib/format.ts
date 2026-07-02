/** Money is stored in poisha (int) per context/06-data-model.md. Format to ৳ only here. */
export function formatBDT(poisha: number): string {
  const taka = poisha / 100
  return `৳${taka.toLocaleString("en-BD", { maximumFractionDigits: 0 })}`
}
