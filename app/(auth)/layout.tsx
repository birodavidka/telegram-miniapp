import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col w-full items-center">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={30}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[150%] skew-y-12"
        )}
      />
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center px-4">
          {/* Left */}
          <div className="flex flex-1 items-center justify-start">
            <Link href="/" className={buttonVariants({ variant: "secondary" })}>
              <ArrowLeft className="size-4" />
              Go back
            </Link>
          </div>

          {/* Center */}
          <div className="flex flex-1 items-center justify-center">
            {/* <div className="w-full max-w-md">search</div> */}
          </div>

          {/* Right */}
          <div className="flex flex-1 items-center justify-end">
            <AnimatedThemeToggler />
          </div>
        </div>
      </nav>
      <div className="w-full min-h-screen mx-auto">{children}</div>
    </div>
  );
};

export default layout;
