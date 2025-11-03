"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/" onClick={() => setActive(null)}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>

        {/* Updated All Courses Menu */}
        <MenuItem setActive={setActive} active={active} item="All Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses/music-theory-essentials">
              Music Theory
            </HoveredLink>
            <HoveredLink href="/courses/advanced-composition-techniques">
              Composition
            </HoveredLink>
            <HoveredLink href="/courses/songwriting-for-modern-artists">
              Songwriting
            </HoveredLink>
            <HoveredLink href="/courses/music-technology-fundamentals">
              Music Technology
            </HoveredLink>
            <HoveredLink href="/courses/audio-engineering-and-mixing">
              Audio Engineering
            </HoveredLink>
            <HoveredLink href="/courses/orchestration-for-film-and-games">
              Orchestration
            </HoveredLink>
            <HoveredLink href="/courses/sound-design-and-synthesis">
              Sound Design
            </HoveredLink>
            <HoveredLink href="/courses/film-scoring-masterclass">
              Film Scoring
            </HoveredLink>
          </div>
        </MenuItem>

        {/* Pricing Section */}
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/pricing/hobby">Hobby</HoveredLink>
            <HoveredLink href="/pricing/individual">Individual</HoveredLink>
            <HoveredLink href="/pricing/team">Group</HoveredLink>
          </div>
        </MenuItem>

        <Link href="/" onClick={() => setActive(null)}>
          <MenuItem setActive={setActive} active={active} item="Contact Us" />
        </Link>
      </Menu>
    </div>
  );
}
