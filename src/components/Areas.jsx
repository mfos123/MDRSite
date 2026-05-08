import { areas } from '../data/content';

export default function Areas() {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-soft">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-water-blue">Service Area</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Serving Marina del Rey and nearby coastal neighborhoods.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              Our purified water window care is built for beachfront residences, luxury estates, and modern coastal retreats across the region.
            </p>
          </div>
          <div className="grid gap-4 rounded-[2rem] bg-slate-100 p-8 shadow-soft">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.32em] text-water-blue">Featured Area</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">Marina del Rey</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {areas.map((area) => (
                <div key={area} className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-700 transition hover:border-water-blue/30 hover:bg-slate-50">
                  {area}
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-slate-200 bg-water-blue/10 p-6 text-slate-950">
              <p className="text-sm uppercase tracking-[0.32em] text-water-blue">Coastal luxury design</p>
              <p className="mt-2 leading-7 text-slate-700">
                Elegant service coverage and tailored care for homes that demand a premium finishing touch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
