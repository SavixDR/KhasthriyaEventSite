"use client";

import React, { useState, useEffect } from "react";

import Countdown from '../utility/Countdown'
import "../../../../public/assets/styles/Slider.css";

type Slides = {
  title: string;
  poster: string;
  date: string;
};

const Slidercomponent = (props : Slides) => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    // Trigger slide animation when props change
    setSlideIn(true);
    // Reset slideIn after animation completes
    const timeout = setTimeout(() => {
      setSlideIn(false);
    }, 1000); // Adjust this timeout to match your CSS animation duration
    return () => clearTimeout(timeout);
  }, [props]);

  return (
    <div className={`wrapper ${slideIn ? "animate-slidein" : ""}`}>
      <div className="hidden  ">
        <div className="container-full  h-[70vh] items-center bg-[#0e0e0e] w-full flex px-3">
          <div className="w-[35%]">
            <h1 className="p-4 text-white text-5xl mb-10">{props.title}</h1>
            <div>
              <Countdown date={props.date} />
            </div>
            <div className="mt-20 pl-2">
              <a
                className="group relative inline-block overflow-hidden border border-2 rounded-lg border-[#FFD700] px-20 py-3 focus:outline-none focus:ring"
                href="#"
              >
                <span className="absolute inset-y-0 left-0 w-[2px] bg-[#FFD700] transition-all group-hover:w-full "></span>

                <span className="relative text-lg font-medium text-[#FFD700] transition-colors group-hover:text-black">
                  Book Now
                </span>
              </a>
            </div>
          </div>
          <div className="w-[65%]  ">
            <img
              className="h-[70vh] rounded-[30px] w-full object-cover"
              src={props.poster}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="h-[70vh] relative  ">
        <img className="h-full w-full object-cover" src={props.poster} alt="" />
        <div className="bg-gradient-to-r from-[#0e0e0e] to-none absolute top-0 h-full w-full opacity-90 ">
          <div className="bg-gradient-to-r from-[#0e0e0e] to-none absolute top-0 h-full w-full opacity-90 "></div>
          <div className="absolute top-1/4 mx-16">
            <h1 className="p-4 text-white text-5xl mb-10">{props.title}</h1>
            <div>
              <Countdown date={props.date} />
            </div>
            <div className=" mt-5 md:mt-10 pl-2">
              <a
                className="group relative inline-block overflow-hidden border border-2 rounded-lg border-[#FFD700] px-20 py-3 focus:outline-none focus:ring"
                href="#"
              >
                <span className="absolute inset-y-0 left-0 w-[2px] bg-[#FFD700] transition-all group-hover:w-full "></span>

                <span className="relative text-lg font-medium text-[#FFD700] transition-colors group-hover:text-black">
                  Book Now
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Slidercomponent;
