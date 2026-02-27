import Container from "../ui/Container";
import biswajit from "../../assets/images/Biswjit.jpeg";
import akash from "../../assets/images/Akash.jpeg";

export default function Investors() {
  return (
    <section
      id="investors"
      className="py-24 bg-linear-to-br from-black to-brand-surface border-t border-white/5"
    >
      <Container>
        <div
          className="
            bg-white/5 backdrop-blur-sm
            border border-white/10
            rounded-3xl
            p-8 lg:p-12
            flex flex-col lg:flex-row
            gap-12
            items-center
          "
        >
          {/* LEFT CONTENT */}
          <div className="lg:w-1/2 space-y-8">
            <h2 className="display font-black text-3xl lg:text-4xl leading-tight">
              Invest in the Future of <br />
              Tier-2 India.
            </h2>

            <p className="sans text-gray-400 text-lg leading-relaxed">
              We are capturing the ₹5 Trillion unorganized market by solving the
              hardest problems: Logistics, Trust, and Payments.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-8 pt-2">
              <div className="pl-4 border-l-4 border-orange-500">
                <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">
                  Market Size
                </p>
                <p className="text-3xl font-bold">₹5 Trillion</p>
              </div>

              <div className="pl-4 border-l-4 border-blue-600">
                <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">
                  Growth
                </p>
                <p className="text-3xl font-bold">100% YoY</p>
              </div>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
            {/* Founder */}
            <div
              className="
                bg-black
                p-6
                rounded-2xl
                border border-white/10
                text-center
                transition-colors
                hover:border-white/30
              "
            >
              <div className="w-20 h-20 mx-auto mb-4">
                <img
                  src={akash}
                  alt="Akash K. Tripathy"
                  className="w-full h-full rounded-full object-cover border-2 "
                />
              </div>
              <h4 className="font-bold">Akash K. Tripathy</h4>
              <p className="text-xs text-orange-500 font-bold uppercase mt-1">
                Founder, Ops
              </p>
            </div>

            {/* Co-Founder */}
            <div
              className="
                bg-black
                p-6
                rounded-2xl
                border border-white/10
                text-center
                transition-colors
                hover:border-white/30
              "
            >
              <div className="w-20 h-20 mx-auto mb-4">
                <img
                  src={biswajit}
                  alt="Biswajit Jena"
                  className="w-full h-full rounded-full object-cover border-2 border-blue-500"
                />
              </div>
              <h4 className="font-bold">Biswajit Jena</h4>
              <p className="text-xs text-blue-500 font-bold uppercase mt-1">
                Co-Founder, Tech
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
