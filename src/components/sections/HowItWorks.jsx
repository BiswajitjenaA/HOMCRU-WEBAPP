import Container from "../ui/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faShieldHalved,
  faScrewdriverWrench,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    step: "01",
    title: "Book Instantly",
    desc: "Choose your service and get a transparent price upfront.",
    icon: faMobileScreenButton,
    color: "bg-blue-600",
  },
  {
    step: "02",
    title: "Verify & Start",
    desc: "Verified pro arrives. Share secure OTP to start the job.",
    icon: faShieldHalved,
    color: "bg-orange-500",
  },
  {
    step: "03",
    title: "Parts Delivered",
    desc: "We bring genuine parts and tools. No shop visits.",
    icon: faScrewdriverWrench,
    color: "bg-purple-600",
  },
  {
    step: "04",
    title: "Pay Securely",
    desc: "Pay digitally only after you are satisfied.",
    icon: faCircleCheck,
    color: "bg-green-500",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-brand-dark border-t border-white/5 relative overflow-hidden"
    >
      <Container>
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">
            The Process
          </span>
          <h2 className="font-display font-black text-4xl text-white mt-2">
            How It Works
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-4 gap-8">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-blue-600/40 to-transparent" />

          {steps.map((item) => (
            <div
              key={item.step}
              className="
                relative z-10
                bg-brand-surface/70 backdrop-blur
                border border-white/10
                rounded-3xl p-8
                transition-transform duration-200
                hover:-translate-y-2 hover:border-blue-600/40
              "
            >
              {/* Step Number */}
              <div className="absolute -top-6 left-6 text-7xl font-black text-white/5 select-none">
                {item.step}
              </div>

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl text-white mb-6 ${item.color}`}
              >
                <FontAwesomeIcon icon={item.icon} />
              </div>

              {/* Text */}
              <h4 className="font-bold text-xl text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
