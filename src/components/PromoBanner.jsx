export default function PromoBanner() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 px-6 py-14 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white">
              Limited time
            </span>
            <h2 className="mx-auto mt-5 max-w-xl text-3xl font-bold text-white sm:text-4xl">
              Get 20% off your first collection
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-purple-100">
              Sign up for our newsletter and receive an exclusive discount
              code, plus early access to new drops.
            </p>

            <form
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder-purple-200 outline-none focus:border-white/40 focus:bg-white/20"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-purple-700 transition hover:bg-purple-50 active:scale-95"
              >
                Claim discount
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
