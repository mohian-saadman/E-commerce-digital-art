import Image from "next/image"

/**
 * Seed/placeholder catalog data encodes images as `gradient:#hex1,#hex2` since we
 * don't have real product photography yet — see prisma/seed.ts. Swap for real
 * Cloudinary/Vercel Blob URLs (next/image) once photography exists; this component
 * already renders those transparently.
 */
export function ProductImage({
  url,
  alt,
  className = "",
}: {
  url: string
  alt: string
  className?: string
}) {
  if (url.startsWith("gradient:")) {
    const [from, to] = url.slice("gradient:".length).split(",")
    return (
      <div
        role="img"
        aria-label={alt}
        className={className}
        style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
      />
    )
  }

  return (
    <Image
      src={url}
      alt={alt}
      fill
      className={`object-cover ${className}`}
      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
    />
  )
}
