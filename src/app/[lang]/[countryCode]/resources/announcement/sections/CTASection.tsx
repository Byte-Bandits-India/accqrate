"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";
import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";
import dynamic from "next/dynamic";
import T from "@/Components/T";
import CTAButton from "@/Components/CTAButton";

// Import ContactModal with dynamic loading to avoid server-client issues
const ContactModal = dynamic(
  () => import("@/Components/ContactModal").then(mod => mod.ContactModal),
  {
    ssr: false,
    loading: () => null // Optional loading component
  }
);

const CTASection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState<string>("");
  const params = useParams();
  const lang = params?.lang as string;
  const countryCode = params?.countryCode as string;

  // Country-specific content configuration
  const countryContent = {
    // Default content for ZATCA-based countries
    default: {
      title: "Save time, save money",
      description1: "Want the latest on ZATCA updates, fresh product insights, and exclusive Company editorials?",
      description2: "Dive in and subscribe to our newsletter. Be the first to know, straight to your inbox!",
      button1: "Get a Free Proof of Concept",
      button2: "Subscribe for Updates",
      button3: "Talk to Sales"
    },
    // Belgium content
    be: {
      title: "Save time, save money",
      description1: "Want the latest on Belgium's e-invoicing mandate, fresh product updates, and exclusive Accqrate insights?",
      description2: "Subscribe to our newsletter and stay ahead, delivered straight to your inbox.",
      button1: "Get Peppol Compliance Demo",
      button2: "Subscribe for Updates",
      button3: "Talk to Sales"
    },
    // Poland content
    pl: {
      title: "Save time, save money",
      description1: "Looking for the newest KSeF updates, product enhancements, and exclusive Accqrate editorials?",
      description2: "Sign up for our newsletter and get the latest, directly in your inbox.",
      button1: "Get KSeF Compliance Demo",
      button2: "Subscribe for Updates",
      button3: "Talk to Sales"
    },
    // Belgium content
    ae: {
      title: "Save time, save money",
      description1: "Want the latest on UAE e-invoicing mandate, fresh product updates, and exclusive Accqrate insights?",
      description2: "Subscribe to our newsletter and stay ahead, delivered straight to your inbox.",
      button1: "Get Peppol Compliance Demo",
      button2: "Subscribe for Updates",
      button3: "Talk to Sales"
    },

    ma: {
      title: "Save time, save money",
      description1: "Want the latest on Malaysia e-invoicing mandate, fresh product updates, and exclusive Accqrate insights?",
      description2: "Subscribe to our newsletter and stay ahead, delivered straight to your inbox.",
      button1: "Get Peppol Compliance Demo",
      button2: "Subscribe for Updates",
      button3: "Talk to Sales"
    },
    mu: {
      title: "Save time, save money",
      description1: "Want the latest on Mauritius e-invoicing mandate, fresh product updates, and exclusive Accqrate insights?",
      description2: "Subscribe to our newsletter and stay ahead, delivered straight to your inbox.",
      button1: "Get Peppol Compliance Demo",
      button2: "Subscribe for Updates",
      button3: "Talk to Sales"
    },
    jd: {
      title: "Save time, save money",
      description1: "Want the latest on Jordan e-invoicing mandate, fresh product updates, and exclusive Accqrate insights?",
      description2: "Subscribe to our newsletter and stay ahead, delivered straight to your inbox.",
      button1: "Get Peppol Compliance Demo",
      button2: "Subscribe for Updates",
      button3: "Talk to Sales"
    },
  };

  // Get content based on country code
  const getCountryContent = () => {
    if (!countryCode) return countryContent.default;
    const code = countryCode.toString().toLowerCase();

    switch (code) {
      case 'be':
        return countryContent.be;
      case 'pl':
        return countryContent.pl;
      case 'ae':
        return countryContent.ae;
      case 'ma':
        return countryContent.ma;
      case 'mu':
        return countryContent.ae;
      case 'jd':
        return countryContent.ma;
      default:
        return countryContent.default;
    }
  };

  const content = getCountryContent();

  // Button data with types/identifiers
  const buttonData = [
    { id: "proof_of_concept", text: content.button1 },
    { id: "subscribe", text: content.button2 },
    { id: "sales", text: content.button3 }
  ];

  // Handle button click
  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
    setModalOpen(true);
  };

  return (
    <div className="w-full bg-gradient-to-l from-[#242087] to-[#1A0C48] relative shadow-xl">
      <div className="md:flex gap-8 xl:max-h-[336px] relative z-10 max-w-[1440px] p-6 md:p-10 lg:pb-0 mx-auto">
        {/* LEFT CONTENT */}
        <div className="text-white md:max-w-[300px] lg:max-w-[500px] xl:max-w-full ">
          <h2 className="text-[24px] font-medium mb-6">
            <T>{content.title}</T>
          </h2>

          <p className="text-[18px] mb-6 text-white/90 leading-tight xl:max-w-[848px] ">
            <T>{content.description1}</T>
          </p>

          <p className="text-[14px] text-white/80 leading-tight xl:max-w-[773px] ">
            <T>{content.description2}</T>
          </p>

          <div className="hidden">
            {/* MANUAL BUTTON */}
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-full shadow-lg hover:bg-white/90 transition-all duration-200"
            >
              <T>Sign Up</T>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>

            {/* Extra Info Tags */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <span>Free Proof of Concept</span>
                <img
                  src={AssetPath.resources.starYellow?.src || AssetPath.resources.starYellow}
                  alt="star"
                  className="h-4 w-4"
                />
              </div>
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <span>30 Days Free Trial</span>
                <img
                  src={AssetPath.resources.starYellow?.src || AssetPath.resources.starYellow}
                  alt="star"
                  className="h-4 w-4"
                />
              </div>
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <span><T>No complexity, Subscribe and use</T></span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex justify-end relative -top-[150px] ">
          <Image
            src={AssetPath.common.chartView?.src || AssetPath.common.chartView}
            alt="Dashboard Preview"
            width={499}
            height={350}
            className="xl:max-w-[499px] w-full md:h-[300px] lg:h-[350px] transform hover:scale-105 transition-transform duration-300"
            priority={false}
          />
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-4 space-y-4 md:space-y-0 lg:gap-8 pb-6 md:pb-8 lg:pb-10">
        {buttonData.map((button) => (
          <CTAButton
            key={button.id}
            text={<T>{button.text}</T>}
            onClick={() => handleButtonClick(button.id)}
            widthClass="w-[270px] md:w-[220px] lg:w-[280px]"
          />
        ))}
      </div>


      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32" />

      {/* Contact Modal - Dynamically loaded */}
      {isModalOpen && (
        <ContactModal
          open={isModalOpen}
          onClose={() => {
            setModalOpen(false);
            setSelectedButton("");
          }}
        // You can pass additional props if needed, like:
        // selectedInterest={selectedButton}
        />
      )}
    </div>
  );
};

export default CTASection;