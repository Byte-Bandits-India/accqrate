import AssetPath from "@/AssetPath/AssetPath";
import type { StaticImageData } from 'next/image';

export interface ContentItem {
  content: string;
  desc: string;
  image: string | StaticImageData;
  sno: string;
  index: number;
  tab: number;
}

export type CountryCode ='JD' | 'MU' | 'MA'| 'BE' | 'PL' | 'DEFAULT';

export const solutionsContent: Record<CountryCode, ContentItem[]> = {

  BE: [
    {
      content: 'Flexibility Meets Efficiency',
      desc: "Our innovative solutions are designed to fit your business's unique needs, offering both cloud-based and on-premises deployment. Experience the seamless integration of our application on your servers in under 3 hours, ensuring your data's privacy without compromising on functionality.",
      image: '/images/invoicing/manage-team.webp',
      sno: '01',
      index: 0,
      tab: 0
    },
    {
      content: 'Transparent and Competitive Pricing',
      desc: 'Forget the worries of per-invoice charges. Our competitive pricing plans offer astonishing slab variations, allowing you to plan your budget with confidence and avoid unexpected costs.',
      image: '/images/invoicing/manage-team.webp',
      sno: '02',
      index: 1,
      tab: 1
    },
    {
      content: 'Swift Peppol Onboarding',
      desc: 'Get started with Belgiums e-invoicing mandate in minutes. Provide your company details, and Accqrate activates your Peppol-ready, EN 16931-compliant setup instantly for seamless B2B e-invoicing.',
      image: '/images/invoicing/manage-team.webp',
      sno: '03',
      index: 2,
      tab: 2
    },
    {
  content: 'Automatic EN 16931 Field Mapping',
  desc: 'Remove formatting and compliance errors with Accqrate\'s automated mapping of all mandatory EN 16931 fields, ensuring every Belgian e-invoice meets the structured Peppol and UBL standards, no manual intervention required.',
  image: '/images/invoicing/manage-team.webp',
  sno: '04',
  index: 3,
  tab: 3
},

    {
      content: 'Custom PDF Template Replication',
      desc: 'Maintain consistency with precise replication of your existing invoice templates, allowing for seamless printing, downloading, and archiving within the middleware.',
      image: '/images/invoicing/manage-team.webp',
      sno: '05',
      index: 4,
      tab: 4
    },
    {
      content: 'Long-Term Invoice Archiving',
      desc: 'Securely archive your PDFs and XMLs in our middleware for a decade, with no additional costs, ensuring long-term compliance and peace of mind.',
      image: '/images/invoicing/manage-team.webp',
      sno: '06',
      index: 5,
      tab: 5
    },
    {
      content: 'Automated Email Notifications',
      desc: 'Stay informed with automated success and failure notifications sent directly to your designated finance email, keeping you updated on every transaction.',
      image: '/images/invoicing/manage-team.webp',
      sno: '07',
      index: 6,
      tab: 6
    },
    {
      content: 'Comprehensive Peppol Reconciliation Dashboard',
      desc: 'Effortlessly reconcile invoices exchanged through Peppol with your internal systems using Accqrate\'s unified dashboards, detailed compliance reports, and exportable Excel summaries.',
      image: '/images/invoicing/manage-team.webp',
      sno: '08',
      index: 7,
      tab: 7
    },
    {
      content: 'AI-Driven Error Analytics',
      desc: 'Our advanced analytics detect frequent errors and provide actionable insights to prevent them, optimizing your invoicing process with the power of artificial intelligence.',
      image: '/images/invoicing/manage-team.webp',
      sno: '09',
      index: 8,
      tab: 8
    },
    {
      content: 'Future-Proof with ERP Scalability',
      desc: 'When your business outgrows its current systems, our scalable ERP modules ensure compliance and growth without the need to overhaul your technology stack.',
      image: '/images/invoicing/manage-team.webp',
      sno: '10',
      index: 9,
      tab: 9
    },
    {
      content: 'Full Support for Belgian E-Invoicing Compliance Reviews',
      desc: 'Accqrate goes beyond enablement. We provide end-to-end support during Belgian e-invoicing compliance checks, ensuring your Peppol and EN 16931 processes meet all regulatory requirements.',
      image: '/images/invoicing/manage-team.webp',
      sno: '11',
      index: 10,
      tab: 10
    },
    {
      content: 'High-Performance Application',
      desc: 'Our platform stands tested and trusted, flawlessly handling over half a million invoices daily per customer, empowering your business to perform at its best.',
      image: '/images/invoicing/manage-team.webp',
      sno: '12',
      index: 11,
      tab: 11
    },
  ],

  PL: [
    {
      content: 'Flexibility Meets Efficiency',
      desc: "Our innovative solutions are designed to fit your business's unique needs, offering both cloud-based and on-premises deployment. Experience the seamless integration of our application on your servers in under 3 hours, ensuring your data's privacy without compromising on functionality.",
      image: '/images/invoicing/manage-team.webp',
      sno: '01',
      index: 0,
      tab: 0
    },
    {
      content: 'Transparent and Competitive Pricing',
      desc: 'Forget the worries of per-invoice charges. Our competitive pricing plans offer astonishing slab variations, allowing you to plan your budget with confidence and avoid unexpected costs.',
      image: '/images/invoicing/manage-team.webp',
      sno: '02',
      index: 1,
      tab: 1
    },
    {
      content: 'Swift KSeF Onboarding',
      desc: 'Begin your KSeF journey effortlessly. Share your company information, and Accqrate onboard you quickly with a fully compliant FA(3) XML and KSeF-connected setup ready for Poland\'s mandatory e-invoicing framework.',
      image: '/images/invoicing/manage-team.webp',
      sno: '03',
      index: 2,
      tab: 2
    },
    {
      content: 'Automatic FA(3) XML Field Mapping',
      desc: 'Avoid validation failures with Accqrate\'s automatic population of all mandatory KSeF FA(3) fields, guaranteeing every Polish e-invoice is generated in the correct schema, without needing dedicated technical resources.',
      image: '/images/invoicing/manage-team.webp',
      sno: '04',
      index: 3,
      tab: 3
    },
    {
      content: 'Custom PDF Template Replication',
      desc: 'Maintain consistency with precise replication of your existing invoice templates, allowing for seamless printing, downloading, and archiving within the middleware.',
      image: '/images/invoicing/manage-team.webp',
      sno: '05',
      index: 4,
      tab: 4
    },
    {
      content: 'Long-Term Invoice Archiving',
      desc: 'Securely archive your PDFs and XMLs in our middleware for a decade, with no additional costs, ensuring long-term compliance and peace of mind.',
      image: '/images/invoicing/manage-team.webp',
      sno: '06',
      index: 5,
      tab: 5
    },
    {
      content: 'Automated Email Notifications',
      desc: 'Stay informed with automated success and failure notifications sent directly to your designated finance email, keeping you updated on every transaction.',
      image: '/images/invoicing/manage-team.webp',
      sno: '07',
      index: 6,
      tab: 6
    },
    {
      content: 'Comprehensive KSeF Reconciliation Dashboard',
      desc: 'Easily match and reconcile invoices submitted or retrieved from KSeF with your business applications through Accqrate\'s intuitive dashboards, granular reports, and Excel-ready reconciliation outputs.',
      image: '/images/invoicing/manage-team.webp',
      sno: '08',
      index: 7,
      tab: 7
    },
    {
      content: 'AI-Driven Error Analytics',
      desc: 'Our advanced analytics detect frequent errors and provide actionable insights to prevent them, optimizing your invoicing process with the power of artificial intelligence.',
      image: '/images/invoicing/manage-team.webp',
      sno: '09',
      index: 8,
      tab: 8
    },
    {
      content: 'Future-Proof with ERP Scalability',
      desc: 'When your business outgrows its current systems, our scalable ERP modules ensure compliance and growth without the need to overhaul your technology stack.',
      image: '/images/invoicing/manage-team.webp',
      sno: '10',
      index: 9,
      tab: 9
    },
    {
      content: 'Full Support for KSeF Compliance Reviews',
      desc: 'Accqrate doesn\'t stop at implementation. We offer complete assistance during KSeF-related compliance reviews, ensuring every FA(3) invoice and integration meets Poland\'s mandatory e-invoicing standards.',
      image: '/images/invoicing/manage-team.webp',
      sno: '11',
      index: 10,
      tab: 10
    },
    {
      content: 'High-Performance Application',
      desc: 'Our platform stands tested and trusted, flawlessly handling over half a million invoices daily per customer, empowering your business to perform at its best.',
      image: '/images/invoicing/manage-team.webp',
      sno: '12',
      index: 11,
      tab: 11
    },
  ],

  MA: [
    {
      content: 'Flexibility Meets Efficiency',
      desc: "Our innovative solutions are designed to fit your business's unique needs, offering both cloud-based and on-premises deployment. Experience the seamless integration of our application on your servers in under 3 hours, ensuring your data's privacy without compromising on functionality.",
      image: '/images/invoicing/manage-team.webp',
      sno: '01',
      index: 0,
      tab: 0
    },
    {
      content: 'Transparent and Competitive Pricing',
      desc: 'Forget the worries of per-invoice charges. Our competitive pricing plans offer astonishing slab variations, allowing you to plan your budget with confidence and avoid unexpected costs.',
      image: '/images/invoicing/manage-team.webp',
      sno: '02',
      index: 1,
      tab: 1
    },
    {
      content: 'Swift Onboarding to IRBM\'s system',
      desc: 'Head Start your journey with quick onboarding to IRBM\'s System. Simply have your company data at hand, and let Accqrate onboard you swiftly and efficiently.',
      image: '/images/invoicing/manage-team.webp',
      sno: '03',
      index: 2,
      tab: 2
    },
    {
      content: 'Automatic Malay Translations',
      desc: 'Eliminate the language barrier with our automatic translation of all mandatory fields for LHDN compliance, ensuring accuracy without the need for dedicated translation personnel.',
      image: '/images/invoicing/manage-team.webp',
      sno: '04',
      index: 3,
      tab: 3
    },
    {
      content: 'Custom PDF Template Replication',
      desc: 'Maintain consistency with precise replication of your existing invoice templates, allowing for seamless printing, downloading, and archiving within the middleware.',
      image: '/images/invoicing/manage-team.webp',
      sno: '05',
      index: 4,
      tab: 4
    },
    {
      content: 'Long-Term Invoice Archiving',
      desc: 'Securely archive your PDFs and XMLs in our middleware for a decade, with no additional costs, ensuring long-term compliance and peace of mind.',
      image: '/images/invoicing/manage-team.webp',
      sno: '06',
      index: 5,
      tab: 5
    },
    {
      content: 'Automated Email Notifications',
      desc: 'Stay informed with automated success and failure notifications sent directly to your designated finance email, keeping you updated on every transaction.',
      image: '/images/invoicing/manage-team.webp',
      sno: '07',
      index: 6,
      tab: 6
    },
    {
      content: 'Comprehensive Reconciliation Dashboard',
      desc: 'Effortlessly reconcile invoices across your applications and IRBM\'s System with our comprehensive dashboards, detailed reports, and exportable excel documents.',
      image: '/images/invoicing/manage-team.webp',
      sno: '08',
      index: 7,
      tab: 7
    },
    {
      content: 'AI-Driven Error Analytics',
      desc: 'Our advanced analytics detect frequent errors and provide actionable insights to prevent them, optimizing your invoicing process with the power of artificial intelligence.',
      image: '/images/invoicing/manage-team.webp',
      sno: '09',
      index: 8,
      tab: 8
    },
    {
      content: 'Future-Proof with ERP Scalability',
      desc: 'When your business outgrows its current systems, our scalable ERP modules ensure compliance and growth without the need to overhaul your technology stack.',
      image: '/images/invoicing/manage-team.webp',
      sno: '10',
      index: 9,
      tab: 9
    },
    {
      content: 'Full Support for LHDN Audits',
      desc: 'We go beyond implementation. Our commitment to compliance includes full support during LHDN audits, ensuring your business meets all regulatory requirements.',
      image: '/images/invoicing/manage-team.webp',
      sno: '11',
      index: 10,
      tab: 10
    },
    {
      content: 'High-Performance Application',
      desc: 'Our platform stands tested and trusted, flawlessly handling over half a million invoices daily per customer, empowering your business to perform at its best.',
      image: '/images/invoicing/manage-team.webp',
      sno: '12',
      index: 11,
      tab: 11
    },
  ],

  MU: [
    {
      content: 'Flexibility Meets Efficiency',
      desc: "Our innovative solutions are designed to fit your business's unique needs, offering both cloud-based and on-premises deployment. Experience the seamless integration of our application on your servers in under 3 hours, ensuring your data's privacy without compromising on functionality.",
      image: '/images/invoicing/manage-team.webp',
      sno: '01',
      index: 0,
      tab: 0
    },
    {
      content: 'Transparent and Competitive Pricing',
      desc: 'Forget the worries of per-invoice charges. Our competitive pricing plans offer astonishing slab variations, allowing you to plan your budget with confidence and avoid unexpected costs.',
      image: '/images/invoicing/manage-team.webp',
      sno: '02',
      index: 1,
      tab: 1
    },
    {
      content: 'Swift Fatoora Onboarding',
      desc: 'Jumpstart your journey with Fatoora in less than 5 minutes. Simply have your company data at hand, and let Accqrate onboard you swiftly and efficiently.',
      image: '/images/invoicing/manage-team.webp',
      sno: '03',
      index: 2,
      tab: 2
    },
    {
      content: 'Automatic Arabic Translations',
      desc: 'Eliminate the language barrier with our automatic translation of all mandatory fields for MRA compliance, ensuring accuracy without the need for dedicated translation personnel.',
      image: '/images/invoicing/manage-team.webp',
      sno: '04',
      index: 3,
      tab: 3
    },
    {
      content: 'Custom PDF Template Replication',
      desc: 'Maintain consistency with precise replication of your existing invoice templates, allowing for seamless printing, downloading, and archiving within the middleware.',
      image: '/images/invoicing/manage-team.webp',
      sno: '05',
      index: 4,
      tab: 4
    },
    {
      content: 'Long-Term Invoice Archiving',
      desc: 'Securely archive your PDFs and XMLs in our middleware for a decade, with no additional costs, ensuring long-term compliance and peace of mind.',
      image: '/images/invoicing/manage-team.webp',
      sno: '06',
      index: 5,
      tab: 5
    },
    {
      content: 'Automated Email Notifications',
      desc: 'Stay informed with automated success and failure notifications sent directly to your designated finance email, keeping you updated on every transaction.',
      image: '/images/invoicing/manage-team.webp',
      sno: '07',
      index: 6,
      tab: 6
    },
    {
      content: 'Comprehensive Reconciliation Dashboard',
      desc: 'Effortlessly reconcile invoices across your applications and MRA with our comprehensive dashboards, detailed reports, and exportable excel documents.',
      image: '/images/invoicing/manage-team.webp',
      sno: '08',
      index: 7,
      tab: 7
    },
    {
      content: 'AI-Driven Error Analytics',
      desc: 'Our advanced analytics detect frequent errors and provide actionable insights to prevent them, optimizing your invoicing process with the power of artificial intelligence.',
      image: '/images/invoicing/manage-team.webp',
      sno: '09',
      index: 8,
      tab: 8
    },
    {
      content: 'Future-Proof with ERP Scalability',
      desc: 'When your business outgrows its current systems, our scalable ERP modules ensure compliance and growth without the need to overhaul your technology stack.',
      image: '/images/invoicing/manage-team.webp',
      sno: '10',
      index: 9,
      tab: 9
    },
    {
      content: 'Full Support for MRA Audits',
      desc: 'We go beyond implementation. Our commitment to compliance includes full support during MRA audits, ensuring your business meets all regulatory requirements.',
      image: '/images/invoicing/manage-team.webp',
      sno: '11',
      index: 10,
      tab: 10
    },
    {
      content: 'High-Performance Application',
      desc: 'Our platform stands tested and trusted, flawlessly handling over half a million invoices daily per customer, empowering your business to perform at its best.',
      image: '/images/invoicing/manage-team.webp',
      sno: '12',
      index: 11,
      tab: 11
    },
  ],

  JD: [
    {
      content: 'Flexibility Meets Efficiency',
      desc: "Our innovative solutions are designed to fit your business's unique needs, offering both cloud-based and on-premises deployment. Experience the seamless integration of our application on your servers in under 3 hours, ensuring your data's privacy without compromising on functionality.",
      image: '/images/invoicing/manage-team.webp',
      sno: '01',
      index: 0,
      tab: 0
    },
    {
      content: 'Transparent and Competitive Pricing',
      desc: 'Forget the worries of per-invoice charges. Our competitive pricing plans offer astonishing slab variations, allowing you to plan your budget with confidence and avoid unexpected costs.',
      image: '/images/invoicing/manage-team.webp',
      sno: '02',
      index: 1,
      tab: 1
    },
    {
      content: 'Swift Fatoora Onboarding',
      desc: 'Jumpstart your journey with Fatoora in less than 5 minutes. Simply have your company data at hand, and let Accqrate onboard you swiftly and efficiently.',
      image: '/images/invoicing/manage-team.webp',
      sno: '03',
      index: 2,
      tab: 2
    },
    {
      content: 'Automatic Arabic Translations',
      desc: 'Eliminate the language barrier with our automatic translation of all mandatory fields for ISTD compliance, ensuring accuracy without the need for dedicated translation personnel.',
      image: '/images/invoicing/manage-team.webp',
      sno: '04',
      index: 3,
      tab: 3
    },
    {
      content: 'Custom PDF Template Replication',
      desc: 'Maintain consistency with precise replication of your existing invoice templates, allowing for seamless printing, downloading, and archiving within the middleware.',
      image: '/images/invoicing/manage-team.webp',
      sno: '05',
      index: 4,
      tab: 4
    },
    {
      content: 'Long-Term Invoice Archiving',
      desc: 'Securely archive your PDFs and XMLs in our middleware for a decade, with no additional costs, ensuring long-term compliance and peace of mind.',
      image: '/images/invoicing/manage-team.webp',
      sno: '06',
      index: 5,
      tab: 5
    },
    {
      content: 'Automated Email Notifications',
      desc: 'Stay informed with automated success and failure notifications sent directly to your designated finance email, keeping you updated on every transaction.',
      image: '/images/invoicing/manage-team.webp',
      sno: '07',
      index: 6,
      tab: 6
    },
    {
      content: 'Comprehensive Reconciliation Dashboard',
      desc: 'Effortlessly reconcile invoices across your applications and ISTD with our comprehensive dashboards, detailed reports, and exportable excel documents.',
      image: '/images/invoicing/manage-team.webp',
      sno: '08',
      index: 7,
      tab: 7
    },
    {
      content: 'AI-Driven Error Analytics',
      desc: 'Our advanced analytics detect frequent errors and provide actionable insights to prevent them, optimizing your invoicing process with the power of artificial intelligence.',
      image: '/images/invoicing/manage-team.webp',
      sno: '09',
      index: 8,
      tab: 8
    },
    {
      content: 'Future-Proof with ERP Scalability',
      desc: 'When your business outgrows its current systems, our scalable ERP modules ensure compliance and growth without the need to overhaul your technology stack.',
      image: '/images/invoicing/manage-team.webp',
      sno: '10',
      index: 9,
      tab: 9
    },
    {
      content: 'Full Support for ISTD Audits',
      desc: 'We go beyond implementation. Our commitment to compliance includes full support during ISTD audits, ensuring your business meets all regulatory requirements.',
      image: '/images/invoicing/manage-team.webp',
      sno: '11',
      index: 10,
      tab: 10
    },
    {
      content: 'High-Performance Application',
      desc: 'Our platform stands tested and trusted, flawlessly handling over half a million invoices daily per customer, empowering your business to perform at its best.',
      image: '/images/invoicing/manage-team.webp',
      sno: '12',
      index: 11,
      tab: 11
    },
  ],

  DEFAULT: [
    {
      content: 'Flexibility Meets Efficiency',
      desc: "Our innovative solutions are designed to fit your business's unique needs, offering both cloud-based and on-premises deployment. Experience the seamless integration of our application on your servers in under 3 hours, ensuring your data's privacy without compromising on functionality.",
      image: '/images/invoicing/manage-team.webp',
      sno: '01',
      index: 0,
      tab: 0
    },
    {
      content: 'Transparent and Competitive Pricing',
      desc: 'Forget the worries of per-invoice charges. Our competitive pricing plans offer astonishing slab variations, allowing you to plan your budget with confidence and avoid unexpected costs.',
      image: '/images/invoicing/manage-team.webp',
      sno: '02',
      index: 1,
      tab: 1
    },
    {
      content: 'Swift Fatoora Onboarding',
      desc: 'Jumpstart your journey with Fatoora in less than 5 minutes. Simply have your company data at hand, and let Accqrate onboard you swiftly and efficiently.',
      image: '/images/invoicing/manage-team.webp',
      sno: '03',
      index: 2,
      tab: 2
    },
    {
      content: 'Automatic Arabic Translations',
      desc: 'Eliminate the language barrier with our automatic translation of all mandatory fields for ZATCA compliance, ensuring accuracy without the need for dedicated translation personnel.',
      image: '/images/invoicing/manage-team.webp',
      sno: '04',
      index: 3,
      tab: 3
    },
    {
      content: 'Custom PDF Template Replication',
      desc: 'Maintain consistency with precise replication of your existing invoice templates, allowing for seamless printing, downloading, and archiving within the middleware.',
      image: '/images/invoicing/manage-team.webp',
      sno: '05',
      index: 4,
      tab: 4
    },
    {
      content: 'Long-Term Invoice Archiving',
      desc: 'Securely archive your PDFs and XMLs in our middleware for a decade, with no additional costs, ensuring long-term compliance and peace of mind.',
      image: '/images/invoicing/manage-team.webp',
      sno: '06',
      index: 5,
      tab: 5
    },
    {
      content: 'Automated Email Notifications',
      desc: 'Stay informed with automated success and failure notifications sent directly to your designated finance email, keeping you updated on every transaction.',
      image: '/images/invoicing/manage-team.webp',
      sno: '07',
      index: 6,
      tab: 6
    },
    {
      content: 'Comprehensive Reconciliation Dashboard',
      desc: 'Effortlessly reconcile invoices across your applications and ZATCA with our comprehensive dashboards, detailed reports, and exportable excel documents.',
      image: '/images/invoicing/manage-team.webp',
      sno: '08',
      index: 7,
      tab: 7
    },
    {
      content: 'AI-Driven Error Analytics',
      desc: 'Our advanced analytics detect frequent errors and provide actionable insights to prevent them, optimizing your invoicing process with the power of artificial intelligence.',
      image: '/images/invoicing/manage-team.webp',
      sno: '09',
      index: 8,
      tab: 8
    },
    {
      content: 'Future-Proof with ERP Scalability',
      desc: 'When your business outgrows its current systems, our scalable ERP modules ensure compliance and growth without the need to overhaul your technology stack.',
      image: '/images/invoicing/manage-team.webp',
      sno: '10',
      index: 9,
      tab: 9
    },
    {
      content: 'Full Support for ZATCA Audits',
      desc: 'We go beyond implementation. Our commitment to compliance includes full support during ZATCA audits, ensuring your business meets all regulatory requirements.',
      image: '/images/invoicing/manage-team.webp',
      sno: '11',
      index: 10,
      tab: 10
    },
    {
      content: 'High-Performance Application',
      desc: 'Our platform stands tested and trusted, flawlessly handling over half a million invoices daily per customer, empowering your business to perform at its best.',
      image: '/images/invoicing/manage-team.webp',
      sno: '12',
      index: 11,
      tab: 11
    },
  ],
};

// Helper function to get content based on country
export const getSolutionsContent = (countryCode?: string): ContentItem[] => {
  if (!countryCode) return solutionsContent.DEFAULT;
  
  const code = countryCode.toUpperCase() as CountryCode;
  const raw = solutionsContent[code] || solutionsContent.DEFAULT;

  // Normalize image values: if the entry uses the demo string path, replace
  // it with the centralized AssetPath reference so Next/Image accepts it.
  return raw.map(item => ({
    ...item,
    image: (typeof item.image === 'string' && item.image.includes('/images/invoicing/manage-team.webp'))
      ? AssetPath.invoicing.manageTeam
      : item.image,
  }))
};