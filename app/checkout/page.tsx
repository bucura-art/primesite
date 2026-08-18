'use client';

import { Suspense, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { bakeryProducts } from '@/products-data/bakery-products';
import { cakeProducts } from '@/products-data/cake-products';
import { snacksProducts } from '@/products-data/snacks-products';
import DeliveryInfo from '../components/DeliveryInfo';

type ProductItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  imagePath: string;
};

function CheckoutPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');
  const category = searchParams.get('category');
  const resolvedCategory = category === 'cakes' || category === 'snacks' || category === 'bakery' ? category : 'bakery';

  const [quantity, setQuantity] = useState(1);
  const [place, setPlace] = useState('');
  const [isDeliveryInfoOpen, setIsDeliveryInfoOpen] = useState(false);

  const productCatalogs: Record<string, ProductItem[]> = {
    bakery: bakeryProducts,
    cakes: cakeProducts,
    snacks: snacksProducts,
  };

  const product = productCatalogs[resolvedCategory].find((p) => p.id === Number(productId));

  if (!product) {
    return (
      <main style={{ backgroundColor: '#f7eddf' }} className="min-h-screen py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg" style={{ color: '#1F2430' }}>
            Product not found
          </p>
        </div>
      </main>
    );
  }

  const totalPrice = product.price * quantity;

  const handlePlaceOrder = () => {
    if (!place.trim()) {
      alert('Please enter your delivery location');
      return;
    }

    const phoneNumber = '250780896008';
    const message = `Hi, I'd like to order:\n\nProduct: ${product.name}\nQuantity: ${quantity}\nLocation: ${place}\nTotal: ${totalPrice.toLocaleString()} RWF\n\nThank you!`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="bg-[#f7eddf] min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex flex-row items-center gap-2 md:gap-3">
          <button
            onClick={() => router.push(`/products/${resolvedCategory}`)}
            className="px-4 py-2 rounded font-semibold text-white text-sm md:text-base transition-all hover:opacity-90 whitespace-nowrap"
            style={{ backgroundColor: '#0000D0' }}
          >
            &larr; Back to {resolvedCategory.charAt(0).toUpperCase()}{resolvedCategory.slice(1)}
          </button>

          <button
            type="button"
            onClick={() => setIsDeliveryInfoOpen(true)}
            className="px-4 py-2 rounded font-semibold text-sm md:text-base transition-all hover:opacity-90"
            style={{ backgroundColor: '#FFFDF9', color: '#1F2430', border: '1px solid #D9C8A5' }}
          >
            How It Works
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Product Card */}
          <div
            className="rounded-lg overflow-hidden shadow-lg"
            style={{ backgroundColor: '#FFFDF9' }}
          >
            {/* Product Image */}
            <div className="relative w-full h-80 bg-gray-200">
              <Image
                src={product.imagePath}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3" style={{ color: '#1F2430' }}>
                {product.name}
              </h2>
              <p className="text-base" style={{ color: '#1F2430' }}>
                {product.description}
              </p>
            </div>
          </div>

          {/* Right: Order Form */}
          <div
            className="rounded-lg overflow-hidden shadow-lg p-6"
            style={{ backgroundColor: '#FFFDF9' }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#1F2430' }}>
              Place Your Order
            </h3>

            {/* Price and Quantity Section */}
            <div className="mb-6 pb-6" style={{ borderBottom: '1px solid #E8E2D9' }}>
              <div className="grid grid-cols-2 gap-4">
                {/* Price */}
                <div>
                  <p className="text-sm mb-2" style={{ color: '#1F2430' }}>
                    Price per unit
                  </p>
                  <p className="text-lg font-bold" style={{ color: '#0000D0' }}>
                    {product.price.toLocaleString()} RWF
                  </p>
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1F2430' }}>
                    Quantity
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-2 py-1 rounded font-semibold text-white text-sm"
                      style={{ backgroundColor: '#0000D0' }}
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                      className="w-12 text-center border-2 rounded p-1 font-semibold text-sm"
                      style={{ borderColor: '#0000D0', color: '#1F2430' }}
                      min="1"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-2 py-1 rounded font-semibold text-white text-sm"
                      style={{ backgroundColor: '#0000D0' }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="mb-6 pb-6" style={{ borderBottom: '1px solid #E8E2D9' }}>
              <label className="block text-sm font-semibold mb-3" style={{ color: '#1F2430' }}>
                Delivery Location
              </label>
              <input
                type="text"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="Enter your delivery address"
                className="w-full p-3 border-2 rounded"
                style={{ borderColor: '#E8E2D9', color: '#1F2430' }}
              />
            </div>

            {/* Total Section */}
            <div className="mb-6 pb-6" style={{ borderBottom: '1px solid #E8E2D9' }}>
              <p className="text-sm mb-2" style={{ color: '#1F2430' }}>
                Total Amount
              </p>
              <p className="text-3xl font-bold" style={{ color: '#0000D0' }}>
                {totalPrice.toLocaleString()} RWF
              </p>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              className="w-full py-3 px-4 rounded font-bold text-white text-lg transition-all hover:scale-105 hover:opacity-90 flex items-center justify-center gap-2"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 flex-shrink-0 fill-current">
                <path d="M19.05 4.95A9.82 9.82 0 0 0 12.04 2C6.47 2 2 6.4 2 11.88c0 1.74.47 3.44 1.37 4.92L2 22l5.35-1.38A9.9 9.9 0 0 0 12.04 22c5.57 0 10.08-4.4 10.08-9.88 0-2.64-1.03-5.13-2.97-7.17ZM12.04 19.7a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.17.82.85-3.08-.2-.32a8.18 8.18 0 0 1-1.25-4.34c0-4.53 3.69-8.22 8.23-8.22a8.22 8.22 0 0 1 8.23 8.22c0 4.53-3.7 8.22-8.23 8.22Zm4.5-6.15c-.25-.13-1.47-.72-1.7-.81-.23-.09-.39-.13-.56.13-.17.25-.65.81-.8.98-.14.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.25-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.26.25-.44.08-.17.04-.33-.02-.46-.06-.13-.56-1.35-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.16 0-.42.06-.64.3-.22.24-1 .98-1 2.38 0 1.4 1.02 2.75 1.17 2.94.15.19 2.02 3.08 4.9 4.32.69.3 1.22.48 1.64.62.69.22 1.32.19 1.82.12.56-.08 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3Z" />
              </svg>
              <span>Place Order on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      <DeliveryInfo isOpen={isDeliveryInfoOpen} onClose={() => setIsDeliveryInfoOpen(false)} />
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f7eddf]" />}>
      <CheckoutPageContent />
    </Suspense>
  );
}
