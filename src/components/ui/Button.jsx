export default function Button({
  children,
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button type={type} className={`cursor-pointer ${className}`} {...props}>
      {children}
    </button>
  );
}
