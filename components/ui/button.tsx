import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /**
   * When true, Button clones its single child element (typically an <a>)
   * and applies button styling to it instead of rendering a <button>.
   * Used for CTAs that must be real anchor tags (Calendly, WhatsApp links)
   * for correct semantics rather than a button with an onClick redirect.
   */
  asChild?: boolean;
}

type ButtonProps = ButtonOwnProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark hover:shadow-glow-primary",
  secondary: "glass glass-hover text-text-primary border border-border",
  ghost: "text-text-primary hover:bg-surface/50",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base", // 52px height — meets mobile touch-target spec
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold " +
  "transition-all duration-base ease-out-expo cursor-pointer " +
  "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 " +
  "disabled:opacity-50 disabled:pointer-events-none";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", asChild, children, ...props },
    ref
  ) => {
    const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

    if (asChild && children && typeof children === "object" && "type" in children) {
      const child = children as React.ReactElement<{ className?: string }>;
      return (
        <child.type
          {...child.props}
          className={cn(classes, child.props.className)}
        />
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
