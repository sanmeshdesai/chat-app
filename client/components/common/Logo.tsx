"use client";

import * as React from "react";
import { APP_NAME } from "@/constants/app";
import LogoIcon from "./LogoIcon";

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

export default function Logo({
  size = 40,
  showText = true,
  className,
}: LogoProps) {
  const gradientId = React.useId();

  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      
      <LogoIcon size={size} />

      {showText && (
        <span className="text-xl font-semibold tracking-tight text-foreground">
          {APP_NAME}
        </span>
      )}
    </div>
  );
}