import { ReactNode } from "react";

type GradientBorderProps = {
    children: ReactNode;
    className?: string;
};

export default function GradientBorder({
                                           children,
                                           className = "",
                                       }: GradientBorderProps) {
    return (
        <div
            className={`rounded-3xl bg-gradient-to-r from-primary to-accent p-px ${className}`}
        >
                {children}
        </div>
    );
}