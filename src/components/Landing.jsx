import { Star, ChevronRight } from 'lucide-react';

const bikes = [
  {
    name: 'Apex R1',
    type: 'Sport • 998cc',
    price: '$14,999',
    img: 'https://images.unsplash.com/photo-1605559424843-9e4bb0e84f70?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Urban Glide',
    type: 'Street • 650cc',
    price: '$8,499',
    img: 'https://images.unsplash.com/photo-1618354691438-25bc04584e04?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'TerraX Pro',
    type: 'Adventure • 890cc',
    price: '$12,299',
    img: 'https://images.unsplash.com/photo-1523345863763-8414a1d3552c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Classic S',
    type: 'Cruiser • 750cc',
    price: '$10,199',
    img: 'https://images.unsplash.com/photo-1544552865-6cdd82b3f77b?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Landing() {
  return (
    <section id="home" className="scroll-mt-16">
      <Hero />
      <Featured />
      <Testimonials />
      <AboutPreview />
    </section>
  );
}

function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-blue-50 via-white to-rose-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Ride Smart. Ride <span className="text-blue-600">SecondGears</span>.
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-prose">
              Discover high-performance bikes built for comfort, speed, and style. Premium engineering, tuned for your lifestyle.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-200 hover:bg-blue-700 transition"
              >
                Explore Bikes <ChevronRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50"
              >
                Book a Test Ride
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-xl ring-1 ring-slate-200">
              <img
                src="https://images.unsplash.com/photo-1511914265872-c40672604a66?q=80&w=1600&auto=format&fit=crop"
                alt="Premium motorbike in a clean modern setting"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-rose-200/50 blur-3xl" />
            <div className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full bg-blue-200/50 blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Featured() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Featured Bikes</h2>
          <p className="mt-2 text-slate-600">Hand-picked models that blend innovation, performance, and reliability.</p>
        </div>
        <a href="#catalog" className="text-blue-600 hover:text-blue-700 font-medium">View all</a>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {bikes.slice(0, 4).map((b) => (
          <div key={b.name} className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-100">
              <img src={b.img} alt={b.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">{b.name}</h3>
                <span className="text-sm font-medium text-blue-700">{b.price}</span>
              </div>
              <p className="mt-1 text-sm text-slate-600">{b.type}</p>
              <a
                href="#catalog"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                View Details <ChevronRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  const reviews = [
    { name: 'Aarav M.', text: 'Smooth ride, premium feel. SecondGears made my daily commute a joy.', rating: 5 },
    { name: 'Lena P.', text: 'The team guided me perfectly. Love the balance of comfort and power.', rating: 5 },
    { name: 'Jonas K.', text: 'Reliable, stylish, and the service was top-notch. Highly recommended!', rating: 4 },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-slate-900">What riders say</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-1 text-rose-500">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="#f43f5e" className="text-rose-500" />
                ))}
              </div>
              <p className="mt-3 text-slate-700">“{r.text}”</p>
              <p className="mt-4 text-sm font-medium text-slate-600">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutPreview() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h2 className="text-2xl font-bold text-slate-900">Driven by innovation, powered by trust</h2>
      <p className="mx-auto mt-3 max-w-3xl text-slate-600">
        At SecondGears, we fuse modern engineering with everyday comfort. From meticulous design to precision tuning, every bike is crafted to elevate your ride with confidence and style.
      </p>
      <div className="mt-6 inline-flex items-center rounded-full bg-rose-100 px-4 py-2 text-rose-700">Premium support • 2-year warranty • Flexible finance</div>
    </div>
  );
}
