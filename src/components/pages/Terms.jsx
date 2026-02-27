import Container from "../ui/Container";

export default function Terms() {
  return (
    <section className="py-5 bg-brand-black border-t border-white/5">
      <Container className="max-w-5xl">
        {/* Decorative Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-125 h-125 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="text-center mb-10 relative z-10">
          <h1 className="font-display font-black text-4xl md:text-5xl text-white">
            HOMCRU – <span className="text-brand-blue">Terms & Policies</span>
          </h1>
          <p className="text-brand-orange font-semibold mt-4">
            Last updated: 2026
          </p>
        </div>

        <div className="space-y-14 text-gray-300 text-sm leading-relaxed relative z-10">
          {/* INTRO */}
          <LegalCard>
            <p>
              These terms and conditions govern your access and use of the
              Homcru platform, including our website, mobile application, and
              all related services. These Terms constitute a binding legal
              agreement between Homcru and Customer
            </p>
            <p className="mt-4">
              By creating an account or using the Platform, you confirm that you
              have read, understood, and agree to be bound by these Terms,
              including any policies referenced herein (e.g., Privacy Policy,
              Cancellation Policy). If you do not agree, please do not use the
              Platform.
            </p>
          </LegalCard>

          {/* SECTION 1 */}
          <Section title="1. ABOUT HOMCRU">
            <p>
              Homcru is a technology-enabled facilitation platform that connects
              Customers with independent third-party service professionals and
              daily wage workers (“Service Providers”) for home and on-ground
              services. Homcru also facilitates service-related support,
              including parts and materials delivery, where available.
            </p>
            <p className="mt-4">
              <strong>
                Homcru does not provide any services directly and does not
                employ Service Providers
              </strong>
              . All services are performed by independent third parties who are
              solely responsible for their performance, quality, and compliance
              with applicable law. Homcru is not a party to any agreement
              between you and a Service Provider.
            </p>
          </Section>

          {/* SECTION 2 */}
          <Section title="2. DEFINITIONS">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Account: The unique profile created by a Customer to access the
                Platform.
              </li>
              <li>
                Booking: A request for Services submitted through the Platform.
              </li>
              <li>
                Charges: The amounts payable to Service Providers for Pro
                Services, as displayed at the time of Booking.
              </li>
              <li>
                Customer: Any individual or entity that uses the Platform to
                request Services.
              </li>
              <li>
                Daily Wage Worker: Individuals providing task-based or
                short-term labour services.
              </li>
              <li>
                Feedback: Suggestions, comments, or ideas submitted by you
                regarding the Platform or Services.
              </li>
              <li>
                Fees: The facilitation, platform, or convenience fees charged by
                Homcru for use of the Platform.
              </li>
              <li>
                Materials: Parts, tools, or supplies sourced through the
                Platform (where applicable).
              </li>
              <li>
                Platform: The Homcru website, mobile application, and all
                related services, content, and tools.
              </li>
              <li>
                Pro Services: The actual services performed by Service Providers
                (as distinct from Homcru’s Platform services).
              </li>
              <li>
                Service Provider: Professionals and Daily Wage Workers
                collectively.
              </li>
              <li>
                Services: The Platform and related facilitation services
                provided by Homcru (not Pro Services).
              </li>
              <li>
                User Content: Any reviews, comments, photos, or other content
                posted by you on the Platform.
              </li>
            </ul>
          </Section>

          {/* SECTION 3 */}
          <Section title="3. SCOPE OF THE PLATFORM">
            <ul className="list-disc pl-6 space-y-2">
              <li>Discover and book Service Providers;</li>
              <li>Schedule and coordinate services;</li>
              <li>Make digital payments; and</li>
              <li>Access customer support.</li>
            </ul>
            <p className="mt-4">
              The Platform is for your{" "}
              <strong>Personal, Non-commercial use only</strong> and is intended
              for use within India. Homcru does not guarantee service outcomes,
              completion, or quality – these depend entirely on independent
              Service Providers.
            </p>
          </Section>

          {/* SECTION 4 */}
          <Section title="4. ELIGIBILITY AND ACCOUNT CREATION">
            <p>
              4.1 You must be at least 18 years old and legally capable of
              entering into a binding contract to use the Platform.
            </p>
            <p className="mt-3">
              4.2 To book services, you must create an Account and provide
              accurate, complete, and current information. You agree to promptly
              update your Account details if any information changes.
            </p>
            <p className="mt-3">
              4.3{" "}
              <strong>
                You are solely responsible for maintaining the confidentiality
                of your Account credentials and for all activities that occur
                under your Account
              </strong>
              . You must notify us immediately at{" "}
              <b>
                <a
                  href="mailto:info@homcru.com"
                  className="text-decoration-none text-brand-orange"
                >
                  info@homcru.com
                </a>
              </b>{" "}
              of any unauthorised use or security breach. Homcru shall not be
              liable for any loss or damage arising from your failure to comply
              with this obligation.
            </p>
          </Section>
          {/* SECTION 5 */}
          <Section title="5. BOOKING AND SERVICE FULFILMENT">
            <p>
              5.1 Booking & Confirmation: You may request Pro Services through
              the Platform based on available slots. Once you submit a Booking,
              we will use reasonable efforts to assign a Service Provider. You
              will receive confirmation via SMS, email, or in-app notification
              when a Service Provider is assigned.
            </p>
            <p className="mt-3">
              5.2 Substitution: If a Service Provider cancels or becomes
              unavailable, we will offer you a substitute Service Provider at no
              additional cost. If no substitute is available, the Booking may be
              cancelled with full refund.
            </p>
            <p className="mt-3">
              5.3 Customer Responsibilities: You must provide accurate service
              details, ensure a safe and clean working environment, and disclose
              any conditions that may affect the Service Provider’s health,
              safety, or ability to perform the Pro Services.
            </p>
          </Section>
          {/* SECTION 6 */}
          <Section title="6. PRICING, FEES AND PAYMENTS">
            <p>
              6.1 Charges & Fees: The total amount payable consists of (a)
              Charges for Pro Services (payable to the Service Provider), and
              (b) Fees for use of the Platform (payable to Homcru). All amounts
              are displayed before Booking confirmation and include applicable
              taxes unless stated otherwise.
            </p>
            <p className="mt-3">
              6.2 Collection Agent: Homcru acts as a limited collection agent
              for Service Providers and collects payments on their behalf.
              Payment to Homcru satisfies your obligation to pay the Service
              Provider for the Pro Services.
            </p>
            <p className="mt-3">
              6.3 Payment Methods: We accept various payment methods as
              displayed on the Platform (credit/debit cards, UPI, wallets, cash
              on completion, etc.). Cash on completion may not always be
              available. All payments are processed through third-party payment
              processors; we are not liable for any errors or delays caused by
              such processors.
            </p>
            <p className="mt-3">
              6.4 Additional Fees: The final bill may include other fees (e.g.,
              safety fee, Service Provider welfare fee, peak-pricing surcharge).
              Any such fees will be communicated at the time of Booking.
            </p>
            <p className="mt-3">
              6.5 Subscription Packages: We may offer subscription plans that
              provide discounted Pro Services or other benefits. Subscriptions
              are subject to additional terms presented at the time of purchase.
            </p>
            <p className="mt-3">
              6.6 Gratuity: Any gratuity or tip you choose to give a Service
              Provider is voluntary and not required. Homcru does not designate
              any portion of your payment as a tip.
            </p>
            <p className="mt-3">
              6.7 Price Amendments: We may revise Charges and Fees at any time.
              Changes do not affect confirmed Bookings.
            </p>
          </Section>

          {/* SECTION 7 */}
          <Section title="7. CANCELLATIONS AND REFUNDS">
            <p>
              Cancellations are governed by our Cancellation and Refund Policy,
              available [here / Annexure A]. In summary:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Bookings cancelled before a Service Provider is confirmed are
                not charged
              </li>
              <li>
                Late cancellations (after confirmation or after the provider is
                en route) may incur a cancellation fee.
              </li>
              <li>
                Refunds (if eligible) are processed within 7–10 business days.
              </li>
            </ul>
          </Section>
          {/* SECTION 8 */}
          <Section title="8. PARTS AND MATERIALS DELIVERY">
            <p>
              8.1 Where available, Materials delivery is facilitated through
              third-party vendors or Service Providers. Homcru does not
              manufacture, warrant, or guarantee any Materials.
            </p>
            <p className="mt-3">
              8.2 Any transaction for Materials is solely between you and the
              third-party vendor. Homcru disclaims all liability for the
              quality, safety, legality, or delivery of Materials.
            </p>
          </Section>
          {/* SECTION 9 */}
          <Section title="9. INDEPENDENT CONTRACTOR RELATIONSHIP">
            <p>
              9.1 Service Providers are independent contractors and not
              employees, agents, partners, or joint venturers of Homcru.
            </p>
            <p className="mt-3">
              9.2 Homcru does not supervise, direct, or control the manner in
              which Pro Services are performed. Service Providers have no
              authority to bind or represent Homcru.
            </p>
          </Section>
          {/* SECTION 10 */}
          <Section title="10. SAFETY AND CONDUCT ">
            <p>
              10.1 Respectful Environment: You must treat Service Providers with
              courtesy and respect. Discrimination, harassment, abuse, or unsafe
              conduct is strictly prohibited – including discrimination based on
              race, religion, caste, gender, sexual orientation, disability, or
              any other protected characteristic.
            </p>
            <p className="mt-3">
              10.2 Provider’s Right to Refuse: Service Providers may refuse to
              perform Pro Services if you fail to provide a safe, clean, and
              appropriate location, or if you behave in an abusive, threatening,
              or discriminatory manner.
            </p>
            <p className="mt-3">
              110.3 Reporting Misconduct: If a Service Provider behaves
              inappropriately, you must report the incident to <a
                  href="mailto:info@homcru.com"
                  className="text-decoration-none text-brand-orange"
                >
                  info@homcru.com
                </a>{" "}
              within 48 hours. Homcru may take appropriate action, including
              suspension or termination of accounts.
            </p>
          </Section>
          {/* SECTION 11 */}
          <Section title="11. USER CONTENT AND FEEDBACK ">
            <p>
              11.1 User Content: By posting reviews, comments, photos, or other
              content (“User Content”) on the Platform, you grant Homcru a
              non-exclusive, worldwide, perpetual, irrevocable, royalty-free,
              transferable licence to use, reproduce, modify, publish, and
              display such User Content for any purpose, including marketing and
              quality control. You warrant that you own or have the necessary
              rights to grant this licence and that your User Content does not
              violate any law or third-party rights.
            </p>
            <p className="mt-3">
              11.2 Feedback: Any suggestions, ideas, or Feedback you submit to
              Homcru may be used by us without any compensation or obligation to
              you.
            </p>
            <p className="mt-3">
              11.3 Removal: Homcru reserves the right to remove or restrict
              access to any User Content that violates these Terms or is
              otherwise inappropriate.
            </p>
          </Section>
          {/* SECTION 12 */}
          <Section title="12. INTELLECTUAL PROPERTY ">
            <p>
              12.1 All content on the Platform (including text, logos,
              trademarks, software) is the property of Homcru or its licensors
              and is protected by intellectual property laws.
            </p>
            <p className="mt-3">
              12.2 Subject to these Terms, Homcru grants you a limited,
              non-exclusive, non-transferable, revocable licence to access and
              use the Platform for your personal, non-commercial use. No other
              rights are granted.
            </p>
          </Section>
          {/* SECTION 13 */}
          <Section title="13. THIRD PARTY SERVICES  ">
            <p>
              The Platform may contain links or integrations with third-party
              websites, services, or products (“Third Party Services”). Homcru
              does not endorse or control such Third Party Services and is not
              responsible for their content, privacy practices, or any
              transactions you enter into with them. Your use of Third Party
              Services is at your own risk.
            </p>
          </Section>
          {/* SECTION 14 */}
          <Section title="14.  DISCLAIMER OF WARRANTIES   ">
            <p>
              THE PLATFORM IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS.
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, HOMCRU DISCLAIMS ALL
              WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
              IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE PLATFORM
              WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR THAT DEFECTS WILL BE
              CORRECTED.
            </p>
          </Section>
          {/* SECTION 15 */}
          <Section title="15.  LIMITATION OF LIABILITY    ">
            <p>
              15.1 To the fullest extent permitted by law, Homcru shall not be
              liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Any acts, omissions, errors, or damages caused by Service
                Providers;
              </li>
              <li>
                Any indirect, incidental, consequential, or punitive damages
                (including lost profits or data);
              </li>
              <li>
                Any unauthorised access to or use of our servers or your
                personal information;
              </li>
              <li>Any interruption, delay, or failure of the Platform.</li>
            </ul>
            <p className="mt-3">
              15.2 In no event shall Homcru’s aggregate liability exceed (a) the
              total Fees paid by you in the 12 months preceding the claim, or
              (b) INR 10,000, whichever is less. This cap applies to all claims,
              whether in contract, tort, or otherwise.
            </p>
          </Section>
          {/* SECTION 16 */}
          <Section title="16. INDEMNITY    ">
            <p>
              You agree to indemnify, defend, and hold harmless Homcru, its
              affiliates, officers, directors, employees, and agents from and
              against any claims, liabilities, damages, losses, and expenses
              (including reasonable attorneys’ fees) arising out of or related
              to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use or misuse of the Platform or Pro Services;</li>
              <li>Your breach of these Terms;</li>
              <li>Your User Content; or</li>
              <li>Any third party using your Account.</li>
            </ul>
          </Section>
          {/* SECTION 17 */}
          <Section title="17. TERMINATION     ">
            <p>
              17.1 By Homcru: We may suspend or terminate your access to the
              Platform at any time, with or without cause, including if you
              violate these Terms. Where practicable, we will provide 30 days’
              notice for non-material breaches.
            </p>
            <p className="mt-3">
              17.2 By You: You may terminate your Account at any time by
              contacting <a
                  href="mailto:info@homcru.com"
                  className="text-decoration-none text-brand-orange"
                >
                  info@homcru.com
                </a>. Termination will be effective within a
              reasonable time.
            </p>
            <p className="mt-3">
              17.3 Effect of Termination: Upon termination, your Account will be
              deactivated and your licence to use the Platform ends. Clauses
              that by their nature should survive (e.g., indemnity, limitation
              of liability, dispute resolution) will remain in effect.
            </p>
          </Section>
          {/* SECTION 18 */}
          <Section title="18. GOVERNING LAW AND DISPUTE RESOLUTION">
            <p>18.1 These Terms shall be governed by the laws of India.</p>
            <p className="mt-3">
              18.2 Informal Resolution: Before initiating any formal
              proceedings, you agree to contact us at <a
                  href="mailto:info@homcru.com"
                  className="text-decoration-none text-brand-orange"
                >
                  info@homcru.com
                </a> to attempt
              to resolve the dispute informally for 30 days.
            </p>
            <p className="mt-3">
              18.3 Jurisdiction: Subject to the arbitration clause below, courts
              in Odisha, India shall have exclusive jurisdiction over any
              disputes.
            </p>
            <p className="mt-3">
              18.4 Arbitration: Any dispute not resolved informally shall be
              finally settled by binding arbitration administered in accordance
              with the Arbitration and Conciliation Act, 1996. The arbitration
              shall be conducted in English in Odisha by a sole arbitrator
              appointed by Homcru. The award shall be final and binding. Each
              party shall bear its own costs.
            </p>
          </Section>

          {/* SECTION 19 */}
          <Section title="19. GRIEVANCE REDRESSAL">
            <p>
              In compliance with the Information Technology Act, 2000 and rules
              thereunder, Homcru’s Grievance Officer.
            </p>
            <p className="mt-3">
              Any complaints concerning the Platform or these Terms may be sent
              to the Grievance Officer. We aim to resolve complaints within the
              timelines prescribed by law.
            </p>
          </Section>

          {/* SECTION 20 */}
          <Section title="20. MISCELLANEOUS">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Modification of Terms: We may revise these Terms at any time by
                posting the updated version on the Platform. Your continued use
                after the effective date constitutes acceptance.
              </li>
              <li>
                Assignment: You may not assign your rights under these Terms
                without our prior written consent. Homcru may assign its rights
                without restriction.
              </li>
              <li>
                Severability: If any provision is held invalid or unenforceable,
                the remaining provisions shall remain in full force.
              </li>
              <li>
                Force Majeure: Homcru shall not be liable for any delay or
                failure to perform resulting from causes beyond its reasonable
                control.
              </li>
              <li>
                Entire Agreement: These Terms, together with the Privacy Policy
                and Cancellation Policy, constitute the entire agreement between
                Customer and Homcru.
              </li>
            </ul>
          </Section>
        </div>
      </Container>
    </section>
  );
}

/* ====== UI Components ====== */

function Section({ title, children }) {
  return (
    <div className="bg-brand-surface border border-white/5 rounded-3xl p-8 hover:border-brand-blue/40 transition-all duration-300">
      <h2 className="text-brand-orange font-bold text-xl mb-6">{title}</h2>
      {children}
    </div>
  );
}

function LegalCard({ children }) {
  return (
    <div className="bg-linear-to-br from-brand-blue/10 to-brand-orange/10 border border-white/10 rounded-3xl p-8">
      {children}
    </div>
  );
}
