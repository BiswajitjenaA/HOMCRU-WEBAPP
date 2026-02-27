import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/Button";
import ComingSoonModal from "../ui/ComingSoonModal";
import logo from "../../assets/logo/Logo.png"

export default function Navbar() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  return (
    <nav className="glass-nav fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <Container>
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-0.7">
        
            <img
              src={logo}
              alt="HOMCRU Logo"
              className="h-10 w-auto object-contain"
            />
          
            <span className="display font-black text-2xl tracking-tighter text-white">
              HOMCRU
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="display hidden md:flex space-x-8 items-center">
            <Link
              to="/#services"
              className="display text-sm font-medium text-gray-300 hover:text-white transition tracking-wide"
            >
              Services
            </Link>

            <Link
              to="/#how-it-works"
              className="text-sm font-medium text-gray-300 hover:text-white transition tracking-wide"
            >
              How It Works
            </Link>

            <Link
              to="/#about"
              className="text-sm font-medium text-gray-300 hover:text-white transition tracking-wide"
            >
              About
            </Link>

            <Link
              to="/#investors"
              className="text-sm font-medium text-gray-300 hover:text-white transition tracking-wide"
            >
              Investors
            </Link>

            <Button className="cursor-pointer text-sm font-bold text-blue-500 hover:text-white transition tracking-wide bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-blue-500 hover:border-blue-500">
              <Link to="/#join-pro">Join as Professional</Link>
            </Button>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-7">
            {/* <a href="#login" className="text-white font-semibold text-sm ">
              Login
            </a> */}

            <Button
              onClick={() => setShowComingSoon(true)}
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
        <ComingSoonModal
          open={showComingSoon}
          onClose={() => setShowComingSoon(false)}
        />
      </Container>
    </nav>
  );
}
