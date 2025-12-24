"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import AssetPath from "@/AssetPath/AssetPath";
import Link from "next/link";
import { PhoneCall, Facebook, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import ContactFormModal from "@/Components/ContactFormModal";
import T from "@/Components/T";

const ContactFormPage = () => {
  const params = useParams();
  const countryCode = (params?.countryCode as string)?.toUpperCase();
  const lang = (params?.lang as string) || "en";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState("");

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

  const cardContent = getCountryCardContent();                                                                                                            const countryOfficeDetails: Record< 
    string,
    {
      offices: {
        phone?: string;
        city?: string;
        addressLines: string[];
        image?: string;
      }[];
    }
  > = {
    BE: {
      offices: [
        {
          phone: "+41 76 475 36 65",
          city: "",
          addressLines: ["Picassoplatz 4", "CH-4052 Basel", "Switzerland"],
          image: AssetPath.pattern.dammamCircle.src,
        },
      ],
    },

    PL: {
      offices: [
        {
          phone: "+41 76 475 36 65",
          city: "",
          addressLines: ["Picassoplatz 4", "CH-4052 Basel", "Switzerland"],
          image: AssetPath.pattern.dammamCircle.src,
        },
      ],
    },

    AE: {
      offices: [
        {
          phone: "+971505515388",
          city: "Dubai",
          addressLines: [
            "Business Center 1, M Floor",
            "The Maydan Hotel, Nad Al Sheba Road",
            "Dubai, United Arab Emirates",
          ],
          image: AssetPath.pattern.dammamCircle.src,
        },
      ],
    },

    MA: {
      offices: [
        {
          phone: "+60 12-998 6011\n+60 17-302 1401\n+60 12-295 6867\n+60 11-1166 2601",
          city: "Kuala Lumpur",
          addressLines: [
            "Level 23A, NAZA Towers, 10, Persiaran KLCC, 50088, Kuala Lumpur, Malaysia.",
          ],
          image: AssetPath.pattern.dammamCircle.src,
        },
      ],
    },

    MU: {
      offices: [
        {
          phone: "+230 5795 1711",
          city: "Mauritius",
          addressLines: [
            "5 Abbe Mazuy Street, Venkatasamy Lane, Beau Bassin, Mauritius.",
          ],
          image: AssetPath.pattern.dammamCircle.src,
        },
      ],
    },

    JD: {
      offices: [
        {
          phone: "+962 7 8800 3525",
          city: "Jordan",
          addressLines: [
            "4 - Yacoub Plaza 195 King Abdullah II street - Amman Jordan",
          ],
          image: AssetPath.pattern.dammamCircle.src,
        },
      ],
    },

    // Example: Saudi with two offices
    SA: {
      offices: [
        {
          phone: "+966 54 199 9357",
          city: "Dammam",
          addressLines: [
            "2nd Floor, Suit No.3, Al Khonaini building",
            "King Saud Street, P.O Box 2877 Dammam 31461",
            "Kingdom of Saudi Arabia",
          ],
          image: AssetPath.pattern.dammamCircle.src,
        },
        {
          phone: "+966 55 123 4567",
          city: "Riyadh",
          addressLines: [
            "Level 1,Building 7,Zone A Airport road",
            "Business Gate, P.O Box 93597 Riyadh 11683",
            "Kingdom of Saudi Arabia",
          ],
          image: AssetPath.pattern.dammamCircle.src,
        },
      ],
    },

    DEFAULT: {
      offices: [
        {
          phone: "+966 54 199 9357",
          city: "Dammam",
          addressLines: [
            "2nd Floor, Suit No.3, Al Khonaini building",
            "King Saud Street, P.O Box 2877 Dammam 31461",
            "Kingdom of Saudi Arabia",
          ],
          image: AssetPath.pattern.dammamCircle.src,
        },
        {
          phone: "+966 55 123 4567",
          city: "Riyadh",
          addressLines: [
            "Level 1,Building 7,Zone A Airport road",
            "Business Gate, P.O Box 93597 Riyadh 11683",
            "Kingdom of Saudi Arabia",
          ],
          image: AssetPath.pattern.dammamCircle.src,
        },
      ],
    },
  };
  /* ---------------- BUTTON HANDLER ---------------- */
  const handleCardButtonClick = (module: string = "") => {
    setSelectedModule(module);
    setIsModalOpen(true);
  };


  const officeDetails = countryOfficeDetails[countryCode] || countryOfficeDetails.DEFAULT;
  const primaryPhone = officeDetails.offices?.[0]?.phone || "";

  return (
    <div className="bg-white px-6 py-14">
      <div className="max-w-[1177px] mx-auto">

        {/* ================= TOP HEADER ROW ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-6">
          <h2 className="text-[18px] lg:text-[24px] font-bold text-[#1C2041]">
            <T lang={lang} countryCode={countryCode}>{cardContent.title}</T>
          </h2>

          <p className="text-[#5A6183] text-[14px] leading-relaxed">
            <T lang={lang} countryCode={countryCode}>{cardContent.description}</T>
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">

          {/* ================= LEFT: 3 CARDS (STRUCTURED AS IMAGE) ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* CARD 1 */}
            <div className="bg-white border border-[#E6E9FF] rounded-xl p-6">
              <span className="text-xs font-bold text-[#194bed] bg-[#EEF1FF] px-3 py-2 rounded-md">
                <T>{cardContent.cards.card1.badge}</T>
              </span>

              <h3 className="font-bold md:text-[18px] mt-4 text-[#1C2041]">
                <T>{cardContent.cards.card1.title}</T>
              </h3>

              <p className="text-[#5A6183] md:text-[14px] mt-2 text-sm">
                <T>{cardContent.cards.card1.description}</T>
              </p>

              <button
                onClick={() => handleCardButtonClick(cardContent.cards.card1.module)}
                className="mt-4 bg-[#D63F10] text-white px-5 py-1.7 rounded-full text-sm"
              >
                <T>{cardContent.cards.card1.buttonText}</T> ↗
              </button>
            </div>

            {/* CARD 2 */}
            <div className="bg-white border border-[#E6E9FF] rounded-xl p-6">
              <span className="text-xs font-bold text-[#194bed] bg-[#EEF1FF] px-3 py-2 rounded-md">
                <T>{cardContent.cards.card2.badge}</T>
              </span>

              <h3 className="font-bold md:text-[18px] mt-4 text-[#1C2041]">
                <T>{cardContent.cards.card2.title}</T>
              </h3>

              <p className="text-[#5A6183] mt-2 text-sm">
                <T>{cardContent.cards.card2.description}</T>
              </p>

              <button
                onClick={() => handleCardButtonClick(cardContent.cards.card2.module)}
                className="mt-4 bg-[#D63F10] text-white px-5 py-1.7 rounded-full text-sm"
              >
                <T>{cardContent.cards.card2.buttonText}</T> ↗
              </button>
            </div>

            {/* CARD 3 */}
            <div className="bg-white border border-[#E6E9FF] rounded-xl p-6 ">
              <span className="text-xs font-bold text-[#194bed] bg-[#EEF1FF] px-3 py-2 rounded-md">
                <T>{cardContent.cards.card3.badge}</T>
              </span>

              <h3 className="font-bold md:text-[18px] mt-4 text-[#1C2041]">
                <T>{cardContent.cards.card3.title}</T>
              </h3>

              <p className="text-[#5A6183] mt-2 text-sm max-w-[520px]">
                <T>{cardContent.cards.card3.description}</T>
              </p>

              <button
                onClick={() => handleCardButtonClick(cardContent.cards.card3.module)}
                className="mt-4 bg-[#D63F10] text-white px-5 py-1.7 rounded-full text-sm"
              >
                <T>{cardContent.cards.card3.buttonText}</T> ↗
              </button>
            </div>

          </div>

          {/* ================= RIGHT: CALL US PANEL ================= */}
          <div className="bg-[#eff3ff] rounded-2xl p-6 h-fit">

            <h3 className="font-bold md:text-[16px] text-[#1C2041] mb-4">
              <T>Call us</T>
            </h3>

            <p className="text-sm  mb-4">
              <T>Call our team Sun - Thu from 9am to 5pm</T>
            </p>

            <div className="flex items-center gap-2 text-[#194bed] font-bold text-[18px] underline md:text-[20px] mb-6">
              <PhoneCall size={18} />
              {primaryPhone}
            </div>

            <h4 className="font-bold text-[16px] mb-4">
              <T>Our <span className="text-[#194bed]">Office</span> Locations</T>
            </h4>

            <div className="bg-white rounded-xl p-4 space-y-5">
              {officeDetails.offices.map((office, idx) => (
                <div key={idx} className="flex gap-4">
                  <img
                    src={office.image}
                    className="w-[50px] h-[50px] rounded-full object-cover"
                  />

                  <div>
                    {office.city && (
                      <p className="font-semibold text-sm">{office.city}</p>
                    )}
                    {office.addressLines.map((line, i) => (
                      <p key={i} className="text-[13px] underline text-[#6B7280]">
                        <T>{line}</T>
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* SOCIAL */}
            <div className="mt-6">
              <p className="text-[#d63f10] uppercase font-semibold text-sm mb-3">
                <T>SOCIAL MEDIA</T>
              </p>

              <div className="flex gap-4 text-gray-500">
                <Link href="https://www.facebook.com" target="_blank"><Facebook size={18} /></Link>
                <Link href="https://www.linkedin.com" target="_blank"><Linkedin size={18} /></Link>
                <Link href="https://x.com" target="_blank"><Twitter size={18} /></Link>
                <Link href="https://www.instagram.com" target="_blank"><Instagram size={18} /></Link>
                <Link href="https://www.youtube.com" target="_blank"><Youtube size={18} /></Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= MODAL ================= */}
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
