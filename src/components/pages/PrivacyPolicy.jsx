import Container from "../ui/Container";

export default function PrivacyPolicy() {
  return (
    <section className="py-20 bg-brand-black text-white">
      <Container className="max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="font-display font-black text-4xl md:text-5xl mb-4">
            HOMCRU –{" "}
            <span className="text-brand-blue">Privacy & Data Promise</span>
          </h1>
          <p className="text-brand-orange">Last updated: 2026</p>
        </div>

        <div className="space-y-16 text-gray-300  text-sm md:text-base">
          {/* Intro */}
          <Block>
            <p>
              Because trust isn’t just a word it’s the foundation of everything
              we do.
            </p>
            <p className="mt-4">
              At Homcru, we believe that your personal information belongs to
              you, not to us. This document isn’t a legal maze - it’s our
              honest, human-readable promise about how we handle your data when
              you use our platform (website, mobile app, and all related
              services - together called the “Platform”).
            </p>
            <p className="mt-4">
              By using Homcru, you’re agreeing to this Privacy Promise. It works
              hand-in-hand with our [Terms & Policies]. If something here feels
              unclear, just write to us - we’re all ears.
            </p>
          </Block>

          {/* Our Role */}
          <SectionTitle title="🌿 OUR ROLE, SIMPLIFIED" />
          <Block>
            <p>
              Homcru is a matchmaker, not an employer. We connect you with
              independent service professionals and daily wage workers (“Service
              Providers”) for home and on-ground tasks. We help you book, pay,
              and communicate - but we don’t perform the services ourselves.
            </p>
            <p className="mt-4">
              This Privacy Promise explains how we collect, use, and protect
              your personal data when you use the Platform to find, book, and
              review Service Providers.
            </p>
            <p className="mt-4 font-semibold text-brand-orange">
              By using Homcru, you’re okay with the practices described here. If
              you’re not, please don’t use the Platform.
            </p>
          </Block>

          {/* What We Collect */}
          <SectionTitle title="📦 WHAT WE COLLECT - AND WHAT WE DON’T" />

          <Block>
            {/* Detailed Data Table */}
            <div className="mb-5 bg-brand-surface border border-white/5 rounded-3xl overflow-hidden">
              <div className="p-8 border-b border-white/5">
                <h3 className="text-2xl font-bold text-white">
                  What We Collect — Explained Simply
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Here’s exactly what each data type means, in plain language.
                </p>
              </div>

              <div className="divide-y divide-white/5">
                <DataRow
                  type="You, Unpacked"
                  description="Your name, profile photo, gender, date of birth - enough to know we’re talking to a real person."
                />

                <DataRow
                  type="How to reach you"
                  description="Email, phone number, home/work address. We need this to connect you with Service Providers."
                />

                <DataRow
                  type="Your transactions"
                  description="Booking history, payments, UPI ID, limited card details (via our payment partners — we never see your full card number)."
                />

                <DataRow
                  type="Your conversations"
                  description="Chats and call records with Service Providers (so we can help if something goes sideways)."
                />

                <DataRow
                  type="Your device & browsing"
                  description="IP address, device ID, what phone/computer you use, how you click and scroll on the Platform. This helps us fix bugs and make things smoother."
                />

                <DataRow
                  type="Your feedback & reviews"
                  description="Comments, ratings, photos you share. We use these to keep quality high."
                />

                <DataRow
                  type="Your location"
                  description="Rough location (city/area) to show you nearby Service Providers. We only access precise location if you explicitly allow it."
                />
              </div>
            </div>

            <div className="bg-brand-surface border border-white/5 rounded-2xl p-6 mb-6">
              <h4 className="font-bold text-white mb-3">
                What we DON’T collect:
              </h4>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  Sensitive data like health info, political opinions, religious
                  beliefs, or biometrics.
                </li>
                <li>
                  Full credit/debit card numbers (those go straight to our
                  secure payment partners).
                </li>
              </ul>
            </div>

            <p>
              If you choose not to share certain info, that’s okay - but we may
              not be able to offer you certain services (like booking or
              personalised support).
            </p>
          </Block>

          {/* How We Collect */}
          <SectionTitle title="🧺 HOW WE COLLECT YOUR DATA" />

          <SubTitle title="A. Directly from you" />
          <Block>
            <p>You hand it over when you:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Create an account</li>
              <li>Book a service</li>
              <li>Chat with a Service Provider</li>
              <li>Rate or review</li>
              <li>Contact our support team</li>
            </ul>
          </Block>

          <SubTitle title="B. Automatically" />
          <Block>
            <p>
              As you browse, our systems quietly collect technical data
              (cookies, pixel tags, server logs) so we can remember your
              preferences, improve performance, and keep things secure.
            </p>
          </Block>

          <SubTitle title="C. From third parties" />
          <Block>
            <p className="mb-2">Sometimes we get info from:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                Payment gateways (transaction status, not full card numbers)
              </li>
              <li>Analytics partners (e.g., how you found us)</li>
              <li>
                Service Providers (if they report issues or feedback about a
                booking)
              </li>
            </ul>
          </Block>

          {/* Why We Use Data */}
          <SectionTitle title="🎯 WHY WE USE YOUR DATA - THE “WHY” BEHIND THE “WHAT”" />

          <Block>
            <p className="mb-2">
              We only use your data for jobs that actually matter:
            </p>
            <ul className="space-y-3">
              <li>
                ✅ To keep the lights on - create your account, process
                bookings, handle payments, connect you with Service Providers.
              </li>
              <li>
                ✅ To make things better - analyse usage, fix crashes,
                personalise your experience.
              </li>
              <li>
                ✅ To talk to you - send booking confirmations, reminders,
                support messages.
              </li>
              <li>
                ✅ To keep everyone safe - detect fraud, enforce our policies,
                resolve disputes.
              </li>
              <li>
                ✅ To send relevant updates - with your consent, we may share
                tips, offers, or new features.
              </li>
              <li>
                ✅ To follow the law - when courts or regulators require it.
              </li>
            </ul>
            <p className="mt-6 font-semibold text-brand-blue">
              We never sell your personal data to anyone. Period.
            </p>
          </Block>

          {/* Who sees your data */}
          <SectionTitle title="🔍 WHO ELSE SEES YOUR DATA?" />
          <Block>
            <p>
              We share your data only when it’s essential to deliver our
              services - and only with partners who promise to treat it just as
              carefully as we do.
            </p>
            <ul className="space-y-2 list-disc list-inside my-2 ml-4">
              <li>
                Service Providers - they see your name, location, and service
                details so they can show up and do the job right.
              </li>
              <li>
                Payment partners - they process your payments; we only receive
                confirmation of success/failure.
              </li>
              <li>
                Tech & analytics partners - help us host the Platform, analyse
                trends, and improve performance (they can’t use your data for
                their own purposes).
              </li>
              <li>
                Legal & regulatory authorities - when required by law or to
                protect our rights.
              </li>
            </ul>
            <p>
              We may also share anonymised, aggregated data (which can’t
              identify you) for research, marketing, or industry reporting.
            </p>
          </Block>

          {/* Your Rights */}
          <SectionTitle title="🛡️ YOUR DATA, YOUR RIGHTS" />
          <SubTitle title="You’re in the driver’s seat. Here’s what you can do:" />
          <Block>
            <div className="divide-y divide-white/5">
              <DataRow
                type="Access & portability"
                description="Ask us for a copy of your data - we’ll deliver it within 7 days."
              />

              <DataRow
                type="Correction "
                description="Spot an error? Update your profile directly, or email us."
              />

              <DataRow
                type="Deletion"
                description="Want us to forget you? Drop a mail - we’ll wipe your account and personal data (except what we’re legally required to keep)."
              />

              <DataRow
                type="Opt out of marketing"
                description="Click “unsubscribe” in any promotional email, or write to us. (We’ll still send transactional emails - booking confirmations, etc.)"
              />

              <DataRow
                type="Withdraw consent"
                description="If you said yes and changed your mind, just tell us."
              />
            </div>
            
          </Block>

          {/* Cookies */}
          <SectionTitle title="🍪 COOKIES - THE SWEET (AND UNSWEET) TRUTH" />
          <SubTitle title="Cookies are tiny text files stored on your device. We use them to:" />

          <Block>
            <ul className="space-y-2 list-disc list-inside">
              <li>Remember your login and preferences</li>
              <li>Understand how you use the Platform</li>
              <li>Show you more relevant ads</li>
            </ul>
            <p className="mt-4">
              You can disable cookies in your browser settings - but some parts
              of the Platform may stop working properly.
            </p>
            <p className="mt-5">
              <strong>
                Third-party cookies: Sometimes our partners (like analytics or
                ad networks) drop their own cookies. We don’t control those, so
                check their privacy policies if you’re curious
              </strong>
            </p>
          </Block>

          {/* Security */}
          <SectionTitle title="🔐 HOW WE PROTECT YOUR DATA" />
          <Block>
            <p className="mb-2">We’ve built multiple layers of security:</p>
            <ul className="space-y-2 list-disc list-inside my-2 ml-4">
              <li>
                Encryption - all data travels via HTTPS; passwords are hashed,
                not stored in plain text.
              </li>
              <li>
                Access controls - only employees who really need it can see
                personal data.
              </li>
              <li>
                Call masking - actual phone numbers are hidden during
                customer-provider calls.
              </li>
              <li>Regular audits - we test our systems for weaknesses.</li>
            </ul>
            <p className="mt-4">
              Your part: Keep your account password strong and secret. If you
              suspect someone else is using your account, tell us immediately.
            </p>
            <p className="text-brand-orange mt-2">
              No system is 100% hack-proof, but we’re constantly working to stay
              ahead.
            </p>
          </Block>

          {/* Retention */}
          <SectionTitle title="🧺 HOW LONG WE KEEP YOUR DATA" />
          <Block>
            <p>
              We keep your personal data as long as your account is active -
              plus a little longer to:
            </p>
            <ul className="space-y-2 list-disc list-inside my-2 ml-4">
              <li>Comply with legal requirements (e.g., tax records)</li>
              <li>Resolve disputes</li>
              <li>Enforce our agreements</li>
            </ul>
            <p className="mt-2">
              After that, we either delete it or anonymise it so it can never be
              traced back to you.
            </p>
          </Block>

          {/* Changes */}
          <SectionTitle title="🔁 CHANGES TO THIS PRIVACY PROMISE" />
          <Block>
            <p>
              We may update this document occasionally - usually to reflect new
              features or legal requirements. When we do, we’ll post the revised
              version on this page and update the “Last updated” date. If the
              changes are significant, we’ll also notify you via email or in-app
              notice.
            </p>
            <p className="mt-2 text-brand-orange">
              Your continued use of Homcru after an update means you accept the
              revised Privacy Promise.
            </p>
          </Block>

          {/* Contact */}
          <SectionTitle title="📬 QUESTIONS? COMPLAINTS? WE’RE HERE." />
          <Block>
            <p>
              Email us anytime at{" "}
              <a href="mailto:info@homcru.com"><span className="text-brand-blue">info@homcru.com</span></a>
            </p>
            <p className="mt-4">
              This Privacy Promise is an integral part of Homcru’s Terms &
              Policies. By using the Platform, you confirm that you have read,
              understood, and agreed to both documents.
            </p>
            <p className="mt-6 text-brand-orange font-semibold">
              Because when it comes to your privacy, we don’t do fine print - we
              do clear promises.
            </p>
            <p className="mt-4">- Team Homcru 💙</p>
          </Block>
        </div>
      </Container>
    </section>
  );
}

/* ================= UI Components ================= */

function SectionTitle({ title }) {
  return (
    <h2 className="font-display font-bold  md:text-3xl text-white border-l-4 border-brand-blue pl-4">
      {title}
    </h2>
  );
}

function SubTitle({ title }) {
  return (
    <h3 className="font-semibold text-lg text-brand-orange mt-8 mb-4">
      {title}
    </h3>
  );
}

function Block({ children }) {
  return (
    <div className="bg-brand-surface border border-white/5 rounded-2xl p-8">
      {children}
    </div>
  );
}
function DataRow({ type, description }) {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-8 hover:bg-white/5 transition-colors">
      <div className="md:col-span-1">
        <h4 className="text-brand-orange font-semibold">{type}</h4>
      </div>

      <div className="md:col-span-2">
        <p className="text-gray-400 text-sm ">{description}</p>
      </div>
    </div>
  );
}
