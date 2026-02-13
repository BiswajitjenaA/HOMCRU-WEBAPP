import Button from "./Button";

export default function ServiceCard({
  title,
  description,
  image,
  badge,
  badgeVariant = "dark",
  onBook,
}) {
  const badgeClasses =
    badgeVariant === "blue"
      ? "bg-blue-600/90 border-blue-500/40"
      : "bg-black/70 border-white/10";

  return (
    <div
      className="
        group relative bg-brand-surface
        border border-white/5 rounded-3xl
        overflow-hidden
        transition-all duration-300 ease-out
        hover:border-blue-600/40
      "
    >
      {/* Image */}
      <div className="relative h-47 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="
            w-full h-full object-contain
            transition-transform duration-500
            ease-in-out
            group-hover:scale-[1.06]
          "
        />

        {badge && (
          <div
            className={`
              absolute top-4 right-4
              backdrop-blur
              px-3 py-1 rounded-full
              text-xs font-bold text-white
              border
              ${badgeClasses}
            `}
          >
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-xl text-white mb-1">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        <Button
          onClick={() => onBook(title)}
          className="
            w-full py-3 rounded-xl
            bg-white/5
            text-gray-300 font-bold text-sm
            transition-colors duration-200
            hover:bg-blue-600 hover:text-white
          "
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}
