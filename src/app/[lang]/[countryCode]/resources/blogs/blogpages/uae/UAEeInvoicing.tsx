/* eslint-disable @typescript-eslint/no-unused-vars */

import T from "@/Components/UaeT";
import BlogLayout from "../../layout/BlogLayout";
import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";

function UAEeInvoicing() {
    return (
        <BlogLayout
            pageTitle="E-Invoicing in the UAE: Key Requirements, Implementation Timeline and Latest Regulatory Updates"
            updatedOn="Nov 25th, 2024"
            minRead="25"
        >
            <div className="relative w-full h-[400px] mb-6">
                <Image
                    src={AssetPath.blogs.uae.eInvoicing}
                    alt="UAE E-Invoicing System Requirements"
                    fill
                    className="object-cover rounded-lg"
                    priority
                />
            </div>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The UAE is preparing for one of the most significant tax technology reforms in the region
                    with the rollout of mandatory electronic invoicing under its new Electronic Invoicing System.
                    The transition will begin with a controlled pilot in July 2026, followed by phased enforcement
                    for VAT-registered businesses from 2027 onwards. The reform aligns the UAE with international
                    best practices, strengthens VAT oversight, and creates a transparent, fully digital invoicing
                    environment for B2B and B2G transactions.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    This article provides a clear and detailed overview of the UAE&apos;s e-invoicing framework,
                    including timelines, mandatory requirements, the role of Accredited Service Providers, and
                    the expected compliance obligations for businesses operating in the country.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>What E-Invoicing Means in the UAE</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    E-invoicing in the UAE refers to issuing, transmitting, receiving, and storing invoices in
                    structured digital formats. These formats must be machine-readable and must follow the
                    standards defined by the Ministry of Finance. Unlike PDFs or paper documents, a valid
                    e-invoice must be entirely digital from creation to submission.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    A compliant UAE e-invoice requires the following elements:
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>
                        It must be generated in XML or JSON formats using UBL or PINT standards
                    </T>
                </li>
                <li>
                    <T>
                        It must be transmitted through an Accredited Service Provider
                    </T>
                </li>
                <li>
                    <T>
                        It must be reported to the Federal Tax Authority&apos;s e-Billing system for monitoring
                    </T>
                </li>
                <li>
                    <T>
                        It must be stored in the UAE as per the Tax Procedures Law
                    </T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Unstructured formats such as PDF, JPG, or paper cannot be treated as e-invoices.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Implementation Timeline for UAE E-Invoicing</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    On 28 September 2025, Ministerial Decisions 243 and 244 formally defined the implementation
                    stages.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Pilot Programme</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    A selected group of businesses will begin issuing structured invoices from 1 July 2026.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Voluntary Adoption</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Any business may join the system voluntarily starting from July 2026.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Phase 1: Large businesses with annual revenue of fifty million dirhams or more</T>
            </h4>

            <ul className="story text-gray-700 text-fluid-small mb-4 space-y-2">
                <li>
                    <T>Deadline to appoint an Accredited Service Provider: 31 July 2026</T>
                </li>
                <li>
                    <T>Mandatory e-invoicing start date: 1 January 2027</T>
                </li>
            </ul>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Phase 2: Businesses with annual revenue below fifty million dirhams</T>
            </h4>

            <ul className="story text-gray-700 text-fluid-small mb-4 space-y-2">
                <li>
                    <T>Deadline to appoint an ASP: 31 March 2027</T>
                </li>
                <li>
                    <T>Mandatory e-invoicing start date: 1 July 2027</T>
                </li>
            </ul>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Phase 3: All UAE government entities</T>
            </h4>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Deadline to appoint an ASP: 31 March 2027</T>
                </li>
                <li>
                    <T>Mandatory e-invoicing start date: 1 October 2027</T>
                </li>
            </ul>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Core Requirements for E-Invoicing in the UAE</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Businesses must meet all technical and operational requirements defined under the Electronic
                    Invoicing System.
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>
                        Structured digital formats only. Invoices must be issued in XML or JSON
                    </T>
                </li>
                <li>
                    <T>
                        Use of UBL or Peppol PINT. These standards define the structure and data elements of the invoice
                    </T>
                </li>
                <li>
                    <T>
                        Transmission through an Accredited Service Provider. ASPs play a central role in validation and submission
                    </T>
                </li>
                <li>
                    <T>
                        Timely submission. Invoices and credit notes must be transmitted within fourteen days from the date of the taxable transaction
                    </T>
                </li>
                <li>
                    <T>
                        Mandatory data dictionary. Invoices must include all required fields such as supplier and buyer information, TRN, invoice metadata, tax summary, and payment details
                    </T>
                </li>
                <li>
                    <T>
                        Digital credit notes. All corrections must follow the same structured format as invoices
                    </T>
                </li>
                <li>
                    <T>
                        Local data storage. All invoice data must be stored within the UAE
                    </T>
                </li>
                <li>
                    <T>
                        Reporting system failures. Any system disruption must be reported to the FTA within two business days
                    </T>
                </li>
            </ul>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>How the UAE E-Invoicing Process Works</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The UAE uses a structured, technology-driven workflow supported by ERP systems and Accredited
                    Service Providers.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Step 1: Appoint an Accredited Service Provider</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The ASP collaborates with the business and its ERP team to map internal data to the Ministry
                    of Finance data dictionary.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Step 2: Map and standardize invoice data</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The ERP must capture all mandatory fields including item details, VAT amounts, tax rate, and
                    supplier identification information.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Step 3: Convert invoice data into approved formats</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The ASP converts the invoice into XML or JSON using UBL or Peppol PINT.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Step 4: Validate invoice content</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The ASP validates the invoice structure, corrects errors, and enriches missing information
                    such as standardized codes.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Step 5: Transmit the invoice</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The ASP transmits the invoice simultaneously to the Federal Tax Authority e-Billing system
                    and the buyer&apos;s ASP.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Step 6: Store the invoice</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Businesses must store invoices securely within the UAE, ensuring availability for audits and
                    VAT reconciliation.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>The UAE E-Invoicing Framework (DCTCE Model)</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The UAE has adopted a Peppol-based continuous transaction control model known as the DCTCE
                    model. The model functions like a five-corner framework with the following components:
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-4 space-y-2">
                <li>
                    <T>Issuer</T>
                </li>
                <li>
                    <T>Receiver</T>
                </li>
                <li>
                    <T>Federal Tax Authority e-Billing System</T>
                </li>
                <li>
                    <T>Sender Accredited Service Provider</T>
                </li>
                <li>
                    <T>Receiver Accredited Service Provider</T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    The FTA e-Billing System holds invoice data for compliance but does not undertake validation.
                    Validation is the responsibility of the ASPs managing transmission.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Scope of E-Invoicing in the UAE</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The Electronic Invoicing System covers most taxable business activities in the country.
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-4 space-y-2">
                <li>
                    <T>It applies to all VAT-registered persons engaged in taxable supplies</T>
                </li>
                <li>
                    <T>It covers B2B transactions and B2G transactions</T>
                </li>
                <li>
                    <T>It excludes B2C transactions</T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>It excludes certain categories, including:</T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Government entities acting in a sovereign capacity</T>
                </li>
                <li>
                    <T>International passenger air transport</T>
                </li>
                <li>
                    <T>Certain airline ancillary services</T>
                </li>
                <li>
                    <T>International air freight for a limited period</T>
                </li>
                <li>
                    <T>Financial services that are zero-rated or exempt</T>
                </li>
            </ul>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>The Role of Accredited Service Providers</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Under the UAE e-invoicing model, ASPs are mandatory for all businesses subject to e-invoicing.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>Key responsibilities of ASPs include:</T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Mapping ERP data to the UAE data dictionary</T>
                </li>
                <li>
                    <T>Validating invoice structure and VAT compliance</T>
                </li>
                <li>
                    <T>Enriching invoices with digital signatures and identifiers</T>
                </li>
                <li>
                    <T>Converting internal formats into XML or JSON</T>
                </li>
                <li>
                    <T>Transmitting invoices to the FTA and recipient ASP</T>
                </li>
                <li>
                    <T>Applying security controls such as encryption</T>
                </li>
                <li>
                    <T>Archiving and storing invoices in the UAE</T>
                </li>
                <li>
                    <T>Providing monitoring tools for tracking invoice status</T>
                </li>
                <li>
                    <T>Supporting integration with business systems through APIs</T>
                </li>
                <li>
                    <T>Offering fallback procedures in case of downtime</T>
                </li>
            </ul>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Mandatory Fields in a UAE E-Invoice</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Structured invoices must follow the UAE&apos;s official data dictionary. Required fields include:
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Supplier details</T>
                </li>
                <li>
                    <T>Supplier TRN</T>
                </li>
                <li>
                    <T>Buyer details and TRN</T>
                </li>
                <li>
                    <T>Unique invoice number</T>
                </li>
                <li>
                    <T>Invoice date and time</T>
                </li>
                <li>
                    <T>Invoice type code</T>
                </li>
                <li>
                    <T>Currency code</T>
                </li>
                <li>
                    <T>Item description and quantities</T>
                </li>
                <li>
                    <T>Unit price and taxable amount</T>
                </li>
                <li>
                    <T>VAT rate and VAT amount</T>
                </li>
                <li>
                    <T>Total tax amount and gross total</T>
                </li>
                <li>
                    <T>Digital signature</T>
                </li>
                <li>
                    <T>Reference to original invoice in case of credit notes</T>
                </li>
                <li>
                    <T>Transmission timestamp and acknowledgment ID</T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Additional fields such as purchase order number, payment terms, and bank details may also
                    be included.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Penalties for Non-Compliance</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    A dedicated penalty schedule for e-invoicing is expected but not yet published. Based on
                    existing Tax Procedures Law enforcement, businesses may face penalties for:
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Failure to issue an e-invoice for B2B transactions</T>
                </li>
                <li>
                    <T>Repeated failure to issue e-invoices</T>
                </li>
                <li>
                    <T>Failure to maintain invoice records</T>
                </li>
                <li>
                    <T>Delayed transmission resulting in VAT misreporting</T>
                </li>
                <li>
                    <T>Fraudulent behavior or deliberate non-compliance</T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Penalties may range from two thousand five hundred dirhams per instance to significantly
                    higher amounts for repeated violations. Late payment penalties continue to apply for VAT
                    understatements or missed payments.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>How Businesses Should Prepare for E-Invoicing</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Companies should start preparing well before the pilot begins in 2026.
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Understand the full scope of the mandate and timeline</T>
                </li>
                <li>
                    <T>Appoint an Accredited Service Provider before mandated deadlines</T>
                </li>
                <li>
                    <T>Upgrade ERP systems to support structured invoice creation</T>
                </li>
                <li>
                    <T>Participate in the pilot phase to test integrations</T>
                </li>
                <li>
                    <T>Train finance and IT teams on e-invoicing workflows</T>
                </li>
                <li>
                    <T>Implement local data storage policies that meet UAE requirements</T>
                </li>
                <li>
                    <T>Establish clear escalation procedures for reporting system failures</T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Early preparation will reduce integration challenges and ensure smooth compliance once the
                    system becomes mandatory.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Conclusion</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The UAE&apos;s Electronic Invoicing System is a transformative step that modernizes tax
                    administration and aligns the country with global standards in digital fiscal reporting.
                    The phased rollout starting in mid-2026 gives businesses time to prepare, but the technical
                    requirements are detailed and demand early system upgrades, the appointment of an accredited
                    service provider, and strong internal controls.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed">
                <T>
                    As companies rework their invoicing infrastructure, many are turning to modern platforms
                    that simplify these compliance requirements. Solutions such as Accqrate can play a
                    supportive role by enabling structured e-invoicing, automating data validation, and
                    offering seamless integration capabilities that help businesses transition smoothly into
                    the new regulatory environment.
                </T>
            </p>
        </BlogLayout>
    );
}

export default UAEeInvoicing;