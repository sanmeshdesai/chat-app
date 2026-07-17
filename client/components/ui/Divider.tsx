import { cn } from "@/lib/utils";

interface DividerProps {
  text?: string;
  className?: string;
}

export default function Divider({
  text,
  className,
}: DividerProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="h-px flex-1 bg-border" />

      {text && (
        <span className="text-sm text-muted whitespace-nowrap">
          {text}
        </span>
      )}

      <div className="h-px flex-1 bg-border" />
    </div>
  );
}