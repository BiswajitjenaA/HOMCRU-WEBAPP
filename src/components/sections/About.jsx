import { useState } from "react";
import Container from "../ui/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHammer,
  faUsers,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="py-24 bg-brand-black border-t border-white/5"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">
              About Homcru
            </span>

            <h2 className="font-display font-black text-4xl lg:text-5xl leading-tight">
              Organising the <br /> Unorganised.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Homcru is a technology-enabled service facilitation platform that
              connects customers with independent service professionals and
              daily wage workers.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-blue-600 pl-4">
              <strong className="text-white">More than an app:</strong> We
              facilitate service-related support, including parts and materials
              delivery, ensuring a complete solution for every home concern.
            </p>

            {/* READ MORE */}
            {expanded && (
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  Homcru acts solely as a marketplace. We do not provide
                  services directly or employ workers; all services are
                  performed by verified independent third parties.
                </p>
                <p>
                  From instant booking to secure payments and verified
                  professionals, we are building the digital infrastructure for
                  millions of households across India.
                </p>
              </div>
            )}

            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-blue-500 font-bold hover:cursor-pointer"
            >
              {expanded ? "Read Less" : "Read More"}
              <FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} />
            </button>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-brand-surface p-6 rounded-2xl border border-white/10">
              <FontAwesomeIcon
                icon={faHammer}
                className="text-orange-500 text-3xl mb-4"
              />
              <h4 className="font-bold text-xl mb-1">Facilitation</h4>
              <p className="text-gray-500 text-sm">
                Connecting skilled & unskilled labor seamlessly.
              </p>
            </div>

            <div className="bg-brand-surface p-6 rounded-2xl border border-white/10">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-blue-500 text-3xl mb-4"
              />
              <h4 className="font-bold text-xl mb-1">Dignity</h4>
              <p className="text-gray-500 text-sm">
                Empowering workers with identity & fair pay.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
