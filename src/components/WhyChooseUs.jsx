import { trustCards } from '../data/content';

export default function WhyChooseUs() {
  return (
    <section id="why" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.32em] text-water-blue">Why Choose Us</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Modern window care that feels trusted and refined.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustCards.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:border-water-blue/30">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-water-blue/10 text-water-blue shadow-lg shadow-water-blue/10">
                <span className="text-xl">✔</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-4 text-slate-600 leading-7">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
