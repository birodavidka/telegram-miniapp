import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Globe,
  FileText,
  Rss,
  HeartHandshake,
  BarChart3,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

type Props = {};

const ICONS = [Shield, Globe, FileText, Rss, HeartHandshake, BarChart3];

function IconTile({ Icon }: { Icon: React.ElementType }) {
  return (
    <div
      className={cn(
        "relative grid h-20 w-20 place-items-center rounded-2xl",
        "bg-background/60 shadow-sm",
        "backdrop-blur-sm"
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-primary/10 opacity-60" />
      <Icon className="relative h-8 w-8 text-foreground/50" />
    </div>
  );
}

function TilesRow({ count = 18 }: { count?: number }) {
  const items = Array.from(
    { length: count },
    (_, i) => ICONS[i % ICONS.length]
  );
  return (
    <div className="flex items-center gap-6 pr-6">
      {items.map((Icon, idx) => (
        <IconTile key={idx} Icon={Icon} />
      ))}
    </div>
  );
}

export default function DesignCtaMarquee(props: Props) {
  return (
    <section className="relative overflow-hidden w-full">
      {/* BACKGROUND: moving tiles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0">
          <Marquee pauseOnHover={false} className="[--duration:26s]">
            <TilesRow />
          </Marquee>

          <Marquee
            pauseOnHover={false}
            reverse
            className="mt-6 [--duration:32s]"
          >
            <TilesRow />
          </Marquee>

          <div className="opacity-80">
            <Marquee pauseOnHover={false} className="mt-6 [--duration:38s]">
              <TilesRow />
            </Marquee>
          </div>
        </div>

        {/* finom “mosás” + vignette (NE takarja le teljesen) */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/10 to-background/70" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* CONTENT (nincs nagy card) */}
      <div className="relative mx-auto flex min-h-[420px] max-w-6xl flex-col items-center justify-center px-4 py-20 text-center">
        {/* kis “spotlight” a szöveg mögé */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-72 w-[720px] rounded-full bg-background/70 blur-3xl" />
        </div>

        {/* kis ikon kártya (maradhat) */}
        <div className="relative mb-6 grid h-20 w-20 place-items-center rounded-3xl border bg-background/70 shadow-sm backdrop-blur-md">
          <HeartHandshake className="h-10 w-10" />
        </div>

        <h2 className="relative text-balance text-5xl font-bold tracking-tight sm:text-6xl">
          Stop wasting <br className="hidden sm:block" />
          time on design.
        </h2>

        <p className="relative mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
          Start your 7-day free trial. No credit card required.
        </p>

        <div className="relative mt-10">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/get-started" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
