import { galleryItems } from '../data/content';

export default function Gallery() {
  return (
    <section id="gallery" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Our work in coastal homes.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            A premium window cleaning gallery that highlights coastal luxury living and our distinct water purity finish.
          </p>
        </div>
        <div className="space-y-6 sm:space-y-0 sm:overflow-x-auto sm:pb-4">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {galleryItems.map((item) => (
              <div key={item.label} className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lg">
                <img src={item.src} alt={item.label} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-slate-950">
                  <p className="text-sm uppercase tracking-[0.32em] text-water-blue">Showcase</p>
                  <h3 className="mt-2 text-xl font-semibold">{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
