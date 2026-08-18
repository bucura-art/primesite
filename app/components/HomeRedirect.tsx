'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

export default function HomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/products/bakery');
    }, 1800);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main
      className="flex min-h-screen items-center justify-center px-6"
      style={{ backgroundColor: '#F9F5EE' }}
    >
      <LoadingSpinner title="Welcome" message="Getting ready..." />
    </main>
  );
}
