import { NextResponse } from "next/server";

type Sport = {
  key: string;   // belső azonosító
  name: string;  // megjelenítés
  slug: string;  // api-sports slug a logóhoz
  logo: string;  // teljes kép URL
};

const SPORTS: Omit<Sport, "logo">[] = [
  { key: "football", name: "Football", slug: "football" },
  { key: "afl", name: "AFL", slug: "afl" },
  { key: "baseball", name: "Baseball", slug: "baseball" },
  { key: "basketball", name: "Basketball", slug: "basketball" },
  { key: "formula1", name: "Formula-1", slug: "formula-1" },
  { key: "handball", name: "Handball", slug: "handball" },
  { key: "hockey", name: "Hockey", slug: "hockey" },
  { key: "mma", name: "MMA", slug: "mma" },
  { key: "nba", name: "NBA", slug: "nba" },
  { key: "nfl", name: "NFL & NCAA", slug: "nfl" },
  { key: "rugby", name: "Rugby", slug: "rugby" },
  { key: "volleyball", name: "Volleyball", slug: "volleyball" },
];

const LOGO_BASE = "https://api-sports.io/public/img/logos";

export async function GET() {
  const data: Sport[] = SPORTS.map((s) => ({
    ...s,
    logo: `${LOGO_BASE}/min-${s.slug}.webp`,
  }));

  // egyszerű cache (CDN/proxy felé is hasznos)
  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
