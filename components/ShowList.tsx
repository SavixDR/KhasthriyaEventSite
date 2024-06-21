import React, { useEffect, useRef } from "react";
import { events } from "../events";
import Show from "./Show";
import { delay, motion, useAnimation, useInView } from "framer-motion";

const Showlist = () => {
  const mainControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div className="my-20" id="shows" ref={ref}>
      <h1 className="text-[#FFD700] text-center text-5xl font-bold   my-8  pt-[200px]">
        Upcoming shows
      </h1>

      <div className="md:max-w-screen-lg container  my-5 grid mx-auto gap-5 grid-cols-1 md:grid-cols-2  px-2 md:px-4 lg:px-10 py-5 ">
        {events.map((event) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: { opacity: 1, y: 0 },
            }}
            ref={ref}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 3, delay: 0.25 }}
          >
            <Show title={event.title} poster={event.poster} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Showlist;
