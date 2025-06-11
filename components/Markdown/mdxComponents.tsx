// components/Markdown/mdxComponents.tsx
export const mdxComponents = {
  // <Details> wrapper that auto-styles collapsible blocks
  Details: (p: React.HTMLAttributes<HTMLDetailsElement>) => (
    <details
      {...p}
      className="my-4 rounded-md border border-gray-600/60 p-3"
    />
  ),

  // Simple call-out box
  Callout: ({
    kind = "info",
    ...props
  }: React.HTMLAttributes<HTMLDivElement> & { kind?: "info" | "warn" }) => {
    const colors =
      kind === "warn"
        ? "bg-yellow-600/20 border-yellow-400/40"
        : "bg-blue-600/20 border-blue-400/40";
    return (
      <div
        {...props}
        className={`${colors} my-4 rounded-md border px-4 py-3`}
      />
    );
  }
};