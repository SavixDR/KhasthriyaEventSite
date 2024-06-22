'use client'
import React from "react";
import {events} from '../../events'
import Event from "../Event/Event";
import { motion } from "framer-motion";


const Events = () => {
  return (
    <div>
      <motion.div
       whileInView={{x:0 ,opacity:1}}
       initial={{x:-100,opacity:0}}
       transition={{duration:3}}
      className="text-white text-5xl text-center my-[200px] font-bold pt-[200px]">
        Upcoming Events..
      </motion.div>
      <div className="grid mx-10 md:grid-cols-2 lg:mx-20 xl:mx-[150px] md:gap-10">
        {events.map((event, index) => (
          <Event key={event.eventId} event={event} /> 
        ))}
      </div>
    </div>
  );
};

export default Events;
