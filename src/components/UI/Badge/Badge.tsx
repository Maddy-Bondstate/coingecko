export default function Badge({ name, className, children }: any) {
  return (
    <span
      className={`inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center ${className}`}
    >
      {name}
      {children}
    </span>
  );
}
