import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex h-11 w-full items-center rounded-2xl border bg-surface px-4 transition-all duration-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20",
  {
    variants: {
      state: {
        default: "border-border",
        error: "border-[#EF4444]",
        disabled: "opacity-50 cursor-not-allowed",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function Input({
  label,
  error,
  leftIcon,
  rightIcon,
  className,
  disabled,
  state,
  ...props
}: InputProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-foreground">
          {label}
        </label>
      )}

      <div
        className={cn(
          inputVariants({
            state: error ? "error" : disabled ? "disabled" : state,
          }),
          className
        )}
      >
        {leftIcon && (
          <span className="mr-3 text-muted">
            {leftIcon}
          </span>
        )}

        <input
          className="w-full bg-transparent outline-none placeholder:text-muted disabled:cursor-not-allowed"
          disabled={disabled}
          {...props}
        />

        {rightIcon && (
          <span className="ml-3 text-muted">
            {rightIcon}
          </span>
        )}
      </div>

      {error && (
        <p className="text-sm text-[#EF4444]">
          {error}
        </p>
      )}
    </div>
  );
}