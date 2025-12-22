"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AssetPath from "@/AssetPath/AssetPath";
import { comingSoonRoutes } from "@/lib/ComingSoonRoutes";
import T from "@/Components/T";
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle,
  Send
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoReddit } from "react-icons/io5";
import { FaSnapchat } from "react-icons/fa6";

// ---------------- Dynamic Routing ----------------
const useDynamicRouting = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const lang = segments[0] || "en";
  const countryCode = segments[1] || "sa";

  const createHref = (path: string): string => {
    const clean = path.startsWith("/") ? path : `/${path}`;
    return `/${lang}/${countryCode}${clean}`;
  };
  return { createHref, countryCode };
};

// ---------------- Footer Data ----------------
const footerNav = [
  { label: "Home", href: "/" },
  { label: "Join our Team", href: "/join-our-team" },
  { label: "Company", href: "/company" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Accelera", href: "/accelera" },
  { label: "Press", href: "/press" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Branding Assets", href: "/branding-assets" },
];

const footerSections = [
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/resources/faq", isText: false },
      { label: "Blogs", href: "/resources/blogs", isText: false },
      { label: "Events", href: "/resources/webinars", isText: false },
      { label: "Announcements", href: "/resources/announcement", isText: false },
      { label: "Tax Calculator", href: "/resources/vat", isText: false },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: IoLogoReddit, href: "#" },
  { icon: FaSnapchat, href: "#" },
  { icon: FaWhatsapp, href: "#" }, // WhatsApp
];

// Function to get country-specific contact sales section
const getContactSalesSection = (countryCode: string) => {
  const contactData: Record<string, { call: string; email: string; whatsapp: string }> = {
    sa: {
      call: "+966 54 199 9357",
      email: "contact@accqrate-erp.com",
      whatsapp: "+966 54 199 9357"
    },
    om: {
      call: "+966 54 199 9357",
      email: "contact@accqrate-erp.com",
      whatsapp: "+966 54 199 9357"
    },
    bh: {
      call: "+966 54 199 9357",
      email: "contact@accqrate-erp.com",
      whatsapp: "+966 54 199 9357"
    },
    ma: {
      call: "+60 12-998 6011\n+60 17-302 1401\n+60 12-295 6867\n+60 11-1166 2601",
      email: "contact@accqrate-erp.com",
      whatsapp: "+60 12-998 6011"
    },
    mu: {
      call: "+230 5795 1711",
      email: "contact@accqrate-erp.com",
      whatsapp: "+230 5795 1711"
    },
    jd: {
      call: "+962 7 8800 3525",
      email: "contact@accqrate-erp.com",
      whatsapp: "+962 7 8800 3525"
    },
    ae: {
      call: "+971505515388",
      email: "contact@accqrate-erp.com",
      whatsapp: "+971505515388"
    },
    be: {
      call: "+41 76 475 36 65",
      email: "contact@accqrate-erp.com",
      whatsapp: "+971505515388"
    },
    pl: {
      call: "+41 76 475 36 65",
      email: "contact@accqrate-erp.com",
      whatsapp: "+971505515388"
    },
    default: {
      call: "+966 54 199 9357",
      email: "contact@accqrate-erp.com",
      whatsapp: "+966 54 199 9357"
    },
  };

  const data = contactData[countryCode.toLowerCase()] || contactData.default;

  return {
    title: "Contact Sales",
    links: [
      { label: `Call: ${data.call}`, isText: true },
      { label: `Email: ${data.email}`, isText: true },
      { label: `WhatsApp: ${data.whatsapp}`, isText: true },
      {
        label: "Connect with us",
        href: "/connect-with-concierge",
        isText: false,
      },
    ],
  };
};

const eInvoicingLinks = [
  { label: "Accqrate E-Invoicing", href: "/e-invocing" },
  { label: "Integration Solution", href: "/e-invocing/integration" },
];

// ---------------- Component ----------------
export default function FooterUpdated() {
  const { createHref, countryCode } = useDynamicRouting();

  const resolveHref = (path: string) => {
    const clean = path.replace(/^\//, "");
    const target = comingSoonRoutes.includes(clean) ? "/coming-soon" : path;
    return createHref(target);
  };

  // Dynamic footer sections based on country
  const dynamicFooterSections = [
    ...footerSections,
    getContactSalesSection(countryCode)
  ];

  return (
    <footer className="bg-white text-[#000000d9] py-12 font-inter">
      <div className="mx-auto px-6 md:px-10 xl:px-10">
        <div className="hidden xl:block">
          {/* Logo */}
          <Link href={createHref("/")}>
            <Image
              src={AssetPath.header.logo}
              alt="Accqrate"
              width={180}
              height={50}
              className="mb-4 cursor-pointer"
            />
          </Link>
        </div>

        {/* Main Grid */}
        <div className="hidden xl:flex justify-between gap-12">

          {/* LEFT SECTION */}
          <div className="flex-1 max-w-[850px]">
            {/* Description */}
            <div className="mb-6">
              <p className="text-[#5a6183] text-[14px] leading-6">
                <T>
                  One unified platform with zero silos integrated modules on a
                  single data model, global compliance built-in, AI-powered
                  automation, flexible cloud or on-prem deployment, fast
                  implementation, and enterprise-grade security and
                  scalability.
                </T>
              </p>
            </div>

            {/* Footer Navigation Links */}
            <div className="mb-4">
              <div className="flex flex-wrap items-center gap-3 md:gap-5 text-[14px]">
                {footerNav.map((item, i) => (
                  <Link
                    key={i}
                    href={resolveHref(item.href)}
                    className="text-[#2b283f] hover:text-[#5980FF] transition-colors whitespace-nowrap"
                  >
                    <T>{item.label}</T>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-4">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  target="_blank"
                  className="text-[#2b283f] hover:text-[#5980FF] transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT SECTION - Columns */}
          <div className="flex gap-12">
            {/* Resources Section */}
            <div className="min-w-[200px]">
              <h3 className="text-[#2b283f] text-[16px] font-semibold mb-3">
                <T>{footerSections[0].title}</T>
              </h3>
              <ul className="space-y-2">
                {footerSections[0].links.map((item, i) => (
                  <li key={i} className="text-[14px]">
                    <Link
                      href={resolveHref(item.href ?? "")}
                      className="text-[#5a6183] hover:text-[#5980FF] block"
                    >
                      <T>{item.label}</T>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* E-invoicing Solution */}
            <div className="min-w-[200px]">
              <h3 className="text-[#2b283f] text-[16px] font-semibold mb-3">
                <T>E-invoicing Solution</T>
              </h3>
              <ul className="space-y-2">
                {eInvoicingLinks.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={resolveHref(item.href)}
                      className="text-[#5a6183] hover:text-[#5980FF] text-[14px]"
                    >
                      <T>{item.label}</T>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Sales Section */}
            <div className="min-w-[300px]">
              <h3 className="text-[#2b283f] text-[16px] font-semibold mb-3">
                <T>Contact Sales</T>
              </h3>
              <ul className="space-y-2 text-[14px]">
                {getContactSalesSection(countryCode).links.map((item, i) => (
                  <li key={i}>
                    {item.isText ? (
                      <div className="text-[#5a6183]">
                        {(() => {
                          const text = item.label;
                          const colonIndex = text.indexOf(":");
                          if (colonIndex === -1) {
                            return <T>{text}</T>;
                          }

                          const label = text.substring(0, colonIndex + 1); // Include the colon
                          const value = text.substring(colonIndex + 1).trim();

                          return (
                            <div className="flex flex-col">
                              <div className="flex items-baseline">
                                <span className="text-[#2b283f] font-medium whitespace-nowrap">
                                  <T>{label}</T>
                                </span>
                                <span className="text-[#5a6183] ml-1">
                                  {value.includes('\n') ? (
                                    <T>{value.split('\n')[0]}</T>
                                  ) : (
                                    <T>{value}</T>
                                  )}
                                </span>
                              </div>
                              {value.includes('\n') && (
                                <div className="text-[#5a6183] ml-[calc(theme(fontSize.medium)_+_0.25rem)] mt-1">
                                  {value.split('\n').slice(1).map((line, lineIndex) => (
                                    <div key={lineIndex}>
                                      <T>{line}</T>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })()}
                      </div>
                    ) : (
                      <Link
                        href={resolveHref(item.href ?? "")}
                        className="text-[#2b283f] hover:text-[#5980FF] block"
                      >
                        <T>{item.label}</T>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Logo Divider */}
        <div className="flex items-center mt-12 mb-6">
          <div className="flex-grow h-[1px] bg-[#3A3A3A]" />
          <Image
            src={AssetPath.common.footerLogo}
            alt="Accqrate"
            width={160}
            height={35}
            className="mx-4 opacity-90"
          />
          <div className="flex-grow h-[1px] bg-[#3A3A3A]" />
        </div>

        {/* Copyright */}
        <p className="text-center text-[#2b283f] text-[14px]">
          <T>© Copyright 2021 - 2025</T>{" "}
          <span className="text-[#5980FF] font-medium">Accqrate</span>,{" "}
          <T>All rights reserved.</T>
        </p>
      </div>
    </footer>
  );
}