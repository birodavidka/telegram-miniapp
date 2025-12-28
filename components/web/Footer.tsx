import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Twitter, Instagram, Youtube, Terminal } from "lucide-react";

// MagicUI (opcionális animáció) — ha nincs nálad, töröld ezt és a <BlurFade> wrappereket
import { BlurFade } from "@/components/ui/blur-fade";

type FooterLink = { label: string; href: string };

const footerLinks: {
  title: string;
  links: FooterLink[];
}[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Documentation", href: "/docs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Partners", href: "/partners" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Community", href: "/community" },
      { label: "Contact", href: "/contact" },
      { label: "Support", href: "/support" },
      { label: "Status", href: "/status" },
    ],
  },
];

const socialLinks: { label: string; href: string; icon: React.ElementType }[] =
  [
    { label: "Twitter", href: "https://twitter.com", icon: Twitter },
    { label: "Instagram", href: "https://instagram.com", icon: Instagram },
    /*     { label: "Youtube", href: "https://youtube.com", icon: Youtube }, */
  ];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div className="space-y-4">
      <h4 className="text-base font-semibold text-foreground">{title}</h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Top row: brand + columns */}
        <BlurFade delay={0.05} inView>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div className="space-y-4 lg:col-span-1">
              <Link href="/" className="inline-flex items-center gap-3">
                {/* Logo placeholder */}
                <div className="grid h-10 w-10 place-items-center rounded-xl border">
                  <span className="text-sm font-semibold">
                    <Terminal />
                  </span>
                </div>
                <span className="text-2xl font-semibold tracking-tight">
                  tipster.pro
                </span>
              </Link>
            </div>

            {/* Columns */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
              {footerLinks.map((col) => (
                <FooterColumn
                  key={col.title}
                  title={col.title}
                  links={col.links}
                />
              ))}

              {/* Social */}
              <div className="space-y-4">
                <h4 className="text-base font-semibold text-foreground">
                  Social
                </h4>
                <ul className="space-y-3">
                  {socialLinks.map((s) => {
                    const Icon = s.icon;
                    return (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Icon className="h-5 w-5" />
                          {s.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Divider */}
        <div className="mt-14">
          <Separator />
        </div>

        {/* Bottom row */}
        <BlurFade delay={0.12} inView>
          <div className="mt-8 flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p className="text-base">
              Copyright © {year} tipster.pro - Level up your betting game with
              AI
            </p>

            <div className="flex items-center gap-8 text-base">
              <Link
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </BlurFade>
      </div>
    </footer>
  );
}
