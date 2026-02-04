import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative bg-brand-black pt-40 pb-28 lg:pt-52 lg:pb-40">
      <Container className="text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-3 border border-white/20 bg-black/60 px-5 py-2 rounded-full backdrop-blur-md mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange"></span>
          </span>
          <span className="text-xs font-bold text-gray-100 uppercase tracking-widest">
            Now Live in Odisha
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-display  font-black text-4xl sm:text-5xl lg:text-7xl leading-tight mb-6">
          Skilled Experts. Verified Helpers.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-brand-blue">
            Genuine Parts.
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
          India&apos;s first technology-enabled service facilitation platform.
          We connect you with independent professionals and daily wage workers,
          while facilitating genuine parts delivery for a hassle-free experience.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Button
            className="
              bg-blue-600 text-white
              px-10 py-4 rounded-full
              font-bold text-lg
            "
          >
            Book a Service →
          </Button>

          <Button
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
            <p className="font-display font-bold text-4xl text-white">2+</p>
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
              60<span className="text-xl">min</span>
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
