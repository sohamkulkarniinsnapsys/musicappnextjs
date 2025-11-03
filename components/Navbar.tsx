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
            <HoveredLink href="#featured-courses">
              Music Theory
            </HoveredLink>
            <HoveredLink href="#featured-courses">
              Composition
            </HoveredLink>
            <HoveredLink href="#featured-courses">
              Songwriting
            </HoveredLink>
            <HoveredLink href="#featured-courses">
              Music Technology
            </HoveredLink>
            <HoveredLink href="#featured-courses">
              Audio Engineering
            </HoveredLink>
            <HoveredLink href="#featured-courses">
              Orchestration
            </HoveredLink>
            <HoveredLink href="#featured-courses">
              Sound Design
            </HoveredLink>
            <HoveredLink href="#featured-courses">
              Film Scoring
            </HoveredLink>
          </div>
        </MenuItem>

        {/* Pricing Section */}
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#pricing">Starter</HoveredLink>
            <HoveredLink href="#pricing">Intermediate</HoveredLink>
            <HoveredLink href="#pricing">Pro</HoveredLink>
          </div>
        </MenuItem>

        <Link href="/" onClick={() => setActive(null)}>
          <MenuItem setActive={setActive} active={active} item="Contact Us" />
        </Link>
      </Menu>
    </div>
  );
}
