import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faCalendar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const EventMoreInfo = (props: any) => {
  return (
    <div className="mx-4 px-6 mt-20 items-center  ">
      <div className="max-w-[800px]  md:px-10 px-10 bg-[#151515] py-10 rounded-3xl">
        {" "}
        <h1 className="text-[#FFD700] text-3xl md:text-5xl font-semibold text-left  md:text-center lg:text-left mb-4">
          Reserve your place in a wonderful evening
        </h1>
        <h1 className="text-white text-2xl font-semibold text-left  md:text-center lg:text-left mb-10">
          this is a sub heading
        </h1>
        <p className="md:text-xl text-lg leading-relaxed tracking-wide text-zinc-400 md:text-justify">
          HASKY ENTERTAINMENT proudly presents "SARAMA LIVE IN CONCERT" on the
          11th of April 2024 at Sahas Uyana, Kandy. Enjoy sensational
          performances by Sanuka and Windy, with special acts from Chandika
          Lilan and Milan. The evening will be brought to life with music by the
          acclaimed Memory SL Band and supported by Vini Products. Join us for a
          night of unforgettable melodies and vibrant entertainment, and make
          "SARAMA LIVE IN CONCERT" an experience to remember!
        </p>
        <div className=" pt-8 text-white mt-5">
          <h1 className="sm:text-center md:text-left font-bold text-2xl">
            Mark your calendar for
          </h1>

          <div className="mt-8 w-full">
            <div className="flex items-center gap-x-3 mb-5 ">
              <div className="h-4 w-4">
                <FontAwesomeIcon icon={faCalendar} />
              </div>
              <p>8th august 2024</p>
            </div>
            <div className="flex items-center gap-x-3 mb-5">
              <div className="h-4 w-4">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <p>viharamahadevi park</p>
            </div>
            <div className="flex items-center gap-x-3 mb-5">
              <div className="h-4 w-4">
                <FontAwesomeIcon icon={faAward} />
              </div>
              <p>Organized by KW Group</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventMoreInfo;
