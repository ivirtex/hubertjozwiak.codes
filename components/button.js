export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`text-l font-normal px-4 hover:text-zinc-400 hover:border-zinc-400 border-solid border-zinc-200 border-2 rounded-md 
      ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
