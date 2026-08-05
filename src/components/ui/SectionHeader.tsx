// components/ui/SectionHeader.tsx

import { cn } from "@/lib/utils";
import { typography } from "@/design/typography";
import { layout } from "@/design/layout";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center"
          ? "items-center text-center"
          : "items-start text-left",
        "mb-14",
        className
      )}
    >
      {eyebrow && (
        <span className={typography.eyebrow}>
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          typography.h2,
          "mt-3 text-text-primary"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            typography.sectionDescription,
            layout.content,
            "mt-5"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}