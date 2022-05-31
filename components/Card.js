// @ts-check
export default function Card({ children, className = "" }) {
  return (
    <div
      className={`mb-4 rounded-lg bg-zinc-200 bg-opacity-60 p-4 text-left text-lg font-medium duration-150 ease-in-out dark:bg-gray-800 dark:bg-opacity-50  
        ${className}`}
    >
      {children}
    </div>
  );
}
