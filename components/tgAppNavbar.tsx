import { ArrowLeft, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

type Props = {};

const AppNavbar = (props: Props) => {
  return (
    <div className="flex items-center w-full justify-between p-2">
      <div className="">
        <Link href="/" className={buttonVariants({ variant: "ghost" })}>
          <ArrowLeft className="size-6" />
        </Link>
      </div>
      <div className="flex items-center justify-between gap-2">
        <AnimatedThemeToggler />
        <Menu />
      </div>
    </div>
  );
};

export default AppNavbar;
