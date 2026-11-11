import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { site } from './data/site';
import Catering from './pages/Catering';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Menu from './pages/Menu';
import NotFound from './pages/NotFound';
import Story from './pages/Story';

const TITLES = {
  '/': 'Naatu Naatu — Indian Pure Veg Cuisine in Orlando',
  '/menu': 'Menu — Naatu Naatu Indian Pure Veg Cuisine',
  '/story': 'Our Story — Naatu Naatu Indian Pure Veg Cuisine',
  '/catering': 'Catering — Naatu Naatu Indian Pure Veg Cuisine',
  '/contact': 'Visit Us — Naatu Naatu Indian Pure Veg Cuisine',
};

/** Reset scroll on navigation, and keep the document title in step. */
function RouteEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title = TITLES[pathname] ?? 'Naatu Naatu — Indian Pure Veg Cuisine';
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <RouteEffects />
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/story" element={<Story />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />

      {/* Phones: ordering and calling stay one tap away on every page */}
      <div className="mbar" role="region" aria-label="Quick actions">
        <a className="btn btn--line btn--sm" href={site.phoneHref}>
          Call
        </a>
        <a className="btn btn--solid btn--sm" href={site.orderUrl} target="_blank" rel="noreferrer">
          Order online
        </a>
      </div>
    </>
  );
}
