import AssetPath from "@/AssetPath/AssetPath";

export const integrationFlowData: any = {
sa: {
  title: " ",
  subtitle:
    "Integrating your existing application through various formats. Schedule your integration with ZATCA.",

  steps: [
    {
      number: "01",
      title: "Generate invoices and complete in your ERP/POS",
      description:
        "Efficiently generate and finalize invoices directly within your ERP/POS system for streamlined financial management.",
      image: AssetPath.invoicing.createInvoiceNew.src,
      icon: AssetPath.invoicing.integrationFlowIcon1.src,
    },
    {
      number: "02",
      title: "Our Connectors in your ERP will take care of the rest",
      description:
        "Our connectors, seamlessly integrated into your ERP, will handle all subsequent processes efficiently.",
      image: AssetPath.invoicing.integrationFlow2.src,
      icon: AssetPath.invoicing.integrationFlowIcon2.src,
    },
    {
      number: "03",
      title:
        "Our E-invoicing solution transforms and transmits the data to ZATCA",
      description:
        "Our connector interfaces with our API, converting and adapting data for seamless integration and sending it to ZATCA.",
      image: AssetPath.invoicing.integrationFlow3.src,
      icon: AssetPath.invoicing.integrationFlowIcon3.src,
    },
    {
      number: "04",
      title: "ZATCA approved invoices are given back to your ERP/POS",
      description:
        "ZATCA clearances are processed instantly, ensuring swift compliance and operational efficiency.",
      image: AssetPath.invoicing.integrationFlow4.src,
      icon: AssetPath.invoicing.integrationFlowIcon2.src,
    },
    {
      number: "05",
      title:
        "ERP/POS receives back QR code, XML, and PDF/A3. Data archived for 10 years.",
      description:
        "Unlimited storage of invoices, PDFs, XMLs, and QR codes ensures permanent storage and retrieval for compliance and reference purposes.",
      image: AssetPath.invoicing.integrationFlow5.src,
      icon: AssetPath.invoicing.integrationFlowIcon3.src,
    },
    {
      number: "06",
      title: "Print the PDF with QR code. Send PDF A3",
      description:
        "Generate and print the invoice PDF with the QR code. Send or dispatch the document as A3 for accurate archiving and accessible presentation.",
      image: AssetPath.invoicing.integrationFlow6.src,
      icon: AssetPath.invoicing.integrationFlowIcon2.src,
    },
  ],
},

  be: {
  title: "Belgium ",

  subtitle:
    "Belgium's e-invoicing framework operates through the Peppol network, enabling secure, structured, and standardized digital invoice exchange. Businesses are required to use Peppol-compatible software for sending and receiving e-invoices, which are routed through the Mercurius platform for validation and tracking.",

  heroImage: AssetPath.integration.b2b.src,

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
        "The invoice is transmitted securely to the buyer’s system via the Peppol network.",
    },
    {
      number: "03",
      title: "Automated Processing",
      description:
        "The recipient's system automatically processes the invoice, enabling efficient approval and payment cycles.",
    },
    {
      number: "04",
      title: "Record-Keeping",
      description:
        "Invoices are archived in compliance with Belgian regulations, with Mercurius ensuring traceability and delivery confirmation.",
    },
  ],
},


  pl: {
  title: "Poland ",

  subtitle:
    "Poland’s e-invoicing framework is built around KSeF (Krajowy System e-Faktur), the national platform used for the structured creation, submission, and retrieval of invoices. All businesses must use KSeF-compatible software to generate and exchange e-invoices in the mandated FA(3) XML format.",

  heroImage: AssetPath.integration.b2bpoland.src,

  steps: [
    {
      number: "01",
      title: "Invoice Creation",
      description:
        "A structured FA(3) XML e-invoice is generated according to Poland’s KSeF schema and validation rules.",
    },
    {
      number: "02",
      title: "Submission to KSeF",
      description:
        "The invoice is sent directly to the KSeF platform, where it undergoes validation and receives a unique KSeF reference number.",
    },
    {
      number: "03",
      title: "Automatic Processing",
      description:
        "Once accepted, the cleared invoice becomes available for the buyer to retrieve from KSeF, enabling automated processing and accounting workflows.",
    },
    {
      number: "04",
      title: "Record-Keeping",
      description:
        "KSeF maintains authenticated copies of all invoices, providing traceability, audit history, and long-term archival in compliance with Polish regulations.",
    },
  ],
},

ae: {
  title: "UAE ",

  subtitle:
    "The UAE’s e-invoicing framework is built on the Decentralized Continuous Transaction Control and Exchange (DCTCE) model, powered by UAE PINT and the Peppol network. Invoices flow through a 5-corner model involving suppliers, buyers, accredited service providers, and the Federal Tax Authority.",

  heroImage: AssetPath.integration.b2b.src,

  steps: [
    {
      number: "01",
      title: "Invoice Submission (Corner 1 → Corner 2)",
      description:
        "The supplier generates an invoice in their ERP/POS and submits it to their UAE Accredited Service Provider (Corner 2) in an agreed format.",
    },
    {
      number: "02",
      title: "Validation & UAE PINT Conversion (Corner 2)",
      description:
        "The ASP validates the invoice and converts it into the UAE standard XML (UAE PINT) if a different format was submitted.",
    },
    {
      number: "03",
      title: "Transmission to Buyer ASP (Corner 2 → Corner 3)",
      description:
        "The validated invoice is transmitted to the buyer’s Accredited Service Provider (Corner 3) through the Peppol network.",
    },
    {
      number: "04",
      title: "Parallel Tax Reporting to FTA (Corner 2 → Corner 5)",
      description:
        "At the same time, Corner 2 sends the Tax Data Document (TDD) to the FTA’s Central Data Platform (Corner 5).",
    },
    {
      number: "05",
      title: "Validation Acknowledgment (Corner 3 → Corner 2)",
      description:
        "The buyer’s ASP validates the invoice and sends a Message Level Status (MLS) back to Corner 2 confirming validation success or failure.",
    },
    {
      number: "06",
      title: "Delivery to Buyer (Corner 3 → Corner 4)",
      description:
        "Upon successful validation, Corner 3 delivers the invoice to the buyer’s business system in the format agreed with their ASP.",
    },
    {
      number: "07",
      title: "Buyer ASP Reporting to FTA (Corner 3 → Corner 5)",
      description:
        "Corner 3 also reports the TDD to Corner 5. If validation fails, Corner 3 sends a negative MLS to both Corner 2 and Corner 5, and no TDD is submitted.",
    },
    {
      number: "08",
      title: "FTA Status to Supplier ASP (Corner 5 → Corner 2)",
      description:
        "The FTA (Corner 5) sends an MLS to Corner 2 after processing the TDD successfully.",
    },
    {
      number: "09",
      title: "FTA Status to Buyer ASP (Corner 5 → Corner 3)",
      description:
        "Corner 5 sends another MLS to Corner 3 confirming successful TDD processing.",
    },
    {
      number: "10",
      title: "Supplier ASP Updates Supplier (Corner 2 → Corner 1)",
      description:
        "Corner 2 forwards the MLS updates from Corner 3 and Corner 5 to the supplier.",
    },
    {
      number: "11",
      title: "Buyer ASP Updates Buyer (Corner 3 → Corner 4)",
      description:
        "Corner 3 forwards Corner 5’s reporting MLS to the buyer for full transparency and audit tracking.",
    },
  ],
},

};
