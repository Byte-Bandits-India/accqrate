import  AssetPath  from "@/AssetPath/AssetPath";
import { Menu } from "@/types/menu"; // Adjust path to your Menu type

// Type for country-specific menus
export type CountryMenus = Record<string, Menu[]>;

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
              description: "PEPPOL Certified and FPS FInance Complaint e-invoicing software",
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
              description: "Simplify transactions, manage invoices effortlessly with our PEPPOL & KSeF Complaint e-invoicing software.",
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