"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import AssetPath from "@/AssetPath/AssetPath";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
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
      title: "Get in touch with us for more information.",
      description: "Got any questions about the product or scaling on our platform? We're here to help. Chat to our friendly team 24/7 and get onboard in less than 5 minutes.",
      cards: {
        card1: {
          badge: "E-INVOICING",
          title: "Buy E-invoicing Software",
          description: "Seeking cutting-edge E-invoicing software ready for Europe? Let us find the perfect pricing fit for you.",
          buttonText: "Chat With Us",
          module: "E-invoicing Standalone Software"
        },
        card2: {
          badge: "INTEGRATION",
          title: "Integrate your ERP with compliance systems",
          description: "Peppol Ready e-invoing? Our experts have got your back.",
          buttonText: "Talk to an Expert",
          module: "E-invoicing API Integration Software"
        },
        card3: {
          badge: "PARTNERS",
          title: "Become our Trusted Partner",
          description: "Eager to streamline E-invoicing Compliance in Europe for your clientele and expand your horizons? Let us collaborate.",
          buttonText: "Partner with Us",
          module: "Partner with Us"
        }
      }
    },
    // Poland
    PL: {
      title: "Get in touch with us for more information.",
      description: "Got any questions about the product or scaling on our platform? We're here to help. Chat to our friendly team 24/7 and get onboard in less than 5 minutes.",
      cards: {
        card1: {
          badge: "E-INVOICING",
          title: "Buy E-invoicing Software",
          description: "Seeking cutting-edge E-invoicing software ready for Europe? Let us find the perfect pricing fit for you.",
          buttonText: "Chat With Us",
          module: "E-invoicing Standalone Software"
        },
        card2: {
          badge: "INTEGRATION",
          title: "Integrate your ERP with compliance systems",
          description: "Peppol Ready e-invoing? Our experts have got your back.",
          buttonText: "Talk to an Expert",
          module: "E-invoicing API Integration Software"
        },
        card3: {
          badge: "PARTNERS",
          title: "Become our Trusted Partner",
          description: "Eager to streamline E-invoicing Compliance in Europe for your clientele and expand your horizons? Let us collaborate.",
          buttonText: "Partner with Us",
          module: "Partner with Us"
        }
      }
    },
    AE: {
      title: "Get in touch with us for more information.",
      description: "Got any questions about the product or scaling on our platform? We're here to help. Chat to our friendly team 24/7 and get onboard in less than 5 minutes.",
      cards: {
        card1: {
          badge: "E-INVOICING",
          title: "Buy E-invoicing Software",
          description: "Seeking cutting-edge E-invoicing software ready for UAE? Let us find the perfect pricing fit for you.",
          buttonText: "Chat With Us",
          module: "E-invoicing Standalone Software"
        },
        card2: {
          badge: "INTEGRATION",
          title: "Integrate your ERP with compliance systems",
          description: "Peppol Ready e-invoing? Our experts have got your back.",
          buttonText: "Talk to an Expert",
          module: "E-invoicing API Integration Software"
        },
        card3: {
          badge: "PARTNERS",
          title: "Become our Trusted Partner",
          description: "Eager to streamline E-invoicing Compliance in UAE for your clientele and expand your horizons? Let us collaborate.",
          buttonText: "Partner with Us",
          module: "Partner with Us"
        }
      }
    },
    // Default for other countries
    DEFAULT: {
      title: "Get in touch with us for more information.",
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
    if (['BE', 'PL', 'AE'].includes(countryCode)) {
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
    <div className={`min-h-screen bg-[#F8F6FF] px-4 pb-12 pt-10 md:pt-[60px] lg:pt-[80px] ${lang === 'ar' ? 'rtl' : ''}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className={`max-w-7xl mx-auto flex flex-col lg:${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'} items-center lg:items-start gap-6`}>
        {/* Left Section - Info (UNCHANGED) */}
        <div className={`w-full max-w-[475px] ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          <h2 className="text-[24px] md:text-[28px] lg:text-[38px] font-medium"><T lang={lang} countryCode={countryCode}>{cardContent.title}</T></h2>
          <div className={`w-[100px] md:w-[156px] h-[2px] bg-[#194BED] my-[20px] ${lang === 'ar' ? 'ml-auto' : ''}`}></div>
          <h2 className="text-fluid-body lg:text-[16px] font-medium text-[#000000] mb-2">
            <T lang={lang} countryCode={countryCode}>Our team is here to help</T>
          </h2>
          <p className="text-[#FF6E3E] text-fluid-small font-medium mb-2">
            Contact@accqrate-erp.com
          </p>

          {/* Office Locations Section */}
          <div className="bg-[#EFF3FF] p-6 mt-6 rounded-2xl max-w-[420px]">
            <div className="">
              {/* Call Us Label */}
              <p className="text-fluid-small font-bold text-[#000000] pb-2 leading-relaxed">
                <T>Call Us</T>
              </p>

              {/* Phone Timing */}
              <p className="text-[12px] pb-2 text-[#000000] font-normal leading-relaxed">
                <T>Call our team Monday - Friday from 9:00 AM to 5:00 PM</T>
              </p>

              {/* Phone Section with Icon */}
              <div className="flex items-center gap-2 pb-2 text-[#1F3FBF]">
                <PhoneCall className="w-4 h-4" />
                <span className="text-[16px] font-medium leading-relaxed">
                  +41 76 475 36 65
                </span>
              </div>

              {/* Office Locations Title */}
              <h3 className="text-[#1F3FBF] font-semibold text-[20px]">
                <span className="text-black">
                  <T>Our</T>
                </span>{" "}
                <T>Office</T>{" "}
                <span className="text-black">
                  <T>Locations</T>
                </span>
              </h3>

            </div>


            <div className="bg-white rounded-xl p-4 space-y-6 shadow-sm">
              {/* Location 1 */}
              <div className="flex">
                <div className="flex items-center justify-center flex-shrink-0">
                  <img
                    src={AssetPath.pattern.dammamCircle.src}
                    alt="Location Icon"
                    className="w-[120px] h-[70px] object-contain"
                  />
                </div>

                <div>
                  <p className="text-sm text-[#9a8e9e] underline leading-relaxed">
                    <T lang={lang} countryCode={countryCode}>Picassoplatz 4 <br />CH-4052 Basel <br /> Switzerland</T>
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

                <Link
                  href="https://www.facebook.com/people/Accqrate/100077291530631/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5 text-gray-500 hover:text-[#194BED] cursor-pointer" />
                </Link>

                <Link
                  href="https://www.linkedin.com/showcase/accqrate-belgium/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-gray-500 hover:text-[#194BED] cursor-pointer" />
                </Link>

                <Link
                  href="https://x.com/accqrate_erp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-5 h-5 text-gray-500 hover:text-[#194BED] cursor-pointer" />
                </Link>

                <Link
                  href="https://www.instagram.com/accqrateerp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5 text-gray-500 hover:text-[#194BED] cursor-pointer" />
                </Link>

                <Link
                  href="https://www.youtube.com/channel/UCAzO34h3KxRrObyRor70D9A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-5 h-5 text-gray-500 hover:text-[#194BED] cursor-pointer" />
                </Link>

              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Cards with Modal Triggers */}
        <div className="mt-12">
          <h2 className="max-w-[785px] text-fluid-body"><T lang={lang} countryCode={countryCode}>{cardContent.description}</T></h2>
          <div className="bg-[#F6F7FF] py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-white border border-[#E6E9FF] rounded-2xl px-6 pb-6 shadow-sm">
                <span className="text-xs font-semibold text-[#4A67FF] bg-[#EEF1FF] px-3 py-2 rounded-b-lg">
                  <T lang={lang} countryCode={countryCode}>{cardContent.cards.card1.badge}</T>
                </span>

                <h3 className="font-bold mt-4 text-fluid-body text-gray-900">
                  <T lang={lang} countryCode={countryCode}>{cardContent.cards.card1.title}</T>
                </h3>

                <p className="text-gray-500 text-fluid-small mt-2">
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

                <h3 className="font-bold mt-4 text-fluid-body text-gray-900">
                  <T lang={lang} countryCode={countryCode}>{cardContent.cards.card2.title}</T>
                </h3>

                <p className="text-gray-500 text-fluid-small mt-2">
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

                <h3 className="text-fluid-body font-bold mt-4 text-gray-900">
                  <T lang={lang} countryCode={countryCode}>{cardContent.cards.card3.title}</T>
                </h3>

                <p className="text-gray-500 text-fluid-small mt-2">
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




