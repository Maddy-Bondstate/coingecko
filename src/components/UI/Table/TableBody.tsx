interface TableBodyProps {
  name?: string;
  className?: string;
  children?: any;
}

export default function TableBody({
  name,
  className,
  children,
}: TableBodyProps) {
  className = className ? className : "";
  return (
    <td
      className={`border border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ${className}`}
    >
      {name ? name : ""}
      {children ? children : ""}
    </td>
  );
}
