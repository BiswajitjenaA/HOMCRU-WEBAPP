import { useEffect, useState } from "react";

export default function BookingModal({ open, service, onClose }) {
  const [step, setStep] = useState("booking");

  // Reset step when modal closes
  useEffect(() => {
    if (!open) setStep("booking");
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-100
        bg-black/80 backdrop-blur-sm
        grid place-items-center
      "
      onClick={onClose}
    >
      {/* MODAL SHELL (NEVER UNMOUNTS) */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          bg-brand-surface
          border border-white/10
          rounded-3xl
          p-8
          max-w-md w-full
          text-center
          transition-all duration-200
        "
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {/* BOOKING CONTENT */}
        {step === "booking" && (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-1">Book Service</h3>

            <p className="text-blue-500 font-bold text-lg mb-4">{service}</p>

            <p className="text-gray-400 text-sm mb-6">
              Download the HOMCRU App to complete your booking securely.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => setStep("comingSoon")}
                className="
                  flex-1 bg-white text-black font-bold
                  py-3 rounded-xl
                  hover:bg-gray-200 transition hover:cursor-pointer
                "
              >
                Get App
              </button>

              <button
                onClick={onClose}
                className="
                  flex-1 border border-white/20
                  text-white font-bold
                  py-3 rounded-xl
                  hover:bg-white/5 transition hover:cursor-pointer
                "
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* COMING SOON CONTENT */}
        {step === "comingSoon" && (
          <div className="animate-fade-in">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-600/20 text-blue-500 flex items-center justify-center text-2xl">
              📱
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              App Launching Soon
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              The HOMCRU mobile app is launching soon on Play Store and App
              Store.
            </p>

            <button
              onClick={onClose}
              className="
                w-full bg-white text-black font-bold
                py-3 rounded-xl
                hover:bg-gray-200 transition hover:cursor-pointer
              "
            >
              Got it
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
