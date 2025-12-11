"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import AssetPath from "@/AssetPath/AssetPath";
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Youtube
} from "lucide-react";
import ContactFormModal from "@/Components/ContactFormModal"; // Import the modal
import T from "@/Components/T";

const ContactFormPage = () => {
  const params = useParams();
  const countryCode = (params?.countryCode as string)?.toUpperCase();
  const lang = (params?.lang as string) || "en";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState("");

  // Country-specific card content only
  const countryCardContent: Record<string, {
    title: string;
    description: string;
    cards: {
      card1: {
        badge: string;
        title: string;
        description: string;
        buttonText: string;
        module?: string;
      };
      card2: {
        badge: string;
        title: string;
        description: string;
        buttonText: string;
        module?: string;
      };
      card3: {
        badge: string;
        title: string;
        description: string;
        buttonText: string;
        module?: string;
      };
    };
  }> = {
    // Belgium
    BE: {
      title: "Get In Touch With Belgium",
      description: "Got any questions about the product or scaling on our platform? We're here to help. Chat to our friendly team 24/7 and get onboard in less than 5 minutes.",
      cards: {
        card1: {
          badge: "E-INVOICING",
          title: "Buy E-invoicing Software",
          description: "Seeking cutting-edge E-invoicing software ready for Phase 1 & 2? Let us find the perfect pricing fit for you.",
          buttonText: "Chat With Us",
          module: "E-invoicing Standalone Software"
        },
        card2: {
          badge: "INTEGRATION",
          title: "Integrate your ERP with compliance systems",
          description: "Ready for Phase II integration? Our experts have got your back.",
          buttonText: "Talk to an Expert",
          module: "E-invoicing API Integration Software"
        },
        card3: {
          badge: "PARTNERS",
          title: "Become our Trusted Partner",
          description: "Eager to streamline PEPPOL compliance for your clientele and expand your horizons? Let us collaborate.",
          buttonText: "Partner with Us",
          module: "Partner with Us"
        }
      }
    },
    // Poland
    PL: {
      title: "Get In Touch With Belgium",
      description: "Got any questions about the product or scaling on our platform? We're here to help. Chat to our friendly team 24/7 and get onboard in less than 5 minutes.",
      cards: {
        card1: {
          badge: "E-INVOICING",
          title: "Buy E-invoicing Software",
          description: "Seeking cutting-edge E-invoicing software ready for Phase 1 & 2? Let us find the perfect pricing fit for you.",
          buttonText: "Chat With Us",
          module: "E-invoicing Standalone Software"
        },
        card2: {
          badge: "INTEGRATION",
          title: "Integrate your ERP with compliance systems",
          description: "Ready for Phase II integration? Our experts have got your back.",
          buttonText: "Talk to an Expert",
          module: "E-invoicing API Integration Software"
        },
        card3: {
          badge: "PARTNERS",
          title: "Become our Trusted Partner",
          description: "Eager to streamline PEPPOL compliance for your clientele and expand your horizons? Let us collaborate.",
          buttonText: "Partner with Us",
          module: "Partner with Us"
        }
      }
    },
    // Default for other countries
    DEFAULT: {
      title: "Get In Touch With Belgium",
      description: "Got any questions about the product or scaling on our platform? We're here to help. Chat to our friendly team 24/7 and get onboard in less than 5 minutes.",
      cards: {
        card1: {
          badge: "E-INVOICING",
          title: "Buy E-invoicing Software",
          description: "Seeking cutting-edge E-invoicing software ready for Phase 1 & 2? Let us find the perfect pricing fit for you.",
          buttonText: "Chat With Us",
          module: "E-invoicing Standalone Software"
        },
        card2: {
          badge: "INTEGRATION",
          title: "Integrate your ERP with compliance systems",
          description: "Ready for Phase II integration? Our experts have got your back.",
          buttonText: "Talk to an Expert",
          module: "E-invoicing API Integration Software"
        },
        card3: {
          badge: "PARTNERS",
          title: "Become our Trusted Partner",
          description: "Eager to streamline ZATCA compliance for your clientele and expand your horizons? Let us collaborate.",
          buttonText: "Partner with Us",
          module: "Partner with Us"
        }
      }
    }
  };

  // Get card content based on country code
  const getCountryCardContent = () => {
    if (['BE', 'PL', 'SA'].includes(countryCode)) {
      return countryCardContent[countryCode];
    } else {
      return countryCardContent.DEFAULT;
    }
  };

  const cardContent = getCountryCardContent();

  // Handle button click
  const handleCardButtonClick = (module: string = "") => {
    setSelectedModule(module);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F6FF] px-4 pb-12 pt-10 md:pt-[60px] lg:pt-[80px]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-6">
        {/* Left Section - Info (UNCHANGED) */}
        <div className="w-full max-w-[475px] text-left">
          <h2 className="text-[24px] md:text-[28px] lg:text-[38px] font-medium"><T lang={lang} countryCode={countryCode}>{cardContent.title}</T></h2>
          <div className="w-[100px] md:w-[156px] h-[2px] bg-[#194BED] my-6 md:my-8 lg:my-[40px]"></div>
          <p className="text-[#000000] text-fluid-body mb-8 max-w-[556px]">
            <T lang={lang} countryCode={countryCode}>Call To us</T>
          </p>

          <h2 className="text-fluid-body font-medium text-[#000000] mb-2">
            <T lang={lang} countryCode={countryCode}>Our Friendly team is here to help</T>
          </h2>
          <p className="text-[#FF6E3E] text-fluid-small mb-2">
            Contact@accqrate-erp.com
          </p>

          {/* Office Locations Section - UNCHANGED */}
          <div className="bg-[#EFF3FF] p-6 mt-6 rounded-2xl max-w-[420px]">
            <h3 className="text-[#1F3FBF] font-semibold text-[20px] mb-4">
              <T lang={lang} countryCode={countryCode}>Our Office Locations</T>
            </h3>

            <div className="bg-white rounded-xl p-4 space-y-6 shadow-sm">
              {/* Location 1 */}
              <div className="flex gap-3">
                <div className="flex items-center justify-center">
                  <img
                    src={AssetPath.pattern.dammamCircle.src}
                    alt="Location Icon"
                    className="w-[120px] h-20 object-contain"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-black"><T lang={lang} countryCode={countryCode}>Dammam</T></h4>
                  <p className="text-sm text-[#9a8e9e] underline leading-relaxed">
                    <T lang={lang} countryCode={countryCode}>2nd Floor, Suit NO. 3, Al khonaini building, king saud street, P.O BOX 2877 Dammam 31461 Kingdom of Saudi Arabia</T>
                  </p>
                </div>
              </div>

              {/* Location 2 */}
              <div className="flex gap-3">
                <div className="flex items-center justify-center">
                  <img
                    src={AssetPath.pattern.dammamCircle.src}
                    alt="Location Icon"
                    className="w-[120px] h-20 object-contain"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-black"><T lang={lang} countryCode={countryCode}>Riyadh</T></h4>
                  <p className="text-sm text-[#AB9EAF] underline leading-relaxed">
                    <T lang={lang} countryCode={countryCode}>Level 1, Building Z, Zone A Airport Road, Business Gate P.O. Box 93597 Riyadh 11683 Kingdom of Saudi Arabia</T>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <p className="text-orange-600 font-semibold text-sm mb-3">
                <T lang={lang} countryCode={countryCode}>SOCIAL MEDIA</T>
              </p>

              <div className="flex gap-4 text-gray-500">
                <Facebook className="w-5 h-5 hover:text-[#194BED] cursor-pointer" />
                <Linkedin className="w-5 h-5 hover:text-[#194BED] cursor-pointer" />
                <Twitter className="w-5 h-5 hover:text-[#194BED] cursor-pointer" />
                <Instagram className="w-5 h-5 hover:text-[#194BED] cursor-pointer" />
                <Youtube className="w-5 h-5 hover:text-[#194BED] cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Cards with Modal Triggers */}
        <div className="mt-12">
          <h2 className="max-w-[785px]"><T lang={lang} countryCode={countryCode}>{cardContent.description}</T></h2>
          <div className="bg-[#F6F7FF] py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-white border border-[#E6E9FF] rounded-2xl px-6 pb-6 shadow-sm">
                <span className="text-xs font-semibold text-[#4A67FF] bg-[#EEF1FF] px-3 py-2 rounded-b-lg">
                  <T lang={lang} countryCode={countryCode}>{cardContent.cards.card1.badge}</T>
                </span>

                <h3 className="text-xl font-bold mt-4 text-gray-900">
                  <T lang={lang} countryCode={countryCode}>{cardContent.cards.card1.title}</T>
                </h3>

                <p className="text-gray-500 mt-2">
                  <T lang={lang} countryCode={countryCode}>{cardContent.cards.card1.description}</T>
                </p>

                <button
                  onClick={() => handleCardButtonClick(cardContent.cards.card1.module)}
                  className="mt-5 bg-[#C9381C] text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-[#a62d17] transition"
                >
                  <T lang={lang} countryCode={countryCode}>{cardContent.cards.card1.buttonText}</T> <span>↗</span>
                </button>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-[#E6E9FF] rounded-2xl px-6 pb-6 shadow-sm">
                <span className="text-xs font-semibold text-[#4A67FF] bg-[#EEF1FF] px-3 py-2 rounded-b-lg">
                  <T lang={lang} countryCode={countryCode}>{cardContent.cards.card2.badge}</T>
                </span>

                <h3 className="text-xl font-bold mt-4 text-gray-900">
                  <T lang={lang} countryCode={countryCode}>{cardContent.cards.card2.title}</T>
                </h3>

                <p className="text-gray-500 mt-2">
                  <T lang={lang} countryCode={countryCode}>{cardContent.cards.card2.description}</T>
                </p>

                <button
                  onClick={() => handleCardButtonClick(cardContent.cards.card2.module)}
                  className="mt-5 bg-[#C9381C] text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-[#a62d17] transition"
                >
                  <T lang={lang} countryCode={countryCode}>{cardContent.cards.card2.buttonText}</T> <span>↗</span>
                </button>
              </div>

              {/* Illustration Card */}
              <div className="flex items-center justify-center order-last md:order-none">
                <img
                  src={typeof AssetPath.common.contactUs === 'string' ? AssetPath.common.contactUs : AssetPath.common.contactUs.src}
                  alt="Support Illustration"
                  className="max-w-sm w-full"
                />
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-[#E6E9FF] rounded-2xl px-6 pb-6 shadow-sm">
                <span className="text-xs font-semibold text-[#4A67FF] bg-[#EEF1FF] px-3 py-2 rounded-b-lg">
                  <T lang={lang} countryCode={countryCode}>{cardContent.cards.card3.badge}</T>
                </span>

                <h3 className="text-xl font-bold mt-4 text-gray-900">
                  <T lang={lang} countryCode={countryCode}>{cardContent.cards.card3.title}</T>
                </h3>

                <p className="text-gray-500 mt-2">
                  <T lang={lang} countryCode={countryCode}>{cardContent.cards.card3.description}</T>
                </p>

                <button
                  onClick={() => handleCardButtonClick(cardContent.cards.card3.module)}
                  className="mt-5 bg-[#C9381C] text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-[#a62d17] transition"
                >
                  <T lang={lang} countryCode={countryCode}>{cardContent.cards.card3.buttonText}</T> <span>↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        countryCode={countryCode}
        initialModule={selectedModule}
      />
    </div>
  );
};

export default ContactFormPage;
