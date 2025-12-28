import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Settings,
  Sparkles,
  Terminal,
  File,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraText } from "@/components/ui/aurora-text"; // <- ha nálad más, ezt az egy sort igazítsd
import Image from "next/image";
import { AnimatedGridPattern } from "../ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { OrbitingCircles } from "../ui/orbiting-circles";
import GradientText from "../GradientText";

type Props = {};

export default function Hero() {
  return (
    <section className="relative w-full px-6 py-24">
      {/*       <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.08}
        duration={30}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "inset-0 h-full"
        )}
      /> */}

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* pill */}
        <GradientText />

        {/* heading */}
        <h1 className="mt-10 text-balance text-7xl font-bold tracking-tight sm:text-7xl">
          <AuroraText>TIPSTER PRO</AuroraText>
        </h1>

        {/* description */}
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Build AI-powered prediction workflows with confidence. Smarter
          analysis, better decisions — powered by data.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-xl bg-violet-500/40 text-white hover:bg-violet-500/80"
          >
            <Link href="/docs" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          {/* 
          <Button asChild size="lg" variant="ghost" className="rounded-xl">
            <Link href="/pricing">View Pricing</Link>
          </Button> */}
        </div>

        {/* note */}
        <p className="mt-8 text-sm text-muted-foreground">
          Available for all major programming languages
        </p>
      </div>
    </section>
  );
}
