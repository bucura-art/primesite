'use client';

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

type DeliveryInfoProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DeliveryInfo({ isOpen, onClose }: DeliveryInfoProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f2430]/60 px-4 backdrop-blur-sm">
      <div className="w-full max-w-5xl max-h-[100vh] overflow-y-auto rounded-3xl border border-[#e6d8c3] bg-[#FFFDF9] p-6 shadow-2xl md:p-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold" style={{ color: '#1F2430' }}>
            How It Works
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border text-lg font-bold transition hover:opacity-80"
            style={{ borderColor: '#D9C8A5', color: '#1F2430' }}
            aria-label="Close delivery info"
          >
            ×
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {deliverySteps.map((step) => (
            <div key={step.number} className="rounded-2xl border border-[#e7d8c1] bg-[#FFFDF9] p-6 shadow-sm">
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold text-white"
                style={{ backgroundColor: '#0000D0' }}
              >
                {step.number}
              </div>

              <h4 className="text-xl font-bold" style={{ color: '#1F2430' }}>
                {step.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-[#4D4D4D]">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: '#0000D0' }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
