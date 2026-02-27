import { useState, useRef } from "react";
import Container from "../ui/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faHeadset,
  faUserTie,
  faBuilding,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxQ-VNxyUMJFAzMab0fGmjG_I0q9tofJG1yrYec6npQigxGKpLR4UNGRDMRHXMF0neplA/exec";

export default function Contact() {

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const resetTimer = useRef(null);

  const resetForm = (form) => {
    if (resetTimer.current) clearTimeout(resetTimer.current);

    resetTimer.current = setTimeout(() => {
      form.reset();
      setSubmitted(false);
      setError("");
    }, 5000);
  };

  const handleInputChange = () => {
    if (error) setError("");
    if (resetTimer.current) clearTimeout(resetTimer.current);
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
    const message = form.message.value.trim();
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

    if (!message) {
      setError("Please enter your message.");
      setLoading(false);
      resetForm(form);
      return;
    }

    /* Frontend duplicate prevention */

    const previousSubmission = localStorage.getItem("homcru_contact");

    if (previousSubmission) {

      const data = JSON.parse(previousSubmission);

      if (data.email === email) {
        setError("You have already submitted a message.");
        setLoading(false);
        resetForm(form);
        return;
      }
    }

    const formData = new URLSearchParams({
      formType: "contact",
      name,
      email,
      phone,
      message,
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
        "homcru_contact",
        JSON.stringify({ email })
      );

    } catch {

      setError("Network error. Please try again.");
    }

    setLoading(false);

    resetForm(form);
  };


  return (
    <section className="py-15 bg-brand-black border-t border-white/5 relative overflow-hidden">
      <Container>

        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-125 h-125 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">

          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">
            Contact Us
          </span>

          <h1 className="font-display font-black text-4xl md:text-5xl text-white mt-4 mb-6">
            We’re Here to Help
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            Whether you have a question, feedback, partnership inquiry,
            or support request — our team is ready to assist you.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}

          <div>

            <h2 className="text-white font-bold text-2xl mb-6">
              Our Support Promise
            </h2>

            <p className="text-gray-400 mb-6 leading-relaxed">
              At Homcru, we value transparency and responsiveness.
              Every inquiry is reviewed by our team, and we aim to
              respond within 24–48 business hours.
            </p>

            <div className="space-y-6">

              <InfoBlock
                icon={faBuilding}
                title="General Inquiries"
                content="For business partnerships, investor relations, or general questions."
                color="bg-brand-blue text-brand-white"
              />

              <InfoBlock
                icon={faHeadset}
                title="Customer Support"
                content="For service issues, booking help, or account assistance."
                color="bg-brand-orange text-brand-white"
              />

              <InfoBlock
                icon={faUserTie}
                title="Professional Registration"
                content="Interested in joining as a service professional or daily wage worker? Reach out to us."
                color="bg-green-600 text-white"
              />

            </div>

          </div>


          {/* FORM */}

          <div className="bg-brand-surface border border-white/5 rounded-3xl p-10">

            {!submitted ? (

              <>
                <h2 className="text-white font-bold text-2xl mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">

                  <Input label="Full Name" name="name" type="text" onChange={handleInputChange}/>
                  <Input label="Email Address" name="email" type="email" onChange={handleInputChange}/>
                  <Input label="Phone Number" name="phone" type="tel" onChange={handleInputChange}/>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      onChange={handleInputChange}
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-all"
                      placeholder="Write your message..."
                    />
                  </div>

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
                    className="w-full bg-brand-blue text-white font-bold py-3 cursor-pointer rounded-xl hover:bg-blue-600 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>

                </form>
              </>

            ) : (

              <div className="text-center py-10">

                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 text-white animate-bounce">
                  <FontAwesomeIcon icon={faCheckCircle}/>
                </div>

                <h3 className="font-bold text-xl text-white">
                  Message Sent!
                </h3>

                <p className="text-gray-400 mt-2">
                  Our support team will respond shortly.
                </p>

              </div>

            )}

          </div>

        </div>

      </Container>
    </section>
  );
}


/* COMPONENTS */

function Input({ label, name, type, onChange }) {
  return (
    <div>
      <label className="block text-sm text-gray-400 mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        onChange={onChange}
        required
        className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-all"
      />
    </div>
  );
}

function InfoBlock({ icon, title, content, color }) {
  return (
    <div className="bg-brand-surface border border-white/5 rounded-2xl p-6 flex items-start gap-4">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        <h4 className="text-white font-semibold mb-2">{title}</h4>
        <p className="text-gray-400 text-sm">{content}</p>
      </div>
    </div>
  );
}