'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { BoxesCore } from "./ui/background-boxes";

const musicSchoolTestimonials = [
    {
      "quote": "Joining this academy completely transformed the way I play guitar. The lessons are inspiring, and the instructors truly help you find your own sound.",
      "name": "Ryan Matthews",
      "title": "Guitar Student"
    },
    {
      "quote": "The piano program here is amazing! The instructors made complex concepts so easy to understand, and my playing has improved more than I imagined.",
      "name": "Isabella Nguyen",
      "title": "Piano Student"
    },
    {
      "quote": "I've never felt more confident in my voice. The vocal coaches helped me master breathing techniques and stage presence that changed everything.",
      "name": "Noah Patel",
      "title": "Vocal Student"
    },
    {
      "quote": "Learning the violin here was a dream come true. My instructor pushed me to new heights and helped me express real emotion in every performance.",
      "name": "Sophia Romero",
      "title": "Violin Student"
    },
    {
      "quote": "The music production classes opened up a whole new world for me. I can now produce, mix, and master my own tracks with a professional finish.",
      "name": "Ethan Brooks",
      "title": "Music Production Student"
    },
    {
      "quote": "The songwriting sessions here reignited my creativity. I’ve learned how to tell powerful stories through melody and lyrics — it’s life-changing.",
      "name": "Chloe Anderson",
      "title": "Songwriting Student"
    },
    {
      "quote": "The film scoring course gave me the skills to compose for real projects. The instructors bring real-world experience that’s priceless.",
      "name": "Liam Carter",
      "title": "Film Scoring Student"
    }
  ];

function MusicSchoolTestimonials() {
  return (
    <div className="h-156 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 mask-[radial-gradient(transparent,white)] pointer-events-none" />
 
      <BoxesCore />
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="normal"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials