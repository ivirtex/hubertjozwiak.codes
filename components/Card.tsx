import { twMerge } from "tailwind-merge";

// @ts-check
export default function Card({ children, className = "" }) {
  const finalClassName = twMerge("card", className);

  return <div className={finalClassName}>{children}</div>;
}
