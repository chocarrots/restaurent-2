import type { ReactNode } from "react";

type Props = {
  id?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  id,
  title,
  description,
  align = "left",
}: Props): ReactNode {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2
        id={id}
        className="font-serif text-h2 font-semibold text-ink"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-support text-ink/85">{description}</p>
      ) : null}
    </div>
  );
}
