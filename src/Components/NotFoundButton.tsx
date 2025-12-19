'use client';
import React, { useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useCountry, countries as allCountries } from '@/contexts/CountryContext';

export default function NotFoundButton() {
  const pathname = usePathname() || '';
  const router = useRouter();
  const { selectedCountry, selectedLanguage } = useCountry();

  // Find language and country from the path (more tolerant)
  const segments = pathname.split('/').filter(Boolean);

  const langFromPath = segments.find((s) => /^[a-z]{2}$/i.test(s)) || undefined;

  const countryFromPath = segments.find((s) => {
    if (!s) return false;
    const lowered = s.toLowerCase();
    return allCountries.some((c) => c.code.toLowerCase() === lowered || c.code === s.toUpperCase());
  });

  const langCode = langFromPath || selectedLanguage?.code || 'en';
  const countryCode = (countryFromPath || selectedCountry?.code?.toLowerCase() || 'sa').toLowerCase();

  const href = `/${langCode}/${countryCode}`;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center px-6 py-3 bg-[#194BED] text-white rounded-md hover:bg-[#0f3fbf] transition"
    >
      Back to Homepage
    </button>
  );
}
