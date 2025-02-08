import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../utils.ts";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "bg-gray text-pink-dark font-medium rounded-full w-52 py-2.5 cursor-pointer disabled:pointer-events-none disabled:bg-gray-200 disabled:text-gray-400",
  {
    variants: {
      variant: {
        primary: "bg-pink",
        secondary: "bg-pink-light",
      },
      size: {
        normal: "w-52",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "normal",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
