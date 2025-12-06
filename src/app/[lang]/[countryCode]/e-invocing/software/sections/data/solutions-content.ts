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

export type CountryCode = 'AE' | 'SA' | 'OM' | 'BH' | 'QA' | 'MY' | 'MU' | 'JO' | 'KW' | 'EG' | 'BE' | 'PL' | 'DEFAULT';

export const solutionsContent: Record<CountryCode, ContentItem[]> = {
  AE: [
    {
      content: 'Flexibility Meets Efficiency',
      desc: "Our innovative solutions are designed to fit your business's unique needs, offering both cloud-based and on-premises deployment. Experience the seamless integration of our application on your servers in under 3 hours, ensuring your data's privacy without compromising on functionality.",
      image: AssetPath.invoicing.manageTeam,
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
  SA: [
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
  OM: [
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
  BH: [
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
  QA: [
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
  KW: [
    {
      content: 'Kuwait Tax Authority Compliance',
      desc: 'Complete e-invoicing system supporting Kuwait tax authority requirements.',
      image: '/images/invoicing/manage-team.webp',
      sno: '01',
      index: 0,
      tab: 0
    },
    {
      content: 'Real-Time Authority Submission',
      desc: 'Instant invoice transmission to Kuwait tax authority systems.',
      image: '/images/invoicing/manage-team.webp',
      sno: '02',
      index: 1,
      tab: 1
    },
    {
      content: '5% VAT Compliance Module',
      desc: 'Automatic VAT calculation and reporting aligned with Kuwait VAT rates.',
      image: '/images/invoicing/manage-team.webp',
      sno: '03',
      index: 2,
      tab: 2
    },
    {
      content: 'Digital Certificate Authentication',
      desc: 'Secure authentication using digital certificates for invoice validation.',
      image: '/images/invoicing/manage-team.webp',
      sno: '04',
      index: 3,
      tab: 3
    },
    {
      content: 'Complete Transmission Tracking',
      desc: 'Full history and tracking of all invoice submissions and status changes.',
      image: '/images/invoicing/manage-team.webp',
      sno: '05',
      index: 4,
      tab: 4
    },
    {
      content: 'Error Handling with Auto-Retry',
      desc: 'Automatic failure recovery and intelligent retry mechanisms.',
      image: '/images/invoicing/manage-team.webp',
      sno: '06',
      index: 5,
      tab: 5
    },
    {
      content: 'Financial Records Management',
      desc: 'Long-term data retention and comprehensive financial record archiving.',
      image: '/images/invoicing/manage-team.webp',
      sno: '07',
      index: 6,
      tab: 6
    },
    {
      content: 'Business Partner Management',
      desc: 'Complete tracking and management of customers and vendors.',
      image: '/images/invoicing/manage-team.webp',
      sno: '08',
      index: 7,
      tab: 7
    },
    {
      content: 'System Authority Approval',
      desc: 'Kuwait tax authority approved e-invoicing system.',
      image: '/images/invoicing/manage-team.webp',
      sno: '09',
      index: 8,
      tab: 8
    },
    {
      content: 'Scalable Enterprise Architecture',
      desc: 'Scalable infrastructure supporting growing business requirements.',
      image: '/images/invoicing/manage-team.webp',
      sno: '10',
      index: 9,
      tab: 9
    },
    {
      content: 'Comprehensive Reporting Suite',
      desc: 'Advanced analytics and comprehensive financial reporting tools.',
      image: '/images/invoicing/manage-team.webp',
      sno: '11',
      index: 10,
      tab: 10
    },
    {
      content: 'Expert Implementation Support',
      desc: 'Guided implementation and deployment assistance.',
      image: '/images/invoicing/manage-team.webp',
      sno: '12',
      index: 11,
      tab: 11
    },
  ],
  EG: [
    {
      content: 'Egypt Tax Authority Integration',
      desc: 'Complete e-invoicing system registration with Egyptian tax authority.',
      image: '/images/invoicing/manage-team.webp',
      sno: '01',
      index: 0,
      tab: 0
    },
    {
      content: 'Portal Real-Time Submission',
      desc: 'Direct tax authority integration with real-time submission capabilities.',
      image: '/images/invoicing/manage-team.webp',
      sno: '02',
      index: 1,
      tab: 1
    },
    {
      content: 'PKI Digital Signature Support',
      desc: 'Public Key Infrastructure-based digital signatures for security.',
      image: '/images/invoicing/manage-team.webp',
      sno: '03',
      index: 2,
      tab: 2
    },
    {
      content: 'Egyptian Tax Code Management',
      desc: 'Complete database of Egyptian tax codes and requirements.',
      image: '/images/invoicing/manage-team.webp',
      sno: '04',
      index: 3,
      tab: 3
    },
    {
      content: 'Authority-Side Verification',
      desc: 'Invoice verification system with authority-side validation checks.',
      image: '/images/invoicing/manage-team.webp',
      sno: '05',
      index: 4,
      tab: 4
    },
    {
      content: 'Real-Time Compliance Alerts',
      desc: 'Instant notification of compliance issues and error conditions.',
      image: '/images/invoicing/manage-team.webp',
      sno: '06',
      index: 5,
      tab: 5
    },
    {
      content: 'Secure Data Archival',
      desc: 'Secure long-term storage with encryption and access controls.',
      image: '/images/invoicing/manage-team.webp',
      sno: '07',
      index: 6,
      tab: 6
    },
    {
      content: 'Multi-Branch Support',
      desc: 'Centralized management of invoicing across multiple branches.',
      image: '/images/invoicing/manage-team.webp',
      sno: '08',
      index: 7,
      tab: 7
    },
    {
      content: 'System Authority Certification',
      desc: 'Authority-approved e-invoicing platform with official certification.',
      image: '/images/invoicing/manage-team.webp',
      sno: '09',
      index: 8,
      tab: 8
    },
    {
      content: 'API Integration Framework',
      desc: 'Comprehensive APIs for third-party system integration.',
      image: '/images/invoicing/manage-team.webp',
      sno: '10',
      index: 9,
      tab: 9
    },
    {
      content: 'Advanced Business Intelligence',
      desc: 'Detailed reporting capabilities and business analytics tools.',
      image: '/images/invoicing/manage-team.webp',
      sno: '11',
      index: 10,
      tab: 10
    },
    {
      content: 'Professional Implementation',
      desc: 'Dedicated implementation team for system deployment and configuration.',
      image: '/images/invoicing/manage-team.webp',
      sno: '12',
      index: 11,
      tab: 11
    },
  ],
  MY: [
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
  JO: [
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