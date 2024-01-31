export default function Row({
  children,
  active,
  highlight,
  number,
  width,
  align = "left",
}: {
  children: any;
  width: string;
  active?: boolean;
  highlight?: boolean;
  number?: boolean;
  align?: any;
}) {
  return (
    <div
      className={`flex-1 text-sm text-priv-gray md:text-base ${active ? "text-white" : ""} ${highlight ? "text-priv-green" : ""} ${number ? "font-jost" : "font-josefin"}`}
      style={{ flexBasis: width, textAlign: align }}
    >
      {children}
    </div>
  );
}
