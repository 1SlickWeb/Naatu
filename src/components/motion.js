// Motion constants shared by the animation wrappers.
// Kept out of Reveal.jsx so that file only exports components (fast refresh).

/** Matches --ease in tokens.css so CSS and JS motion agree. */
export const EASE = [0.22, 0.61, 0.36, 1];

/** Variant applied to each child of <Stagger>. */
export const staggerItem = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.42, ease: EASE },
  },
};
