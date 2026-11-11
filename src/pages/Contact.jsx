import Hours from '../components/Hours';
import Reveal from '../components/Reveal';
import { site } from '../data/site';

export default function Contact() {
  return (
    <div className="wrap contact">
      <Reveal>
        <p className="kicker">Visit us</p>
        <h1 className="display display--xl" style={{ marginBlock: '.8rem 2.5rem' }}>
          Come and eat with us
        </h1>

        <div className="contact__block">
          <span className="kicker">Address</span>
          <p className="visit__addr">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
          </p>
          <div className="contact__links">
            <a className="more" href={site.mapsHref} target="_blank" rel="noreferrer">
              Get directions ↗
            </a>
          </div>
        </div>

        <div className="contact__block">
          <span className="kicker">Phone</span>
          <a className="visit__phone" href={site.phoneHref} style={{ marginTop: 0 }}>
            {site.phone.replace('+1 ', '')}
          </a>
          <p className="note" style={{ marginTop: '.5rem' }}>
            Reservations, large orders and catering.
          </p>
          {site.email && (
            <p style={{ marginTop: '.75rem' }}>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          )}
        </div>

        <div className="contact__block">
          <span className="kicker">Hours</span>
          <Hours />
          <p className="note" style={{ marginTop: '1rem', fontSize: '.95rem' }}>
            Lunch and dinner service. Hours can change on holidays — please call
            ahead if you are making a special trip.
          </p>
        </div>

        <div className="contact__block">
          <span className="kicker">Elsewhere</span>
          <div className="contact__links" style={{ marginTop: 0 }}>
            <a className="more" href={site.orderUrl} target="_blank" rel="noreferrer">
              Order online ↗
            </a>
            <a className="more" href={site.social.instagram} target="_blank" rel="noreferrer">
              Instagram ↗
            </a>
            <a className="more" href={site.social.facebook} target="_blank" rel="noreferrer">
              Facebook ↗
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal className="map" delay={0.1}>
        <iframe
          title={`Map showing ${site.legalName} at ${site.address.full}`}
          src={site.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </Reveal>
    </div>
  );
}
