import artTree from '../assets/art/art-tree.webp';
import Reveal from '../components/Reveal';
import { cateringMenu, cateringTotal } from '../data/catering';
import { site } from '../data/site';

const STEPS = [
  { title: 'Call us', body: 'Tell us the date, the headcount and the venue. The more notice for a big order, the better.' },
  { title: 'Plan the menu', body: 'We build it around your event and any needs — no onion and garlic, less heat, Jain preferences.' },
  { title: 'Agree the quote', body: 'A per-guest price with everything listed. Nothing is booked until you say so.' },
  { title: 'We cook', body: 'Cooked fresh on the day and brought to you ready to serve.' },
];

export default function Catering() {
  return (
    <>
      <header className="split phead">
        <div className="split__art split__art--r bleed bleed--left">
          <img src={artTree} alt="" style={{ objectPosition: '50% 62%' }} />
        </div>
        <div className="split__text split__text--l">
          <Reveal as="p" className="kicker">
            Catering
          </Reveal>
          <Reveal as="h1" className="display display--xl" delay={0.05}>
            Feed the whole gathering
          </Reveal>
          <Reveal as="p" className="lede" delay={0.1}>
            Weddings, pujas, office lunches and birthdays across Orlando — the
            same cooking as our dining room, in bigger pots.
          </Reveal>
        </div>
      </header>

      <section className="band" aria-labelledby="cmenu-h">
        <div className="wrap">
          <Reveal style={{ marginBottom: '3rem', maxWidth: '44rem' }}>
            <p className="kicker">{cateringTotal} dishes · {cateringMenu.length} sections</p>
            <h2 className="display display--lg" id="cmenu-h" style={{ marginTop: '.8rem' }}>
              The catering menu
            </h2>
            <p className="note" style={{ marginTop: '.8rem', fontSize: '1.1rem' }}>
              Everything here is vegetarian and can be cooked for your event.
              Choose from any section — we will build the menu with you and
              quote per guest.
            </p>
          </Reveal>

          <div className="cmenu">
            {cateringMenu.map((c) => (
              <Reveal as="section" className="cmenu__sec" key={c.id} aria-labelledby={`c-${c.id}`}>
                <h3 className="cmenu__title" id={`c-${c.id}`}>{c.name}</h3>
                {c.note && <p className="note cmenu__note">{c.note}</p>}
                <ul className="cmenu__list">
                  {c.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--tint">
        <div className="wrap">
          <Reveal style={{ marginBottom: '2.75rem' }}>
            <h2 className="display display--md">How it works</h2>
          </Reveal>
          <Reveal as="ol" className="steps">
            {STEPS.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal className="callout">
            <div>
              <h2 className="display display--md">Tell us about your event</h2>
              <p>
                Pricing is per guest and depends on the menu, the headcount and
                the date. If anyone in your group has a food allergy, please
                mention it when you call.
              </p>
            </div>
            <a className="callout__phone" href={site.phoneHref}>
              {site.phone.replace('+1 ', '')}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
