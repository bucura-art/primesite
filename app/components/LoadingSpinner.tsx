'use client';

import Image from 'next/image';

interface LoadingSpinnerProps {
  title?: string;
  message?: string;
  size?: number;
  className?: string;
}

export default function LoadingSpinner({
  title = 'Welcome',
  message = 'Getting ready...',
  size = 120,
  className = '',
}: LoadingSpinnerProps) {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <div className="mb-6 flex items-center justify-center" style={{ width: size, height: size }}>
        <Image
          src="/spinner.png"
          alt="Loading spinner"
          width={size}
          height={size}
          priority
          className="animate-spin"
        />
      </div>

      {title && (
        <h1 className="text-5xl font-black tracking-tight sm:text-7xl" style={{ color: '#0000D0' }}>
          {title}
        </h1>
      )}

      {message && (
        <p className="mt-4 text-base font-medium sm:text-lg" style={{ color: '#1F2430' }}>
          {message}
        </p>
      )}
    </div>
  );
}
