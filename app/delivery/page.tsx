import Link from 'next/link';

const deliverySteps = [
  {
    number: '1',
    title: 'Browse & Select',
    description: 'Explore our fresh bakery products, cakes, and snacks. Choose what you love.',
  },
  {
    number: '2',
    title: 'Place Order',
    description: 'Send your order to us via WhatsApp with product names, quantities, and delivery address.',
  },
  {
    number: '3',
    title: 'Confirm & Pay',
    description: 'We confirm your order and payment details. Pay before or upon delivery – your choice.',
  },
  {
    number: '4',
    title: 'Fresh Delivery',
    description: 'Receive your fresh baked goods delivered right to your door.',
  },
];

const paymentOptions = [
  {
    title: 'Pay Now',
    description: 'Make payment immediately after confirming your order via mobile money or bank transfer.',
  },
  {
    title: 'Pay on Delivery',
    description: 'Pay when our delivery driver arrives at your location. Cash or mobile money accepted.',
  },
];

const deliveryInfo = [
  {
    label: 'Delivery Areas',
    value: 'Kigali & Surrounding',
    detail: 'We deliver within Kigali and nearby areas',
  },
  {
    label: 'Delivery Time',
    value: 'Under 30 mins',
    detail: 'Depending on order time and location',
  },
  {
    label: 'Minimum Order',
    value: 'Starting from 2,000 RWF',
    detail: 'No maximum order limit',
  },
  {
    label: 'Delivery Fee',
    value: 'Based on Distance',
    detail: 'Calculated based on your location',
  },
];

export default function DeliveryPage() {
  return (
    <main style={{ backgroundColor: '#F7EDDF' }} className="min-h-screen px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <section className="mb-12 rounded-3xl border border-[#e6d8c3] bg-[#FFFDF9] p-6 shadow-sm md:p-10">
          <div className="text-center">
            <h1 className="text-4xl font-black md:text-5xl" style={{ color: '#1F2430' }}>
              Fresh Delivery Right to Your Door
            </h1>
            <p className="mt-4 text-lg text-[#4D4D4D]">
              Order your favorite baked goods, cakes, and snacks on WhatsApp and get them delivered fresh and hot.
            </p>
          </div>
        </section>

        {/* Delivery Process */}
        <section className="mb-12">
          <h2 className="mb-8 text-3xl font-bold" style={{ color: '#1F2430' }}>
            How It Works
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {deliverySteps.map((step) => (
              <div key={step.number} className="rounded-2xl border border-[#e7d8c1] bg-[#FFFDF9] p-6 shadow-sm">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold text-white"
                  style={{ backgroundColor: '#0000D0' }}
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#1F2430' }}>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[#4D4D4D]">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12 rounded-3xl border border-[#e6d8c3] bg-[#FFFDF9] p-6 shadow-sm md:p-10">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex-1">
              <h2 className="text-2xl font-bold" style={{ color: '#1F2430' }}>
                Ready to Order?
              </h2>
              <p className="mt-2 text-[#4D4D4D]">
                Browse our products, decide what you want, and send us your order on WhatsApp. It&apos;s quick and easy!
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-col gap-3 md:flex-row">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white transition hover:opacity-90"
                style={{ backgroundColor: '#0000D0' }}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                Choose Products
              </Link>
              <a
                href="https://wa.me/250000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white transition hover:opacity-90"
                style={{ backgroundColor: '#25D366' }}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M19.05 4.95A9.82 9.82 0 0 0 12.04 2C6.47 2 2 6.4 2 11.88c0 1.74.47 3.44 1.37 4.92L2 22l5.35-1.38A9.9 9.9 0 0 0 12.04 22c5.57 0 10.08-4.4 10.08-9.88 0-2.64-1.03-5.13-2.97-7.17ZM12.04 19.7a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.17.82.85-3.08-.2-.32a8.18 8.18 0 0 1-1.25-4.34c0-4.53 3.69-8.22 8.23-8.22a8.22 8.22 0 0 1 8.23 8.22c0 4.53-3.7 8.22-8.23 8.22Zm4.5-6.15c-.25-.13-1.47-.72-1.7-.81-.23-.09-.39-.13-.56.13-.17.25-.65.81-.8.98-.14.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.25-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.26.25-.44.08-.17.04-.33-.02-.46-.06-.13-.56-1.35-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.16 0-.42.06-.64.3-.22.24-1 .98-1 2.38 0 1.4 1.02 2.75 1.17 2.94.15.19 2.02 3.08 4.9 4.32.69.3 1.22.48 1.64.62.69.22 1.32.19 1.82.12.56-.08 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3Z" />
                </svg>
                Place Order on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Payment Options 
        <section className="mb-12">
          <h2 className="mb-8 text-3xl font-bold" style={{ color: '#1F2430' }}>
            Flexible Payment Options
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {paymentOptions.map((option) => (
              <div key={option.title} className="rounded-2xl border border-[#e7d8c1] bg-[#FFFDF9] p-6 shadow-sm">
                <div
                  className="mb-3 inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em]"
                  style={{ backgroundColor: '#ECEBF8', color: '#0000D0' }}
                >
                  {option.title === 'Pay Now' ? '💳' : '🚚'} {option.title}
                </div>
                <p className="mt-3 text-[#4D4D4D]">{option.description}</p>
              </div>
            ))}
          </div>
        </section>*/}

        {/* Delivery Info Cards */}
        <section className="mb-12">
          <h2 className="mb-8 text-3xl font-bold" style={{ color: '#1F2430' }}>
            Delivery Details
          </h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {deliveryInfo.map((item) => (
              <div key={item.label} className="rounded-2xl border border-[#e7d8c1] bg-[#FFFDF9] p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: '#0000D0' }}>
                  {item.label}
                </p>
                <h3 className="mt-3 text-xl font-bold" style={{ color: '#1F2430' }}>
                  {item.value}
                </h3>
                <p className="mt-2 text-sm text-[#4D4D4D]">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="rounded-3xl border border-[#e6d8c3] bg-[#FFFDF9] p-6 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold" style={{ color: '#1F2430' }}>
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold" style={{ color: '#1F2430' }}>
                How do I place a delivery order?
              </h3>
              <p className="mt-2 text-[#4D4D4D]">
                Click the &quot;Place Order on WhatsApp&quot; button, browse our products, select what you want, and send us your order. Include product names, quantities, and your delivery address.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold" style={{ color: '#1F2430' }}>
                What&apos;s the minimum order amount?
              </h3>
              <p className="mt-2 text-[#4D4D4D]">
                Our minimum order is 2,000 RWF. There&apos;s no maximum limit – order as much as you need!
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold" style={{ color: '#1F2430' }}>
                How long does delivery take?
              </h3>
              <p className="mt-2 text-[#4D4D4D]">
                We offer same-day or next-day delivery depending on when you place your order and your location within Kigali.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold" style={{ color: '#1F2430' }}>
                Can I request a specific delivery time?
              </h3>
              <p className="mt-2 text-[#4D4D4D]">
                Yes! Mention your preferred delivery time in your WhatsApp order, and we&apos;ll do our best to accommodate your request.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold" style={{ color: '#1F2430' }}>
                What if I need to cancel or modify my order?
              </h3>
              <p className="mt-2 text-[#4D4D4D]">
                Contact us immediately on WhatsApp as soon as possible. We can modify or cancel orders before we start preparing them.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
