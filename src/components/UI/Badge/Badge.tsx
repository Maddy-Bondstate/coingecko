interface BadgeProps {
  name: string;
  className?: string;
}

export default function Badge({ name, className }: BadgeProps) {
  className = className ? className : "";
  return (
    <span
      className={`inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center ${className}`}
    >
      {name}
    </span>
  );
}
