import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <nav className="glass-nav fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <Container>
        <div className="flex justify-between h-20 items-center">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <span className="font-display font-black text-2xl tracking-tighter text-white">
              HOMCRU
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#services"
              className="text-sm font-medium text-gray-300 hover:text-white transition tracking-wide"
            >
              Services
            </a>

            <a
              href="#how-it-works"
              className="text-sm font-medium text-gray-300 hover:text-white transition tracking-wide"
            >
              How It Works
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-gray-300 hover:text-white transition tracking-wide"
            >
              About
            </a>

            <a
              href="#investors"
              className="text-sm font-medium text-gray-300 hover:text-white transition tracking-wide"
            >
              Investors
            </a>

            <Button
              className="cursor-pointer text-sm font-bold text-blue-500 hover:text-white transition tracking-wide bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-blue-500 hover:border-blue-500"
            >
              Join as Professional
            </Button>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#login"
              className="text-white font-semibold text-sm "
            >
              Login
            </a>

            <Button
              className="
                bg-white text-black cursor-pointer
                px-6 py-2.5 rounded-full
                font-bold text-sm
                transition-transform duration-200
                hover:bg-gray-200 hover:scale-105
                shadow-[0_0_20px_rgba(255,255,255,0.2)]
              "
            >
              Download App
            </Button>
          </div>

        </div>
      </Container>
    </nav>
  );
}
