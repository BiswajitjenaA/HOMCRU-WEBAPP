import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function ComingSoonModal({ open, onClose }) {
  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="
        fixed inset-0 z-9999
        bg-black/80 backdrop-blur-sm
        grid place-items-center
      "
      onClick={onClose}
    >
      {/* Modal */}
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
          animate-fade-in
        "
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-600/20 text-blue-500 flex items-center justify-center text-2xl">
          📱
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">
          App Launching Soon
        </h3>

        <p className="text-gray-400 text-sm mb-6">
          The HOMCRU mobile app is launching soon on Play Store and App Store.
        </p>

        <button
          onClick={onClose}
          className="
            w-full bg-white text-black font-bold py-3 rounded-xl
            hover:bg-gray-200 transition hover:cursor-pointer
          "
        >
          Got it
        </button>
      </div>
    </div>,
    document.body,
  );
}
