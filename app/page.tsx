import type { Metadata } from 'next';
import HomeRedirect from './components/HomeRedirect';

export const metadata: Metadata = {
  title: 'I-loaves | Fresh Bakery, Cakes & Snacks',
  description:
    'Fresh bakery products, pastries, cakes, and snacks in Kigali. Explore artisan breads, celebration cakes, and delicious daily treats from I-loaves.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'I-loaves | Fresh Bakery, Cakes & Snacks',
    description:
      'Fresh bakery products, pastries, cakes, and snacks in Kigali. Explore artisan breads, celebration cakes, and delicious daily treats from I-loaves.',
    url: '/',
    type: 'website',
  },
};

export default function Home() {
  return <HomeRedirect />;
}