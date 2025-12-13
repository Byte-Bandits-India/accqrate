/* eslint-disable @typescript-eslint/no-unused-vars */

import T from "@/Components/UaeT";
import BlogLayout from "../../layout/BlogLayout";
import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";

function UAEvat2025() {
    return (
        <BlogLayout
            pageTitle="VAT in the UAE: Rates, Thresholds, Exemptions and Compliance Rules for 2025"
            updatedOn="Nov 25th, 2024"
            minRead="28"
        >
            <div className="relative w-full h-[400px] mb-6">
                <Image
                    src={AssetPath.blogs.uae.vat}
                    alt="UAE VAT Regulations 2025"
                    fill
                    className="object-cover rounded-lg"
                    priority
                />
            </div>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Value Added Tax has been a core element of the UAE&apos;s tax framework since its introduction
                    on 1 January 2018. It applies to most goods and services supplied within the country at a
                    standard rate of five percent. The system is designed so that VAT is collected at each stage
                    of the supply chain, while the final burden rests with the end consumer. Registered businesses
                    collect VAT on their sales, deduct the VAT they pay on business purchases, and remit the
                    balance to the Federal Tax Authority.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    This guide provides a complete explanation of how VAT works in the UAE, the registration
                    criteria, compliance obligations, invoicing rules, industry-specific treatments, e-invoicing
                    requirements, and the penalty regime.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Understanding VAT in the UAE</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    VAT in the UAE is an indirect tax applied to the consumption of goods and services. When a
                    business makes a taxable supply, it charges five percent VAT. When it purchases goods or
                    services for business use, it pays VAT. The difference between VAT collected on sales and
                    VAT paid on purchases represents its net VAT liability.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    The system ensures tax neutrality across the supply chain. Each registered entity remits
                    only the value added at its level. The final VAT burden is carried by the consumer.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>UAE VAT Timeline</T>
            </h3>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>2017: Introduction of Federal VAT Law</T>
                </li>
                <li>
                    <T>2018: VAT implementation at five percent</T>
                </li>
                <li>
                    <T>2023: Substantial VAT Law amendments brought into effect</T>
                </li>
                <li>
                    <T>2024: Major revisions to the Executive Regulations and formal mandate for e-invoicing announced</T>
                </li>
                <li>
                    <T>2026: Start of phased mandatory e-invoicing rollout</T>
                </li>
            </ul>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>VAT Rates and Their Treatment</T>
            </h3>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Standard rate of five percent</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    This applies to most goods and services, including retail, hospitality, utilities,
                    professional services, commercial property rentals, food and beverages, e-commerce
                    activities, and imported goods.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Zero-rated supplies</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Zero rating means the supply is taxable at zero percent, and the business can still claim
                    the input VAT it paid. Common examples include:
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-4 space-y-2">
                <li>
                    <T>Exports of goods and services outside the GCC VAT implementation zone</T>
                </li>
                <li>
                    <T>International transport</T>
                </li>
                <li>
                    <T>First supply of residential real estate within three years of completion</T>
                </li>
                <li>
                    <T>Supply of crude oil and natural gas</T>
                </li>
                <li>
                    <T>Certain qualified education and healthcare services</T>
                </li>
                <li>
                    <T>Investment-grade precious metals</T>
                </li>
            </ul>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Exempt supplies</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Exempt supplies do not attract VAT and businesses cannot recover any input VAT spent on
                    related costs. These include:
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Certain domestic financial services</T>
                </li>
                <li>
                    <T>Residential property (except the first supply)</T>
                </li>
                <li>
                    <T>Bare land</T>
                </li>
                <li>
                    <T>Local passenger transport</T>
                </li>
            </ul>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>How VAT Is Calculated in Practice</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    VAT is charged at five percent of the taxable amount.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Example: If a retailer sells a television for AED 2,000, VAT is calculated as AED 2,000
                    multiplied by 5 percent, which is AED 100. The customer pays AED 2,100.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    If the retailer originally purchased the television for AED 1,500 plus AED 75 VAT, the net
                    VAT payable to the FTA is AED 100 minus AED 75, which results in AED 25 due.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>VAT Registration Requirements</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Businesses must register for VAT when their taxable supplies and imports exceed AED 375,000
                    in the previous twelve months or are expected to exceed the threshold in the next thirty
                    days. Registration must occur within thirty days of meeting the threshold. Late registration
                    attracts an administrative penalty of AED 10,000.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Voluntary registration is available when taxable supplies exceed AED 187,500 but are below
                    the mandatory threshold. Voluntary registration enables input VAT recovery and is beneficial
                    for growing businesses.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Registration is completed on the EmaraTax portal provided by the Federal Tax Authority.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>VAT Invoicing Requirements</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Businesses must issue VAT-compliant invoices for every taxable supply. The UAE recognises
                    two types of VAT invoices:
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Full tax invoice</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Used for B2B supplies or transactions above AED 10,000. It must contain:
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-4 space-y-2">
                <li>
                    <T>A clear label identifying the document as a tax invoice</T>
                </li>
                <li>
                    <T>Supplier and recipient details including names and TRNs</T>
                </li>
                <li>
                    <T>A unique invoice number and invoice date</T>
                </li>
                <li>
                    <T>Date of supply when different from the invoice date</T>
                </li>
                <li>
                    <T>Description of goods or services supplied</T>
                </li>
                <li>
                    <T>Unit price, quantity, taxable values, and VAT amount</T>
                </li>
                <li>
                    <T>Total amount payable including VAT</T>
                </li>
                <li>
                    <T>Reverse charge indication where applicable</T>
                </li>
            </ul>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Simplified tax invoice</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Used for B2C supplies or transactions under AED 10,000. It requires fewer details but must
                    still include key tax information such as supplier details, TRN, invoice date, description,
                    and VAT amount.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Invoices must be issued within fourteen days of the supply date.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Filing VAT Returns</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    VAT registered entities must file VAT returns through the EmaraTax system. Filing frequency
                    depends on turnover:
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-4 space-y-2">
                <li>
                    <T>Monthly for businesses with turnover exceeding AED 150 million</T>
                </li>
                <li>
                    <T>Quarterly for all others</T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    VAT returns are due within twenty-eight days after the end of the tax period. The return must
                    include standard-rated supplies, zero-rated supplies, exempt supplies, reverse charge
                    transactions, adjustments, and the resulting VAT due or refundable.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Payment of VAT is made through EmaraTax using approved payment channels. Late payment results
                    in escalating penalties and interest.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>VAT Record Keeping</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Every VAT registered business must maintain detailed records including:
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>All invoices and credit notes issued and received</T>
                </li>
                <li>
                    <T>Records of imports and exports</T>
                </li>
                <li>
                    <T>Accounting records, ledgers, and journals</T>
                </li>
                <li>
                    <T>VAT apportionment workings</T>
                </li>
                <li>
                    <T>Zero-rating evidence</T>
                </li>
                <li>
                    <T>Capital asset records</T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Records must be stored for the statutory period and be available for FTA inspection.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Input VAT Recovery</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Businesses can claim input VAT on goods and services used to make taxable or zero-rated
                    supplies. Input VAT on costs related to exempt activities cannot be recovered.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Common non-recoverable VAT includes:
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-4 space-y-2">
                <li>
                    <T>Entertainment expenses</T>
                </li>
                <li>
                    <T>Motor vehicles not used exclusively for business</T>
                </li>
                <li>
                    <T>Employee benefits not mandated by UAE law</T>
                </li>
                <li>
                    <T>Expenses linked to exempt supplies</T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Where a business undertakes both taxable and exempt activities, input VAT must be apportioned
                    using an acceptable method based on taxable versus total turnover.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Imported goods for business use can be accounted for using the reverse charge mechanism,
                    avoiding cash payments at customs for registered businesses.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>VAT Treatment of Cross-Border Transactions</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Supplies leaving the GCC VAT zone are zero rated, provided export documentation is maintained.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Imports of goods attract VAT at customs or via reverse charge for registered importers.
                    Import of services attracts VAT via reverse charge unless the supplier is registered in the UAE.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Digital services supplied by foreign providers to UAE consumers may require VAT registration
                    for the foreign business under the consumer location rules.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Sector-Specific VAT Rules</T>
            </h3>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Education</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Recognised educational institutions can supply core education services at zero percent.
                    Ancillary items such as school uniforms, food, stationery, and electronic devices are taxed
                    at five percent.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Healthcare</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Qualified medical services and essential medicines are zero rated. Cosmetic or elective
                    medical services are usually standard rated.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Oil and gas</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Crude oil and natural gas are zero rated. Refined petroleum products and fuel sales are
                    generally standard rated.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Real estate</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Commercial property sales and leases are standard rated. The first supply of a new
                    residential building is zero rated, while all subsequent supplies are exempt. Bare land
                    remains exempt.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Financial services</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Margin-based financial services are exempt. Explicit fee-based services attract VAT. Some
                    investment products were granted VAT exemptions following recent regulatory changes.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Transport</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    International transport is zero rated. Domestic passenger transport remains exempt.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>E-Invoicing in the UAE</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The UAE is transitioning to a fully digitised invoicing framework through the national
                    Electronic Invoicing System, which will operate using a Peppol-based five-corner model.
                    E-invoices must be issued, transmitted, and stored in structured formats such as XML or JSON.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The phased rollout begins with a pilot in July 2026 followed by mandatory adoption for large
                    businesses in January 2027, smaller businesses in July 2027, and government entities in
                    October 2027.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    E-invoices are generated in the ERP system, validated and enriched by Accredited Service
                    Providers, transmitted simultaneously to the Federal Tax Authority and the buyer&apos;s ASP,
                    and stored securely within the UAE.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    The shift to structured invoicing enhances accuracy, minimises fraud, and creates consistency
                    across VAT reporting. It also introduces mandatory digital credit notes and real-time
                    reporting obligations.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Penalties for VAT Non-Compliance</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Penalties apply for a wide range of violations including:
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Late registration: AED 10,000</T>
                </li>
                <li>
                    <T>Late VAT return filing: AED 1,000 for the first occurrence and AED 2,000 for repetition within two years</T>
                </li>
                <li>
                    <T>Late VAT payment: immediate charges plus escalating monthly interest up to a maximum of 300 percent</T>
                </li>
                <li>
                    <T>Failure to maintain records: AED 10,000 for the first occurrence and AED 50,000 for repetition</T>
                </li>
                <li>
                    <T>Incorrect filings or falsified documentation: penalties in accordance with the Tax Procedures Law</T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Serious breaches such as deliberate tax evasion can lead to criminal liability.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>How Businesses Should Prepare</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Businesses should begin preparation well before the introduction of mandatory e-invoicing.
                    Key steps include:
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Reviewing VAT registration status and turnover thresholds</T>
                </li>
                <li>
                    <T>Updating invoicing templates and ensuring all mandatory data fields are reflected</T>
                </li>
                <li>
                    <T>Strengthening record-keeping and reconciliation processes</T>
                </li>
                <li>
                    <T>Upgrading ERP and accounting systems for structured invoice data</T>
                </li>
                <li>
                    <T>Selecting a reliable Accredited Service Provider for e-invoicing</T>
                </li>
                <li>
                    <T>Conducting internal testing and staff training</T>
                </li>
                <li>
                    <T>Implementing controls to ensure accurate VAT reporting and timely submission</T>
                </li>
            </ul>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Conclusion</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    VAT has become an integral component of the UAE&apos;s fiscal landscape and its influence is
                    only increasing with ongoing regulatory enhancements and the migration to mandatory
                    e-invoicing. For businesses operating in the UAE, the priority is to maintain precise
                    records, issue compliant invoices, file returns correctly, and prepare their systems for
                    structured invoicing. These steps not only ensure adherence to the law but also strengthen
                    operational transparency and financial efficiency.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed">
                <T>
                    Platforms such as Accqrate can further support this transition by consolidating invoicing,
                    VAT reporting, and compliance workflows in a single environment, helping businesses navigate
                    the regulatory landscape with greater clarity and control.
                </T>
            </p>
        </BlogLayout>
    );
}

export default UAEvat2025;