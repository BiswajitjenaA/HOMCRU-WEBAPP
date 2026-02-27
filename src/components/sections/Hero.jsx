import Container from "../ui/Container";
import Button from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="hero-bg relative bg-brand-black pt-15 pb-28 lg:pt-20 lg:pb-40">
      <Container className="text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 border border-white/20 bg-black/60 px-5 py-2 rounded-full backdrop-blur-md mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange"></span>
          </span>
          <span className="text-xs font-bold text-gray-100 uppercase tracking-widest">
            Coming Soon In Bhubaneswar
          </span>
        </div>

        {/* Heading */}
        <h1 className="display  font-black text-4xl sm:text-5xl lg:text-7xl mb-6">
          Skilled Experts. Verified Helpers.
          <br />
          <span className="text-blue-500">Genuine Parts.</span>
        </h1>

        {/* Subheading */}
        <p className="sans text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto  mb-7 ">
          India&apos;s first technology-enabled service facilitation platform.
          We connect you with independent professionals and daily wage workers,
          while facilitating genuine parts delivery for a hassle-free
          experience.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button
            onClick={() => scrollToSection("services")}
            className="
    bg-blue-600 text-white
    px-10 py-4 rounded-full
    font-bold text-lg 
    group
  "
          >
            <span className="flex items-center gap-2">
              Book a Service
              <FontAwesomeIcon
                icon={faArrowRight}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </Button>

          <Button
            onClick={() => scrollToSection("join-pro")}
            className="
              bg-white/10 backdrop-blur-md
              border border-white/20
              text-white
              px-10 py-4 rounded-full
              font-bold text-lg
              transition
              hover:bg-white/20
            "
          >
            Join as Professional
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 max-w-3xl mx-auto border-t border-white/10 pt-8 gap-8">
          <div>
            <p className="font-display font-bold text-4xl text-white">1</p>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">
              Cities Active
            </p>
          </div>
          <div>
            <p className="font-display font-bold text-4xl text-white">100%</p>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">
              Verified Pros
            </p>
          </div>
          <div>
            <p className="font-display font-bold text-4xl text-white">
              45<span className="text-xl">min</span>
            </p>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">
              Avg Response
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
