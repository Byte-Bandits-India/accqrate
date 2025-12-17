"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AssetPath from "@/AssetPath/AssetPath";
import { comingSoonRoutes } from "@/lib/ComingSoonRoutes";
import T from "@/Components/T";

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

// Function to get country-specific contact sales section
const getContactSalesSection = (countryCode: string) => {
  const contactData: Record<string, { call: string; email: string; whatsapp: string }> = {
    sa: {
      call: "Call: +966 54 199 9357",
      email: "Email: contact@accqrate-erp.com",
      whatsapp: "WhatsApp: +966 54 199 9357"
    },
    ae: {
      call: "Call: +971505515388",
      email: "Email: contact@accqrate-erp.com",
      whatsapp: "WhatsApp: +971505515388"
    },
    be: {
      call: "Call: +41 76 475 36 65",
      email: "Email: contact@accqrate-erp.com",
      whatsapp: "WhatsApp: +971505515388"
    },
    pl: {
      call: "Call: +41 76 475 36 65",
      email: "Email: contact@accqrate-erp.com",
      whatsapp: "WhatsApp: +971505515388"
    },
    default: {
      call: "Call: +966 54 199 9357",
      email: "Email: contact@accqrate-erp.com",
      whatsapp: "WhatsApp: +966 54 199 9357"
    },
  };

  const data = contactData[countryCode.toLowerCase()] || contactData.default;

  return {
    title: "Contact Sales",
    links: [
      { label: data.call, isText: true },
      { label: data.email, isText: true },
      { label: data.whatsapp, isText: true },
      {
        label: "Connect with Accqrate Concierge",
        href: "/connect-with-concierge",
        isText: false,
      },
    ],
  };
};

const eInvoicingLinks = [
  { label: "Accqrate E-invoicing", href: "/e-invocing" },
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
    <footer className="bg-[#1F1F1F] text-white py-16 font-inter">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">
        <div className="hidden lg:block">
          {/* Logo */}
          <Link href={createHref("/")}>
            <Image
              src={AssetPath.common.white}
              alt="Accqrate"
              width={180}
              height={50}
              className="mb-6 cursor-pointer"
            />
          </Link>
        </div>

        {/* Main Grid with Full-Height Vertical Divider */}
        <div className="hidden lg:flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">

          {/* LEFT GRID */}
          <div className="lg:w-[856px]">

            {/* Description + E-invoicing */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-16 mb-10">
              {/* Description */}
              <p className="text-[#E5E5E5] text-fluid-small leading-7 max-w-[573px]">
                <T>
                  One unified platform with zero silos integrated modules on a
                  single data model, global compliance built-in, AI-powered
                  automation, flexible cloud or on-prem deployment, fast
                  implementation, and enterprise-grade security and
                  scalability.
                </T>
              </p>

              {/* E-invoicing Solution */}
              <div className="md:min-w-[200px]">
                <h3 className="text-fluid-body font-semibold mb-4">
                  <T>E-invoicing Solution</T>
                </h3>
                <ul className="space-y-2 text-[#E5E5E5] text-fluid-small">
                  {eInvoicingLinks.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={resolveHref(item.href)}
                        className="text-[#ffffff] hover:text-[#5980FF] underline underline-offset-2"
                      >
                        <T>{item.label}</T>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="my-6 h-[1px] bg-[#F0F0F0]" />

            {/* Middle Nav */}
            <div className="pt-4">
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-fluid-small text-white underline underline-offset-4">
                {footerNav.map((item, i) => (
                  <Link
                    key={i}
                    href={resolveHref(item.href)}
                    className="hover:text-[#5980FF] text-[#FFFFFF] transition-colors"
                  >
                    <T>{item.label}</T>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* FULL-HEIGHT VERTICAL LINE */}
          <div className="hidden lg:block w-[1px] bg-[#F0F0F0] self-stretch"></div>

          {/* RIGHT GRID */}
          <div className="flex-grow grid sm:grid-cols-2 gap-10">
            {dynamicFooterSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-fluid-body font-semibold mb-6">
                  <T>{section.title}</T>
                </h3>

                <ul className="space-y-3 text-[#E5E5E5] text-fluid-small">
                  {section.links.map((item, i) => (
                    <li key={i}>
                      {item.isText ? (
                        <span className="block">
                          <T>{item.label}</T>
                        </span>
                      ) : (
                        (() => {
                          return (
                            <Link
                              href={resolveHref(item.href ?? "")}
                              className="text-[#ffffff] hover:text-[#5980FF] underline underline-offset-2 block"
                            >
                              <T>{item.label}</T>
                            </Link>
                          );
                        })()
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Logo Divider */}
        <div className="flex items-center my-8 lg:mt-16">
          <div className="flex-grow h-[1px] bg-[#3A3A3A]" />
          <Image
            src={AssetPath.common.footerLogo}
            alt="Accqrate"
            width={180}
            height={40}
            className="mx-6 opacity-90"
          />
          <div className="flex-grow h-[1px] bg-[#3A3A3A]" />
        </div>

        {/* Copyright */}
        <p className="text-center text-[#C8C8C8] text-fluid-small">
          <T>© Copyright 2021 - 2025</T>{" "}
          <span className="text-[#5980FF] font-medium">Accqrate</span>,{" "}
          <T>All rights reserved.</T>
        </p>
      </div>
    </footer>
  );
}
