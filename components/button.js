export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`text-l font-normal px-4 hover:bg-gray-800
      border-solid border-zinc-500 border
      rounded-md duration-100
      ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
