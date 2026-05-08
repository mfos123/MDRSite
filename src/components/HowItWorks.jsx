import { steps } from '../data/content';

export default function HowItWorks() {
  return (
    <section id="how" className="relative px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.32em] text-water-blue">How It Works</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            A premium process designed for spotless glass.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Our purified water method lifts grime naturally, then the waterfed pole provides a smooth rinse drive for a flawless streak-free finish.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-water-blue/10 text-water-blue text-lg font-semibold">
                {index + 1}
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-4 text-slate-600 leading-7">{step.description}</p>
              <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-water-blue/5 blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
