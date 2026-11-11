import { Link } from 'react-router-dom';
import logo from '../assets/naatu-logo.webp';
import { nav, site } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wave wave--soft" aria-hidden="true" />
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <img src={logo} alt="" width="64" height="64" />
              <div>
                <p className="nav__name">Naatu Naatu</p>
                <p className="nav__tag">Indian Pure Veg Cuisine</p>
              </div>
            </div>
            <p className="note" style={{ marginTop: '1.25rem', maxWidth: '32ch' }}>
              Our flavors, our traditions. A taste of India in the heart of
              Orlando.
            </p>
          </div>

          <div>
            <h2>Find us</h2>
            <p>
              <a href={site.mapsHref} target="_blank" rel="noreferrer">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </a>
            </p>
            <p style={{ marginTop: '.6rem' }}>
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
            {site.email && (
              <p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            )}
          </div>

          <div>
            <h2>Hours</h2>
            <p>Lunch 11:30 – 3:00</p>
            <p>Dinner 6 – 10:30 pm</p>
            <p>Closed Tuesdays</p>
          </div>

          <div>
            <h2>Pages</h2>
            <ul>
              {nav.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
              <li>
                <a href={site.orderUrl} target="_blank" rel="noreferrer">
                  Order online ↗
                </a>
              </li>
              <li>
                <a href={site.social.instagram} target="_blank" rel="noreferrer">
                  Instagram ↗
                </a>
              </li>
              <li>
                <a href={site.social.facebook} target="_blank" rel="noreferrer">
                  Facebook ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__base">
          <span>
            © {new Date().getFullYear()} {site.legalName}
          </span>
          <span>
            Powered by{' '}
            {site.credit.href ? (
              <a href={site.credit.href} target="_blank" rel="noreferrer">
                {site.credit.label}
              </a>
            ) : (
              site.credit.label
            )}
          </span>
        </div>
      </div>
    </footer>
  );
}
