import { useState } from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';

const gallery = [
  'https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544829728-e5cb9eedc5c8?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512699355324-89897a62c1b5?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=1600&auto=format&fit=crop',
];

export default function GalleryContact() {
  const [active, setActive] = useState(null);

  return (
    <>
      <section id="gallery" className="scroll-mt-16 bg-gradient-to-br from-blue-50 via-white to-rose-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Gallery</h2>
              <p className="mt-1 text-slate-600">Take a peek inside our showroom and rides.</p>
            </div>
          </div>

          <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"></div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(src)}
                className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <img src={src} alt="Showroom" className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              </button>
            ))}
          </div>
        </div>

        {active && (
          <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setActive(null)}>
            <div className="max-w-4xl w-full overflow-hidden rounded-2xl bg-white">
              <img src={active} alt="Preview" className="w-full h-auto" />
            </div>
          </div>
        )}
      </section>

      <section id="contact" className="scroll-mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>
              <p className="mt-2 text-slate-600">Questions or ready to ride? Send a message or book a test ride.</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Name</label>
                    <input required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Email</label>
                    <input type="email" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Phone</label>
                    <input type="tel" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700">Message</label>
                    <textarea rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button type="submit" className="inline-flex items-center rounded-full bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-200 hover:bg-blue-700">
                    Book a Test Ride
                  </button>
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50">
                    Get Directions
                  </a>
                </div>
              </form>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-blue-50/60 p-4">
                  <div className="flex items-center gap-2 text-blue-700"><Mail size={18}/> Email</div>
                  <p className="mt-1 text-sm text-slate-600">hello@secondgears.com</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-rose-50/60 p-4">
                  <div className="flex items-center gap-2 text-rose-700"><MapPin size={18}/> Address</div>
                  <p className="mt-1 text-sm text-slate-600">221B Torque Street, Motor City</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-slate-700"><Clock size={18}/> Hours</div>
                  <p className="mt-1 text-sm text-slate-600">Mon–Sat: 9am – 7pm</p>
                </div>
              </div>
            </div>

            <div>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
                <iframe
                  title="SecondGears Showroom"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450931!2d144.95373531531063!3d-37.81627974201143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzE0LjQiRQ!5e0!3m2!1sen!2s!4v1611815480843!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

        <footer className="border-t border-slate-200 bg-white/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} SecondGears. All rights reserved.</p>
            <div className="flex items-center gap-4 text-slate-600">
              <a href="#" className="hover:text-slate-900">Instagram</a>
              <a href="#" className="hover:text-slate-900">Facebook</a>
              <a href="#" className="hover:text-slate-900">Twitter/X</a>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
