import type { Metadata } from 'next';
import HomeRedirect from './components/HomeRedirect';

export const metadata: Metadata = {
  title: 'Rogerz Baked | Fresh Bakery, Cakes & Snacks',
  description:
    'Fresh bakery products, pastries, cakes, and snacks in Kigali. Explore artisan breads, celebration cakes, and delicious daily treats from Rogerz Baked.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Rogerz Baked | Fresh Bakery, Cakes & Snacks',
    description:
      'Fresh bakery products, pastries, cakes, and snacks in Kigali. Explore artisan breads, celebration cakes, and delicious daily treats from Rogerz Baked.',
    url: '/',
    type: 'website',
  },
};

export default function Home() {
  return <HomeRedirect />;
}