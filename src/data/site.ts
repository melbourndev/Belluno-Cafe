/** Shared site data — menu board, categories, testimonials, gallery. */

export type MenuItem = {
  name: string;
  cat: string;
  price: number;
  rating: string;
  img: string;
  desc: string;
  live?: number;
};

export type Category = {
  key: string;
  title: string;
  blurb: string;
  img: string;
  alt: string;
};

export const BASECATS: Category[] = [
  {
    key: 'brew',
    title: 'Hot Brews',
    blurb: 'Slow shots, steamed silk.',
    img: '/assets/drink-2.avif',
    alt: 'Swirls of steamed milk over espresso',
  },
  {
    key: 'mocktail',
    title: 'Mocktails',
    blurb: 'Tall, cold, house-made.',
    img: '/assets/drink-3.avif',
    alt: 'Berry mocktail over ice',
  },
  {
    key: 'food',
    title: 'From the Kitchen',
    blurb: 'Plates worth the climb.',
    img: '/assets/food-1.avif',
    alt: 'Pink spaghetti in a deep bowl',
  },
];

export const MENU: MenuItem[] = [
  { name: 'Espresso', cat: 'brew', price: 149, rating: '4.5', img: '/assets/drink-1.avif', desc: 'Short, bold, honest.' },
  { name: 'Pistachio Latte', cat: 'brew', price: 249, rating: '4.8', img: '/assets/drink-1.avif', desc: 'Nutty espresso, slow-steamed milk.' },
  { name: 'Cold Brew Tonic', cat: 'brew', price: 229, rating: '4.7', img: '/assets/drink-2.avif', desc: '18-hour brew, tonic, citrus peel.' },
  { name: 'Classic Cappuccino', cat: 'brew', price: 199, rating: '4.6', img: '/assets/drink-2.avif', desc: 'Double shot, velvet foam.' },
  { name: 'Filter Coffee', cat: 'brew', price: 169, rating: '4.6', img: '/assets/drink-2.avif', desc: 'Slow-dripped, jaggery option.' },
  { name: 'Berry Mocktail', cat: 'mocktail', price: 199, rating: '4.6', img: '/assets/drink-3.avif', desc: 'Fresh berries, mint, soda.' },
  { name: 'Virgin Mint Cooler', cat: 'mocktail', price: 179, rating: '4.5', img: '/assets/drink-3.avif', desc: 'Mint, lime, crushed ice.' },
  { name: 'Pink Spaghetti', cat: 'food', price: 279, rating: '4.9', img: '/assets/food-1.avif', desc: 'Rose sauce, basil, parmesan.' },
  { name: 'Villa Platter', cat: 'food', price: 329, rating: '4.7', img: '/assets/food-2.avif', desc: 'Sharing board, wood-fired bread.' },
  { name: 'Truffle Fries', cat: 'food', price: 189, rating: '4.5', img: '/assets/food-3.avif', desc: 'Parmesan snow, truffle oil.' },
  { name: 'Tiramisu Cup', cat: 'food', price: 169, rating: '4.8', img: '/assets/food-4.avif', desc: 'Espresso-soaked, mascarpone.' },
  { name: 'Choco Torte', cat: 'food', price: 179, rating: '4.6', img: '/assets/food-5.avif', desc: 'Dark chocolate, sea salt.' },
];

export const SIGNATURES = [
  { name: 'Pistachio Latte', cat: 'brew', price: 249, rating: '4.8', img: '/assets/drink-1.avif', desc: 'Nutty espresso, slow-steamed milk.' },
  { name: 'Cold Brew Tonic', cat: 'brew', price: 229, rating: '4.7', img: '/assets/drink-2.avif', desc: '18-hour cold brew, tonic, citrus.' },
  { name: 'Pink Spaghetti', cat: 'food', price: 279, rating: '4.9', img: '/assets/food-1.avif', desc: 'Rose sauce, basil, parmesan.' },
];

export const TESTIMONIALS = [
  { q: 'Highly aesthetic, cozy layout. Pistachio Latte is a must. Friendly staff!', n: 'Priya S.', img: '/assets/drink-1.avif' },
  { q: 'Cold Brew Tonic plus rooftop sunset, perfect evening. Best spot on VIP Road.', n: 'Rahul M.', img: '/assets/rooftop-1.avif' },
  { q: 'Pink Spaghetti lived up to the hype. Great place for long conversations.', n: 'Ayesha K.', img: '/assets/food-1.avif' },
  { q: 'Booked the rooftop for six. Staff held our table through sunset without a fuss.', n: 'Sneha D.', img: '/assets/food-2.avif' },
  { q: 'Quiet corners, warm light, honest coffee. My weekly deep-work hideout now.', n: 'Aarav P.', img: '/assets/stairs.avif' },
];

export const GALLERY = [
  { img: '/assets/rooftop-1.avif', alt: 'Rooftop deck at golden hour', span: 'col-span-2', h: 'h-52 sm:h-80' },
  { img: '/assets/drink-3.avif', alt: 'Signature berry mocktail', span: '', h: 'h-52 sm:h-80' },
  { img: '/assets/stairs.avif', alt: 'Curved stairs to the rooftop', span: '', h: 'h-44 sm:h-72' },
  { img: '/assets/kitchen.avif', alt: 'Plates leaving the Belluno kitchen', span: '', h: 'h-44 sm:h-72' },
  { img: '/assets/food-1.avif', alt: 'Pink spaghetti, the cult favourite', span: '', h: 'h-44 sm:h-72' },
  { img: '/assets/rooftop-2.avif', alt: 'Evening settle on the rooftop', span: 'col-span-3', h: 'h-52 sm:h-96' },
];
