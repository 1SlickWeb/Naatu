// ---------------------------------------------------------------------------
// Single source of truth for everything the owner may want to change.
// Edit here — nothing else in the app hard-codes business details.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Naatu Naatu',
  legalName: 'Naatu Naatu Indian Vegetarian Cuisine',
  tagline: 'Indian Pure Veg Cuisine',
  motto: 'Our Flavors, Our Traditions',

  phone: '+1 (321) 395-4055',
  phoneHref: 'tel:+13213954055',
  // TODO(owner): add the public email address — every email link on the site
  // stays hidden until this is set.
  email: null,

  address: {
    street: '12185 S Apopka Vineland Rd',
    city: 'Orlando',
    state: 'FL',
    zip: '32836',
    get full() {
      return `${this.street}, ${this.city}, ${this.state} ${this.zip}`;
    },
  },
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=Naatu+Naatu+Indian+Vegetarian+Cuisine%2C+12185+S+Apopka+Vineland+Rd%2C+Orlando%2C+FL+32836',
  mapEmbed:
    'https://www.google.com/maps?q=12185+S+Apopka+Vineland+Rd,+Orlando,+FL+32836&output=embed',

  orderUrl: 'https://naatu-naatu-indian-veg-orlando.cloveronline.com/menu/all',

  social: {
    instagram: 'https://www.instagram.com/naatunaatu_purevegrestaurant',
    facebook: 'https://www.facebook.com/naatunaatupurevegrestaurant/',
  },

  // -------------------------------------------------------------------------
  // HOURS — taken from the restaurant's own Clover ordering page (lunch/dinner
  // service windows) plus the published Tuesday closure.
  // TODO(owner): verify these before launch; they are the one thing on the site
  // that goes stale. Change them here and every page updates.
  // -------------------------------------------------------------------------
  hours: [
    { day: 'Monday',    lunch: '11:30 – 3:00', dinner: '6 – 10:30 pm' },
    { day: 'Tuesday',   closed: true },
    { day: 'Wednesday', lunch: '11:30 – 3:00', dinner: '6 – 10:30 pm' },
    { day: 'Thursday',  lunch: '11:30 – 3:00', dinner: '6 – 10:30 pm' },
    { day: 'Friday',    lunch: '11:30 – 3:00', dinner: '6 – 10:30 pm' },
    { day: 'Saturday',  lunch: '11:30 – 3:00', dinner: '6 – 10:30 pm' },
    { day: 'Sunday',    lunch: '11:30 – 3:00', dinner: '6 – 10:30 pm' },
  ],

  credit: { label: '1Slick Technologies', href: 'https://1slick.com/' },
};

export const nav = [
  { to: '/',         label: 'Home' },
  { to: '/menu',     label: 'Menu' },
  { to: '/story',    label: 'Our Story' },
  { to: '/catering', label: 'Catering' },
  { to: '/contact',  label: 'Contact' },
];
