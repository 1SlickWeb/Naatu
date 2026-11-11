import { TAG_LABELS } from '../data/menu';

/** One line of the menu: name, dot leader, price, then description and marks. */
export default function MenuItem({ item, showMarks = true }) {
  const marks = (item.tags || []).filter((t) => t !== 'popular' || showMarks);

  return (
    <li className="mi">
      <div className="mi__row">
        <h3 className="mi__name">{item.name}</h3>
        <span className="mi__dots" aria-hidden="true" />
        {item.price == null ? (
          <span className="mi__price mi__price--ask">Ask us</span>
        ) : (
          <span className="mi__price">${item.price}</span>
        )}
      </div>
      {item.desc && <p className="mi__desc">{item.desc}</p>}
      {showMarks && marks.length > 0 && (
        <p className="mi__marks">
          {marks.map((t) => (
            <span key={t}>{TAG_LABELS[t]}</span>
          ))}
        </p>
      )}
    </li>
  );
}
