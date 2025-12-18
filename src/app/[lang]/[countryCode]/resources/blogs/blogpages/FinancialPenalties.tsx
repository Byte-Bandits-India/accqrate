
/* eslint-disable @typescript-eslint/no-unused-vars */

import Image from 'next/image'
import T from '@/Components/T'
import BlogLayout from '../layout/BlogLayout'
import AssetPath from '@/AssetPath/AssetPath'


function FinancialPenalties() {
  return (
    <BlogLayout
      pageTitle="Fines and Financial Penalties Exemption by ZATCA, Saudi Arabia"
      updatedOn="Jan 22nd, 2025"
      minRead="23"
    >
      <Image
        src={AssetPath.blogs.financialPenalties}
        className="w-full mb-3 rounded-lg"
        alt="Fines and Financial Penalties Exemption by ZATCA, Saudi Arabia"
      />

      <p className="story text-fluid-small leading-relaxed text-gray-800">
        <T>
          The Zakat, Tax and Customs Authority (ZATCA) re-launched an initiative to cancel fines and exempt
          financial penalties imposed on taxpayers for six months, beginning on <b>June 1, 2022</b>, and
          ending on <b>November 30, 2022</b>. This program was introduced to mitigate the financial strain on
          businesses impacted by the COVID-19 pandemic.
        </T>
      </p>

      <p className="story text-fluid-small leading-relaxed text-gray-800">
        <T>
          <b>Note (Updated)</b>: While the exemption period mentioned above ended on November 30, 2022, ZATCA
          has periodically introduced and extended certain programs to support taxpayers. As of the latest
          press releases in 2023 and 2024, there have been <b>no further blanket extensions</b> of this
          specific exemption initiative. However, ZATCA continues to announce targeted relief measures on a
          case-by-case basis. Taxpayers are advised to regularly monitor official ZATCA announcements for any
          new or upcoming relief programs.
        </T>
      </p>

      <hr />
      <h3 className="text-fluid-body font-semibold mt-4 mb-2"><T>Scope of the Exemption</T></h3>
      <div className="story text-fluid-small leading-relaxed text-gray-800">
        <T>
          Under the initial exemption (June 1 – November 30, 2022), the cancellation of fines covered the
          following areas:
        </T>
        <ol>
          <li className="mt-3"><T><b>Late registration</b> in all tax systems</T></li>
          <li><T><b>Late payments</b></T></li>
          <li><T><b>Late submission of returns</b></T></li>
          <li><T><b>Corrections to VAT returns</b></T></li>
          <li><T><b>Violations of VAT field control</b> related to e-invoicing regulations</T></li>
          <li><T><b>Other general regulations</b> under ZATCA’s purview</T></li>
        </ol>
      </div>

      <hr />
      <h3 className="text-fluid-body font-semibold mt-4 mb-2"><T>Eligibility Criteria</T></h3>
      <div className="story text-fluid-small leading-relaxed text-gray-800">
        <T>
          To qualify for and fully benefit from the exemption initiative (when it was in effect), ZATCA
          specified the following requirements:
        </T>
        <ol>
          <li className="mt-3">
            <T><b>VAT Registration:</b> Individuals or entities not yet registered for VAT had to register.</T>
          </li>
          <li>
            <T><b>Submission of All Due Returns:</b> Any outstanding returns had to be filed.</T>
          </li>
          <li>
            <T><b>Disclosure of Undeclared Taxes:</b> Any previously undisclosed taxes needed to be reported.</T>
          </li>
          <li>
            <T><b>Payment of Tax Debt:</b> All outstanding tax debts had to be settled or scheduled under an
              approved installment plan.</T>
          </li>
        </ol>
        <T>
          <b>Note (Updated):</b> Even though the broad exemption period has closed, taxpayers who fall behind
          on payments or disclosures should still proactively contact ZATCA. The authority may allow
          installment plans or other accommodations to facilitate compliance and minimize penalties, but these
          are handled on a <b>case-by-case basis</b>.
        </T>
      </div>

      <hr />
      <h3 className="text-fluid-body font-semibold mt-4 mb-2"><T>Exclusions from the Initiative</T></h3>
      <div className="story text-base md:text-lg leading-relaxed text-gray-800">
        <T>The following were explicitly not included in the original initiative:</T>
        <ol>
          <li className="mt-3"><T><b>Tax evasion violations</b></T></li>
          <li><T><b>Fines paid before the initiative’s effective date</b></T></li>
          <li>
            <T><b>Late payment fines</b> related to any tax installment due <b>after November 30, 2022</b></T>
          </li>
        </ol>
      </div>

      <hr />
      <h3 className="text-fluid-body font-semibold mt-4 mb-2"><T>Contacting ZATCA</T></h3>
      <div className="story text-base md:text-lg leading-relaxed text-gray-800">
        <T>
          If you have questions regarding any ZATCA initiatives, exemptions, or e-invoicing requirements, you
          can reach the authority via:
        </T>
        <ol>
          <li className="mt-3"><T><b>Unified Call Center:</b> 19993 (available 24/7)</T></li>
          <li>
            <T><b>Twitter: </b></T>
            <a href="https://twitter.com/Zatca_Care" target="_blank" rel="noreferrer">@Zatca_Care</a>
          </li>
          <li><T><b>Email:</b> info@zatca.gov.sa</T></li>
          <li>
            <T><b>Instant Chat:</b>{' '}</T>
            <a href="https://zatca.gov.sa/" target="_blank" rel="noreferrer">
              <T>ZATCA’s official website</T>
            </a>
          </li>
        </ol>
      </div>

      <hr />
      <h3 className="text-fluid-body font-semibold mt-4 mb-2"><T>E-Invoicing Compliance: Phase I and Phase II</T></h3>

      <h4 className="text-fluid-body font-semibold mt-3 mb-2"><T>Phase I: Core E-Invoicing Requirements</T></h4>
      <p className="story text-fluid-small leading-relaxed text-gray-800">
        <T>
          <a
            href="https://zatca.gov.sa/en/E-Invoicing/PreparingYourBusiness/Phase1/Pages/default.aspx"
            target="_blank"
            rel="noreferrer"
          >
            Phase I
          </a>{' '}
          of e-invoicing became mandatory on <b>December 4, 2021</b>, requiring businesses to generate and
          store invoices electronically. Despite the pandemic-related leniencies in fines, ZATCA has emphasized
          that compliance with e-invoicing is <b>non-negotiable</b> and critical for modernizing Saudi Arabia’s
          tax ecosystem.
        </T>
      </p>

      <h4 className="text-fluid-body font-semibold mt-3 mb-2"><T>Phase II: Integration Phase</T></h4>
      <div className="story text-base md:text-lg leading-relaxed text-gray-800">
        <a
          href="https://zatca.gov.sa/en/E-Invoicing/PreparingYourBusiness/Phase2/Pages/default.aspx"
          target="_blank"
          rel="noreferrer"
        >
          <T>Phase II</T>
        </a>{' '}
        <T>(Integration Phase) began rolling out in <b>January 2023</b>, requiring additional technical
          integrations and real-time data sharing with ZATCA’s systems. This roll-out is being implemented in
          <b> waves</b> throughout 2023 and beyond.</T>
        <br />
        <T><b>Important Updates for 2023 and 2024:</b></T>
        <ol>
          <li className="mt-3">
            <T>Businesses are being notified by ZATCA via email or SMS about their specific integration deadlines.</T>
          </li>
          <li>
            <T>ZATCA has released stricter requirements for <b>cryptographic seals</b> and <b>QR codes</b> on
              invoices.</T>
          </li>
          <li>
            <T>Penalties for non-compliance can be substantial, including fines for missing or incorrect
              invoice details.</T>
          </li>
        </ol>
        <T>
          <T>To avoid last-minute hassles and ensure smooth compliance, implement a robust e-invoicing solution
            that meets ZATCA’s Phase II technical specifications.</T>
        </T>
      </div>

      <hr />
      <h3 className="text-fluid-body font-semibold mt-4 mb-2"><T>Conclusion</T></h3>
      <div className="story text-fluid-small leading-relaxed text-gray-800">
        <T>
          Although the broad fines and penalty exemption window introduced in mid-2022 has ended, ZATCA
          continues to facilitate compliance through <b>targeted relief measures</b> and <b>ongoing
            e-invoicing initiatives</b>. Whether you are a small business or a multinational enterprise,
          staying updated on ZATCA announcements and adhering to e-invoicing requirements is essential.
        </T>

        <ul className="mt-3">
          <li>
            <b>Final Tip:</b> Regularly visit{' '}
            <a href="https://zatca.gov.sa/" target="_blank" rel="noreferrer">
              ZATCA’s official website
            </a>{' '}
            and subscribe to newsletters to remain informed about new exemptions, deadlines, and regulations.
          </li>
        </ul>

        <T>
          Stay proactive, remain compliant, and leverage digital tools to thrive in Saudi Arabia’s rapidly
          evolving economic environment.
        </T>

        <p className="mt-3 text-fluid-body font-medium"><T><b>About Accqrate</b></T></p>

        <T>
          <a href="https://accqrate-erp.com/" target="_blank" rel="noreferrer">
            Accqrate
          </a>{' '}
          is a leading Saudi-based ERP and e-invoicing solution provider, offering comprehensive accounting,
          e-invoicing integrations, and POS systems. It ensures seamless integration with ZATCA’s Fatoora
          portal for Phase 2 compliance and is powered by GenAI and GPT technologies to enhance productivity
          and inter-department collaboration.
        </T>

        <br /><br />
        <T>
          Built with flexibility and scalability, Accqrate provides both cloud and on-premise solutions,
          supporting digital transformation for businesses across Saudi Arabia and beyond.
        </T>
      </div>
    </BlogLayout>
  )
}

export default FinancialPenalties
