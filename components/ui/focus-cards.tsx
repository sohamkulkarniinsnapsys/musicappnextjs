"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative rounded-2xl p-8 bg-white/10 border border-white/20 text-white backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 ease-out cursor-pointer h-56 md:h-64",
        hovered !== null && hovered !== index && "blur-sm scale-[0.97]",
        hovered === index && "bg-white/20 border-white/40"
      )}
    >
      <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
      <p className="text-neutral-300 text-sm mb-4">{card.descrip}</p>
      <p className="text-3xl font-bold text-teal-400">{card.price}</p>
    </div>
  )
);

Card.displayName = "Card";

type CardData = {
  title: string;
  descrip: string;
  price: string;
};

export function FocusCards({ cards }: { cards: CardData[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
