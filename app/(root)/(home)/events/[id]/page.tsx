'use client'
import React from 'react';
import './Event.css';
import { useParams } from 'next/navigation';
import { events } from '../../../../../events'; 
import { motion } from 'framer-motion';
import { artists } from '../../../../../constants/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faCalendar, faLocationDot, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

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

      <div className="details flex justify-center bg-black flex-col items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: -300 }}
          transition={{ duration: 2 }}
          className="tile w-[90%] shadow-xl bg-[#0e0e0e] rounded-lg flex "
        >
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
            <p className="mt-10 max-w-[700px]">
              HASKY ENTERTAINMENT Proudly Presents "SARAMA LIVE IN CONCERT" on
              the 11th of April 2024 at Sahas Uyana - Kandy FT : Sanuka & Windy
              | Vini Products | Chandika Lilan | Milan | Music by Memory SL
              Band.
            </p>
            <div className="mt-20">
              <div className="flex items-center gap-3 mb-3">
              <FontAwesomeIcon icon={faCalendar} />
                <p>{event.date}</p>
              </div>
              <div className="flex items-center gap-x-3 mb-3">
              <FontAwesomeIcon icon={faLocationDot}  />
                <p>Sahas Uyana - Kandy</p>
              </div>
              <div className="flex items-center gap-x-3 mb-3">
              <FontAwesomeIcon icon={faAward}  />
                <p>Organized by HASKY ENTERTAINMENT</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="w-full -mt-[200px] h-[1000px]">
          <div className="mx-20">
            <h1 className="text-white text-4xl font-bold text-center md:text-left md:mx-10">Featured Artists</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
              {artists.map((artist, index) => (
                <div key={index} className="my-10 flex items-center flex-col">
                  <img 
                    src={artist.imgUrl} 
                    alt={artist.name} 
                    className="w-32 h-32 rounded-full object-cover mb-4" 
                  />
                  <p className="text-white text-center text-lg">{artist.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
