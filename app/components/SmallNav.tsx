'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Bakery', href: '/products/bakery' },
  { label: 'Cakes', href: '/products/cakes' },
  { label: 'Snacks', href: '/products/snacks' },
];

export default function SmallNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden px-4 pt-4">
      <div
        className="mx-auto flex max-w-md items-center gap-2 overflow-x-auto rounded-full border border-[#d8c7a5] bg-[#f7eddf] p-1.5 shadow-sm"
        style={{ scrollbarWidth: 'none' }}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              className={[
                'min-w-[110px] flex-1 rounded-full px-3 py-2 text-center text-sm font-semibold transition-all duration-200',
                isActive
                  ? 'bg-[#0000D0] text-white shadow-md shadow-blue-200'
                  : 'bg-white/80 text-[#1F2430] hover:bg-[#fffdf9]',
              ].join(' ')}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
