import { useState } from 'react';
import { faqs } from '../data/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.32em] text-water-blue">FAQ</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Questions about purified water window care.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Everything homeowners want to know about our service, safety practices, and premium finishing standards.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <button
              key={item.question}
              type="button"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full rounded-[2rem] border border-slate-200 bg-white p-6 text-left shadow-soft transition hover:border-water-blue/30"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-slate-950">{item.question}</p>
                </div>
                <span className="text-2xl text-water-blue">{openIndex === index ? '−' : '+'}</span>
              </div>
              {openIndex === index && <p className="mt-4 text-slate-600 leading-7">{item.answer}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
