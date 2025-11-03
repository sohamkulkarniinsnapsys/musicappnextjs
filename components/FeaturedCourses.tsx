'use client'

import Link from "next/link"
import Image from "next/image"
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"
import { Button } from "./ui/moving-border"

interface Course {
  id: number
  title: string
  slug: string
  description: string
  price: number
  instructor: string
  isFeatured: boolean
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  )

  return (
    <section id="featured-courses" className="py-16 bg-gray-900 text-white">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-sm text-teal-400 font-semibold tracking-wide uppercase">
          Featured Courses
        </h2>
        <p className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Learn With the Best
        </p>
        <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
          Explore our top-rated courses crafted by professional instructors to help you excel in your musical journey.
        </p>
      </div>

      {/* Featured Courses Grid */}
      <div className="mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm shadow-lg transition-transform duration-300 hover:scale-105">
                {/* Course Image */}
                

                {/* Course Info */}
                <div className="p-6 flex flex-col items-center text-center grow">
                  <h3 className="text-xl font-semibold text-black dark:text-neutral-100 mt-4 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    {course.description}
                  </p>
                  <p className="text-sm font-medium text-teal-500 mb-4">
                    Instructor: {course.instructor}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    href={`/courses/${course.slug}`}
                    className="inline-block px-4 py-2 rounded-md border border-neutral-600 text-neutral-700 bg-white dark:text-white dark:border-neutral-700 dark:bg-transparent hover:bg-gray-100 dark:hover:bg-zinc-800 transition duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="mt-20 text-center flex justify-center">
        <Button
          className="cursor-pointer bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
          Explore courses
        </Button>
      </div>
    </section>
  )
}

export default FeaturedCourses
