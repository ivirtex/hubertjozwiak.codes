// @ts-check
export default function Card({ children, className = "" }) {
  return (
    <div
      className={`mb-4 rounded-lg bg-zinc-200 bg-opacity-70 p-4 text-left font-medium duration-150 ease-in-out text-lg hover:scale-102 hover:bg-zinc-300 hover:bg-opacity-70
      ${className}`}
    >
      {children}
    </div>
  );
}
