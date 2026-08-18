export interface SnackProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imagePath: string;
}

export const snacksProducts: SnackProduct[] = [
  {
    id: 1,
    name: 'Beef Samosa',
    description: 'Crispy pastry filled with seasoned beef and aromatic spices, ideal for a quick and hearty snack.',
    price: 3000,
    imagePath: '/products-images/snacks/beef-samosa.jpg',
  },
  {
    id: 2,
    name: 'Croquette',
    description: 'Golden, crunchy croquette made with rich filling and a comforting, savory taste.',
    price: 2800,
    imagePath: '/products-images/snacks/croquette.jpg',
  },
  {
    id: 3,
    name: 'Meat Balls',
    description: 'Tender meat balls with a juicy center and savory seasoning, great for sharing or solo snacking.',
    price: 3500,
    imagePath: '/products-images/snacks/meat-balls.jpg',
  },
  {
    id: 4,
    name: 'Big Donuts',
    description: 'Large, soft donuts with a sweet finish and a fluffy texture that makes every bite irresistible.',
    price: 3200,
    imagePath: '/products-images/snacks/big-donuts.jpg',
  },
  {
    id: 5,
    name: 'Rolex',
    description: 'A popular savory roll filled with fresh ingredients and a satisfying taste for a quick meal or snack.',
    price: 4000,
    imagePath: '/products-images/snacks/rolex.jpg',
  },
  {
    id: 6,
    name: 'Omelette',
    description: 'A fluffy, protein-rich omelette with a comforting savory flavor, perfect for breakfast or anytime hunger.',
    price: 4500,
    imagePath: '/products-images/snacks/omelette.jpg',
  },
  {
    id: 7,
    name: 'Kebab',
    description: 'Juicy, well-seasoned kebab served with a flavorful profile and satisfying bite.',
    price: 5000,
    imagePath: '/products-images/snacks/kebab.jpg',
  },
  {
    id: 8,
    name: 'Pancakes',
    description: 'Soft, warm pancakes with a comforting flavor, ideal for breakfast, dessert, or a sweet snack.',
    price: 3500,
    imagePath: '/products-images/snacks/pancakes.jpg',
  },
];
