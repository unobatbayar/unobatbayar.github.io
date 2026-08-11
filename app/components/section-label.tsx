export function SectionLabel({ children }: { children: string }) {
  return (
    <h2 className="cyber-text text-sm">
      <span aria-hidden="true">// </span>
      {children}
    </h2>
  );
}
