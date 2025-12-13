/* eslint-disable @typescript-eslint/no-unused-vars */

import T from "@/Components/UaeT";
import BlogLayout from "../../layout/BlogLayout";
import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";

function UAEVATZeroRatedVsExempt() {
    return (
        <BlogLayout
            pageTitle="Zero Rated versus Exempt Supplies in the UAE VAT System: Complete Guide to Classification and Compliance"
            updatedOn="Nov 25th, 2024"
            minRead="32"
        >
            <div className="relative w-full h-[400px] mb-6">
                <Image
                    src={AssetPath.blogs.uae.zero}
                    alt="UAE VAT Zero Rated vs Exempt Supplies Guide"
                    fill
                    className="object-cover rounded-lg"
                    priority
                />
            </div>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Understanding whether a supply is zero rated or exempt is one of the most important VAT
                    decisions a business has to make. The difference matters because it determines whether
                    input tax can be recovered, how pricing should be set, and what reporting is required.
                    This guide explains the concepts, lists common categories, shows how to treat mixed
                    activities, highlights common mistakes, and offers practical actions to stay compliant.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>What Zero Rated Means</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    A zero rated supply is a taxable supply with a VAT rate of zero percent. The supply
                    itself carries a zero VAT rate but remains within the VAT system. Businesses making zero
                    rated supplies must register for VAT if they meet the registration threshold and must
                    report those supplies on their VAT returns. Crucially, input VAT incurred on purchases
                    used to make zero rated supplies can be recovered in the normal way, subject to the
                    usual documentation and eligibility rules.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Common examples of zero rated supplies in the UAE include:
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Exports outside the GCC</T>
                </li>
                <li>
                    <T>International transport of goods and passengers</T>
                </li>
                <li>
                    <T>
                        Certain means of transport such as ships, aircraft, and trains when conditions are met
                    </T>
                </li>
                <li>
                    <T>Investment grade precious metals with specified purity</T>
                </li>
                <li>
                    <T>Qualifying education services delivered by recognised institutions</T>
                </li>
                <li>
                    <T>Qualifying healthcare services</T>
                </li>
                <li>
                    <T>
                        First supply of new residential buildings within three years of completion when the
                        legal conditions are satisfied
                    </T>
                </li>
            </ul>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>What Exempt Means</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    An exempt supply is outside the VAT net in the sense that no VAT is charged on the sale
                    and the supplier cannot recover input VAT on purchases connected to those exempt
                    activities. There is no output VAT to collect or remit, but input VAT related to exempt
                    supplies becomes a cost for the business. Exempt supplies are treated differently for
                    recovery and pricing, and businesses that supply only exempt goods or services may not
                    need to register for VAT.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Typical exempt supplies in the UAE include:
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Local passenger transport</T>
                </li>
                <li>
                    <T>Certain financial services where fees are not explicit</T>
                </li>
                <li>
                    <T>
                        The sale or lease of residential property that does not qualify for zero rating
                    </T>
                </li>
                <li>
                    <T>The sale of bare land</T>
                </li>
            </ul>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>The Practical Difference in One Sentence</T>
            </h3>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <p className="text-gray-700 text-fluid-small leading-relaxed italic">
                    <T>
                        Zero rated supplies allow recovery of input tax and require reporting on VAT returns.
                        Exempt supplies prevent recovery of input tax and remove the related sales from
                        output VAT, but may also remove the supplier from compulsory registration if those
                        supplies are the sole business activity.
                    </T>
                </p>
            </div>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>How the Difference Affects Your Business</T>
            </h3>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Cash Flow</T>
            </h4>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Input VAT recovery on zero rated supplies improves operating cash flow because VAT paid
                    on purchases can be reclaimed. Exempt supplies force the business to absorb VAT on
                    inputs, increasing effective cost.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Pricing</T>
            </h4>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    A business that cannot reclaim input VAT may need to increase prices or accept compressed
                    margins. A business that can reclaim input VAT can keep prices more competitive.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Registration and Reporting</T>
            </h4>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Zero rated suppliers are usually required to register and to file standard VAT returns
                    reporting their zero rated activity. Businesses that deal only in exempt supplies may be
                    outside registration thresholds and administrative obligations, but careful verification
                    is required.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Documentation and Proof</T>
            </h4>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Zero rated treatments often require documentary proof such as export declarations,
                    transport documents, or certificates from recognised institutions. Failure to hold the
                    required proof risks reclassification and tax assessments.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Common Zero Rated Categories and Required Evidence</T>
            </h3>

            <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="py-3 px-4 text-left text-fluid-small font-semibold text-gray-700 border-b">
                                <T>Category</T>
                            </th>
                            <th className="py-3 px-4 text-left text-fluid-small font-semibold text-gray-700 border-b">
                                <T>Evidence Required</T>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Exports of goods outside the GCC</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Customs export declarations, shipping documentation, commercial invoices showing buyer and destination</T>
                            </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Export of services where benefit is outside the UAE</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Contracts, evidence that recipient is outside UAE, place of supply documentation</T>
                            </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>International transport of passengers or goods</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Transport manifests, tickets, waybills, international documentation</T>
                            </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>First supply of new residential buildings within three years</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Construction completion certificates, contracts, evidence of date of first supply</T>
                            </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Investment grade precious metals</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Supplier and assay documentation proving purity and qualifying nature</T>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Recognised education and qualifying healthcare</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Accreditation, registration, documentary proof of institution status and service nature</T>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Always retain original documents. The FTA expects suppliers to hold clear, auditable
                    evidence before allowing zero rating.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>How Exemptions Typically Arise</T>
            </h3>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>
                        <span className="font-semibold">Financial services where consideration is implicit:</span>
                        This includes margin-based lending or similar products where fees are embedded in spreads
                    </T>
                </li>
                <li>
                    <T>
                        <span className="font-semibold">Residential rental and sale outside the zero rating conditions:</span>
                        Subsequent sales or leases of a building beyond the first time supply often fall under exemption rules
                    </T>
                </li>
                <li>
                    <T>
                        <span className="font-semibold">Local passenger transport:</span> Tickets and receipts
                        showing domestic transport services
                    </T>
                </li>
                <li>
                    <T>
                        <span className="font-semibold">Bare land:</span> Sale of undeveloped land without buildings
                        or infrastructure
                    </T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Exempt supplies reduce administrative complexity in one area but create a hidden cost
                    because related input VAT cannot be reclaimed.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Mixed Activities and Apportionment</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    When a business makes both taxable supplies (including zero rated) and exempt supplies,
                    input VAT recovery must be apportioned. The correct approach requires:
                </T>
            </p>

            <ol className="story text-gray-700 text-fluid-small mb-6 space-y-2 list-decimal pl-5">
                <li>
                    <T>
                        Identifying which expenses relate directly to taxable or exempt activities and
                        recovering input VAT in full for expenses directly attributable to taxable or zero
                        rated outputs
                    </T>
                </li>
                <li>
                    <T>
                        Apportioning input VAT for overhead and shared costs using a reasonable and
                        consistent allocation method. The common methods are sales value based apportionment
                        or a usage based allocation. The method chosen must be documented and defensible to
                        the tax authority
                    </T>
                </li>
                <li>
                    <T>
                        Applying adjustments where the business changes the use of an asset or activity that
                        affects the recovery ratio. The law requires adjustments if, for example, a capital
                        item initially used for taxable supplies later supports exempt supplies
                    </T>
                </li>
            </ol>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Maintain contemporaneous calculations and keep them for audit.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Practical Steps to Classify Supplies Correctly</T>
            </h3>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>
                        <span className="font-semibold">Start with the contract and the invoice:</span>
                        Place of supply and the contractual terms often determine whether a supply qualifies
                        for zero rating or is exempt
                    </T>
                </li>
                <li>
                    <T>
                        <span className="font-semibold">Confirm the recipient and destination:</span>
                        For exports and international supplies, the customer location and movement documents
                        determine the VAT treatment
                    </T>
                </li>
                <li>
                    <T>
                        <span className="font-semibold">Check statutory conditions:</span> Zero rating and
                        exemptions have conditions in legislation or guidance. Do not rely on commercial
                        practice alone
                    </T>
                </li>
                <li>
                    <T>
                        <span className="font-semibold">Document everything:</span> Hold contracts, transport
                        documents, customs paperwork, accreditation certificates and any third party
                        confirmations needed for the VAT treatment
                    </T>
                </li>
                <li>
                    <T>
                        <span className="font-semibold">Use written policies:</span> Adopt and publish
                        internal VAT classification policies to ensure consistency across teams. That reduces
                        human error and improves audit readiness
                    </T>
                </li>
                <li>
                    <T>
                        <span className="font-semibold">Review annually:</span> Legislation, FTA guidance and
                        judicial decisions change. Review classifications at least once a year or whenever
                        you enter a new line of business
                    </T>
                </li>
            </ul>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Common Mistakes and How to Avoid Them</T>
            </h3>

            <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="py-3 px-4 text-left text-fluid-small font-semibold text-gray-700 border-b">
                                <T>Mistake</T>
                            </th>
                            <th className="py-3 px-4 text-left text-fluid-small font-semibold text-gray-700 border-b">
                                <T>Remedy</T>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Confusing zero rated with exempt</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>
                                    Make a simple test: If input VAT can be reclaimed, it&apos;s zero rated.
                                    If it cannot, it&apos;s exempt
                                </T>
                            </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Missing documentary proof for exports and international supplies</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>
                                    Implement a mandatory export checklist and keep physical/digital copies
                                    of all documentation
                                </T>
                            </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Failing to apportion input VAT correctly for mixed supplies</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>
                                    Adopt a consistent apportionment method supported by periodic
                                    reconciliation and management review
                                </T>
                            </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Assuming treatments used in other jurisdictions automatically apply to the UAE</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>
                                    Verify UAE specific rules and evidence requirements. The UAE has precise
                                    documentary standards for zero rating
                                </T>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>Not registering when required</T>
                            </td>
                            <td className="py-3 px-4 text-fluid-small text-gray-700">
                                <T>
                                    Monitor turnover and potential thresholds. Registration is obligatory
                                    when taxable turnover exceeds statutory thresholds
                                </T>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Reporting and Return Implications</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Zero rated supplies must appear on the VAT return and on any specified listings such as
                    sales by jurisdiction if required by the FTA. Exempt supplies are reported differently
                    and typically cannot be used to determine input tax recovery. Businesses that only make
                    exempt supplies may not need to register but should confirm eligibility before assuming
                    exemption.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Financial and Pricing Consequences</T>
            </h3>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>
                        <span className="font-semibold">Margin impact:</span> Exempt supplies create a higher
                        effective cost base because input VAT cannot be offset. This often requires a pricing
                        review to maintain margin
                    </T>
                </li>
                <li>
                    <T>
                        <span className="font-semibold">Competitive implications:</span> Suppliers of zero
                        rated goods can remain price competitive because they can recover input VAT.
                        Suppliers of exempt goods may need to redesign procurement or pass costs to customers
                    </T>
                </li>
                <li>
                    <T>
                        <span className="font-semibold">Working capital:</span> Zero rated suppliers recover
                        VAT which improves working capital. Exempt suppliers should model VAT on inputs as a
                        permanent cost
                    </T>
                </li>
            </ul>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Decision Checklist for Each Supply</T>
            </h3>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                    <T>Use this quick checklist for every new product or service line:</T>
                </p>
                <ul className="story text-gray-700 text-fluid-small space-y-2">
                    <li>
                        <T>Who is the buyer and where are they located?</T>
                    </li>
                    <li>
                        <T>What is the place of supply under UAE rules?</T>
                    </li>
                    <li>
                        <T>Does the supply have a statutory zero rated category?</T>
                    </li>
                    <li>
                        <T>Is any documentary proof required and can we obtain it?</T>
                    </li>
                    <li>
                        <T>Is the supply exempt and will that prevent input VAT recovery?</T>
                    </li>
                    <li>
                        <T>How should input VAT be allocated if activities are mixed?</T>
                    </li>
                    <li>
                        <T>How will this impact pricing and cash flow?</T>
                    </li>
                    <li>
                        <T>Which box or field in the VAT return must reflect the supply?</T>
                    </li>
                </ul>
            </div>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Short Scenario Examples</T>
            </h3>

            <div className="space-y-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="text-fluid-body font-semibold mb-2">
                        <T>Example 1: Export Business</T>
                    </h4>
                    <p className="text-gray-700 text-fluid-small leading-relaxed">
                        <T>
                            An exporter in Dubai sells manufacturing equipment to a buyer in Germany. The
                            supplier secures customs export declarations and shipping documents. The supply
                            is zero rated. The supplier recovers input VAT on the purchase of components
                            used to produce the equipment.
                        </T>
                    </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="text-fluid-body font-semibold mb-2">
                        <T>Example 2: Local Transport Company</T>
                    </h4>
                    <p className="text-gray-700 text-fluid-small leading-relaxed">
                        <T>
                            A local bus company provides domestic passenger journeys within the UAE. Those
                            services are exempt. The operator cannot reclaim input VAT on fuel or
                            maintenance costs in respect of exempt operations.
                        </T>
                    </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="text-fluid-body font-semibold mb-2">
                        <T>Example 3: Property Developer</T>
                    </h4>
                    <p className="text-gray-700 text-fluid-small leading-relaxed">
                        <T>
                            A property developer sells a residential apartment within one year of
                            construction completion. If the sale qualifies as a first supply and meets
                            documentary requirements, the developer may apply zero rating. Later resale of
                            the same apartment will generally be exempt.
                        </T>
                    </p>
                </div>
            </div>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Practical Governance Recommendations</T>
            </h3>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>
                        <span className="font-semibold">Map your processes:</span> Map procurement, sales,
                        and logistics processes against VAT treatments to identify where supporting
                        documents are created and stored
                    </T>
                </li>
                <li>
                    <T>
                        <span className="font-semibold">Centralise evidence:</span> Keep proof of exports,
                        transport, certification, and institutional recognition in a central repository with
                        version control
                    </T>
                </li>
                <li>
                    <T>
                        <span className="font-semibold">Automate where possible:</span> Use accounting or
                        ERP systems that tag transactions according to VAT treatment and support reporting.
                        Automation cuts errors in mixed activity apportionment
                    </T>
                </li>
                <li>
                    <T>
                        <span className="font-semibold">Train relevant teams:</span> Finance, sales,
                        logistics, and the commercial team should understand the VAT implications of zero
                        rated and exempt supplies
                    </T>
                </li>
                <li>
                    <T>
                        <span className="font-semibold">Schedule tax health checks:</span> Run a VAT health
                        check at least annually or whenever you add a new product line or expand into new
                        territories
                    </T>
                </li>
            </ul>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Final Note and Next Step</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Classifying supplies correctly is not a theoretical exercise. It affects cash flow,
                    pricing, compliance cost, and ultimately profitability. If you operate across multiple
                    product lines or have cross-border activity, treat classification as a governance
                    priority and document every decision with supporting evidence.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed">
                <T>
                    For businesses that want to simplify compliance and centralise tax controls,
                    enterprise-grade tools can make the difference. Accqrate provides ERP features that
                    help record the evidence trail, tag transactions by VAT treatment, and produce reports
                    ready for FTA review while keeping bookkeeping consistent across complex supply chains.
                </T>
            </p>
        </BlogLayout>
    );
}

export default UAEVATZeroRatedVsExempt;