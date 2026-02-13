import Container from "../ui/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faUsers,
  faShieldHalved,
  faChartLine,
  faBriefcase,
  faLaptopCode,
  faHandshake,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Careers() {
  return (
    <section className="py-24 bg-brand-black border-t border-white/5 relative overflow-hidden">
      <Container>

        {/* Glow Background */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-125 h-125 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">
            Careers at Homcru
          </span>

          <h1 className="font-display font-black text-4xl md:text-5xl text-white mt-4 mb-6">
            Build The Future of
            <span className="text-brand-blue"> Home Services</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            Join a fast-growing technology platform transforming how India connects
            households, professionals, and daily wage workers.
          </p>
        </div>

        {/* WHY WORK WITH US */}
        <SectionTitle title="Why Work With Us" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <ColorCard
            icon={faRocket}
            title="High Impact"
            content="Build real systems that improve real lives."
            gradient="from-purple-500 to-indigo-600"
          />
          <ColorCard
            icon={faUsers}
            title="Strong Team Culture"
            content="Work with ambitious, mission-driven teammates."
            gradient="from-pink-500 to-red-500"
          />
          <ColorCard
            icon={faChartLine}
            title="Growth & Scale"
            content="Grow with a startup expanding across India."
            gradient="from-emerald-400 to-green-600"
          />
          <ColorCard
            icon={faShieldHalved}
            title="Ethical & Structured"
            content="Transparency and fairness are core principles."
            gradient="from-sky-400 to-blue-600"
          />
        </div>

        {/* OPEN ROLES */}
        <SectionTitle title="Open Positions" />

        <div className="space-y-6 mb-24">
          <JobCard
            title="Frontend Developer (React)"
            location="Remote / Bhubaneswar"
            type="Full-time"
          />
          <JobCard
            title="Operations Executive"
            location="Odisha"
            type="Full-time"
          />
          <JobCard
            title="City Coordinator"
            location="Multiple Cities"
            type="Full-time"
          />
        </div>

        {/* OUR VALUES */}
        <SectionTitle title="Our Values" />

        <div className="grid md:grid-cols-3 gap-10 mb-24">
          <ColorValueCard
            icon={faHandshake}
            title="Respect"
            content="We treat customers and professionals with dignity."
            gradient="from-orange-400 to-amber-600"
          />
          <ColorValueCard
            icon={faLaptopCode}
            title="Innovation"
            content="Technology drives everything we build."
            gradient="from-cyan-400 to-teal-600"
          />
          <ColorValueCard
            icon={faBriefcase}
            title="Ownership"
            content="We take responsibility and move fast."
            gradient="from-rose-400 to-pink-600"
          />
        </div>

        {/* HIRING PROCESS */}
        <SectionTitle title="Hiring Process" />

        <div className="grid md:grid-cols-4 gap-6 mb-24">
          <StepCard step="1" title="Apply Online" />
          <StepCard step="2" title="Initial Screening" />
          <StepCard step="3" title="Interview Round" />
          <StepCard step="4" title="Final Selection" />
        </div>

        {/* CTA */}
        <div className="bg-linear-to-r from-brand-blue/20 to-brand-orange/20 border border-white/10 rounded-3xl p-10 text-center">
          <h3 className="text-white font-bold text-2xl mb-4">
            Ready to grow with us?
          </h3>

          <p className="text-gray-300 mb-6">
            Send your resume to
            <span className="text-brand-blue font-semibold">
              {" "}info@homcru.com
            </span>
          </p>

          <button className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition-all duration-200 inline-flex items-center gap-2">
            Apply Now
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

      </Container>
    </section>
  );
}

/* ============= COMPONENTS ============= */

function SectionTitle({ title }) {
  return (
    <h2 className="font-display font-black text-3xl text-white mb-10">
      {title}
    </h2>
  );
}

function ColorCard({ icon, title, content, gradient }) {
  return (
    <div className="bg-brand-surface border border-white/5 rounded-3xl p-8 hover:border-white/20 transition-all duration-300">
      <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${gradient} text-white flex items-center justify-center mb-6 shadow-lg`}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
      <p className="text-gray-400 text-sm">{content}</p>
    </div>
  );
}

function ColorValueCard({ icon, title, content, gradient }) {
  return (
    <div className="bg-brand-surface border border-white/5 rounded-3xl p-8 text-center hover:border-white/20 transition-all duration-300">
      <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-linear-to-br ${gradient} text-white flex items-center justify-center shadow-lg`}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h4 className="text-white font-bold mb-3">{title}</h4>
      <p className="text-gray-400 text-sm">{content}</p>
    </div>
  );
}

function JobCard({ title, location, type }) {
  return (
    <div className="bg-brand-surface border border-white/5 rounded-3xl p-8 flex flex-col md:flex-row md:items-center md:justify-between hover:border-brand-blue/40 transition-all duration-300">
      <div>
        <h3 className="text-white font-bold text-lg">{title}</h3>
        <p className="text-gray-400 text-sm mt-1">
          {location} • {type}
        </p>
      </div>

      <button className="mt-4 md:mt-0 bg-white/5 border border-white/10 text-white px-6 py-2 rounded-full hover:bg-brand-blue hover:border-brand-blue transition-all duration-200">
        View Details
      </button>
    </div>
  );
}

function StepCard({ step, title }) {
  return (
    <div className="bg-brand-surface border border-white/5 rounded-3xl p-6 text-center hover:border-brand-blue/40 transition-all duration-300">
      <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">
        {step}
      </div>
      <p className="text-white font-semibold">{title}</p>
    </div>
  );
}
