'use client';

export default function SiteMarque() {
  const now = new Date();
  const hour = now.getHours();
  const isOpen = hour >= 6 && hour <= 23;

  const status = isOpen ? 'We are open' : 'We are closed';
  const accent = isOpen ? '#F35589' : '#3B2C6D';
  const detail = isOpen ? 'Order now' : 'Open from 6:00 AM to 11:59 PM';

  const marqueeItems = [status, '•', detail,'•', status, '•', detail,'•', status, '•', detail,'•', ];

  return (
    <div
      className="relative overflow-hidden border-b border-white/20 text-sm font-semibold uppercase tracking-[0.18em] text-white"
      style={{ backgroundColor: accent }}
    >
      <div className="flex min-w-max whitespace-nowrap" style={{ animation: 'marquee 18s linear infinite' }}>
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span key={`${item}-${index}`} className="px-4 py-2">
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
