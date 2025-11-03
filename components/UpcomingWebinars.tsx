"use client";
import React from "react";
import Link from "next/link";
import { EvervaultCard, Icon } from "./ui/evervault-card";
import { Button } from "./ui/moving-border";

const featuredWebinars = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    slug: "understanding-music-theory",
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn the craft of songwriting from experienced musicians and songwriters.",
    slug: "the-art-of-songwriting",
  },
  {
    title: "Mastering Your Instrument",
    description:
      "Advanced techniques to master your musical instrument of choice.",
    slug: "mastering-your-instrument",
  },
  {
    title: "Music Production Essentials",
    description:
      "Get started with music production with this comprehensive overview.",
    slug: "music-production-essentials",
  },
  {
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies.",
    slug: "live-performance-techniques",
  },
  {
    title: "Digital Music Marketing",
    description:
      "Learn how to promote your music effectively in the digital age.",
    slug: "digital-music-marketing",
  },
];

export default function UpcomingWebinars() {
  return (
    <section className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-base text-teal-500 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredWebinars.map((webinar, idx) => (
            <article
              key={idx}
              className="relative rounded-3xl overflow-hidden border border-white/8 bg-black/30 backdrop-blur-md h-112 flex flex-col items-center justify-center"
            >
              {/* decorative corner icons */}
              <Icon className="absolute h-5 w-5 -top-3 -left-3 text-white/60" />
              <Icon className="absolute h-5 w-5 -top-3 -right-3 text-white/60" />
              <Icon className="absolute h-5 w-5 -bottom-3 -left-3 text-white/60" />
              <Icon className="absolute h-5 w-5 -bottom-3 -right-3 text-white/60" />

              {/* Evervault background effect (absolute background) */}
              {/* place as absolute inset-0 so it covers entire card; it listens to pointer events to update mask */}
              <EvervaultCard className="absolute inset-0" />

              {/* content (higher z) */}
              <div className="relative z-20 px-6 text-center max-w-120">
                <h3 className="text-2xl font-semibold text-white">{webinar.title}</h3>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                  {webinar.description}
                </p>
                <div className="mt-6">
                  <Link
                    href={`/webinars/${webinar.slug}`}
                    className="inline-block px-6 py-2 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="mt-16 text-center flex justify-center">
          <Button
            className="cursor-pointer bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
            Explore courses
          </Button>
        </div>
      </div>
    </section>
  );
}
