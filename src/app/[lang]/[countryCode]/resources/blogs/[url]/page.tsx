import type { JSX } from "react";
import React from "react";
import { notFound } from "next/navigation";

// ✅ Import all blog components
import CreditNote from "../blogpages/CreditNote";
import DebitNote from "../blogpages/DebitNote";
import AccqrateBooksMSMEAccounting from "../blogpages/AccqrateBooksMSMEAccounting";
import AdaptingBusiness from "../blogpages/AdaptingBusiness";
import AutomotiveIndustry from "../blogpages/AutomotiveIndustry";
import BahrainInvoicing from "../blogpages/BahrainInvoicing";
import BreakingBarriers from "../blogpages/BreakingBarriers";
import ComplaintInvoice from "../blogpages/ComplaintInvoice";
import FinancialPenalties from "../blogpages/FinancialPenalties";
import GoodsReceipts from "../blogpages/GoodsReceipts";
import Microsoft365 from "../blogpages/Microsoft365";
import OmanInvoicing from "../blogpages/OmanInvoicing";
import OracleInvoicing from "../blogpages/OracleInvoicing";
import Pos from "../blogpages/Pos";
import RiyadhExpoBlog from "../blogpages/RiyadhExpo";
import SapIntegration from "../blogpages/SapIntegration";
import SapEcc from "../blogpages/SapEccChallenge";
import Streamline from "../blogpages/Streamline";
import TransformComplaint from "../blogpages/TransformComplaint";
import ZatcaComprehensive from "../blogpages/ZatcaComprehensive";
import ZatcaFatooraDeviceRequirments from "../blogpages/ZatcaFatooraDeviceRequirments";
import ZatcaInvoice from "../blogpages/ZatcaInvoice";
import ZatcaInvoicing from "../blogpages/ZatcaInvoicing";
import BelgiumCreditNotes from "../blogpages/belgium/BelgiumCreditNotes";
import BelgiumEInvoicingFAQs from "../blogpages/belgium/BelgiumEInvoicingFAQs";
import BelgiumEInvoicingMandate from "../blogpages/belgium/BelgiumEInvoicingMandate";
import BelgiumCorporateTax from "../blogpages/belgium/BelgiumCorporateTax";
import BelgiumTechnicalRules from "../blogpages/belgium/BelgiumTechnicalRules";
import BelgiumTaxSystem2025 from "../blogpages/belgium/BelgiumTaxSystem2025";
import BelgiumIncomeTax from "../blogpages/belgium/BelgiumIncomeTax";
import BelgiumVAT from "../blogpages/belgium/BelgiumVAT";
import BelgiumVATNumber from "../blogpages/belgium/BelgiumVATNumber";
import PeppolMercuriusBelgium from "../blogpages/belgium/PeppolMercuriusBelgium";
import ErpAdoption2025 from "../blogpages/ErpAdoption2025";
import PolandKSeF from "../blogpages/poland/PolandKSeF";
import PolandKSeFMandatory from "../blogpages/poland/PolandKSeFMandatory";
import PolandKSeF2 from "../blogpages/poland/PolandKSeF2";
import PolandKSeFImplementation from "../blogpages/poland/PolandKSeFImplementation";
import UAEeInvoicing from "../blogpages/uae/UAEeInvoicing";
import UAEvat2025 from "../blogpages/uae/UAEvat2025";
import UAECorporateTax from "../blogpages/uae/UAECorporateTax";
import UAEVATReturnFiling from "../blogpages/uae/UAEVATReturnFiling";
import UAEVATCalculation from "../blogpages/uae/UAEVATCalculation";
import UAECorporateTaxFAQ from "../blogpages/uae/UAECorporateTaxFAQ";
import UAEVATInvoice from "../blogpages/uae/UAEVATInvoice";
import UAEVATRateStructure from "../blogpages/uae/UAEVATRateStructure";
import UAEVATRefund from "../blogpages/uae/UAEVATRefund";
import UAEVATPenalties from "../blogpages/uae/UAEVATPenalties";
import UAEVATComplete2025 from "../blogpages/uae/UAEVATComplete2025";
import UAEExciseTax from "../blogpages/uae/UAEExciseTax";
import UAEMoFAAttestation from "../blogpages/uae/UAEMoFAAttestation";
import PeppolCTCUAE from "../blogpages/uae/PeppolCTCUAE";
import UAETaxCreditNotes from "../blogpages/uae/UAETaxCreditNotes";
import UAEDigitalSignatureCertificate from "../blogpages/uae/UAEDigitalSignatureCertificate";
import UAE_TRN_Verification from "../blogpages/uae/UAE_TRN_Verification";
import UAE_Excise_Registration from "../blogpages/uae/UAE_Excise_Registration";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ url: string }>;
}) {
  const { url } = await params;

  // ✅ Map URLs to blog components
  const blogComponents: Record<string, JSX.Element> = {
    "credit-note": <CreditNote />,
    "debit-note": <DebitNote />,
    "zatca-invoicing": <ZatcaInvoicing />,
    "oracle-invoicing": <OracleInvoicing />,
    "microsoft365": <Microsoft365 />,
    "zatca-comprehensive-guide": <ZatcaComprehensive />,
    "sap-integration-with-zatca": <SapIntegration />,
    "e-invoicing-bahrain": <BahrainInvoicing />,
    "e-invoicing-oman": <OmanInvoicing />,
    "streamline": <Streamline />,
    "good-receipts": <GoodsReceipts />,
    "adapting-business": <AdaptingBusiness />,
    "breaking-barriers": <BreakingBarriers />,
    "zatca-invoice": <ZatcaInvoice />,
    "financial-penalities": <FinancialPenalties />,
    "complaint-invoice": <ComplaintInvoice />,
    "riyadh-expo": <RiyadhExpoBlog />,
    "zatca-fatoora-device-onboarding-requirements": <ZatcaFatooraDeviceRequirments />,
    "pos-billing-software-intergration-with-zatca": <Pos />,
    "enabling-marketplaces-with-e-invoicing": <TransformComplaint />,
    "automotive-industry": <AutomotiveIndustry />,
    "sap-ecc-challenge": <SapEcc />,
    "accqrate-books-msme-accounting": <AccqrateBooksMSMEAccounting />,
    //belgium
    "belgium-credit-notes": <BelgiumCreditNotes />,
    "belgium-e-invoicing-faqs": <BelgiumEInvoicingFAQs />,
    "belgium-e-invoicing-mandate": <BelgiumEInvoicingMandate />,
    "belgium-corporate-tax": <BelgiumCorporateTax />,
    "belgium-technical-rules": <BelgiumTechnicalRules />,
    "belgium-tax-system-2025": <BelgiumTaxSystem2025 />,
    "belgium-income-tax": <BelgiumIncomeTax />,
    "belgium-vat": <BelgiumVAT />,
    "belgium-vat-number": <BelgiumVATNumber />,
    "peppol-mercurius-belgium": <PeppolMercuriusBelgium />,
    "erp-adoption-2025": <ErpAdoption2025 />,
    //Poland
    "PolandKSeF": <PolandKSeF />,
    "PolandKSeFMandatory": <PolandKSeFMandatory />,
    "PolandKSeF2": <PolandKSeF2 />,
    "PolandKSeFImplementation": <PolandKSeFImplementation />,
    "UAEeInvoicing": <UAEeInvoicing />,
    "UAEvat2025": <UAEvat2025 />,
    "UAECorporateTax": <UAECorporateTax />,
    "UAEVATReturnFiling": <UAEVATReturnFiling />,
    "UAEVATCalculation": <UAEVATCalculation />,
    "UAECorporateTaxFAQ": <UAECorporateTaxFAQ />,
    "UAEVATInvoice": <UAEVATInvoice />,
    "UAEVATRateStructure": <UAEVATRateStructure />,
    "UAEVATRefund": <UAEVATRefund />,
    "UAEVATPenalties": <UAEVATPenalties />,
    "UAEVATComplete2025": <UAEVATComplete2025 />,
    "UAEExciseTax": <UAEExciseTax />,
    "UAEMoFAAttestation": <UAEMoFAAttestation />,
    "PeppolCTCUAE": <PeppolCTCUAE />,
    "UAETaxCreditNotes": <UAETaxCreditNotes />,
    "UAEDigitalSignatureCertificate": <UAEDigitalSignatureCertificate />,
    "UAE_TRN_Verification": <UAE_TRN_Verification />,
    "UAE_Excise_Registration": <UAE_Excise_Registration />
  };

  const Component = blogComponents[url];
  if (!Component) return notFound();

  // Wrap in a div with overflow-x-hidden to prevent horizontal scroll
  return (
    <div className="overflow-x-hidden">
      {Component}
    </div>
  );
}
