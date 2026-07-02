export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-fuchsia-600/30 blur-3xl" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          New drops every Friday
        </span>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Own the art of{' '}
          <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            tomorrow
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-slate-400">
          Discover, collect, and showcase one-of-a-kind digital art from
          independent creators around the world.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            className="rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:shadow-xl hover:shadow-fuchsia-500/40 active:scale-95"
          >
            Shop the collection
          </button>
          <button
            type="button"
            className="rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
          >
            Explore artists
          </button>
        </div>

        <dl className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-10">
          {[
            ['12k+', 'Artworks'],
            ['3.2k', 'Artists'],
            ['98%', 'Happy collectors'],
          ].map(([stat, label]) => (
            <div key={label}>
              <dt className="sr-only">{label}</dt>
              <dd className="text-2xl font-bold text-white sm:text-3xl">{stat}</dd>
              <p className="mt-1 text-sm text-slate-400">{label}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
