"use client";

import React from "react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { FocusCards } from "@/components/ui/focus-cards";
import Link  from "next/link"
import { Button } from "./ui/moving-border";

function Pricing() {
  const cards = [
    {
      title: "Starter",
      descrip: "Perfect for beginners",
      price: "$99",
    },
    {
      title: "Intermediate",
      descrip: "For those who know the basics",
      price: "$149",
    },
    {
      title: "Pro",
      descrip: "For serious learners",
      price: "$299",
    },
  ];

  return (
    <section id="pricing" className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden bg-transparent">
      {/* Dotted Background covering full screen */}
      <DottedGlowBackground
        className="pointer-events-none absolute inset-0"
        opacity={0.8}
        gap={12}
        radius={1.8}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0.1}
        speedMin={0.3}
        speedMax={1.5}
        speedScale={1}
      />

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-6 py-12 max-w-5xl w-full">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Flexible Pricing for Every Musician
        </h2>
        <p className="text-lg text-neutral-300 mb-12 max-w-2xl mx-auto">
          Choose the plan that fits your goals. Whether you're just starting or
          ready to take your passion to a professional level — we've got you covered.
        </p>

        {/* Focus Cards (text-only) */}
        <FocusCards cards={cards} />

        {/* Optional CTA */}
        <div className="mt-4 flex justify-center">
                <Link href="/">
                    <Button
                    className="cursor-pointer bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Get Started
                    </Button>
                </Link>
            </div>
      </div>
    </section>
  );
}

export default Pricing;
