import { useState } from "react";
import Container from "../ui/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxQ-VNxyUMJFAzMab0fGmjG_I0q9tofJG1yrYec6npQigxGKpLR4UNGRDMRHXMF0neplA/exec";

export default function JoinProfessional() {

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const resetForm = (form) => {
    setTimeout(() => {
      form.reset();
      setSubmitted(false);
      setError("");
    }, 5000);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (loading) return;

    setError("");
    setLoading(true);

    const form = e.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const profession = form.profession.value;
    const honeypot = form.company.value;

    if (!name) {
      setError("Please enter your name.");
      setLoading(false);
      resetForm(form);
      return;
    }

    if (!email) {
      setError("Please enter your email.");
      setLoading(false);
      resetForm(form);
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      setLoading(false);
      resetForm(form);
      return;
    }

    if (!profession) {
      setError("Please select a profession.");
      setLoading(false);
      resetForm(form);
      return;
    }

    const previousSubmission = localStorage.getItem("homcru_join");

    if (previousSubmission) {
      const data = JSON.parse(previousSubmission);

      if (data.email === email || data.phone === phone) {
        setError("You have already submitted an application.");
        setLoading(false);
        resetForm(form);
        return;
      }
    }

    const formData = new URLSearchParams({
      formType: "join",
      name,
      email,
      phone,
      profession,
      company: honeypot,
      userAgent: navigator.userAgent
    });

    try {

      await fetch(WEB_APP_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors"
      });

      setSubmitted(true);

      localStorage.setItem(
        "homcru_join",
        JSON.stringify({ email, phone })
      );

    } catch {
      setError("Network error. Please try again.");
    }

    setLoading(false);

    resetForm(form);
  };


  const handleInputChange = () => {
    if (error) setError("");
  };


  return (
    <section
      id="join-pro"
      className="py-24 bg-black border-t border-white/5 relative"
    >
      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

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
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                <span>Daily Payments</span>
              </div>

              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                <span>Valid ID Card</span>
              </div>

              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                <span>Uniform Provided</span>
              </div>

            </div>

          </div>


          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">

            {!submitted ? (

              <>
                <h3 className="font-bold text-2xl mb-6">
                  Register as Professional
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">

                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    required
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white"
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white"
                  />

                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white"
                  />

                  <select
                    name="profession"
                    defaultValue=""
                    onChange={handleInputChange}
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white cursor-pointer"
                  >
                    <option value="" disabled>Select Profession</option>
                    <option value="Electrician">Electrician</option>
                    <option value="Plumber">Plumber</option>
                    <option value="Appliances Technician">Appliances Technician</option>
                    <option value="AC Technician">AC Technician</option>
                  </select>

                  <input
                    type="text"
                    name="company"
                    style={{ display: "none" }}
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-white text-black font-bold py-4 rounded-xl cursor-pointer hover:bg-gray-200 transition shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </button>

                </form>
              </>

            ) : (

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