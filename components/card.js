export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-gray-950 hover:bg-gray-970 
      p-4 mb-4 rounded-lg text-left text-lg font-medium 
       duration-150 ease-in-out hover:scale-102 drop-shadow-md
      ${className}`}
    >
      {children}
    </div>
  );
}
