// @ts-check
export default function Card({ children, className = "" }) {
  return (
    <div
      className={`mb-4 rounded-lg 
      bg-gray-950 p-4 text-left text-lg font-medium drop-shadow-md 
       duration-150 ease-in-out hover:scale-102 hover:bg-gray-970
      ${className}`}
    >
      {children}
    </div>
  );
}
