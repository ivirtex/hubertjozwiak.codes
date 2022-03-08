// @ts-check
export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`text-l rounded-md border border-solid border-zinc-600
      px-2 py-1 font-medium
      duration-100 hover:bg-neutral-800 
      ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
