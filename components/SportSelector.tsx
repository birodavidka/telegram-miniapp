import React from "react";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type Sport = { key: string; name: string; logo: string };

const SportSelector = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sports`, {
    cache: "force-cache",
  });
  const sports: Sport[] = await res.json();

  return (
    <Card>
      <CardHeader>
        <CardTitle>sasd</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="">
          <div className="flex w-max gap-4 p-4">
            {sports.map((s) => (
              <div
                key={s.key}
                className="flex h-20 w-32 shrink-0 items-center justify-center rounded-md bg-muted"
              >
                <Image
                  src={s.logo}
                  alt={`${s.name} logo`}
                  width={48}
                  height={48}
                />
              </div>
            ))}
          </div>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default SportSelector;
