import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import artBoats from '../assets/art/art-boats.webp';
import artCooking from '../assets/art/art-cooking.webp';
import artFields from '../assets/art/art-fields.webp';
import Hours from '../components/Hours';
import { ArrowRight } from '../components/Icons';
import MenuItem from '../components/MenuItem';
import { EASE } from '../components/motion';
import Reveal from '../components/Reveal';
import { categories, findItem } from '../data/menu';
import { site } from '../data/site';

const SPREAD = ['dosa-bazaar', 'idly-bazaar'];
const SPREAD_PICKS = {
  'dosa-bazaar': ['Plain Dosa', 'Masala Dosa', 'Mysore Masala Dosa', 'Ghee Roast Dosa', 'Davanagere Benne Masala Dosa', 'Podi Dosa', 'Pessarattu Upma', '70 MM Dosa'],
  'idly-bazaar': ['Plain Idly', 'Ghee Idly', 'Bezawada Babai Podi Idly', 'Guntur Idly', 'Sambar Idly', 'Thatte Idly', 'Button Idly / Chitti Idly', '3 Podi Idly'],
};

const FIRSTS = [
  { name: '70 MM Dosa', why: 'The extra-large one. Order it for the table and tear in.' },
  { name: 'Vindhu Bhojanam Thali', why: 'Curries, rice, roti and something sweet on one plate.' },
  { name: 'Mudda Pappu Avakai Rice', why: 'Soft dal and mango pickle over hot rice. Pure comfort.' },
  { name: 'Guntur Idly', why: 'Soft idly with the Guntur chilli kick. Not for the timid.' },
  { name: 'Pani Poori', why: 'Crisp puris, spiced water, sweet chutney. One bite each.' },
  { name: 'Filter Coffee', why: 'Strong South Indian coffee with hot milk, to finish.' },
].map((f) => ({ ...findItem(f.name), why: f.why }));

export default function Home() {
  const reduce = useReducedMotion();
  const line = (i) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.08 * i, ease: EASE },
        };

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="split hero">
        <div className="split__art split__art--r bleed bleed--left">
          <motion.img
            src={artFields}
            alt="Watercolour of paddy fields at sunrise, farmers planting rice beside a village"
            fetchPriority="high"
            initial={reduce ? false : { scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.2, ease: EASE }}
          />
        </div>

        <div className="split__text split__text--l">
          <motion.p className="kicker" {...line(0)}>
            Orlando · Pure vegetarian
          </motion.p>
          <motion.h1 className="display hero__title" {...line(1)}>
            <span>Our flavors,</span>
            <span>our traditions.</span>
          </motion.h1>
          <motion.p className="lede" {...line(2)}>
            The South Indian vegetarian food we grew up with — idly, dosa
            and full thalis — cooked the way it was cooked at home.
          </motion.p>
          <motion.div className="hero__actions" {...line(3)}>
            <a className="btn btn--solid" href={site.orderUrl} target="_blank" rel="noreferrer">
              Order online
            </a>
            <Link className="more" to="/menu">
              Read the menu <ArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Info bar */}
      <section className="infobar" aria-label="Opening hours and location">
        <div className="wrap">
          <dl className="infobar__row">
            <div className="infobar__cell">
              <dt>Lunch</dt>
              <dd>11:30 am – 3:00 pm</dd>
            </div>
            <div className="infobar__cell">
              <dt>Dinner</dt>
              <dd>6:00 – 10:30 pm</dd>
            </div>
            <div className="infobar__cell">
              <dt>Closed</dt>
              <dd>Tuesdays</dd>
            </div>
            <a className="infobar__cell" href={site.mapsHref} target="_blank" rel="noreferrer">
              <dt>Find us</dt>
              <dd>{site.address.street}</dd>
            </a>
          </dl>
        </div>
      </section>

      {/* -------------------------------------------------------- Menu spread */}
      <section className="band">
        <div className="wrap">
          <Reveal className="spread__head">
            <div>
              <h2 className="display display--lg">Two pages from the menu</h2>
              <p className="note">Fourteen sections in all. These two are where most people start.</p>
            </div>
            <Link className="more" to="/menu">
              The whole menu <ArrowRight />
            </Link>
          </Reveal>

          <div className="spread">
            {SPREAD.map((id, i) => {
              const c = categories.find((x) => x.id === id);
              const items = SPREAD_PICKS[id].map(findItem).filter(Boolean);
              return (
                <Reveal className="spread__col" key={id} delay={i * 0.1}>
                  <h3 className="title">{c.name}</h3>
                  <p className="note">{c.blurb}</p>
                  <ul className="mlist mlist--single">
                    {items.map((it) => (
                      <MenuItem item={it} key={it.name} showMarks={false} />
                    ))}
                  </ul>
                  <Link className="more" to={`/menu#${id}`} style={{ marginTop: '1.75rem' }}>
                    All {c.items.length} {c.name.split(' ')[0].toLowerCase()}s <ArrowRight />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- First visit */}
      <section className="band band--tint">
        <div className="wrap firsts">
          <Reveal className="firsts__intro">
            <p className="kicker">First time here?</p>
            <h2 className="display display--lg" style={{ marginTop: '.8rem' }}>
              Start with these six.
            </h2>
            <p className="lede">
              A short list to get you going — one from each corner of the menu,
              from the tawa to the tumbler.
            </p>
          </Reveal>

          <ol className="firsts__list">
            {FIRSTS.map((f, i) => (
              <Reveal as="li" key={f.name} delay={i * 0.04}>
                <span className="firsts__n">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{f.name}</h3>
                  <p>{f.why}</p>
                  <span className="firsts__where">{f.category}</span>
                </div>
                <span className="firsts__price">${f.price}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* -------------------------------------------------------------- Story */}
      <section className="split story band">
        <Reveal className="split__art split__art--l bleed bleed--right" y={0}>
          <img
            src={artCooking}
            alt="Watercolour of a woman in a sari cooking over a wood-fired clay stove"
            loading="lazy"
          />
        </Reveal>
        <Reveal className="split__text split__text--r" delay={0.1}>
          <p className="kicker">Our story</p>
          <h2 className="display display--md">A taste of India in the heart of Orlando</h2>
          <p className="serif">
            We serve the authentic vegetarian dishes we grew up with — flavors
            rooted in tradition. From farmers and folklore to Naatu
            Naatu-inspired memories, our journey from India to Orlando is filled
            with heart.
          </p>
          <p className="quote">
            Passed down through generations, our recipes bring the warmth of the
            village to your table.
          </p>
          <Link className="more" to="/story">
            Read our story <ArrowRight />
          </Link>
        </Reveal>
      </section>

      {/* ----------------------------------------------------- Catering strip */}
      <section className="strip">
        <div className="wrap strip__row">
          <div>
            <h2>Feeding a crowd?</h2>
            <p>We cater weddings, pujas, office lunches and birthdays.</p>
          </div>
          <Link className="btn btn--paper" to="/catering">
            Catering <ArrowRight />
          </Link>
        </div>
      </section>

      {/* -------------------------------------------------------------- Visit */}
      <section className="split visit band">
        <Reveal className="split__text split__text--l">
          <p className="kicker">Visit</p>
          <h2 className="display display--md">Come and eat with us</h2>
          <p className="visit__addr">
            <a href={site.mapsHref} target="_blank" rel="noreferrer">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </a>
          </p>
          <a className="visit__phone" href={site.phoneHref}>
            {site.phone.replace('+1 ', '')}
          </a>
          <Hours />
          <div className="visit__actions">
            <a className="btn btn--solid" href={site.orderUrl} target="_blank" rel="noreferrer">
              Order online
            </a>
            <a className="more" href={site.mapsHref} target="_blank" rel="noreferrer">
              Directions <ArrowRight />
            </a>
          </div>
        </Reveal>
        <Reveal className="split__art split__art--r bleed bleed--left" y={0} delay={0.1}>
          <img src={artBoats} alt="" loading="lazy" />
        </Reveal>
      </section>
    </>
  );
}
