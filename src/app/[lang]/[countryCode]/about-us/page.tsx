"use client";

import ZatcaSection from '@/Components/ZatcaSection';
import Section1 from './sections/section1';
import Section2 from './sections/section2';
import Section3 from './sections/section3';
import Section4 from './sections/section4';
import Section4SA from './sections/Section4SA';
import Section5 from './sections/section5';
import { useParams } from 'next/navigation';

export default function About() {
  const params = useParams();
  const countryCode = (params?.countryCode as string)?.toLowerCase() || "be";

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <main className="flex-1 ">
        <Section1 />
        <Section2 />
        <Section3 />
        {countryCode === 'sa' ? <Section4SA /> : <Section4 />}
        <Section5 />
        <ZatcaSection />
      </main>
    </div>
  );
}