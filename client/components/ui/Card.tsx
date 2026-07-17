import {ReactNode} from "react";

type cardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
    children,
    className = ""
    }: cardProps) {
    return (
        <div className={`rounded-3xl bg-card p-8 ${className}`}>
            {children}
        </div>
    )
}