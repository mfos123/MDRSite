import { testimonials } from '../data/content';

export default function Testimonials() {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft">
            <p className="text-sm uppercase tracking-[0.32em] text-water-blue">Testimonials</p>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Trusted by coastal homeowners for a premium finish.
            </h2>
            <div className="mt-10 space-y-4 text-slate-700">
              <div className="rounded-3xl bg-slate-100 p-6 shadow-soft">
                <p className="text-3xl font-semibold text-slate-950">500+</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-water-blue">Homes Cleaned</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-6 shadow-soft">
                <p className="text-3xl font-semibold text-slate-950">5-Star</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-water-blue">Rated Experience</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-6 shadow-soft">
                <p className="text-3xl font-semibold text-slate-950">98%</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-water-blue">Repeat Customers</p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1">
                <div className="flex items-center gap-3 text-water-blue">
                  <span className="text-2xl">⭐</span>
                  <span className="text-sm uppercase tracking-[0.32em] text-slate-950">5.0</span>
                </div>
                <p className="mt-6 text-slate-700 leading-8">“{item.quote}”</p>
                <div className="mt-6 border-t border-slate-200 pt-4 text-sm text-slate-600">
                  <p className="font-semibold text-slate-950">{item.name}</p>
                  <p>{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
