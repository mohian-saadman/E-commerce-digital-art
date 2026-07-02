import { Separator } from "@/components/ui/separator"

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2Zm5.4 14.3c-.24.66-1.24 1.25-1.9 1.36-.5.08-1.14.11-1.84-.12a12.9 12.9 0 0 1-3-1.5 10.9 10.9 0 0 1-3.1-3.5c-.4-.68-.83-1.5-.9-2.4-.06-.8.24-1.6.7-2.16.2-.24.5-.36.8-.36h.5c.2 0 .43-.02.63.4.24.5.8 1.9.86 2.04.08.14.13.3.03.5-.1.2-.15.32-.3.5-.15.18-.32.4-.45.53-.15.15-.3.32-.14.6.16.28.7 1.2 1.5 1.94 1.03.94 1.9 1.24 2.2 1.38.28.14.44.12.6-.06.18-.2.7-.8.9-1.08.2-.28.4-.22.65-.13.28.1 1.7.8 2 .95.28.14.47.2.53.32.08.14.08.76-.16 1.4Z" />
    </svg>
  )
}

const columns = [
  {
    title: "Shop",
    links: ["All prints", "Categories", "New drops", "Best sellers"],
  },
  {
    title: "Company",
    links: ["About ArtHub", "How it works", "Contact us"],
  },
  {
    title: "Support",
    links: ["Shipping & delivery", "Returns & refunds", "Track my order", "Terms of service"],
  },
]

const socials = [
  { label: "Facebook", icon: FacebookIcon },
  { label: "Instagram", icon: InstagramIcon },
  { label: "WhatsApp", icon: WhatsAppIcon },
]

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                A
              </span>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                ArtHub
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Hi-res AI-generated art, printed and delivered across
              Bangladesh. Cash on Delivery available nationwide.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ArtHub. All rights reserved.
            Prices in ৳ (BDT).
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="transition hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
