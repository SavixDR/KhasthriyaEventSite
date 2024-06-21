'use client'
import React from 'react';
import './Event.css';
import { motion } from 'framer-motion';

interface EventProps {
  event: {
    eventId: string;
    title: string;
    date: string;
    poster: string;
  };
}

const Event = ({ event }: EventProps) => {
  const { title, poster } = event; 

  return (
    <motion.div
    whileInView={{x:0 ,opacity:1}}
    initial={{x:-100,opacity:0}}
    transition={{duration:2}}
    className='tile relative my-5 w-full h-[450px] xl:h-[600px]'>
      <img
        className='backimage absolute inset-0 w-full h-full object-cover'
        src={poster}
        alt={`Poster of ${title}`}
      />
      <div className='booking absolute opacity-0 transition-opacity duration-500 bottom-0 w-full'>
        <div className='text-3xl text-white'>
          <div className='bg-[#1a1a1a] text-center h-[100px] flex justify-center items-center opacity-90'>
            <button className='border-2 px-5 py-2 rounded'>Book now</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Event;
