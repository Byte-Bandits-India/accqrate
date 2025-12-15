import AssetPath from "@/AssetPath/AssetPath";

export const Choose = {
  sa: {
    title: "Why Choose ",
    subtitle:
      "Seamlessly integrate your existing ERP/POS with ZATCA and become 100% ZATCA Phase 2 Compliant.",

    topLeftItems: [
      {
        title: "Effortless Invoice Generation",
        desc: "Create Tax and Simplified Tax e-invoices, along with Debit, Credit, and Advance Invoices with ease."
      },
      {
        title: "Secure Storage",
        desc: "Safely store all your e-invoices within our system."
      },
      {
        title: "Compliant Templates",
        desc: "Access ZATCA-approved custom invoice templates for guaranteed compliance and your brand identity."
      },
      {
        title: "QR Code Integration",
        desc: "Embed QR codes in invoices for easy validation."
      },
      {
        title: "Mobile Confirmation",
        desc: "Verify QR codes instantly with the ZATCA mobile app."
      },
      {
        title: "Automated Communication",
        desc: "Automatically send invoices to buyers via Email & WhatsApp."
      },
      {
        title: "Financial Control",
        desc: "Manage invoice payments and track outstanding summaries effortlessly."
      }
    ],

    topRightImage: AssetPath.integration.dashboard.src,

    bottomRightItems: [
      "Integration with ZATCA’s Fatoora portal",
      "Automatic Company Onboarding through OTP",
      "E-invoice generation and hashing XML – Tax & Simplified invoices",
      "Generate Digital signature",
      "Integrate the ZATCA approved QR code",
      "Generate PDF/A3 with integrated XML",
      "Dashboards in the application",
      "Track acceptance/rejections",
      "Take corrective actions with simple clicks",
      "Send the approved e-invoices to customers through Email or WhatsApp"
    ],

    bottomLeftImage: AssetPath.integration.inttax.src
  },

be: {
  title: "Why Choose",
  subtitle:
    "Seamlessly integrate your existing ERP/POS with Peppol and achieve full EN 16931 compliance for Belgium\'s 2026 e-invoicing mandate.",

  topLeftItems: [
    {
      title: "Effortless Invoice Generation",
      desc:
        "Create fully compliant structured UBL e-invoices, including credit notes, debit notes, and corrected invoices ready for Peppol exchange."
    },
    {
      title: "Secure Storage",
      desc:
        "Store all your EN 16931 invoices safely within our high-availability archiving environment, aligned with Belgian retention rules."
    },
    {
      title: "Compliant Templates",
      desc:
        "Access standardized, EN 16931-aligned invoice templates while maintaining your brand identity."
    },
    {
      title: "Peppol Connectivity",
      desc:
        "Exchange invoices securely through Peppol for guaranteed interoperability and regulatory compliance."
    },
    {
      title: "Validation & Error Handling",
      desc:
        "Automated validations ensure your structured invoices pass all schema and mandate checks before transmission."
    },
    {
      title: "Automated Communication",
      desc:
        "Send invoices directly to buyers via Email, Peppol, or file-based workflows integrated with your systems."
    },
    {
      title: "Financial Control",
      desc:
        "Track payments, monitor outstanding balances, and maintain complete visibility over your Belgian invoice lifecycle."
    }
  ],

  topRightImage: AssetPath.integration.dashboard.src,

  bottomLeftImage: AssetPath.integration.inttax.src,

  bottomRightItems: [
    "Peppol-ready onboarding",
    "Generate EN 16931-compliant UBL invoices",
    "PDF/A-3 with embedded XML",
    "Optional digital signature",
    "Track submissions, acceptance & rejections",
    "Simple corrective actions",
    "Send invoices via Email, Peppol, or WhatsApp"
  ]
},

pl: {
  title: "Why Choose",
  subtitle:
    "Integrate your ERP/POS with KSeF and achieve end-to-end FA(3) XML compliance for Poland’s mandatory e-invoicing framework.",

  topLeftItems: [
    {
      title: "Effortless Invoice Generation",
      desc:
        "Generate FA(3)-compliant invoices, credit notes, debit notes, and corrections—fully compatible with KSeF submission requirements."
    },
    {
      title: "Secure Storage",
      desc:
        "Store all cleared KSeF invoices securely with audit-ready logs and full document history."
    },
    {
      title: "Compliant Templates",
      desc:
        "Use FA(3)-ready templates optimized for KSeF processing while keeping your brand identity consistent."
    },
    {
      title: "KSeF Connectivity",
      desc:
        "Submit and retrieve invoices directly through KSeF with automated status tracking and clearance confirmation."
    },
    {
      title: "Validation & Schema Checks",
      desc:
        "Accqrate automatically validates FA(3) XML to eliminate KSeF rejection errors."
    },
    {
      title: "Automated Communication",
      desc:
        "Send cleared invoices to buyers instantly via Email or integrated system workflows."
    },
    {
      title: "Financial Control",
      desc:
        "Manage payments, track dues, and maintain end-to-end visibility over your invoicing operations in Poland."
    }
  ],

  topRightImage: AssetPath.integration.dashboard.src,

  bottomLeftImage: AssetPath.integration.inttax.src,

  bottomRightItems: [
    "Instant KSeF onboarding",
    "Generate FA(3) XML invoices",
    "Clearance IDs & verification tracking",
    "PDF/A-3 with embedded XML (on demand)",
    "Monitor submissions, acceptance & rejections",
    "One-click corrections",
    "Send cleared invoices via Email or WhatsApp"
  ]
},

ae: {
  title: "Why Choose ",
  subtitle:
    "Seamlessly integrate your ERP/POS with the UAE’s Peppol-based DCTCE framework and achieve full UAE PINT compliance for FTA e-invoicing.",

  topLeftItems: [
    {
      title: "Effortless Invoice Generation",
      desc:
        "Create fully compliant UAE PINT–structured e-invoices, including credit notes and debit notes, ready for Peppol exchange within the UAE’s 5-corner model. "
    },
    {
      title: "Secure Storage",
      desc:
        "Store all UAE-compliant invoices in a high-availability, tamper-proof archiving environment, fully aligned with FTA retention and audit requirements. "
    },
    {
      title: "Compliant Templates",
      desc:
        "Access standardized UAE PINT-aligned invoice templates while preserving your brand formatting and business rules."
    },
    {
      title: "Peppol Connectivity",
      desc:
        "Exchange invoices securely through the UAE Peppol network, ensuring guaranteed interoperability and regulatory compliance across all Accredited Service Providers."
    },
    {
      title: "Validation & Error Handling",
      desc:
        "Automated UAE PINT, VAT, and schema validations ensure your invoices pass all FTA and Peppol checks before transmission—reducing rejections and MLS failures."
    },
    {
      title: "Automated Communication",
      desc:
        "Deliver invoices directly to buyers via Peppol, email, or file-based workflows fully integrated with your ERP/POS and UAE ASP. "
    },
    {
      title: "Financial Control",
      desc:
        "Track payments, monitor outstanding balances, and maintain full visibility across your UAE e-invoice lifecycle, including MLS acknowledgments and DCTCE reporting status. "
    }
  ],

  topRightImage: AssetPath.integration.dashboard.src,

  bottomLeftImage: AssetPath.integration.inttax.src,

  bottomRightItems: [
    "Peppol-ready onboarding",
    "Generate UAE PINT–Compliant XML Invoices ",
    "PDF/A-3 with embedded XML",
    "Optional digital signature",
    "Track submissions, acceptance & rejections",
    "Simple corrective actions",
    "Send Invoices via Email, Peppol, or File-Based Workflows "
  ]
},

};
