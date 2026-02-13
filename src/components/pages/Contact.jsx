import Container from "../ui/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faClock,
  faPaperPlane,
  faHeadset,
  faUserTie,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section className="py-24 bg-brand-black border-t border-white/5 relative overflow-hidden">
      <Container>

        {/* Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-125 h-125 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">
            Contact Us
          </span>

          <h1 className="font-display font-black text-4xl md:text-5xl text-white mt-4 mb-6">
            We’re Here to Help
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            Whether you have a question, feedback, partnership inquiry,
            or support request — our team is ready to assist you.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">

          <ContactCard
            icon={faEnvelope}
            title="Email"
            content="info@homcru.com"
            color="bg-blue-600/20 text-blue-500"
          />

          <ContactCard
            icon={faPhone}
            title="Phone"
            content="+91 XXXXX XXXXX"
            color="bg-green-600/20 text-green-500"
          />

          <ContactCard
            icon={faLocationDot}
            title="Location"
            content="Odisha, India"
            color="bg-red-600/20 text-red-500"
          />

          <ContactCard
            icon={faClock}
            title="Working Hours"
            content="Mon - Sat | 9 AM - 6 PM"
            color="bg-purple-600/20 text-purple-500"
          />

        </div>

        {/* SWITCHED SECTION — INFO LEFT, FORM RIGHT */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE INFO */}
          <div>
            <h2 className="text-white font-bold text-2xl mb-6">
              Our Support Promise
            </h2>

            <p className="text-gray-400 mb-6 leading-relaxed">
              At Homcru, we value transparency and responsiveness.
              Every inquiry is reviewed by our team, and we aim to
              respond within 24–48 business hours.
            </p>

            <div className="space-y-6">

              <InfoBlock
                icon={faBuilding}
                title="General Inquiries"
                content="For business partnerships, investor relations, or general questions."
                color="bg-brand-blue/20 text-brand-blue"
              />

              <InfoBlock
                icon={faHeadset}
                title="Customer Support"
                content="For service issues, booking help, or account assistance."
                color="bg-brand-orange/20 text-brand-orange"
              />

              <InfoBlock
                icon={faUserTie}
                title="Professional Registration"
                content="Interested in joining as a service professional or daily wage worker? Reach out to us."
                color="bg-green-600/20 text-green-500"
              />

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-brand-surface border border-white/5 rounded-3xl p-10">
            <h2 className="text-white font-bold text-2xl mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-6">

              <Input label="Full Name" type="text" />
              <Input label="Email Address" type="email" />
              <Input label="Phone Number" type="tel" />

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-all"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-blue text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Send Message
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>

            </form>
          </div>

        </div>

      </Container>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function ContactCard({ icon, title, content, color }) {
  return (
    <div className="bg-brand-surface border border-white/5 rounded-3xl p-8 text-center hover:border-brand-blue/40 transition-all duration-300">
      <div className={`w-14 h-14 mx-auto mb-6 rounded-2xl flex items-center justify-center ${color}`}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="text-white font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{content}</p>
    </div>
  );
}

function Input({ label, type }) {
  return (
    <div>
      <label className="block text-sm text-gray-400 mb-2">
        {label}
      </label>
      <input
        type={type}
        className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-all"
      />
    </div>
  );
}

function InfoBlock({ icon, title, content, color }) {
  return (
    <div className="bg-brand-surface border border-white/5 rounded-2xl p-6 flex items-start gap-4">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        <h4 className="text-white font-semibold mb-2">{title}</h4>
        <p className="text-gray-400 text-sm">{content}</p>
      </div>
    </div>
  );
}
