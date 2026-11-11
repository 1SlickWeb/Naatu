import { Link } from 'react-router-dom';
import artCow from '../assets/art/art-cow.webp';
import artCyclist from '../assets/art/art-cyclist.webp';
import artHills from '../assets/art/art-hills.webp';
import artTree from '../assets/art/art-tree.webp';
import artVillage from '../assets/art/art-village.webp';
import { ArrowRight } from '../components/Icons';
import Reveal from '../components/Reveal';
import { categories, totalItems } from '../data/menu';
import { site } from '../data/site';

const PLATES = [
  { src: artVillage, n: 'I', caption: 'The village by the river' },
  { src: artCow, n: 'II', caption: 'Morning milking' },
  { src: artCyclist, n: 'III', caption: 'Bringing the fodder home' },
  { src: artTree, n: 'IV', caption: 'Under the banyan tree' },
];

export default function Story() {
  return (
    <>
      <header className="split phead">
        <div className="split__art split__art--r bleed bleed--left">
          <img src={artHills} alt="" />
        </div>
        <div className="split__text split__text--l">
          <Reveal as="p" className="kicker">
            Our story
          </Reveal>
          <Reveal as="h1" className="display display--lg" delay={0.05}>
            A taste of India in the heart of Orlando
          </Reveal>
          <Reveal as="p" className="lede" delay={0.1}>
            Naatu means of the village — of the soil. It is where our recipes
            come from.
          </Reveal>
        </div>
      </header>

      <section className="band">
        <div className="wrap prose">
          <Reveal as="p" className="dropcap">
            We serve the authentic vegetarian dishes we grew up with — flavors
            rooted in tradition. From farmers and folklore to Naatu
            Naatu-inspired memories, our journey from India to Orlando is filled
            with heart.
          </Reveal>
          <Reveal as="p">
            Passed down through generations, our recipes bring the warmth of the
            village to your table. The watercolours on this site, like the ones
            on our printed menu, are the landscape these dishes came from: paddy
            fields at first light, boats pulled up on the riverbank, a pot of
            sambar coming along slowly on a clay stove.
          </Reveal>

          <Reveal as="h2">A menu with fourteen sections</Reveal>
          <Reveal as="p">
            Our menu is laid out the way a South Indian meal unfolds — from
            Aarambham, the beginning, through Idly Bazaar and Dosa Bazaar, to the
            thalis of Sampoornam and the sweets of Madhuram. The names are ours;
            the dishes are the ones you would find on a table back home.
          </Reveal>

          <Reveal as="h2">A kitchen the whole family can eat from</Reveal>
          <Reveal as="p">
            Everything we cook is vegetarian. For families who keep no onion and
            no garlic, several dishes — Paneer Makhani, Dal Tadka and Mix Veg
            Uttappam among them — are made that way. Tell us what you need when
            you order and we will look after it.
          </Reveal>
          <Reveal as="p">
            Our curries are also available in Jain and vegan options, bringing
            more ways to enjoy Indian vegetarian food in Orlando. Ask us about
            these options when you order so we can help you choose your meal.
          </Reveal>
        </div>
      </section>

      <section className="band band--tint">
        <div className="wrap">
          <Reveal className="facts">
            <div>
              <strong>100%</strong>
              <h3>Vegetarian</h3>
              <p>Not a vegetarian section of a menu — a vegetarian kitchen.</p>
            </div>
            <div>
              <strong>{categories.length}</strong>
              <h3>Sections</h3>
              <p>Aarambham to Madhuram, the order a South Indian meal is eaten in.</p>
            </div>
            <div>
              <strong>{Math.floor(totalItems / 10) * 10}+</strong>
              <h3>Dishes</h3>
              <p>Tiffins, thalis, North and South Indian curries, chaat, and filter coffee to finish.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal style={{ marginBottom: '3.5rem', maxWidth: '40rem' }}>
            <p className="kicker">The village, painted</p>
            <h2 className="display display--md" style={{ marginTop: '.8rem' }}>
              Where the recipes come from
            </h2>
          </Reveal>
          <div className="plates">
            {PLATES.map((p, i) => (
              <Reveal as="figure" key={p.n} delay={(i % 2) * 0.08}>
                <img src={p.src} alt={`Watercolour: ${p.caption.toLowerCase()}`} loading="lazy" />
                <figcaption>
                  <b>{p.n}</b>
                  {p.caption}
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="wrap strip__row">
          <div>
            <h2>Pull up a chair</h2>
            <p>{site.address.full}</p>
          </div>
          <Link className="btn btn--paper" to="/menu">
            Read the menu <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
