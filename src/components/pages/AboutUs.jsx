import Container from "../ui/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faUserCheck,
  faNetworkWired,
  faBoxesPacking,
  faUsers,
  faBriefcase,
  faCheckCircle,
  faHouse,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section
      id="about"
      className="py-5 bg-brand-black border-t border-white/5 relative overflow-hidden"
    >
      <Container>
        {/* Decorative Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-125 h-125 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 relative z-10">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">
            About Homcru
          </span>

          <h2 className="font-display font-black text-4xl md:text-5xl text-white mt-4 mb-6">
            One App for Home Services, Workers & Parts -
            <span className="text-brand-blue"> Delivered Fast</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Homcru is a technology-enabled home services platform that connects
            households and businesses with trusted professionals, daily wage
            workers, and essential service support through a single, organized
            system.
          </p>
        </div>

        {/* Core Platform Principles */}
        <div className="grid md:grid-cols-2 gap-10 mb-24 relative z-10">
          <FeatureCard
            icon={faUserCheck}
            iconBg="bg-brand-blue text-brand-white"
            title="Verified Professionals & Workers"
            content="All professionals and daily wage workers undergo identity verification and structured onboarding. Skill-based workers are additionally assessed to ensure service quality and safety."
          />

          <FeatureCard
            icon={faShieldHalved}
            iconBg="bg-green-500 text-white"
            title="Structured & Transparent Services"
            content="Customers receive clearly defined service scopes, wage structures for daily labour, and transparent pricing models to reduce uncertainty."
          />

          <FeatureCard
            icon={faNetworkWired}
            iconBg="bg-purple-500 text-white"
            title="Technology-Driven Coordination"
            content="Homcru manages worker allocation, job tracking, and service completion through technology, enabling smooth coordination."
          />

          <FeatureCard
            icon={faBoxesPacking}
            iconBg="bg-brand-orange text-brand-white"
            title="Service Enablement Through Materials"
            content="We are integrating parts and materials delivery to improve turnaround times and reduce dependency on external vendors."
          />
        </div>

        {/* What We Do */}
        <SectionTitle title="What We Do" />

        <div className="grid md:grid-cols-2 gap-10 mb-24">
          <BulletList
            title="Professional Services"
            icon={faBriefcase}
            iconColor="text-brand-orange"
            items={[
              "Home Cleaning",
              "Plumbing Services",
              "Electrical Services",
              "AC Repair & Servicing",
              "Painting Services",
              "Appliance Repair",
            ]}
          />

          <BulletList
            title="Daily Wage & Labour Support"
            icon={faUsers}
            iconColor="text-brand-blue"
            items={[
              "General Helpers",
              "Loaders & Movers",
              "Site Support",
              "Short-term Assistance",
            ]}
          />
        </div>

        {/* For Customers & Workers */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <InfoBlock
            icon={faHouse}
            iconBg="bg-brand-blue text-brand-white"
            title="For Customers"
            content="Homcru helps customers access professional services, daily wage workers, and essential service support through a single platform. Customers benefit from easy booking, verified workers, recurring service support, and future access to materials."
          />

          <InfoBlock
            icon={faToolbox}
            iconBg="bg-brand-orange text-brand-white"
            title="For Professionals & Workers"
            content="Homcru supports skilled professionals and daily wage workers with regular work opportunities, trusted customers, fair payments, reduced intermediaries, and structured job flow."
          />
        </div>

        {/* How It Works Preview */}
        <SectionTitle title="How It Works" />

        <div className="grid md:grid-cols-4 gap-6">
          <StepCard
            step="1"
            title="Choose Service"
            desc="Select professional or daily wage services and schedule conveniently."
          />

          <StepCard
            step="2"
            title="Verified Assignment"
            desc="A verified professional or worker is assigned based on requirement."
          />

          <StepCard
            step="3"
            title="Service Completion"
            desc="Job is completed as per defined scope with coordination."
          />

          <StepCard
            step="4"
            title="Easy Payment"
            desc="Transparent payment processing and support after completion."
          />
        </div>
      </Container>
    </section>
  );
}

/* ================= Components ================= */

function FeatureCard({ icon, title, content, iconBg }) {
  return (
    <div className="bg-brand-surface border border-white/5 rounded-3xl p-8 hover:border-brand-blue/40 transition-all duration-300">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${iconBg}`}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{content}</p>
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <h3 className="font-display font-black text-3xl text-white mb-10">
      {title}
    </h3>
  );
}

function BulletList({ title, items, icon, iconColor }) {
  return (
    <div className="bg-brand-surface border border-white/5 rounded-3xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
          <FontAwesomeIcon icon={icon} className={iconColor} />
        </div>
        <h4 className="text-white font-bold text-lg">{title}</h4>
      </div>
      <ul className="space-y-3 text-gray-400 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-brand-blue/20 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-brand-blue text-xs"
              />
            </div>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function InfoBlock({ title, content, icon, iconBg }) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg}`}
        >
          <FontAwesomeIcon icon={icon} />
        </div>
        <h4 className="text-white font-bold text-2xl">{title}</h4>
      </div>
      <p className="text-gray-400 leading-relaxed text-sm">{content}</p>
    </div>
  );
}

function StepCard({ step, title, desc }) {
  return (
    <div className="bg-brand-surface border border-white/5 rounded-3xl p-6 text-center hover:border-brand-blue/40 transition-all duration-300">
      <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">
        {step}
      </div>
      <h5 className="text-white font-bold mb-2">{title}</h5>
      <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
    </div>
  );
}
