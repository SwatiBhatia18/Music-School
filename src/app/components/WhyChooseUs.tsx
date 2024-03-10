"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import ensemblePerformances from '../data/images/ensemblePerformances.jpg';
import musicTheoryClasses from '../data/images/musicTheoryClasses.jpg';
import instrumentLessons from '../data/images/instrumentLessons.jpg';
import recitalsAndConcerts from '../data/images/recitalsAndConcerts.png';

const musicSchoolContent = [
    {
      title: "Instrument Lessons",
      description:
        "Learn to play your favorite instrument with expert instructors. Whether you're a beginner or an advanced musician, our personalized lessons cater to your skill level and musical goals. Discover the joy of mastering your instrument and expressing yourself through music.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
          <Image
            src={instrumentLessons}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Instrument Lessons"
          />
        </div>
      ),
    },
    {
      title: "Ensemble Performances",
      description:
        "Join our ensemble groups and experience the thrill of performing music with others. From chamber music to jazz bands, our diverse ensembles offer opportunities for collaboration and musical expression. Develop teamwork skills, build friendships, and create memorable performances together.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--lime-500))] flex items-center justify-center text-white">
          <Image
            src={ensemblePerformances}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Ensemble Performances"
          />
        </div>
      ),
    },
    {
      title: "Music Theory Classes",
      description:
        "Deepen your understanding of music with our comprehensive theory classes. Explore topics such as harmony, rhythm, notation, and more. Our engaging lessons help you develop a solid foundation in music theory, empowering you to become a well-rounded musician.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--red-500))] flex items-center justify-center text-white">
          <Image
            src={musicTheoryClasses}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Music Theory Classes"
          />
        </div>
      ),
    },
    {
      title: "Recitals and Concerts",
      description:
        "Showcase your talents in our recitals and concerts held throughout the year. Perform in front of supportive audiences and gain valuable stage experience. Whether you're a soloist or part of an ensemble, our performances provide a platform to shine and celebrate your musical journey.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <Image
            src={recitalsAndConcerts}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Recitals and Concerts"
          />
        </div>
      ),
    },
  ];


function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs