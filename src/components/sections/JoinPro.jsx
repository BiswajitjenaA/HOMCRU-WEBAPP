import { useState } from "react";
import Container from "../ui/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function JoinProfessional() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="join-pro"
      className="py-24 bg-black border-t border-white/5 relative"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <h2 className="font-display font-black text-4xl lg:text-5xl leading-tight">
              Earn Daily.
              <br />
              Live with Dignity.
            </h2>

            <p className="text-gray-400 text-lg">
              Join HOMCRU and get daily payouts, insurance, and uniform.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-500"
                />
                <span>Daily Payments</span>
              </div>
              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-500"
                />
                <span>Valid ID Card</span>
              </div>
              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-500"
                />
                <span>Uniform Provided</span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            className="
              bg-white/5 backdrop-blur-xl
              border border-white/10
              p-8 rounded-3xl
              shadow-2xl
            "
          >
            {!submitted ? (
              <>
                <h3 className="font-bold text-2xl mb-6">
                  Register as Professional
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white"
                  />

                  <select className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white">
                    <option>Electrician</option>
                    <option>Carpenter</option>
                    <option>Plumber</option>
                    <option>AC Technician</option>
                    <option>Daily Helper</option>
                  </select>

                  <button
                    type="submit"
                    className="
                      w-full bg-white text-black font-bold
                      py-4 rounded-xl cursor-pointer
                      hover:bg-gray-200 transition
                      shadow-[0_0_15px_rgba(255,255,255,0.3)]
                    "
                  >
                    Submit Application
                  </button>
                </form>
              </>
            ) : (
              /* SUCCESS STATE */
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 text-white animate-bounce">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <h3 className="font-bold text-xl">Application Sent!</h3>
                <p className="text-gray-400 mt-2">
                  We will verify your details shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
