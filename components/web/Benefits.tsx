"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Benefit = {
  title: string;
  description: string;
  imageSrc?: string; // ha van kép, add meg: "/phones/1.png"
};

const benefits: Benefit[] = [
  {
    title: "Save hours each week with AI-optimized scheduling.",
    description: "adljsfioasdhgsjdhgkldshg",
    imageSrc: "/iphone.png",
  },
  {
    title: "Reduce scheduling conflicts and double-bookings.",
    description: "",
    imageSrc: "/iphone.png",
  },
  {
    title: "Improve work-life balance with smart time allocation.",
    description: "",
    imageSrc: "/iphone.png",
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* Top */}
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.22em">BENEFITS</p>

          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            what you can do with tipster.pro
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-3">
          {benefits.map((b, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="group"
            >
              {/* Phone */}
              <div
                className={cn(
                  "mx-auto w-full max-w-[420px]",
                  "rounded-[2.25rem]"
                )}
              >
                {/* “screen” area */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  {b.imageSrc ? (
                    <Image
                      src={b.imageSrc}
                      alt={b.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 33vw, 90vw"
                      priority={idx === 0}
                    />
                  ) : (
                    // fallback placeholder ha nincs kép
                    <div className="flex h-full w-full items-center justify-center bg-muted">
                      <span className="text-sm text-muted-foreground">
                        Phone preview
                      </span>
                    </div>
                  )}

                  {/* finom alsó “fade”, hogy olyan legyen mint a mintán */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
              </div>

              {/* Caption */}
              <div>
                <p className="mx-auto mt-6 max-w-[420px] text-pretty text-lg font-semibold leading-snug text-foreground">
                  {b.title}
                  <span className="text-muted-foreground">{b.description}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
