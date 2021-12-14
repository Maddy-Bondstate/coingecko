export default function TableBody({ name, className, children }: any) {
  return (
    <td
      className={`border border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ${className}`}
    >
      {name}
      {children}
    </td>
  );
}
