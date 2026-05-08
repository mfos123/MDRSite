import { useState } from 'react';

const initialState = {
  name: '',
  phone: '',
  email: '',
  property: '',
  windows: '',
  message: '',
};

export default function QuoteForm() {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (event) => {
    setFormState({ ...formState, [field]: event.target.value });
    setErrors({ ...errors, [field]: false });
  };

  const validate = () => {
    const next = {};
    if (!formState.name.trim()) next.name = true;
    if (!formState.phone.trim()) next.phone = true;
    if (!formState.email.trim() || !formState.email.includes('@')) next.email = true;
    if (!formState.property.trim()) next.property = true;
    if (!formState.windows.trim()) next.windows = true;
    return next;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }
    setSubmitted(true);
    setFormState(initialState);
  };

  return (
    <section id="quote" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-[0.32em] text-water-blue">Request a Quote</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Schedule your luxury window cleaning consultation.
          </h2>
          <p className="mt-6 text-base leading-7 text-slate-600">
            Tell us about your home and we’ll tailor a purified water cleaning plan to your needs. Fast response, premium care, and a spotless finish.
          </p>
          <div className="mt-10 rounded-[2rem] border border-water-blue/20 bg-water-blue/10 p-8 shadow-soft">
            <p className="font-semibold text-slate-950">Need a custom service plan?</p>
            <p className="mt-3 text-slate-700 leading-7">
              We can create a recurring maintenance schedule or a one-time detail cleaning package for every residential style.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-soft">
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { id: 'name', label: 'Name', type: 'text' },
              { id: 'phone', label: 'Phone', type: 'tel' },
              { id: 'email', label: 'Email', type: 'email' },
              { id: 'property', label: 'Property Type', type: 'text' },
            ].map((field) => (
              <label key={field.id} className="relative block rounded-3xl border border-slate-200 bg-slate-50 px-5 pb-3 pt-6 transition focus-within:border-water-blue/40">
                <span className="absolute left-5 top-4 text-xs uppercase tracking-[0.32em] text-slate-500">{field.label}</span>
                <input
                  type={field.type}
                  value={formState[field.id]}
                  onChange={handleChange(field.id)}
                  className="w-full border-0 bg-transparent px-0 pb-1 pt-2 text-base text-slate-950 outline-none placeholder:text-transparent"
                  placeholder={field.label}
                />
                {errors[field.id] && <span className="mt-2 block text-sm text-rose-500">Required</span>}
              </label>
            ))}
          </div>
          <label className="relative block rounded-3xl border border-slate-200 bg-slate-50 px-5 pb-3 pt-6 transition focus-within:border-water-blue/40">
            <span className="absolute left-5 top-4 text-xs uppercase tracking-[0.32em] text-slate-500">Number of Windows</span>
            <input
              type="number"
              value={formState.windows}
              onChange={handleChange('windows')}
              className="w-full border-0 bg-transparent px-0 pb-1 pt-2 text-base text-slate-950 outline-none placeholder:text-transparent"
              placeholder="Number of Windows"
            />
            {errors.windows && <span className="mt-2 block text-sm text-rose-500">Required</span>}
          </label>
          <label className="relative block rounded-3xl border border-slate-200 bg-slate-50 px-5 pb-3 pt-6 transition focus-within:border-water-blue/40">
            <span className="absolute left-5 top-4 text-xs uppercase tracking-[0.32em] text-slate-500">Message</span>
            <textarea
              value={formState.message}
              onChange={handleChange('message')}
              rows="4"
              className="w-full resize-none border-0 bg-transparent px-0 pb-1 pt-2 text-base text-slate-950 outline-none placeholder:text-transparent"
              placeholder="Message"
            />
          </label>
          <button className="button-glass w-full justify-center bg-water-blue text-slate-950 shadow-sm transition hover:bg-water-blue/90 hover:text-slate-950" type="submit">
            Send Request
          </button>
          {submitted && (
            <p className="rounded-3xl bg-emerald-500/10 px-5 py-4 text-sm text-emerald-200">
              Thanks! Your request has been received. We will follow up shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
