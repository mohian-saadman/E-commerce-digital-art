"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Menu, Search, ShoppingCart, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

const links = [
  { href: "/products", label: "Explore" },
  { href: "/#categories", label: "Categories" },
  { href: "#", label: "Artists" },
]

export function Navbar({ cartCount = 0 }: { cartCount?: number }) {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const router = useRouter()

  function submitSearch(formData: FormData) {
    const q = String(formData.get("q") ?? "").trim()
    setSearchOpen(false)
    setOpen(false)
    router.push(q ? `/products?q=${encodeURIComponent(q)}` : "/products")
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            A
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            ArtHub
          </span>
        </Link>

        {searchOpen ? (
          <form
            action={submitSearch}
            className="flex flex-1 items-center gap-2"
          >
            <Input
              name="q"
              autoFocus
              placeholder="Search prints, categories…"
              className="h-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Close search"
              onClick={() => setSearchOpen(false)}
            >
              <X className="size-5" />
            </Button>
          </form>
        ) : (
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        <div className="flex items-center gap-1 sm:gap-2">
          {!searchOpen && (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search"
              className="hidden sm:inline-flex"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="size-5" />
            </Button>
          )}

          <Button variant="ghost" size="icon" aria-label="Account" className="hidden sm:inline-flex">
            <User className="size-5" />
          </Button>

          <Button variant="ghost" size="icon" aria-label="Cart" className="relative">
            <ShoppingCart className="size-5" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-accent-foreground">
                {cartCount}
              </span>
            )}
          </Button>

          <Button className="hidden sm:inline-flex">Sign in</Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </nav>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>ArtHub</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 px-4">
            <form action={submitSearch} className="flex items-center gap-2">
              <Input name="q" placeholder="Search prints, categories…" className="h-10" />
              <Button type="submit" variant="ghost" size="icon" aria-label="Submit search">
                <Search className="size-5" />
              </Button>
            </form>

            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <Button>Sign in</Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
