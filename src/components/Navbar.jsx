import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/naatu-logo.webp';
import { nav, site } from '../data/site';
import { MenuIcon, X } from './Icons';
import { EASE } from './motion';

function Brand({ onClick }) {
  return (
    <Link to="/" className="nav__brand" onClick={onClick} aria-label={`${site.legalName}, home`}>
      <img src={logo} alt="" width="46" height="46" />
      <span>
        <span className="nav__name">Naatu Naatu</span>
        <span className="nav__tag">Indian Pure Veg Cuisine</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const burgerRef = useRef(null);
  const reduce = useReducedMotion();

  // Close the drawer on navigation (including browser back) — adjusted during
  // render, React's documented alternative to a state-setting effect.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <header className="nav">
        <div className="wrap nav__bar">
          <Brand />

          <nav className="nav__links" aria-label="Primary">
            {nav.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className="nav__link">
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav__right">
            <a className="nav__phone" href={site.phoneHref}>
              {site.phone.replace('+1 ', '')}
            </a>
            <a className="btn btn--solid btn--sm" href={site.orderUrl} target="_blank" rel="noreferrer">
              Order online
            </a>
          </div>

          <button
            ref={burgerRef}
            type="button"
            className="nav__burger"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
        <div className="wave" aria-hidden="true" />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE }}
          >
            <div className="wrap nav__bar">
              <Brand onClick={() => setOpen(false)} />
              <button
                type="button"
                className="nav__burger"
                aria-label="Close menu"
                autoFocus
                onClick={() => setOpen(false)}
              >
                <X />
              </button>
            </div>
            <div className="wave" aria-hidden="true" />

            <nav className="drawer__list" aria-label="Primary">
              {nav.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.04 * i, ease: EASE }}
                >
                  <NavLink to={l.to} end={l.to === '/'} className="drawer__link" onClick={() => setOpen(false)}>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="drawer__foot">
              <a className="btn btn--solid" href={site.orderUrl} target="_blank" rel="noreferrer">
                Order online
              </a>
              <a className="btn btn--line" href={site.phoneHref}>
                Call {site.phone.replace('+1 ', '')}
              </a>
              <p className="drawer__addr">{site.address.full}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
