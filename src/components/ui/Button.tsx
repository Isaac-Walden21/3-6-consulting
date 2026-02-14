import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md tracking-wide",
  {
    variants: {
      variant: {
        primary: "bg-gold text-bg-primary hover:bg-gold-dark font-semibold",
        outline:
          "border-2 border-off-white text-off-white hover:bg-off-white hover:text-bg-primary",
        ghost: "text-off-white hover:text-gold",
        "gold-outline":
          "border-2 border-gold text-gold hover:bg-gold hover:text-bg-primary",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

interface ButtonBaseProps extends ButtonVariantProps {
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  children,
  variant,
  size,
  className,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

export { buttonVariants };
