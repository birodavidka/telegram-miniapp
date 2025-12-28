import AppDock from "@/components/AppDock";
import AppNavbar from "@/components/tgAppNavbar";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <AppNavbar />
      <div className="w-full max-w-md mx-auto">{children}</div>
      <AppDock />
    </div>
  );
};

export default layout;
