"use client";
import React from "react";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";

export const VideoCarousel = () => {
  type Movie = {
    poster: string;
    name: string;
  };

  const movies = [
    { poster: "/gallery/im1.jpg", name: "Airplane" },
    {
      poster: "/gallery/im2.jpg",
      name: "Family man",
    },
    {
      poster: "/gallery/im3.jpg",
      name: "Laboratory",
    },
    { poster: "/gallery/im4.jpg", name: "Napoleon" },
    {
      poster: "/gallery/im5.jpg",
      name: "Person in Darkness",
    },
    {
      poster: "/gallery/im6.jpg",
      name: "Scary Building",
    },
    { poster: "/gallery/im7.jpg", name: "Stars" },
    { poster: "/gallery/im8.jpg", name: "Stars" },
    { poster: "/gallery/im9.jpg", name: "Stars" },
    { poster: "/gallery/im10.jpg", name: "Stars" },
    { poster: "/gallery/im11.jpg", name: "Stars" },
    { poster: "/gallery/im12.jpg", name: "Stars" },
  ];

  const randomMoviesSet1 = movies
    .sort(() => Math.random() - 0.5)
    .concat(movies.sort(() => Math.random() - 0.5))
    .concat(movies.sort(() => Math.random() - 0.5));

  const randomMoviesSet2 = movies
    .sort(() => Math.random() - 0.5)
    .concat(movies.sort(() => Math.random() - 0.5))
    .concat(movies.sort(() => Math.random() - 0.5))
    .sort(() => Math.random() - 0.5);

  const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
    return (
      <div className="overflow-clip">
        <div className="animate-carousel-move relative left-[var(--carousel-offset,0px)] flex gap-3">
          {movies.map((movie, index) => (
            <div
              className="aspect-video w-[40vw] shrink-0 md:w-[23vw]"
              key={`${movie.name}-${index}`}
            >
              <img
                className="h-full w-full rounded-xl object-cover"
                src={movie.poster}
                alt={movie.name}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <motion.h2
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="text-xl font-bold tracking-relaxed py-10 p-5  text-[#FFD700] text-center"
      >
        Our Previous Events
      </motion.h2>
      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.4 }}
        className="space-y-3 pt-4 relative z-10" // Ensure this component has a relative z-index
      >
        <SmallVideoCarousel movies={randomMoviesSet1} />
        <div className="[--carousel-offset:-32px] [--duration:74s] linear-animation">
          <SmallVideoCarousel movies={randomMoviesSet2} />
        </div>
      </motion.div>
    </div>
  );
};
