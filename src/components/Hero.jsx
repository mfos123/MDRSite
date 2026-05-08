import { heroStats } from '../data/content';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-24 pt-16 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
        <div className="relative z-10 flex-1">
          <span className="inline-flex rounded-full border border-water-blue/20 bg-water-blue/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-water-blue">
            Residential purified water window care</span>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Pure Water. Spotless Windows.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Experience luxury window cleaning with purified waterfed pole technology, no soap residue, and a safer no-ladder finish for premium coastal homes.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#quote" className="button-glass bg-slate-950/5 text-slate-950 transition hover:bg-slate-100">
              Get Free Quote
            </a>
            <a href="#services" className="button-glass border-slate-200 text-slate-950 hover:bg-slate-50">
              View Services
            </a>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <article key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
                <h3 className="text-3xl font-semibold text-slate-950">{stat.value}</h3>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="relative flex-1">
          <div className="absolute inset-x-0 top-10 h-80 rounded-[2.5rem] bg-gradient-to-br from-water-blue/20 via-transparent to-transparent blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(104,213,255,0.18),_transparent_22%)]" />
            <div className="relative aspect-[14/11] bg-[url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
            <div className="absolute bottom-6 left-6 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-soft backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.32em] text-water-blue">Premium system</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">Waterfed Pole Cleaning</h2>
              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-600">
                Safer, more efficient, and perfectly clear glass with every pass.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
