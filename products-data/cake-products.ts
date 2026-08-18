export interface CakeProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imagePath: string;
}

export const cakeProducts: CakeProduct[] = [
  {
    id: 1,
    name: 'Wedding Cake',
    description: 'Elegant and celebratory wedding cake with a soft, moist crumb and rich flavor designed for unforgettable occasions.',
    price: 18000,
    imagePath: '/products-images/cakes/wedding-cake.jpg',
  },
  {
    id: 2,
    name: 'Celebration Cake',
    description: 'Classic celebration cake with a balanced sweetness and smooth texture, perfect for special gatherings and family events.',
    price: 16000,
    imagePath: '/products-images/cakes/celebration-cake.jpg',
  },
  {
    id: 3,
    name: 'Cake Slices (All Types)',
    description: 'Freshly baked cake slices in assorted flavors, ideal for quick treats and shared dessert moments.',
    price: 5500,
    imagePath: '/products-images/cakes/cake-slices.jpg',
  },
  {
    id: 4,
    name: 'Tangerine Cake',
    description: 'Citrus-inspired cake with a bright, refreshing flavor and tender crumb that brings a zesty finish to every bite.',
    price: 7000,
    imagePath: '/products-images/cakes/tangerine-cake.jpg',
  },
  {
    id: 5,
    name: 'Lemon Cake',
    description: 'Light and tangy lemon cake with a soft texture and a clean, refreshing taste that is both simple and delicious.',
    price: 7000,
    imagePath: '/products-images/cakes/lemon-cake.jpg',
  },
  {
    id: 6,
    name: 'Passion Fruit Cake',
    description: 'A tropical-inspired cake bursting with passion fruit flavor, rich aroma, and a perfectly moist texture.',
    price: 7500,
    imagePath: '/products-images/cakes/passion-fruit-cake.jpg',
  },
  {
    id: 7,
    name: 'Muffin Cake',
    description: 'Soft, comforting muffin cake with a golden finish and a sweet, satisfying taste for everyday indulgence.',
    price: 4000,
    imagePath: '/products-images/cakes/muffin-cake.jpg',
  },
  {
    id: 9,
    name: 'Croissants (All Types)',
    description: 'Buttery, flaky croissants made fresh daily, available in a range of delicious varieties for every craving.',
    price: 3500,
    imagePath: '/products-images/cakes/croissants.jpg',
  },
  {
    id: 10,
    name: 'Chocolate Croissant',
    description: 'Golden, flaky pastry filled with rich chocolate for a deeply satisfying treat at any time of day.',
    price: 4000,
    imagePath: '/products-images/cakes/chocolate-croissants.jpg',
  },
  {
    id: 11,
    name: 'Cupcakes',
    description: 'Individually portioned cupcakes with a soft crumb and a sweet finish, perfect for parties and family snacking.',
    price: 3000,
    imagePath: '/products-images/cakes/cupcakes.jpg',
  },
  {
    id: 12,
    name: 'Vanilla Cake',
    description: 'Classic vanilla cake with a smooth taste and soft, fluffy texture that remains a timeless favorite.',
    price: 8000,
    imagePath: '/products-images/cakes/vanilla-cake.jpg',
  },
  {
    id: 13,
    name: 'Marble Cake',
    description: 'Beautifully marbled cake with a rich blend of vanilla and chocolate flavors in a perfectly moist crumb.',
    price: 8500,
    imagePath: '/products-images/cakes/marble-cake.jpg',
  },
];
