import React, { useEffect, useRef } from "react";
import { delay, motion, useAnimation, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      className="container mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 "
      id="About"
      // variants={{
      //   hidden: { opacity: 0, y: 75 },
      //   visible: { opacity: 1, y: 0 },
      // }}
      // initial="hidden"
      // animate={mainControls}
      // transition={{ duration: 0.5, delay: 0.5 }}
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className=" text-xl px-5 font-bold"
      >
        ABOUT
      </motion.h1>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-7xl font-bold tracking-relaxed py-10 p-5  text-[#FFD700]"
      >
        {" "}
        Sarith & Surith Jayawardena
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75, delay: 0.75 }}
        className="text-2xl  leading-relaxed tracking-wide text-zinc-400 py-1 mx-auto p-5 text-justify "
      >
        {" "}
        The twins, born on the 11th of December 2000, named Sarith & Surith
        started their talent-filled musical career by becoming the champions of
        “Poddanta Puluwan” that aired on national television. Ever since then,
        they have stretched their musical ability all over the island and also
        overseas with most of the other popular local bands. At the same time,
        they are experimenting in the music mass arena by representing at many
        international events. The Vietnam ABU TV Song Festival and The Indian
        Philharmonic Festival are two of the most significant events among them.
        They have also performed at many national events and the CHOGM summit
        was one such memorable one.
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75, delay: 0.9 }}
        className="text-2xl  leading-relaxed tracking-wide text-zinc-400  py-1 mx-auto p-5 text-justify  mt-5"
      >
        Philharmonic Festival are two of the most significant events among them.
        They have also performed at many national events and the CHOGM summit
        was one such memorable one. They won many inter-school and national
        competitions. In parallel to academic music, they have completed their
        Grade 8 exams of the Trinity College of Music under both theory and
        practicals & the Audio Engineering Diploma with Maestro Ranga
        Dassanayake at Music Oven. Despite their continuously growing and busy
        music career, they have been able to complete their school education
        with flying colours and are now doing their higher studies in the fields
        of Fashion Design and Interior Design.
      </motion.div>
    </motion.div>
    // </motion.div>
  );
}
