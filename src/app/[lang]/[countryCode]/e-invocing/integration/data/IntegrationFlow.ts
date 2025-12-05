import AssetPath from "@/AssetPath/AssetPath";

export const integrationFlowData: any = {
    sa: {
        title: "E-Invoicing Integration Flow",
        subtitle:
            "Integrating your existing application through various formats. Schedule your integration with ISTD.",
        steps: [
            {
                number: "01",
                title: "Generate invoices and complete in your ERP/POS",
                description:
                    "Efficiently generate and finalize invoices directly within your ERP/POS system.",
                image: AssetPath.invoicing.createInvoiceNew.src,
                icon: AssetPath.invoicing.integrationFlowIcon1.src,
            },
            {
                number: "02",
                title:
                    "Our Connectors in your ERP will take care of the rest",
                description:
                    "Our connectors, seamlessly integrated into your ERP, handle all subsequent processes.",
                image: AssetPath.invoicing.integrationFlow2.src,
                icon: AssetPath.invoicing.integrationFlowIcon2.src,
            },
            {
                number: "03",
                title:
                    "Our E-invoicing solution transforms & transmits to ISTD",
                description:
                    "Our connector interfaces with our API, transforming and transmitting structured data.",
                image: AssetPath.invoicing.integrationFlow3.src,
                icon: AssetPath.invoicing.integrationFlowIcon3.src,
            },
            {
                number: "04",
                title:
                    "ISTD approved invoices sent back to ERP/POS",
                description:
                    "ISTD clearances are processed instantly for compliance and efficiency.",
                image: AssetPath.invoicing.integrationFlow4.src,
                icon: AssetPath.invoicing.integrationFlowIcon2.src,
            },
            {
                number: "05",
                title:
                    "ERP/POS receives QR code, XML and PDF/A3. Archived 10 years.",
                description:
                    "Unlimited archiving of PDFs, XMLs, and QR codes for compliance.",
                image: AssetPath.invoicing.integrationFlow5.src,
                icon: AssetPath.invoicing.integrationFlowIcon3.src,
            },
            {
                number: "06",
                title: "Print PDF with QR code. Send PDF A3",
                description:
                    "Generate & print the invoice PDF with QR code, ready for dispatch.",
                image: AssetPath.invoicing.integrationFlow6.src,
                icon: AssetPath.invoicing.integrationFlowIcon2.src,
            },
        ],
    },

    be: {
        title: "Belgium E-invoicing Process",
        subtitle:
            "Belgium's e-invoicing framework operates through the Peppol network, enabling secure, structured & standardized digital invoice exchange.",
        heroImage: "/images/belgium-flow.png",

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
                    "The invoice is securely transmitted to the buyer’s system via the Peppol network.",
            },
            {
                number: "03",
                title: "Automated Processing",
                description:
                    "Recipient systems automatically process invoices for approval & payments.",
            },
            {
                number: "04",
                title: "Record-Keeping",
                description:
                    "Invoices archived by Mercurius ensuring traceability & delivery confirmation.",
            },
        ],
    },
    pl: {
        title: "Belgium E-invoicing Process",
        subtitle:
            "Belgium's e-invoicing framework operates through the Peppol network, enabling secure, structured & standardized digital invoice exchange.",
        heroImage: "/images/belgium-flow.png",

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
                    "The invoice is securely transmitted to the buyer’s system via the Peppol network.",
            },
            {
                number: "03",
                title: "Automated Processing",
                description:
                    "Recipient systems automatically process invoices for approval & payments.",
            },
            {
                number: "04",
                title: "Record-Keeping",
                description:
                    "Invoices archived by Mercurius ensuring traceability & delivery confirmation.",
            },
        ],
    },
};
