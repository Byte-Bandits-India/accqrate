import  AssetPath  from "@/AssetPath/AssetPath";
import { Menu } from "@/types/menu"; // Adjust path to your Menu type

// Type for country-specific menus
export type CountryMenus = Record<string, Menu[]>;
export type CountryLanguages = Record<
  string,
  { code: string; name: string; display: string }[]
>;

// Country-specific menu data
export const countryMenus: CountryMenus = {
  MA: [
    {
      id: "e-invoicing",
      title: "E-invoicing",
      type: "mega",
      sections: [
        {
          heading: "E-invoicing",
          images: AssetPath.header.line.pro2,
          xl: AssetPath.header.navbar.image.einvoicing,
          subItems: [
            {
              title: "Accqrate E-Invoicing",
              description: "Simplify transactions, manage invoices effortlessly with our MRA e-invoicing software.",
              img: AssetPath.header.navbar.fill.einvoicing,
              href: "/e-invocing/",
            },
            {
              title: "E-Invoicing Integration",
              description: "Integrate your ERP and POS with MRA with our seamless, adaptable e-invoicing API or Offline integrators",
              img: AssetPath.header.navbar.fill.einvoiceIntegration,
              href: "/e-invocing/integration",
            },
          ],
        },
      ],
    },
    {
      id: "resources",
      title: "Resources",
      type: "simple",
      sections: [
        {
          heading: "Support",
          description: "Get help when you need it",
          subItems: [
            {
              title: "Blogs",
              description: "Insights, tips and industry news",
              href: "/resources/blogs",
              icon: AssetPath.header.navbar.outline.blog,
            },
            {
              title: "Announcements",
              description: "Find answers to common questions",
              href: "/resources/announcement",
              icon: AssetPath.header.navbar.outline.announce,
            },
            {
              title: "FAQs",
              description: "Connect with other users",
              href: "/resources/faq",
              icon: AssetPath.header.navbar.outline.faq,
            },
            {
              title: "Tax Calculator",
              description: "Calculate your Saudi VAT obligations",
              href: "/resources/vat",
              icon: AssetPath.header.navbar.outline.tax,
            },
            {
              title: "Events",
              description: "Upcoming events and webinars in Saudi Arabia",
              href: "/resources/webinars",
              icon: AssetPath.header.navbar.outline.event,
            },
          ],
        },
      ],
    },
  ],

  MU: [
    {
      id: "e-invoicing",
      title: "E-invoicing",
      type: "mega",
      sections: [
        {
          heading: "E-invoicing",
          images: AssetPath.header.line.pro2,
          xl: AssetPath.header.navbar.image.einvoicing,
          subItems: [
            {
              title: "Accqrate E-Invoicing",
              description: "Simplify transactions, manage invoices effortlessly with our MRA e-invoicing software.",
              img: AssetPath.header.navbar.fill.einvoicing,
              href: "/e-invocing/",
            },
            {
              title: "E-Invoicing Integration",
              description: "Integrate your ERP and POS with MRA with our seamless, adaptable e-invoicing API or Offline integrators",
              img: AssetPath.header.navbar.fill.einvoiceIntegration,
              href: "/e-invocing/integration",
            },
          ],
        },
      ],
    },
    {
      id: "resources",
      title: "Resources",
      type: "simple",
      sections: [
        {
          heading: "Support",
          description: "Get help when you need it",
          subItems: [
            {
              title: "Blogs",
              description: "Insights, tips and industry news",
              href: "/resources/blogs",
              icon: AssetPath.header.navbar.outline.blog,
            },
            {
              title: "Announcements",
              description: "Find answers to common questions",
              href: "/resources/announcement",
              icon: AssetPath.header.navbar.outline.announce,
            },
            {
              title: "FAQs",
              description: "Connect with other users",
              href: "/resources/faq",
              icon: AssetPath.header.navbar.outline.faq,
            },
            {
              title: "Tax Calculator",
              description: "Calculate your Saudi VAT obligations",
              href: "/resources/vat",
              icon: AssetPath.header.navbar.outline.tax,
            },
            {
              title: "Events",
              description: "Upcoming events and webinars in Saudi Arabia",
              href: "/resources/webinars",
              icon: AssetPath.header.navbar.outline.event,
            },
          ],
        },
      ],
    },
  ],

  JD: [
    {
      id: "e-invoicing",
      title: "E-invoicing",
      type: "mega",
      sections: [
        {
          heading: "E-invoicing",
          images: AssetPath.header.line.pro2,
          xl: AssetPath.header.navbar.image.einvoicing,
          subItems: [
            {
              title: "Accqrate E-Invoicing",
              description: "Simplify transactions, manage invoices effortlessly with our ISTD e-invoicing software.",
              img: AssetPath.header.navbar.fill.einvoicing,
              href: "/e-invocing/",
            },
            {
              title: "E-Invoicing Integration",
              description: "Integrate your ERP and POS with ISTD with our seamless, adaptable e-invoicing API or Offline integrators",
              img: AssetPath.header.navbar.fill.einvoiceIntegration,
              href: "/e-invocing/integration",
            },
          ],
        },
      ],
    },
    {
      id: "resources",
      title: "Resources",
      type: "simple",
      sections: [
        {
          heading: "Support",
          description: "Get help when you need it",
          subItems: [
            {
              title: "Blogs",
              description: "Insights, tips and industry news",
              href: "/resources/blogs",
              icon: AssetPath.header.navbar.outline.blog,
            },
            {
              title: "Announcements",
              description: "Find answers to common questions",
              href: "/resources/announcement",
              icon: AssetPath.header.navbar.outline.announce,
            },
            {
              title: "FAQs",
              description: "Connect with other users",
              href: "/resources/faq",
              icon: AssetPath.header.navbar.outline.faq,
            },
            {
              title: "Tax Calculator",
              description: "Calculate your Saudi VAT obligations",
              href: "/resources/vat",
              icon: AssetPath.header.navbar.outline.tax,
            },
            {
              title: "Events",
              description: "Upcoming events and webinars in Saudi Arabia",
              href: "/resources/webinars",
              icon: AssetPath.header.navbar.outline.event,
            },
          ],
        },
      ],
    },
  ],

  BE: [
    {
      id: "e-invoicing",
      title: "E-invoicing",
      type: "mega",
      sections: [
        {
          heading: "E-invoicing",
          images: AssetPath.header.line.pro2,
          xl: AssetPath.header.navbar.image.einvoicing,
          subItems: [
            {
              title: "Accqrate E-Invoicing",
              description: "PEPPOL Certified and FPS Finance Compliant e-invoicing software",
              img: AssetPath.header.navbar.fill.einvoicing,
              href: "/e-invocing/",
            },
            {
              title: "E-Invoicing Integration",
              description: "Integrate your ERP and POS with the PEPPOL Network using our seamless, adaptable e-invoicing API or offline integrators",
              img: AssetPath.header.navbar.fill.einvoiceIntegration,
              href: "/e-invocing/integration",
            },
          ],
        },
      ],
    },
    {
      id: "resources",
      title: "Resources",
      type: "simple",
      sections: [
        {
          heading: "Support",
          description: "Get help when you need it",
          subItems: [
            {
              title: "Blogs",
              description: "Insights, tips and industry news",
              href: "/resources/blogs",
              icon: AssetPath.header.navbar.outline.blog,
            },
            {
              title: "Announcements",
              description: "Find answers to common questions",
              href: "/resources/announcement",
              icon: AssetPath.header.navbar.outline.announce,
            },
            {
              title: "FAQs",
              description: "Connect with other users",
              href: "/resources/faq",
              icon: AssetPath.header.navbar.outline.faq,
            },
            {
              title: "Tax Calculator",
              description: "Calculate your Belgium VAT obligations",
              href: "/resources/vat",
              icon: AssetPath.header.navbar.outline.tax,
            },
            {
              title: "Events",
              description: "Upcoming events and webinars in Belgium",
              href: "/resources/webinars",
              icon: AssetPath.header.navbar.outline.event,
            },
          ],
        },
      ],
    },
  ],

  PL: [
    {
      id: "e-invoicing",
      title: "E-invoicing",
      type: "mega",
      sections: [
        {
          heading: "E-invoicing",
          images: AssetPath.header.line.pro2,
          xl: AssetPath.header.navbar.image.einvoicing,
          subItems: [
            {
              title: "Accqrate E-Invoicing",
              description: "PEPPOL & KSeF Complaint e-invoicing software",
              img: AssetPath.header.navbar.fill.einvoicing,
              href: "/e-invocing/",
            },
            {
              title: "E-Invoicing Integration",
              description: "Integrate your ERP and POS with PEPPOL Network with our seamless, adaptable e-invoicing API or Offline integrators",
              img: AssetPath.header.navbar.fill.einvoiceIntegration,
              href: "/e-invocing/integration",
            },
          ],
        },
      ],
    },
    {
      id: "resources",
      title: "Resources",
      type: "simple",
      sections: [
        {
          heading: "Support",
          description: "Get help when you need it",
          subItems: [
            {
              title: "Blogs",
              description: "Insights, tips and industry news",
              href: "/resources/blogs",
              icon: AssetPath.header.navbar.outline.blog,
            },
            {
              title: "Announcements",
              description: "Find answers to common questions",
              href: "/resources/announcement",
              icon: AssetPath.header.navbar.outline.announce,
            },
            {
              title: "FAQs",
              description: "Connect with other users",
              href: "/resources/faq",
              icon: AssetPath.header.navbar.outline.faq,
            },
            {
              title: "Tax Calculator",
              description: "Calculate your Poland VAT obligations",
              href: "/resources/vat",
              icon: AssetPath.header.navbar.outline.tax,
            },
            {
              title: "Events",
              description: "Upcoming events and webinars in Poland",
              href: "/resources/webinars",
              icon: AssetPath.header.navbar.outline.event,
            },
          ],
        },
      ],
    },
  ],
  AE: [
    {
      id: "e-invoicing",
      title: "E-invoicing",
      type: "mega",
      sections: [
        {
          heading: "E-invoicing",
          images: AssetPath.header.line.pro2,
          xl: AssetPath.header.navbar.image.einvoicing,
          subItems: [
            {
              title: "Accqrate E-Invoicing",
              description: "Simplify transactions, manage invoices effortlessly with our PEPPOL & FTA Compliant e-invoicing software.",
              img: AssetPath.header.navbar.fill.einvoicing,
              href: "/e-invocing/",
            },
            {
              title: "E-Invoicing Integration",
              description: "Integrate your ERP and POS with PEPPOL Network with our seamless, adaptable e-invoicing API or Offline integrators",
              img: AssetPath.header.navbar.fill.einvoiceIntegration,
              href: "/e-invocing/integration",
            },
          ],
        },
      ],
    },
    {
      id: "resources",
      title: "Resources",
      type: "simple",
      sections: [
        {
          heading: "Support",
          description: "Get help when you need it",
          subItems: [
            {
              title: "Blogs",
              description: "Insights, tips and industry news",
              href: "/resources/blogs",
              icon: AssetPath.header.navbar.outline.blog,
            },
            {
              title: "Announcements",
              description: "Find answers to common questions",
              href: "/resources/announcement",
              icon: AssetPath.header.navbar.outline.announce,
            },
            {
              title: "FAQs",
              description: "Connect with other users",
              href: "/resources/faq",
              icon: AssetPath.header.navbar.outline.faq,
            },
            {
              title: "Tax Calculator",
              description: "Calculate your Poland VAT obligations",
              href: "/resources/vat",
              icon: AssetPath.header.navbar.outline.tax,
            },
            {
              title: "Events",
              description: "Upcoming events and webinars in Poland",
              href: "/resources/webinars",
              icon: AssetPath.header.navbar.outline.event,
            },
          ],
        },
      ],
    },
  ],
};

// Country-specific language options
export const countryLanguageOptions: CountryLanguages = {
  // Middle East
  SA: [
    { code: "ar", name: "Arabic", display: "العربية" },
    { code: "en", name: "English", display: "Eng" },
  ],
  AE: [
    { code: "ar", name: "Arabic", display: "العربية" },
    { code: "en", name: "English", display: "Eng" },
  ],
  OM: [
    { code: "ar", name: "Arabic", display: "العربية" },
    { code: "en", name: "English", display: "Eng" },
  ],
  BH: [
    { code: "ar", name: "Arabic", display: "العربية" },
    { code: "en", name: "English", display: "Eng" },
  ],
  JD: [
    { code: "ar", name: "Arabic", display: "العربية" },
    { code: "en", name: "English", display: "Eng" },
  ],

  // Africa / Asia
  MA: [
    { code: "ml", name: "Malay", display: "Malay" },
    { code: "en", name: "English", display: "Eng" },
  ],
  MU: [
    { code: "en", name: "English", display: "Eng" },
    { code: "fr", name: "French", display: "Français" },
  ],

  // Europe
  BE: [
    { code: "en", name: "English", display: "Eng" },
    { code: "fr", name: "French", display: "French" },
    { code: "nl", name: "Dutch", display: "Dutch" },
    { code: "de", name: "German", display: "German" },
  ],
  PL: [
    { code: "en", name: "English", display: "Eng" },
    { code: "fr", name: "French", display: "Français" },
  ],
};

// Default menu for any country not listed
export const defaultMenus: Menu[] = [
  {
    id: "e-invoicing",
    title: "E-invoicing",
    type: "mega",
    sections: [
      {
        heading: "E-invoicing",
        images: AssetPath.header.line.pro2,
        xl: AssetPath.header.navbar.image.einvoicing,
        subItems: [
          {
            title: "Accqrate E-Invoicing",
            description: "Simplify transactions, manage invoices effortlessly with our ZATCA approved e-invoicing software.",
            img: AssetPath.header.navbar.fill.einvoicing,
            href: "/e-invocing/",
          },
          {
            title: "E-Invoicing Integration",
            description: "Integrate your ERP and POS with ZATCA with our seamless, adaptable e-invoicing API or Offline integrators",
            img: AssetPath.header.navbar.fill.einvoiceIntegration,
            href: "/e-invocing/integration",
          },
        ],
      },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    type: "simple",
    sections: [
      {
        heading: "Support",
        description: "Get help when you need it",
        subItems: [
          {
            title: "Blogs",
            description: "Insights, tips and industry news",
            href: "/resources/blogs",
            icon: AssetPath.header.navbar.outline.blog,
          },
          {
            title: "Announcements",
            description: "Find answers to common questions",
            href: "/resources/announcement",
            icon: AssetPath.header.navbar.outline.announce,
          },
          {
            title: "FAQs",
            description: "Connect with other users",
            href: "/resources/faq",
            icon: AssetPath.header.navbar.outline.faq,
          },
          {
            title: "Tax Calculator",
            description: "Calculate your tax obligations",
            href: "/resources/vat",
            icon: AssetPath.header.navbar.outline.tax,
          },
          {
            title: "Events",
            description: "Upcoming events and webinars",
            href: "/resources/webinars",
            icon: AssetPath.header.navbar.outline.event,
          },
        ],
      },
    ],
  },
];

// Helper function to get menus by country code
export const getMenusByCountryCode = (countryCode: string): Menu[] => {
  return countryMenus[countryCode.toUpperCase()] || defaultMenus;
};
