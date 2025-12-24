import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold font-display transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[hsl(270,70%,55%)] to-[hsl(330,85%,60%)] text-white shadow-lg shadow-primary/40 hover:shadow-[0_0_30px_hsl(330,85%,60%,0.5)] hover:scale-[1.02]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-primary/50 bg-transparent text-foreground hover:bg-primary/10 hover:border-primary",
        secondary:
          "bg-gradient-to-r from-[hsl(270,50%,35%)] to-[hsl(300,50%,40%)] text-white shadow-md hover:shadow-primary/30 hover:scale-[1.02]",
        ghost: 
          "text-foreground hover:bg-primary/10 hover:text-primary",
        link: 
          "text-primary underline-offset-4 hover:underline",
        hero:
          "bg-gradient-to-r from-[hsl(270,70%,55%)] via-[hsl(300,75%,55%)] to-[hsl(330,85%,60%)] text-white shadow-lg shadow-[0_0_30px_hsl(300,70%,50%,0.4)] hover:shadow-[0_0_40px_hsl(330,85%,60%,0.6)] hover:scale-105 animate-pulse",
        accent:
          "bg-gradient-to-r from-[hsl(330,85%,55%)] to-[hsl(350,80%,60%)] text-white shadow-lg shadow-accent/40 hover:shadow-[0_0_30px_hsl(330,85%,60%,0.5)] hover:scale-[1.02]",
        glass:
          "bg-card/60 backdrop-blur-xl border border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-2xl px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
