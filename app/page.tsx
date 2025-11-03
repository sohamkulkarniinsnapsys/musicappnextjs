import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/Herosection";
import Instructors from "@/components/Instuctor";
import MusicSchoolTestimonials from "@/components/TestCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
      <Instructors />
    </main>
  );
}
