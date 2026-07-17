import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-primary via-violet-500 to-accent text-white border border-white/10 shadow-[0_8px_30px_rgba(139,92,246,0.18)] hover:brightness-110 active:brightness-95",

        secondary:
          "bg-surface border border-border text-foreground hover:bg-surface-elevated hover:border-primary/30",

        ghost:
          "bg-transparent text-foreground hover:bg-surface hover:text-primary",

        danger:
          "border border-[#EF4444] text-[#EF4444] hover:bg-[#EF4444]/10 active:bg-[#EF4444]/20",
      },

      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-5",
        lg: "h-12 px-6 text-lg",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export default function Button({
  className,
  variant,
  size,
  isLoading,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}