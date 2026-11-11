import { Link } from 'react-router-dom';
import { ArrowRight } from '../components/Icons';

export default function NotFound() {
  return (
    <section className="wrap lost">
      <p className="kicker">Page not found</p>
      <h1 className="display display--xl" style={{ marginTop: '.8rem' }}>
        This plate is empty
      </h1>
      <p className="lede">
        The page you were looking for has moved or never existed. The menu is
        still right where you left it.
      </p>
      <Link className="more" to="/menu">
        Read the menu <ArrowRight />
      </Link>
    </section>
  );
}
