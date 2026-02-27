import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import ComingSoonModal from "../ui/ComingSoonModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const FooterLink = ({ to, href, children, external = false }) => {
  if (external && href) {
    return (
      <li>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-gray-400 hover:text-white transition-colors"
        >
          {children}
        </a>
      </li>
    );
  }

  if (to) {
    return (
      <li>
        <Link
          to={to}
          className="cursor-pointer text-gray-400 hover:text-white transition-colors"
        >
          {children}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <a
        href={href}
        className="cursor-pointer text-gray-400 hover:text-white transition-colors"
      >
        {children}
      </a>
    </li>
  );
};

const SocialIcon = ({ children, variant }) => (
  <div
    className={`
      group
      w-10 h-10 rounded-full
      bg-white/5
      flex items-center justify-center
      transition-all duration-200
      ${
        variant === "x"
          ? "hover:bg-white/10"
          : variant === "facebook"
            ? "hover:bg-[#1877F2]"
            : variant === "instagram"
              ? "hover:bg-linear-to-tr hover:from-[#feda75] hover:via-[#d62976] hover:to-[#4f5bd5]"
              : variant === "linkedin"
                ? "hover:bg-[#0a66c2]"
                : ""
      }
    `}
  >
    <span className="text-current group-hover:text-white transition-colors duration-200">
      {children}
    </span>
  </div>
);

export default function Footer() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <footer className="bg-black border-t border-white/5">
      <Container>
        {/* TOP FOOTER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-16">
          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <FooterLink to="/about-us">About us</FooterLink>
              <FooterLink to="/terms-and-conditions">Terms & conditions</FooterLink>
              <FooterLink to="/privacy-policy">Privacy policy</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
            </ul>
          </div>

          {/* Customers */}
          <div>
            <h4 className="font-semibold text-white mb-4">For customers</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <FooterLink to="/contact-us">Contact us</FooterLink>
            </ul>
          </div>

          {/* Professionals */}
          <div>
            <h4 className="font-semibold text-white mb-4">For professionals</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <FooterLink to="/#join-pro">
                Register as a professional
              </FooterLink>
            </ul>
          </div>

          {/* Social & Apps */}
          <div>
            <h4 className="font-semibold text-white mb-4">Social links</h4>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 mb-6 cursor-pointer">
              <SocialIcon variant="x">
                <a target="_blank" href="https://x.com/Homcru_Services">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </SocialIcon>

              <SocialIcon variant="facebook">
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61587901180075"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="text-[#384df0] group-hover:text-white"
                  />
                </a>
              </SocialIcon>

              <SocialIcon variant="instagram">
                <a
                  target="_blank"
                  href="https://www.instagram.com/_homcru?igsh=M3RuaTlwOWZqczN2"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-[#ff00d0] group-hover:text-white"
                  />
                </a>
              </SocialIcon>

              <SocialIcon variant="linkedin">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/homcru/"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="text-[#0a66c2] group-hover:text-white"
                  />
                </a>
              </SocialIcon>
            </div>

            {/* APP STORE BADGES */}
            <div className="space-y-3 cursor-pointer">
              <img
                onClick={() => setShowComingSoon(true)}
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-12"
              />
              <img
                onClick={() => setShowComingSoon(true)}
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-12 w-36"
              />
            </div>
          </div>
        </div>

        {/* Coming Soon Modal */}
        <ComingSoonModal
          open={showComingSoon}
          onClose={() => setShowComingSoon(false)}
        />

        {/* DIVIDER */}
        <div className="border-t border-white/5" />

        {/* BOTTOM FOOTER */}
        <div className="py-6 text-sm text-gray-500">
          {/* <p className="mb-2">* As on December 31, 2025</p> */}
          <p>
            © Copyright 2026 Homcru Services Pvt. Ltd. All rights reserved.
          </p>
          
        </div>
      </Container>
    </footer>
  );
}
