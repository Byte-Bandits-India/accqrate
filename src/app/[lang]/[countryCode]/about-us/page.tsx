"use client";

import Section1 from './sections/section1';
import Section2 from './sections/section2';
import Section3 from './sections/section3';
import Section4 from './sections/section4';
import CTASection from '@/Components/CTASection';
import Section5 from './sections/section5';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <main className="flex-1 ">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <CTASection />
      </main>
    </div>
  );
}