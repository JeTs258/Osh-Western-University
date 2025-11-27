import React from "react";
import { cn } from "@/lib/utils/cn";

export type ButtonVariant = "primary" | "secondary" | "outline" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-osh-primary text-white hover:bg-osh-primary/90 shadow-md hover:shadow-lg transition-all",
  secondary:
    "bg-white text-osh-primary border-2 border-osh-primary hover:bg-osh-primary/5 transition-all",
  outline:
    "bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-50 transition-all",
  danger: "bg-red-600 text-white hover:bg-red-700 transition-all",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-osh-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
