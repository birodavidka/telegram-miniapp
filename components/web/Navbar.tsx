import React from "react";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { AuroraText } from "../ui/aurora-text";
import { Terminal } from "lucide-react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/60 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center px-4">
        {/* Left */}
        <div className="flex flex-1 items-center justify-start">
          <Terminal size={40} />
          <h1 className="text-4xl font-bold items-center">
            <span className="text-4xl font-bold">TIPSTER</span>
            <AuroraText>PRO </AuroraText>
          </h1>
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
  );
};

export default Navbar;
