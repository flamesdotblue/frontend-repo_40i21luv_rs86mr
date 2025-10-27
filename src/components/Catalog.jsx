import { useMemo, useState } from 'react';
import { Phone, Filter } from 'lucide-react';

const INVENTORY = [
  {
    id: 1,
    name: 'Apex R1',
    type: 'Sport',
    engine: '998cc',
    price: 14999,
    img: 'https://images.unsplash.com/photo-1605559424843-9e4bb0e84f70?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Urban Glide',
    type: 'Street',
    engine: '650cc',
    price: 8499,
    img: 'https://images.unsplash.com/photo-1618354691438-25bc04584e04?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'TerraX Pro',
    type: 'Adventure',
    engine: '890cc',
    price: 12299,
    img: 'https://images.unsplash.com/photo-1523345863763-8414a1d3552c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Classic S',
    type: 'Cruiser',
    engine: '750cc',
    price: 10199,
    img: 'https://images.unsplash.com/photo-1544552865-6cdd82b3f77b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Volt Edge',
    type: 'Electric',
    engine: 'EV',
    price: 13999,
    img: 'https://images.unsplash.com/photo-1574169207511-e21a21c8075d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Trail Hawk',
    type: 'Adventure',
    engine: '700cc',
    price: 9999,
    img: 'https://images.unsplash.com/photo-1558980664-10ef1c7b2ae0?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Catalog() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const types = useMemo(() => Array.from(new Set(INVENTORY.map((i) => i.type))), []);

  const filtered = useMemo(() => {
    return INVENTORY.filter((b) => {
      const matchesQuery = b.name.toLowerCase().includes(query.toLowerCase());
      const matchesType = type ? b.type === type : true;
      const matchesPrice = maxPrice ? b.price <= Number(maxPrice) : true;
      return matchesQuery && matchesType && matchesPrice;
    });
  }, [query, type, maxPrice]);

  return (
    <section id="catalog" className="scroll-mt-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Bikes Catalog</h2>
            <p className="mt-1 text-slate-600">Explore our lineup — engineered for performance and everyday comfort.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-3">
            <div className="flex items-center gap-2 text-slate-500"><Filter size={18} /> Filters</div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search model"
              className="w-40 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
            />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-36 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option value="">All types</option>
              {types.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <input
              type="number"
              min="0"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max price"
              className="w-36 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((b) => (
            <BikeCard key={b.id} bike={b} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BikeCard({ bike }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
        <img src={bike.img} alt={bike.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-slate-900">{bike.name}</h3>
          <span className="text-sm font-medium text-blue-700">${bike.price.toLocaleString()}</span>
        </div>
        <p className="mt-1 text-sm text-slate-600">{bike.type} • {bike.engine}</p>
        <div className="mt-4 flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex flex-1 items-center justify-center rounded-full bg-rose-500/90 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-rose-600"
          >
            Book
          </a>
          <a
            href="tel:+1234567890"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <Phone size={16} /> Call
          </a>
        </div>
      </div>
    </div>
  );
}
