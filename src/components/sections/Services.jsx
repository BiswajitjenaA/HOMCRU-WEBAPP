import { useState } from "react";
import Container from "../ui/Container";
import ServiceCard from "../ui/ServiceCard";
import BookingModal from "../ui/BookingModal";
import {
  Electrician,
  Plumber,
  Ac,
  Appliance,
  GeneralHelper,
  Shift,
  GeneralCleaner,
  HouseHelper,
} from "../../assets/images/index";

const expertServices = [
  {
    title: "Electrical",
    description: "Wiring, Switchgear, Fans",
    image: Electrician,
    badge: "Parts Included",
  },
  {
    title: "Plumbing",
    description: "Taps, Pipes, Tank Cleaning",
    image: Plumber,
    badge: "Leak Fix",
  },
  {
    title: "AC Service",
    description: "Repair, Installation, Gas",
    image: Ac,
    badge: "Gas Refill",
  },
  {
    title: "Electrical Appliances",
    description: "TV, Fridge and Others",
    image: Appliance,
    badge: "Repair",
  },
];

const dailyServices = [
  {
    title: "General Cleaning",
    description: "Home, Office, Water Tanks",
    image: GeneralCleaner,
    badge: "Hourly",
  },

  {
    title: "Shifting Support",
    description: "Loading, Unloading, Shift",
    image: Shift,
    badge: "Packers",
  },
  {
    title: "House Helper",
    description: "Pantry, Errands, Filing",
    image: HouseHelper,
    badge: "Hourly",
  },
  {
    title: "General Helper",
    description: "Moving, Yard, Cleaning",
    image: GeneralHelper,
    badge: "Daily Wage",
  },
];

export default function Services() {
  const [tab, setTab] = useState("expert");

  // 🔹 MODAL STATE
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  // 🔹 OPEN MODAL
  const openBooking = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  // 🔹 CLOSE MODAL
  const closeBooking = () => {
    setIsModalOpen(false);
    setSelectedService("");
  };

  return (
    <section
      id="services"
      className="py-24 bg-brand-black border-t border-white/5"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">
              Our Offerings
            </span>
            <h2 className="font-display font-black text-4xl text-white mt-2">
              Services Designed for You.
            </h2>
          </div>

          {/* Tabs */}
          <div className="relative bg-brand-surface border border-white/10 p-1.5 rounded-full flex mt-6 md:mt-0 w-fit z-10">
            <span
              className={`
                absolute top-1.5 left-1.5
                h-[calc(100%-12px)] w-1/2 rounded-full
                bg-white transition-transform duration-200 ease-out
                ${tab === "daily" ? "translate-x-full" : "translate-x-0"}
              `}
            />

            <button
              onClick={() => setTab("expert")}
              className={`cursor-pointer relative z-10 px-8 py-3 text-sm font-bold transition-colors duration-150 ${
                tab === "expert"
                  ? "text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Expert Services
            </button>

            <button
              onClick={() => setTab("daily")}
              className={`cursor-pointer relative z-10 px-8 py-3 text-sm font-bold transition-colors duration-150 ${
                tab === "daily"
                  ? "text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Daily Help
            </button>
          </div>
        </div>

        {/* Grids */}
        <div className="relative z-0">
          {/* Expert Grid */}
          <div
            className={`
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6
              will-change-[opacity,transform]
              transition-[opacity,transform] duration-200 ease-out
              ${
                tab === "expert"
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 pointer-events-none absolute inset-0"
              }
            `}
          >
            {expertServices.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
                onBook={openBooking}
              />
            ))}
          </div>

          {/* Daily Grid */}
          <div
            className={`
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6
              will-change-[opacity,transform]
              transition-[opacity,transform] duration-200 ease-out
              ${
                tab === "daily"
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 pointer-events-none absolute inset-0"
              }
            `}
          >
            {dailyServices.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
                badgeVariant="blue"
                onBook={openBooking}
              />
            ))}
          </div>
        </div>
      </Container>

      {/* 🔹 BOOKING MODAL */}
      <BookingModal
        open={isModalOpen}
        service={selectedService}
        onClose={closeBooking}
      />
    </section>
  );
}
