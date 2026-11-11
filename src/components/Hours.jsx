import { site } from '../data/site';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/** Opening hours set like a menu: day, dot leader, times. Today is marked. */
export default function Hours() {
  const today = DAYS[new Date().getDay()];

  return (
    <ul className="hours">
      {site.hours.map((h) => (
        <li key={h.day} data-today={h.day === today}>
          <span className="d">
            {h.day.slice(0, 3)}
            {h.day === today && <span className="sr-only"> (today)</span>}
          </span>
          <span className="dots" aria-hidden="true" />
          <span className="t">{h.closed ? 'Closed' : `${h.lunch}  &  ${h.dinner}`}</span>
        </li>
      ))}
    </ul>
  );
}
