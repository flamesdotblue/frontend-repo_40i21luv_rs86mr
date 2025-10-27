import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Catalog from './components/Catalog';
import GalleryContact from './components/GalleryContact';

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-white text-slate-900">
      <Navigation />
      <main>
        <Landing />
        <Catalog />
        <GalleryContact />
      </main>
    </div>
  );
}
