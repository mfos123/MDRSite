import { navLinks } from '../data/content';
import logo from '../../marina_del_rey_windows_logo.svg';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-lg font-semibold tracking-[0.22em] text-slate-950">
          <img src={logo} alt="Marina del Rey Windows logo" className="h-10 w-10 rounded-2xl bg-slate-50 p-1 shadow-sm shadow-slate-200/70" />
          Marina del Rey Windows
        </a>
        <nav className="hidden items-center gap-8 md:flex text-sm text-slate-600">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-water-blue">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#quote" className="button-glass hidden items-center text-sm font-semibold md:inline-flex">
          Request a Quote
        </a>
      </div>
    </header>
  );
}
