import { useState } from 'react';
import { Bike, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#catalog', label: 'Bikes' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-rose-300 text-white shadow-md">
              <Bike size={18} />
            </span>
            <span className="text-xl font-semibold tracking-tight text-slate-800">SecondGears</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#catalog"
              className="inline-flex items-center rounded-full bg-blue-500/90 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-600 transition-colors"
            >
              Explore Bikes
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#catalog"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-blue-500/90 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-600"
            >
              Explore Bikes
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
