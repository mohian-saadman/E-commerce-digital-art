const columns = [
  {
    title: 'Marketplace',
    links: ['All artworks', 'Collections', 'Artists', 'New drops'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Blog', 'Press'],
  },
  {
    title: 'Support',
    links: ['Help center', 'Contact us', 'Terms of service', 'Privacy policy'],
  },
]

const socials = [
  { label: 'Twitter', path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
  { label: 'Instagram', path: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' },
  { label: 'Discord', path: 'M19.27 5.33A18.27 18.27 0 0 0 14.87 4l-.22.4a13.5 13.5 0 0 1 3.9 1.5 15.6 15.6 0 0 0-11.1 0 13.5 13.5 0 0 1 3.9-1.5L11.13 4a18.27 18.27 0 0 0-4.4 1.33C3.9 9.1 3.1 12.8 3.4 16.4a18.6 18.6 0 0 0 5.6 2.8l.7-1.2a11.9 11.9 0 0 1-1.9-.9c.16-.12.3-.24.46-.36a13.2 13.2 0 0 0 11.5 0c.15.12.3.24.46.36-.6.36-1.24.66-1.9.9l.7 1.2a18.6 18.6 0 0 0 5.6-2.8c.36-4.1-.6-7.76-3.35-11.07zM9.7 14.1c-.9 0-1.65-.83-1.65-1.85s.73-1.85 1.65-1.85 1.66.84 1.65 1.85c0 1.02-.73 1.85-1.65 1.85zm5.6 0c-.9 0-1.65-.83-1.65-1.85s.73-1.85 1.65-1.85 1.66.84 1.65 1.85c0 1.02-.73 1.85-1.65 1.85z' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 font-bold">
                A
              </span>
              <span className="text-lg font-semibold tracking-tight">Aurora</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-slate-400">
              A curated marketplace for digital art, connecting collectors
              with independent artists worldwide.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-white/30 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Aurora. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="transition hover:text-white">Terms</a>
            <a href="#" className="transition hover:text-white">Privacy</a>
            <a href="#" className="transition hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
