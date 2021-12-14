import { Link } from "react-router-dom";

interface BackProps {
  to: string;
  className?: string;
}

export default function Back({ to, className }: BackProps) {
  className = className ? className : "";
  return (
    <Link
      to={to}
      className={`animate-bounce bg-white text-slate-700 p-2 w-10 h-10 cursor-pointer ring-1 ring-gray-900/5 shadow-lg rounded-full flex items-center justify-center ${className}`}
    >
      <i className="fas fa-arrow-left" />
    </Link>
  );
}
