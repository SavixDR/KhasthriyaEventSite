"use client";

import React, { useEffect, useState } from 'react'
import events from '../../../Events.json';
import Slidercomponent from './utility/Slidercomponent';

function ImageSlider() {
    const slides = events.map(event => ({
        title: event.title,
        poster: event.poster,
        date: event.date
    }));

    const [currIndex, setCurrIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currIndex]);

    const prevSlide = () => {
        const firstSlide = currIndex === 0;
        const newIndex = firstSlide ? slides.length - 1 : currIndex - 1;
        setCurrIndex(newIndex);
    };

    const nextSlide = () => {
        const lastSlide = currIndex === slides.length - 1;
        const newIndex = lastSlide ? 0 : currIndex + 1;
        setCurrIndex(newIndex);
    };

    return (
        <div className=' w-full h-[70vh] relative group'>
            <Slidercomponent {...slides[currIndex]} />
            
            

            <i onClick={prevSlide} className="fa-solid text-2xl fa-chevron-left hidden group-hover:block absolute  top-[50%] -translate-x-0 translate-y-[-50%]   text-[#FFD700] cursor-pointer"></i>
           
            <i onClick={nextSlide} className="fa-solid text-2xl fa-chevron-right hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1   text-[#FFD700] cursor-pointer"></i>
        </div>
    );
}

export default ImageSlider