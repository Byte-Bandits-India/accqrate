export interface FlowStep {
  number: string;
  title: string;
  description: string;
  image?: string;
  icon?: string;
}

export interface CountryFlowConfig {
  type: "std" | "peppol"; // std = old, peppol = Belgium/Poland new UI
  heading: string;
  subHeading: string;
  steps: FlowStep[];
  diagram?: string; // For Belgium/Poland UI
}

export const COUNTRY_FLOW: Record<string, CountryFlowConfig> = {
  sa: {
    type: "std",
    heading: "E-Invoicing Integration Flow",
    subHeading:
      "Integrating your existing application through various formats. Schedule your integration with ISTD.",
    steps: [
      {
            number: "01",
            title: "Generate invoices and complete in your ERP/POS",
            description: "Efficiently generate and finalize invoices directly within your ERP/POS system for streamlined financial management.",
            image: "/images/invoicing/create-invoice-new-invoice.webp",
            icon: "/images/invoicing/integration-flow-icon-1.svg"
        },
        {
            number: "02",
            title: "Our Connectors in your ERP will take care of the rest",
            description: "Our connectors, seamlessly integrated into your ERP, will handle all subsequent processes effortlessly.",
            image: "/images/invoicing/integration-flow-2.webp",
            icon: "/images/invoicing/integration-flow-icon-2.svg"
        },
        {
            number: "03",
            title: "Our E-invoicing solution transforms and transmits the data to ISTD",
            description: "Our connector interfaces with our API, converting and adapting data for seamless integration.",
            image: "/images/invoicing/integration-flow-3.webp",
            icon: "/images/invoicing/integration-flow-icon-3.svg"
        },
        {
            number: "04",
            title: "ISTD approved invoices are given back to your ERP/POS",
            description: "ISTD clearances are processed instantly, ensuring swift compliance and operational efficiency.",
            image: "/images/invoicing/integration-flow-4.webp",
            icon: "/images/invoicing/integration-flow-icon-2.svg"
        },
        {
            number: "05",
            title: "ERP/POS receives back QR code, XML and PDF/A3. Data archived for 10 years.",
            description: "Unlimited archiving of responses, PDFs, and QR Codes ensures permanent storage and retrieval for compliance and reference purposes.",
            image: "/images/invoicing/integration-flow-5.webp",
            icon: "/images/invoicing/integration-flow-icon-3.svg"
        },
        {
            number: "06",
            title: "Print the PDF with QR code. Send PDF A3",
            description: "Generate and print the PDF with the QR code, then dispatch the document in A3 size for comprehensive and accessible presentation.",
            image: "/images/invoicing/integration-flow-6.webp",
            icon: "/images/invoicing/integration-flow-icon-2.svg"
        }
    ],
  },

  be: {
    type: "peppol",
    heading: "Belgium E-invoicing Process",
    subHeading:
      "Belgium's e-invoicing framework operates through the Peppol network for secure invoice exchange.",
    diagram: "/images/invoicing/belgium-diagram.svg",
    steps: [
      {
        number: "01",
        title: "Invoice Creation",
        description:
          "A structured e-invoice is generated using the Peppol BIS 3.0 standard.",
      },
      {
        number: "02",
        title: "Peppol Submission",
        description:
          "The invoice is transmitted securely to the buyer via the Peppol network.",
      },
      {
        number: "03",
        title: "Automated Processing",
        description:
          "The buyer’s system processes the invoice and provides approval.",
      },
      {
        number: "04",
        title: "Record-Keeping",
        description:
          "Invoices are archived per Belgian regulations with traceability.",
      },
    ],
  },

   pl: {
    type: "peppol",
    heading: "Belgium E-invoicing Process",
    subHeading:
      "Belgium's e-invoicing framework operates through the Peppol network for secure invoice exchange.",
    diagram: "/images/invoicing/belgium-diagram.svg",
    steps: [
      {
        number: "01",
        title: "Invoice Creation",
        description:
          "A structured e-invoice is generated using the Peppol BIS 3.0 standard.",
      },
      {
        number: "02",
        title: "Peppol Submission",
        description:
          "The invoice is transmitted securely to the buyer via the Peppol network.",
      },
      {
        number: "03",
        title: "Automated Processing",
        description:
          "The buyer’s system processes the invoice and provides approval.",
      },
      {
        number: "04",
        title: "Record-Keeping",
        description:
          "Invoices are archived per Belgian regulations with traceability.",
      },
    ],
  },
  
};
