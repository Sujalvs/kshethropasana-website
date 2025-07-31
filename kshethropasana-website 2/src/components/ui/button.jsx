export function Button({ children, className }) {
  return <button className={`bg-[#3b2f2f] text-white hover:opacity-90 transition ${className}`}>{children}</button>;
}
