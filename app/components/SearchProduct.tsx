'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { bakeryProducts } from '@/products-data/bakery-products';
import { cakeProducts } from '@/products-data/cake-products';
import { snacksProducts } from '@/products-data/snacks-products';

type Product = {
  id: number;
  name: string;
  price: number;
  category: 'bakery' | 'cakes' | 'snacks';
};

export default function SearchProduct() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const normalizedQuery = searchQuery.trim();

  const searchResults = useMemo(() => {
    const allProducts: Product[] = [
      ...bakeryProducts.map((p) => ({ ...p, category: 'bakery' as const })),
      ...cakeProducts.map((p) => ({ ...p, category: 'cakes' as const })),
      ...snacksProducts.map((p) => ({ ...p, category: 'snacks' as const })),
    ];

    if (!normalizedQuery) {
      return [] as Product[];
    }

    const query = normalizedQuery.toLowerCase();

    return allProducts.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
  }, [normalizedQuery]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProductClick = (product: Product) => {
    router.push(`/checkout?productId=${product.id}&category=${product.category}`);
    setSearchQuery('');
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className="relative w-full sm:max-w-md">
      {/* Search Input */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => {
          const nextValue = e.target.value;
          setSearchQuery(nextValue);
          setIsOpen(nextValue.trim() !== '');
        }}
        onFocus={() => normalizedQuery !== '' && setIsOpen(true)}
        placeholder="Search here..."
        className="w-full px-2 py-1.5 rounded-lg border-2 text-base sm:text-base"
        style={{
          borderColor: searchQuery ? '#0000D0' : '#E8E2D9',
          color: '#1F2430',
        }}
      />

      {/* Search Results Dropdown */}
      {isOpen && searchResults.length > 0 && (
        <div
          className="absolute top-full left-0 right-0 mt-2 rounded-lg shadow-xl border z-50 max-h-80 overflow-y-auto"
          style={{
            backgroundColor: '#FFFDF9',
            borderColor: '#E8E2D9',
          }}
        >
          {searchResults.map((product) => (
            <button
              key={`${product.category}-${product.id}`}
              onClick={() => handleProductClick(product)}
              className="w-full px-4 py-3 text-left border-b transition-colors hover:opacity-80 last:border-b-0"
              style={{
                borderBottomColor: '#E8E2D9',
                backgroundColor: '#FFFDF9',
              }}
            >
              <div className="flex justify-between items-start gap-2">
                <div className="flex-1">
                  <p className="font-semibold text-sm" style={{ color: '#1F2430' }}>
                    {product.name}
                  </p>
                  <p
                    className="text-xs mt-1 capitalize"
                    style={{ color: '#999' }}
                  >
                    {product.category}
                  </p>
                </div>
                <p className="font-bold text-sm whitespace-nowrap" style={{ color: '#0000D0' }}>
                  {product.price.toLocaleString()} RWF
                </p>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* No Results Message */}
      {isOpen && searchQuery.trim() !== '' && searchResults.length === 0 && (
        <div
          className="absolute top-full left-0 right-0 mt-2 rounded-lg shadow-xl border p-4 text-center"
          style={{
            backgroundColor: '#FFFDF9',
            borderColor: '#E8E2D9',
            color: '#999',
          }}
        >
          No products found
        </div>
      )}
    </div>
  );
}
