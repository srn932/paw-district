export function SectionHeading({ eyebrow, title, copy, align = "left" }: { eyebrow?: string; title: string; copy?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      {eyebrow && <p className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</p>}
      <h2 className="headline pretty-balance">{title}</h2>
      {copy && <p className={`body-lg mt-6 max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>{copy}</p>}
    </div>
  );
}
