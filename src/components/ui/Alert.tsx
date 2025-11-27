import React from "react";
import { cn } from "@/lib/utils/cn";

export type AlertVariant = "success" | "error" | "warning" | "info";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  children: React.ReactNode;
}

const variantStyles: Record<AlertVariant, { container: string; icon: string; text: string }> = {
  success: {
    container: "bg-green-50 border-l-4 border-green-500",
    icon: "text-green-500",
    text: "text-green-700",
  },
  error: {
    container: "bg-red-50 border-l-4 border-red-500",
    icon: "text-red-500",
    text: "text-red-700",
  },
  warning: {
    container: "bg-yellow-50 border-l-4 border-yellow-500",
    icon: "text-yellow-500",
    text: "text-yellow-700",
  },
  info: {
    container: "bg-blue-50 border-l-4 border-blue-500",
    icon: "text-blue-500",
    text: "text-blue-700",
  },
};

export function Alert({ variant = "info", children, className, ...props }: AlertProps) {
  const styles = variantStyles[variant];

  return (
    <div className={cn("p-4 mb-4", styles.container, className)} role="alert" {...props}>
      <div className="flex items-start">
        <div className={cn("flex-shrink-0 mr-3", styles.icon)}>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className={styles.text}>{children}</p>
      </div>
    </div>
  );
}
