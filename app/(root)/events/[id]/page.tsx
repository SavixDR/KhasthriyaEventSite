'use client'
import React from 'react';
import './Event.css';
import { useParams } from 'next/navigation';
import { events } from '../../../../events'; 
import { motion } from 'framer-motion';


const Booking = () => {
  const { id } = useParams();
  const event = events.find((event) => event.eventId === id);

  if (!event) {
    return <div className="text-white">Event not found</div>;
  }

  return (
    <div className="wrapper bg-[#1a1a1a]">
      <div className="wallpaper w-full">
        <img
          className="wallpaperimg w-full h-full object-cover"
          src={event.poster}
          alt={event.title}
        />
      </div>

      <div className="details flex justify-center bg-[#1a1a1a] flex-col items-center w-full">
        <motion.div
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:-300}}
        transition={{duration:2}}
        className="tile w-[90%] shadow-xl bg-[#0e0e0e] rounded-lg flex ">
          <div className="sm:hidden md:block md:w-1/2 lg:w-1/3 p-8 rounded-lg">
            <img
              src={event.poster}
              className="rounded-lg w-full h-full object-cover"
              alt={event.title}
            />
          </div>
          <div className="md:w-1/2 lg:w-2/3 p-8 text-white">
            <h1 className="sm:text-center md:text-left text-3xl">
              {event.title}
            </h1>
            <p className="mt-5 max-w-[700px]">
              HASKY ENTERTAINMENT Proudly Presents "SARAMA LIVE IN CONCERT" on
              the 11th of April 2024 at Sahas Uyana - Kandy FT : Sanuka & Windy
              | Vini Products | Chandika Lilan | Milan | Music by Memory SL
              Band.
            </p>
            <div className="mt-5">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid text-xl text-[#FFD700] fa-calendar"></i>
                <p>{event.date}</p>
              </div>
              <div className="flex items-center gap-x-3 mb-3">
                <i className="fa-solid text-xl text-[#FFD700] fa-location-dot"></i>
                <p>Sahas Uyana - Kandy</p>
              </div>
              <div className="flex items-center gap-x-3 mb-3">
                <i className="fa-solid text-xl text-[#FFD700] fa-award"></i>
                <p>Organized by HASKY ENTERTAINMENT</p>
              </div>
            </div>

          </div>
        </motion.div>

        <div className='w-full -mt-[200px] h-[1000px]'>hi</div>
      </div>
    </div>
  );
};

export default Booking;
