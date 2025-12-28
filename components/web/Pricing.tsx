"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "../ui/animated-grid-pattern";

type Plan = {
  name: string;
  price: string;
  period: string;
  subtitle: string;
  features: string[];
  cta: string;
  href: string;
};

const plans: Plan[] = [
  {
    name: "Basic",
    price: "$0",
    period: "/month",
    subtitle: "Perfect for individual users",
    features: [
      "AI-powered scheduling (up to 10 events/month)",
      "Basic time blocking",
      "Cloud sync for 1 device",
      "Email reminders",
    ],
    cta: "Get Started",
    href: "/get-started",
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    subtitle: "Ideal for professionals and small teams",
    features: [
      "Unlimited AI-powered scheduling",
      "Advanced time blocking and analysis",
      "Cloud sync for unlimited devices",
      "Smart notifications across all devices",
      "Team collaboration features",
    ],
    cta: "Get Started",
    href: "/get-started",
  },
];

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center text-red-500">
        <Check className="h-4 w-4" />
      </span>
      <span className="text-sm leading-relaxed text-foreground/90">{text}</span>
    </li>
  );
}

export default function PricingSection() {
  return (
    <section className="relative w-full">
      {/* ✅ BACKGROUND GRID PATTERN */}

      <div className="mx-auto max-w-4xl px-4 py-14 md:py-20">
        {/* Title */}
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold tracking-[0.22em]">PRICING</p>
          <h2 className="mt-3 text-6xl font-black tracking-tight sm:text-6xl">
            simple pricing plans
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Everything you need to build and scale agent workflows.
          </p>
        </div>

        {/* ✅ CLOSE CARDS */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "w-full max-w-[320px]", // ✅ kisebb
                "rounded-[1.5rem] bg-muted/30", // ✅ kicsit sötétebb kártya
                "p-6 shadow-md", // ✅ kisebb padding
                "bg-background"
              )}
            >
              {/* Header */}
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">{plan.name}</h3>

                <div className="flex items-end gap-2">
                  <span className="text-4xl font-extrabold leading-none">
                    {plan.price}
                  </span>
                  <span className="pb-0.5 text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <FeatureItem key={f} text={f} />
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-7">
                <Link
                  href={plan.href}
                  className={cn(
                    "group inline-flex w-full items-center justify-center gap-2",
                    "rounded-full bg-red-500 px-5 py-3",
                    "text-sm font-semibold text-white",
                    "transition hover:bg-red-600"
                  )}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
