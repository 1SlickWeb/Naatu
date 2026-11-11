import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import artVillage from '../assets/art/art-village.webp';
import { Search, X } from '../components/Icons';
import MenuItem from '../components/MenuItem';
import Reveal from '../components/Reveal';
import { categories, totalItems } from '../data/menu';
import { site } from '../data/site';

const norm = (s) => (s || '').toLowerCase().normalize('NFKD');

export default function Menu() {
  const { hash } = useLocation();
  const reduce = useReducedMotion();
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(categories[0].id);

  const q = norm(query.trim());
  const shown = useMemo(() => {
    if (!q) return categories.map((c) => ({ ...c, matches: c.items }));
    return categories
      .map((c) => ({
        ...c,
        matches: c.items.filter(
          (i) => norm(i.name).includes(q) || norm(i.desc).includes(q) || norm(c.name).includes(q) || norm(c.subtitle).includes(q),
        ),
      }))
      .filter((c) => c.matches.length);
  }, [q]);
  const count = shown.reduce((n, c) => n + c.matches.length, 0);

  // Deep links (/menu#dosa-bazaar) land on that section.
  useEffect(() => {
    const id = hash.slice(1);
    if (!id) return;
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }));
  }, [hash]);

  // Scroll-spy: highlight the section currently being read.
  useEffect(() => {
    const els = shown.map((c) => document.getElementById(c.id)).filter(Boolean);
    if (!els.length) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        const top = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (top) setActive(top.target.id);
      },
      { rootMargin: '-25% 0px -65% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [shown]);

  const go = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`);
  };

  return (
    <>
      <header className="split phead">
        <div className="split__art split__art--r bleed bleed--left">
          <img src={artVillage} alt="" />
        </div>
        <div className="split__text split__text--l">
          <Reveal as="p" className="kicker">
            {totalItems} dishes · {categories.length} sections
          </Reveal>
          <Reveal as="h1" className="display display--xl" delay={0.05}>
            The menu
          </Reveal>
          <Reveal as="p" className="lede" delay={0.1}>
            Everything here is vegetarian, and our curries are available in Jain
            and vegan options. Several dishes can be made without onion or
            garlic — just ask.
          </Reveal>
        </div>
      </header>

      {/* Phones: jump straight to a section */}
      <div className="jump">
        <div className="wrap">
          <label className="sr-only" htmlFor="jump">
            Jump to a section
          </label>
          <select id="jump" value={active} onChange={(e) => go(e.target.value)}>
            {shown.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} — {c.subtitle}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="wrap menu-layout">
        <nav className="toc" aria-label="Menu sections">
          <span className="kicker">Sections</span>
          {shown.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              aria-current={active === c.id}
              onClick={(e) => {
                e.preventDefault();
                go(c.id);
              }}
            >
              {active === c.id && (
                <motion.span
                  className="toc__ind"
                  layoutId="toc-ind"
                  transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 500, damping: 40 }}
                />
              )}
              <span className="toc__n">{c.name}</span>
              <span className="toc__e">{c.subtitle}</span>
            </a>
          ))}
        </nav>

        <div>
          <div className="mtools">
            <div className="msearch">
              <Search />
              <label className="sr-only" htmlFor="menu-search">
                Search the menu
              </label>
              <input
                id="menu-search"
                type="search"
                placeholder="Search — dosa, paneer, lassi…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoComplete="off"
              />
              {query && (
                <button type="button" className="msearch__clear" aria-label="Clear search" onClick={() => setQuery('')}>
                  <X />
                </button>
              )}
            </div>
            <p className="mtools__note" aria-live="polite">
              {query ? `${count} ${count === 1 ? 'dish matches' : 'dishes match'} “${query.trim()}”` : (
                <>
                  Prefer to order now?{' '}
                  <a href={site.orderUrl} target="_blank" rel="noreferrer">
                    Order online
                  </a>
                </>
              )}
            </p>
          </div>

          {shown.length === 0 && (
            <div className="mempty">
              <h2>Nothing called “{query.trim()}”</h2>
              <p>Try a shorter word — dosa, idly, paneer or lassi.</p>
              <button type="button" className="btn btn--line" onClick={() => setQuery('')}>
                Clear search
              </button>
            </div>
          )}

          {shown.map((c) => (
            <section className="msec" id={c.id} key={c.id} aria-labelledby={`${c.id}-h`}>
              <header className="msec__head">
                <h2 className="title" id={`${c.id}-h`}>
                  {c.name}
                </h2>
                <p className="msec__meta">
                  {c.subtitle} · {c.matches.length} {c.matches.length === 1 ? 'dish' : 'dishes'}
                </p>
                {!q && <p className="note msec__blurb">{c.blurb}</p>}
                {c.dietaryNote && <p className="note msec__blurb">{c.dietaryNote}</p>}
              </header>
              <ul className="mlist">
                {c.matches.map((i) => (
                  <MenuItem item={i} key={i.name} />
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
