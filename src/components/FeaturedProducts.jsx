const products = [
  {
    name: 'Chromatic Drift',
    artist: 'Nova Reyes',
    price: '0.85 ETH',
    gradient: 'from-fuchsia-500 via-purple-500 to-indigo-500',
    tag: 'Trending',
  },
  {
    name: 'Neon Horizon',
    artist: 'Kai Sato',
    price: '1.20 ETH',
    gradient: 'from-cyan-400 via-sky-500 to-blue-600',
    tag: 'New',
  },
  {
    name: 'Solar Bloom',
    artist: 'Amara Diallo',
    price: '0.42 ETH',
    gradient: 'from-amber-400 via-orange-500 to-rose-500',
    tag: null,
  },
  {
    name: 'Glass Fragments',
    artist: 'Theo Lindqvist',
    price: '2.10 ETH',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    tag: 'Limited',
  },
  {
    name: 'Velvet Static',
    artist: 'Priya Nair',
    price: '0.67 ETH',
    gradient: 'from-violet-500 via-fuchsia-500 to-pink-500',
    tag: null,
  },
  {
    name: 'Iron Bloom',
    artist: 'Marcus Webb',
    price: '1.55 ETH',
    gradient: 'from-slate-500 via-slate-700 to-slate-900',
    tag: null,
  },
  {
    name: 'Paper Tide',
    artist: 'Yuki Mori',
    price: '0.93 ETH',
    gradient: 'from-rose-400 via-red-500 to-orange-500',
    tag: 'Trending',
  },
  {
    name: 'Echo Chamber',
    artist: 'Liam O’Connor',
    price: '1.05 ETH',
    gradient: 'from-indigo-400 via-blue-500 to-cyan-500',
    tag: null,
  },
]

function ProductCard({ product }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className={`relative aspect-square bg-gradient-to-br ${product.gradient}`}>
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
            {product.tag}
          </span>
        )}
        <button
          type="button"
          aria-label={`Add ${product.name} to cart`}
          className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 opacity-0 shadow-lg transition group-hover:opacity-100 hover:bg-slate-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-900">{product.name}</h3>
        <p className="mt-0.5 text-sm text-slate-500">by {product.artist}</p>
        <p className="mt-3 font-semibold text-slate-900">{product.price}</p>
      </div>
    </div>
  )
}

export default function FeaturedProducts() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Featured artworks
            </h2>
            <p className="mt-2 text-slate-500">
              Hand-picked pieces from our most talented creators.
            </p>
          </div>
          <a
            href="#"
            className="text-sm font-semibold text-fuchsia-600 transition hover:text-fuchsia-700"
          >
            View all &rarr;
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
