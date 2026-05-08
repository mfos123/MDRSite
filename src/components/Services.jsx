import { services } from '../data/content';

export default function Services() {
  return (
    <section id="services" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.32em] text-water-blue">Services</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Premium cleaning packages for modern homes.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            Curated residential window care using purified water, protective track service, and a luxury experience designed for coastal properties.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft transition duration-500 hover:-translate-y-1 hover:border-water-blue/30 hover:bg-slate-50">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-water-blue/10 text-water-blue shadow-lg shadow-water-blue/10">
                <span className="text-xl">✨</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-4 text-slate-600 leading-7">{service.description}</p>
              <p className="mt-6 text-sm font-semibold text-water-blue">{service.accent}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
