export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`text-l font-medium px-2 py-1 hover:bg-gray-800
      border-solid border-zinc-600 border
      rounded-md duration-100 
      ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
