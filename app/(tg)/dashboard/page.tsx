import SportSelector from "@/components/SportSelector";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {};

const AppDashboadPage = (props: Props) => {
  return (
    <main className="relative bg-background">
      {/* BACKGROUND LAYER */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.12}
          duration={30}
          repeatDelay={1}
          className={cn(
            "absolute inset-0",
            // teszteléshez ezt akár ideiglenesen vedd ki:
            "[mask-image:radial-gradient(900px_circle_at_top,white,transparent)]"
          )}
        />
      </div>
      <div className="relative z-10">
        <SportSelector />
      </div>
    </main>
  );
};

export default AppDashboadPage;
