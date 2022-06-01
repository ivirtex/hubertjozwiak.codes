// @ts-check
export default function InteractiveCard({ children, className = "" }) {
  return (
    <div
      className={`card duration-150 ease-in-out hover:scale-102 
      hover:bg-zinc-300 hover:bg-opacity-60 dark:bg-gray-800 
      dark:bg-opacity-50 dark:hover:bg-gray-700 dark:hover:bg-opacity-60
      ${className}`}
    >
      {children}
    </div>
  );
}
