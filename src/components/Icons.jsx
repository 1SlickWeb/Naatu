// Inline SVG icon set (Lucide-style geometry). No icon fonts, no emoji.
// Decorative by default — pass a `title` to expose one to assistive tech.

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function Svg({ title, children, ...rest }) {
  return (
    <svg
      {...base}
      {...rest}
      role={title ? 'img' : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export const MapPin = (p) => (
  <Svg {...p}>
    <path d="M20 10c0 4.4-5.6 10.3-7.4 12a.9.9 0 0 1-1.2 0C9.6 20.3 4 14.4 4 10a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Svg>
);

export const Phone = (p) => (
  <Svg {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </Svg>
);

export const Mail = (p) => (
  <Svg {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </Svg>
);

export const Clock = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Svg>
);

export const ArrowRight = (p) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);

export const MenuIcon = (p) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const X = (p) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
);

export const Search = (p) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </Svg>
);

export const Leaf = (p) => (
  <Svg {...p}>
    <path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 10-4.5 14-9 14Z" />
    <path d="M4 21c2-6 5-9 9-11" />
  </Svg>
);

export const Utensils = (p) => (
  <Svg {...p}>
    <path d="M4 3v7a3 3 0 0 0 6 0V3M7 10v11" />
    <path d="M17 3c-1.7 1.2-2.5 3-2.5 5.5S15.3 13 17 14v7" />
  </Svg>
);

export const Flame = (p) => (
  <Svg {...p}>
    <path d="M12 2c3 4 6 6 6 10a6 6 0 0 1-12 0c0-2 1-3.5 2-5 .4 1 1 1.8 1.8 2.2C10 7 11 4.5 12 2Z" />
  </Svg>
);

export const Star = (p) => (
  <Svg {...p}>
    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.2-5.4-2.9L6.6 20l1-6.2L3.2 9.5l6.1-.9L12 3Z" />
  </Svg>
);

export const ChefHat = (p) => (
  <Svg {...p}>
    <path d="M7 20h10a1 1 0 0 0 1-1v-4.1a4.5 4.5 0 1 0-3.3-8A4 4 0 0 0 8.3 7a4.5 4.5 0 1 0-2.3 7.9V19a1 1 0 0 0 1 1Z" />
    <path d="M6 17h12" />
  </Svg>
);

export const Users = (p) => (
  <Svg {...p}>
    <path d="M16 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20" />
    <circle cx="9" cy="7" r="3.5" />
    <path d="M22 20v-1.5a4 4 0 0 0-3-3.9M16.5 3.6a4 4 0 0 1 0 7.3" />
  </Svg>
);

export const Check = (p) => (
  <Svg {...p}>
    <path d="m4 12.5 5 5L20 6.5" />
  </Svg>
);

export const Bag = (p) => (
  <Svg {...p}>
    <path d="M5 8h14l-1 12H6L5 8Z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </Svg>
);

export const Sparkle = (p) => (
  <Svg {...p}>
    <path d="M12 3c.8 4.2 2 5.4 6.2 6.2C14 10 12.8 11.2 12 15.4c-.8-4.2-2-5.4-6.2-6.2C10 8.4 11.2 7.2 12 3Z" />
    <path d="M18.5 15c.3 1.7.8 2.2 2.5 2.5-1.7.3-2.2.8-2.5 2.5-.3-1.7-.8-2.2-2.5-2.5 1.7-.3 2.2-.8 2.5-2.5Z" />
  </Svg>
);

export const Heart = (p) => (
  <Svg {...p}>
    <path d="M12 20s-7.5-4.4-7.5-9.5A4.5 4.5 0 0 1 12 7.6a4.5 4.5 0 0 1 7.5 2.9C19.5 15.6 12 20 12 20Z" />
  </Svg>
);

export const Instagram = (p) => (
  <Svg {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </Svg>
);

export const Facebook = (p) => (
  <Svg {...p}>
    <path d="M14.5 8.5h2.5V5h-2.5A4 4 0 0 0 10.5 9v2H8v3.5h2.5V21h3.5v-6.5h2.6l.4-3.5h-3V9.3c0-.5.3-.8 1-.8Z" />
  </Svg>
);
