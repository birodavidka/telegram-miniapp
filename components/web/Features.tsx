import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Brain,
  Clock,
  CalendarDays,
  Cloud,
  Users,
  Bell,
  type LucideIcon,
} from "lucide-react";

type Props = {};

const featuresData: {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}[] = [
  {
    title: "AI-Powered Scheduling",
    description:
      "Intelligent scheduling that learns your preferences and optimizes your time.",
    icon: Brain,
    href: "/",
  },
  {
    title: "Smart Time Blocking",
    description:
      "Automatically block time for focused work and personal activities.",
    icon: Clock,
    href: "/",
  },
  {
    title: "Predictive Event Planning",
    description:
      "AI suggests optimal times for meetings and events based on your habits.",
    icon: CalendarDays,
    href: "/",
  },
  {
    title: "Cloud Sync",
    description: "Access your schedule across all devices in real-time.",
    icon: Cloud,
    href: "/",
  },
  {
    title: "Team Collaboration",
    description: "Easily coordinate schedules with team members and clients.",
    icon: Users,
    href: "/",
  },
  {
    title: "Smart Reminders",
    description:
      "Contextual notifications that adapt to your schedule and priorities.",
    icon: Bell,
    href: "/",
  },
];

const Features = (props: Props) => {
  return (
    <section className="w-full p-6">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* Title (ha kell, ha nem: törölheted) */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-red-500">
            FEATURES
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            powerful features
          </h2>
          <p className="mt-3 text-muted-foreground">
            Everything you need to build and scale agent workflows.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 lg:gap-x-14">
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Icon badge */}
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 shadow-sm">
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Text */}
                <h3 className="text-2xl font-bold tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>

                {/* CTA link */}
                <Link
                  href={feature.href}
                  className={cn(
                    "mt-6 inline-flex items-center text-red-500",
                    "text-base font-medium hover:underline underline-offset-4"
                  )}
                >
                  Learn more <span className="ml-2">{">"}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
