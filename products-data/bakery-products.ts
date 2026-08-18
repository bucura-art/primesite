export interface BakeryProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imagePath: string;
}

export const bakeryProducts: BakeryProduct[] = [
  {
    id: 1,
    name: 'Sweet Bread (Pain Carré)',
    description: 'Delicious sweet bread with a soft, fluffy crumb and a tender crust. Perfect for breakfast or snacks.',
    price: 2000,
    imagePath: '/products-images/bakery/sweet-bread.jpg',
  },
  {
    id: 2,
    name: 'Sweet Sandwich Bread',
    description: 'Lightly sweetened sandwich bread that\'s perfect for making delightful sandwiches with your favorite fillings.',
    price: 2000,
    imagePath: '/products-images/bakery/sweet-sandwich-bread.jpg',
  },
  {
    id: 3,
    name: 'Sweet Round Bread',
    description: 'Soft, round-shaped sweet bread with a golden crust and sweet flavor. Great for sharing.',
    price: 2000,
    imagePath: '/products-images/bakery/sweet-round-bread.jpg',
  },
  {
    id: 4,
    name: 'Pain Français (French Bread)',
    description: 'Authentic French bread with a crispy exterior and a light, airy interior. A classic favorite.',
    price: 3250,
    imagePath: '/products-images/bakery/pain-francais.jpg',
  },
  {
    id: 5,
    name: 'Brown Bread',
    description: 'Hearty brown bread made with whole wheat flour. Nutritious and delicious for any meal.',
    price: 2000,
    imagePath: '/products-images/bakery/brown-bread.jpg',
  },
  {
    id: 6,
    name: 'Salt Bread',
    description: 'Savory bread with a perfect salt balance. Ideal for soups, stews, or enjoying on its own.',
    price: 2500,
    imagePath: '/products-images/bakery/salt-bread.jpg',
  },
  {
    id: 7,
    name: 'White Baguette',
    description: 'Classic French-style white baguette with a crispy crust and soft, pillowy center.',
    price: 3500,
    imagePath: '/products-images/bakery/white-baguette.jpg',
  },
  {
    id: 8,
    name: 'Farmer\'s Bread',
    description: 'Rustic farmhouse bread with a hearty flavor and wholesome ingredients.',
    price: 3750,
    imagePath: '/products-images/bakery/farmers-bread.jpg',
  },
  {
    id: 9,
    name: 'Cinnamon Sandwich Bread',
    description: 'Sweet sandwich bread infused with cinnamon spice. Perfect for sweet or savory sandwiches.',
    price: 2000,
    imagePath: '/products-images/bakery/cinnamon-sandwich-bread.jpg',
  },
  {
    id: 10,
    name: 'Brioche Bread',
    description: 'Rich and buttery brioche bread with a golden crust. Luxurious and perfect for special occasions.',
    price: 4000,
    imagePath: '/products-images/bakery/brioche-bread.jpg',
  },
];