import WhatsAppFab from '../components/WhatsAppFab';

const businessInfo = [
  {
    label: 'Phone Number 1',
    value: '+250 780 896 008',
    detail: 'For immediate assistance',
  },
  {
    label: 'Phone Number 2',
    value: '+250 780 896 008',
    detail: 'Support and orders',
  },
  {
    label: 'Email Address',
    value: 'hello@rogerzbaked.com',
    detail: 'We reply promptly',
  },
  {
    label: 'Physical Address',
    value: 'Rubavu, Rwanda',
    detail: 'Visit our bakery shop',
  },
];

const businessHours = [
  { day: 'Monday - Friday', time: '8:00 AM - 8:00 PM' },
  { day: 'Saturday', time: '9:00 AM - 8:00 PM' },
  { day: 'Sunday', time: '10:00 AM - 4:00 PM' },
];

const socials = [
  { name: 'Instagram', href: '#' },
  { name: 'TikTok', href: '#' },
  { name: 'Facebook', href: '#' },
];

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: '#F7EDDF' }} className="min-h-screen px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <section className="mb-10 rounded-3xl border border-[#e6d8c3] bg-[#FFFDF9] p-6 shadow-sm md:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="text-4xl font-black md:text-2xl" style={{ color: '#1F2430' }}>
                Let’s bring joy to your table.
              </h1>
            </div>

            <div className="space-y-4">
              {/*<div className="rounded-2xl border border-[#e7d8c1] bg-[#f8f2e8] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: '#0000D0' }}>
                  Custom Order
                </p>
                <h2 className="mt-3 text-2xl font-bold" style={{ color: '#1F2430' }}>
                  Birthday, wedding & event cakes
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#4D4D4D]">
                  Tell us your idea and we’ll help craft the perfect cake for your celebration.
                </p>
              </div>*/}

              {/*<div className="rounded-2xl border border-[#e7d8c1] bg-[#f8f2e8] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: '#0000D0' }}>
                  Request Delivery
                </p>
                <h2 className="mt-3 text-2xl font-bold" style={{ color: '#1F2430' }}>
                  Fresh bread & snacks delivered to you
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#4D4D4D]">
                  Order on WhatsApp and we’ll handle your delivery request quickly and efficiently.
                </p>
              </div>*/}

              <div className="mt-2 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/250780896008"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                    <path d="M19.05 4.95A9.82 9.82 0 0 0 12.04 2C6.47 2 2 6.4 2 11.88c0 1.74.47 3.44 1.37 4.92L2 22l5.35-1.38A9.9 9.9 0 0 0 12.04 22c5.57 0 10.08-4.4 10.08-9.88 0-2.64-1.03-5.13-2.97-7.17ZM12.04 19.7a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.17.82.85-3.08-.2-.32a8.18 8.18 0 0 1-1.25-4.34c0-4.53 3.69-8.22 8.23-8.22a8.22 8.22 0 0 1 8.23 8.22c0 4.53-3.7 8.22-8.23 8.22Zm4.5-6.15c-.25-.13-1.47-.72-1.7-.81-.23-.09-.39-.13-.56.13-.17.25-.65.81-.8.98-.14.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.25-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.26.25-.44.08-.17.04-.33-.02-.46-.06-.13-.56-1.35-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.16 0-.42.06-.64.3-.22.24-1 .98-1 2.38 0 1.4 1.02 2.75 1.17 2.94.15.19 2.02 3.08 4.9 4.32.69.3 1.22.48 1.64.62.69.22 1.32.19 1.82.12.56-.08 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3Z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="tel:+250780896008"
                  className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition hover:bg-[#f6f1e8]"
                  style={{ borderColor: '#D9C8A5', color: '#1F2430' }}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                    <path d="M6.6 10.8c1.7 3.4 4.5 6.2 7.9 7.9l2.6-2.6c.3-.3.8-.4 1.2-.3 1.3.4 2.8.7 4.3.7.7 0 1.2.5 1.2 1.2V21c0 .7-.5 1.2-1.2 1.2C10.8 22.2 1.8 13.2 1.8 3c0-.7.5-1.2 1.2-1.2H6c.7 0 1.2.5 1.2 1.2 0 1.5.3 3 .7 4.3.1.4 0 .9-.3 1.2l-2.6 2.6Z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {businessInfo.map((item) => (
            <div key={item.label} className="rounded-2xl border border-[#e7d8c1] bg-[#FFFDF9] p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: '#0000D0' }}>
                {item.label}
              </p>
              <h2 className="mt-3 text-xl font-bold" style={{ color: '#1F2430' }}>
                {item.value}
              </h2>
              <p className="mt-2 text-sm text-[#4D4D4D]">{item.detail}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_1.35fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7d8c1] bg-[#FFFDF9] p-6 shadow-sm">
              <h3 className="text-2xl font-bold" style={{ color: '#1F2430' }}>
                Business Hours
              </h3>
              <div className="mt-5 space-y-3">
                {businessHours.map(({ day, time }) => (
                  <div key={day} className="flex items-center justify-between border-b border-[#f0e6d7] pb-2 last:border-b-0 last:pb-0">
                    <span className="font-medium text-[#1F2430]">{day}</span>
                    <span className="text-sm text-[#4D4D4D]">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#e7d8c1] bg-[#FFFDF9] p-6 shadow-sm">
              <h3 className="text-2xl font-bold" style={{ color: '#1F2430' }}>
                Visit Us
              </h3>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=-1.9700,30.1044"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                  style={{ backgroundColor: '#0000D0' }}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                    <path d="M12 2a7 7 0 0 1 7 7c0 5.2-7 13-7 13S5 14.2 5 9a7 7 0 0 1 7-7Zm0 9.5A2.5 2.5 0 1 0 12 6a2.5 2.5 0 0 0 0 5.5Z" />
                  </svg>
                  Get Directions
                </a>
              </div>

              {/*<div className="mt-5 overflow-hidden rounded-2xl border border-[#e7d8c1] bg-[#f7eddf]">
                <div className="flex h-56 items-center justify-center bg-[radial-gradient(circle_at_center,_#f4dfb8_0%,_#ebd7af_35%,_#e5dcc9_100%)] text-center text-sm font-medium text-[#1F2430]">
                  Google Maps
                </div>
              </div>*/}
            </div>
          </div>

          {/*<div className="rounded-3xl border border-[#e7d8c1] bg-[#FFFDF9] p-6 shadow-sm md:p-8">
            <h3 className="text-2xl font-bold" style={{ color: '#1F2430' }}>
              Send a Message
            </h3>
            <p className="mt-2 text-sm text-[#4D4D4D]">
              Fill in the form below and we’ll get back to you as soon as possible.
            </p>

            <form className="mt-6 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#1F2430]">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[#e7d8c1] bg-[#fffdf9] px-4 py-3 outline-none transition focus:border-[#0000D0]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#1F2430]">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[#e7d8c1] bg-[#fffdf9] px-4 py-3 outline-none transition focus:border-[#0000D0]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#1F2430]">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full rounded-xl border border-[#e7d8c1] bg-[#fffdf9] px-4 py-3 outline-none transition focus:border-[#0000D0]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#1F2430]">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your order, question, or special request"
                  className="w-full rounded-xl border border-[#e7d8c1] bg-[#fffdf9] px-4 py-3 outline-none transition focus:border-[#0000D0]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl px-5 py-3 text-base font-semibold text-white transition hover:opacity-90"
                style={{ backgroundColor: '#0000D0' }}
              >
                Send Message
              </button>
            </form>
          </div>*/}
        </section>

        <section className="mt-10 rounded-3xl border border-[#e7d8c1] bg-[#FFFDF9] p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: '#0000D0' }}>
                Stay Connected
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="rounded-full border px-4 py-2 text-sm font-semibold transition hover:bg-[#f6f1e8]"
                  style={{ borderColor: '#D9C8A5', color: '#1F2430' }}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>

      <WhatsAppFab />
    </main>
  );
}
