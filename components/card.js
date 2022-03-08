// @ts-check
export default function Card({
  children,
  className = "bg-gray-950 hover:bg-gray-970",
}) {
  return (
    <div
      className={`mb-4 rounded-lg 
       p-4 text-left font-medium drop-shadow-md duration-150 
       ease-in-out text-lg hover:scale-102 
      ${className}`}
    >
      {children}
    </div>
  );
}
