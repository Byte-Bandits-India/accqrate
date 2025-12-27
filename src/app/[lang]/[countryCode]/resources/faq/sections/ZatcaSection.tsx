"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import AssetPath from "@/AssetPath/AssetPath";
import T from "@/Components/T";
import CTAButton from "@/Components/CTAButton";
// ✅ Dynamically import ContactModal — prevents RSC static flag errors
const ContactModal = dynamic(() => import("@/Components/ContactModal").then(mod => mod.ContactModal), {
  ssr: false, // Ensures it renders only on the client
});

export default function ZatcaSection() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Generate consistent floating particles
  const generateParticles = () => {
    if (!isClient) {
      // Return empty array or static particles for SSR
      return Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        style: {
          left: `${(i * 4) % 100}%`,
          top: `${(i * 3.84) % 100}%`,
          animationDelay: `${(i * 0.2) % 5}s`,
          animationDuration: `${4 + (i * 0.12) % 3}s`,
          width: `${2 + (i % 3)}px`,
          height: `${2 + (i % 3)}px`,
          background: `radial-gradient(circle, 
            rgba(255,255,255,0.8) 0%, 
            rgba(255,255,255,0.4) 30%, 
            rgba(255,255,255,0.2) 70%, 
            transparent 100%)`,
          boxShadow: `0 0 ${8 + (i % 8)}px rgba(255,255,255,0.6)`,
          filter: `blur(${(i * 0.02) % 0.5}px)`
        }
      }));
    }

    // Client-side: use Math.random()
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${4 + Math.random() * 3}s`,
        width: `${2 + Math.random() * 3}px`,
        height: `${2 + Math.random() * 3}px`,
        background: `radial-gradient(circle, 
          rgba(255,255,255,0.8) 0%, 
          rgba(255,255,255,0.4) 30%, 
          rgba(255,255,255,0.2) 70%, 
          transparent 100%)`,
        boxShadow: `0 0 ${8 + Math.random() * 8}px rgba(255,255,255,0.6)`,
        filter: `blur(${Math.random() * 0.5}px)`
      }
    }));
  };

  const particles = generateParticles();

  return (
    <section
      className="w-full bg-gradient-to-r from-[#242087] to-[#1A0C48] text-white relative py-6 md:py-8"
      data-aos="fade-up"
    >
      <div
        className="
          max-w-[1170px]
          mx-auto
          lg:h-[370px]
          grid
          grid-cols-1
          md:grid-cols-[auto_auto_auto]
          items-center
          justify-between
          gap-y-10
          px-6 md:px-8 xl:px-0
        "
      >
        {/* COLUMN 1 — LEFT CONTENT */}
        <div className="z-20 text-left order-2 md:order-1">
          <h2 className="text-fluid-body xl:text-[24px] font-bold mb-6 leading-tight max-w-xl">
            <T>If you have any other questions not addressed here</T>
          </h2>

          <p className="text-fluid-small text-[#FFFFFF] my-6 md:my-8">
            <T>Please feel free to contact us at</T>{" "}
            <a
              href="mailto:Contact@accqrate-erp.com"
              className="text-[#FF6E3E] hover:text-[#ff875c] no-underline transition-colors duration-200"
            >
              Contact@accqrate-erp.com
            </a>
          </p>

          <CTAButton
            text={<T>Contact Your Consultant</T>}
            onClick={() => setModalOpen(true)}
          />
        </div>

        {/* COLUMN 3 — LOCK ICON */}
        <div className="flex items-center justify-center order-1 md:order-2">
          <Image
            src={AssetPath.resources.lock}
            alt="ZATCA Lock Illustration"
            width={240}
            height={160}
            className="lg:w-fit md:h-[150px] lg:h-[220px] md:hidden lg:block"
          />
        </div>
      </div>

      {/* Shiny Particle Field - Only render after client mount */}
      {isClient && (
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full animate-float"
              style={particle.style}
            />
          ))}
        </div>
      )}

      {/* ✅ Modal rendered client-side only */}
      {isModalOpen && (
        <ContactModal open={isModalOpen} onClose={() => setModalOpen(false)} />
      )}
    </section>
  );
}
