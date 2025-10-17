import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function MaxWidthContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(className, "max-w-[1440px] mx-auto px-4")}>
      {children}
    </div>
  );
}
