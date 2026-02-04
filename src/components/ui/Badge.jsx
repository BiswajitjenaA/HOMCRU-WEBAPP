export default function Badge({
  children,
  color = "blue",
  className = "",
}) {
  const colors = {
    blue: "bg-brand-blue/20 text-brand-blue",
    orange: "bg-brand-orange/20 text-brand-orange",
    green: "bg-green-500/20 text-green-400",
    gray: "bg-white/10 text-gray-300",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${colors[color]} ${className}`}
    >
      {children}
    </span>
  );
}
