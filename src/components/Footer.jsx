export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-6 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-water-blue">Marina del Rey Windows</p>
            <p className="mt-4 max-w-sm leading-7 text-slate-600">
              Premium purified water window cleaning for coastal homes, specializing in waterfed pole service, track care, and lux residential finishes.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-water-blue">Quick Links</p>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li><a href="#services" className="transition hover:text-water-blue">Services</a></li>
              <li><a href="#how" className="transition hover:text-water-blue">How It Works</a></li>
              <li><a href="#quote" className="transition hover:text-water-blue">Get a Quote</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-water-blue">Contact</p>
            <div className="mt-6 space-y-3 text-slate-600">
              <p>Office: Marina del Rey, CA</p>
              <p>Email: hello@mdrwindows.com</p>
              <p>Phone: (310) 555-0198</p>
            </div>
            <div className="mt-8 flex gap-4 text-slate-600">
              <a href="#" className="transition hover:text-water-blue">Instagram</a>
              <a href="#" className="transition hover:text-water-blue">LinkedIn</a>
              <a href="#" className="transition hover:text-water-blue">Facebook</a>
            </div>
          </div>
        </div>
        <p className="mt-12 text-center text-xs uppercase tracking-[0.32em] text-slate-500">
          © 2026 Marina del Rey Windows. Crafted for luxury coastal residences.
        </p>
      </div>
    </footer>
  );
}
