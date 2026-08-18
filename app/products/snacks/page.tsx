'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import SmallNav from '@/app/components/SmallNav';
import LoadingShimmer from '@/app/components/LoadingShimmer';
import { snacksProducts } from '@/products-data/snacks-products';

export default function SnacksPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleOrderNow = (productId: number) => {
    router.push(`/checkout?productId=${productId}&category=snacks`);
  };

  return (
    <main style={{ backgroundColor: '#f7eddf' }} className="min-h-screen py-4 px-4 md:px-8 md:py-6">
      <SmallNav />
      <div className="max-w-7xl mx-auto pt-2 md:pt-0">
        {/* Product Grid */}
        {isLoading ? (
          <LoadingShimmer />
        ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {snacksProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-lg overflow-hidden shadow-lg"
              style={{ backgroundColor: '#FFFDF9' }}
            >
              {/* Product Image */}
              <div className="relative w-full h-70 bg-gray-200">
                <Image
                  src={product.imagePath}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-3 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm mb-1 truncate" style={{ color: '#1F2430' }}>
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold mb-2" style={{ color: '#0000D0' }}>
                    {product.price.toLocaleString()} RWF
                  </p>
                </div>

                {/* Order Now Button */}
                <button
                  onClick={() => handleOrderNow(product.id)}
                  className="w-full py-1 px-3 rounded font-semibold text-white transition-all hover:scale-105 hover:opacity-90 text-sm"
                  style={{ backgroundColor: '#0000D0' }}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>        )}      </div>
    </main>
  );
}