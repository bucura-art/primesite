'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SearchProduct from './SearchProduct';

export default function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/products/bakery', label: 'Bakery' },
    { href: '/products/cakes', label: 'Pastry' },
    { href: '/products/snacks', label: 'Snacks' },
    { href: '/delivery', label: 'Delivery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md" style={{ backgroundColor: '#FFFDF9', borderBottom: '1px solid #E8E2D9' }}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-2 md:gap-4">
        {/* Logo/Title - Left */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Rogerz Baked home">
          <div className="relative flex items-center justify-center overflow-hidden shadow-sm">
            <Image
              src="/rb-logo.png"
              alt="Rogerz Baked logo"
              width={40}
              height={40}
              className="object-fill"
              priority
            />
          </div>
        </Link>

        {/* Search Bar - Center */}
        <div className="flex-1 min-w-0 md:max-w-xs">
          <SearchProduct />
        </div>

        {/* Desktop Navigation - Right */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative font-medium transition-colors hover:opacity-70"
                style={{ color: isActive ? '#0000D0' : '#1F2430' }}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="relative inline-flex pb-1">
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-200"
                    style={{
                      width: isActive ? '100%' : '0%',
                      backgroundColor: '#0000D0',
                    }}
                  />
                </span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer flex-shrink-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5" style={{ backgroundColor: '#1F2430' }}></span>
          <span className="w-6 h-0.5" style={{ backgroundColor: '#1F2430' }}></span>
          <span className="w-6 h-0.5" style={{ backgroundColor: '#1F2430' }}></span>
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 md:hidden"
            style={{ backgroundColor: 'rgba(31, 36, 48, 0.3)', zIndex: 39 }}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sidebar Menu */}
          <div
            className="fixed top-0 right-0 h-screen w-64 shadow-lg md:hidden flex flex-col pt-20 px-6 gap-6"
            style={{
              background: 'linear-gradient(180deg, #FFFDF9 0%, #F7E8C6 35%, #D9A65F 100%)',
              zIndex: 40,
            }}
          >
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-bold transition-colors hover:opacity-70"
                style={{
                  color: isActive ? '#0000D0' : '#1F2430',
                  borderBottom: isActive ? '2px solid #0000D0' : '2px solid transparent',
                  paddingBottom: '4px',
                  width: 'fit-content',
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 flex items-center justify-center rounded-full border font-bold leading-none"
            onClick={() => setIsMenuOpen(false)}
            style={{
              color: '#1F2430',
              borderColor: '#D9C8A5',
              backgroundColor: '#FFFDF9',
              width: '2.5rem',
              height: '2.5rem',
              fontSize: '1.75rem',
              lineHeight: 1,
              padding: 0,
            }}
            aria-label="Close menu"
          >
            ×
          </button>
          </div>
        </>
      )}
    </nav>
  );
}