// @ts-check
export default function HeaderButton({ children, className = "", ...props }) {
  return (
    <button
      className={`h-min rounded-full py-3 px-4 underline-offset-2 duration-150 ease-in-out hover:bg-zinc-200 dark:hover:bg-gray-800 
      ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
