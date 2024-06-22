'use client'
import React from "react";
import {facts} from '../constants'

import {fadeIn, staggerContainer} from '../../utils/motion'
import { motion } from "framer-motion";



const HowItWorks = () => {
  return (
    <div className="w-full">
      <motion.div
      variants={staggerContainer(0,0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      
      className="mx-auto w-full max-w-3xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        <h2
        
        className="mx-auto mb-12 max-w-3xl text-center text-3xl font-extrabold md:mb-20 md:text-5xl text-white">
          Get Started In 4 Easy Steps
        </h2>
        
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6">
          {facts.map((fact, index) => (
            <motion.div
            variants={fadeIn('up', 'spring', index * 0.5, 1)}
            
              key={index}
              className="group flex flex-row items-center gap-6 rounded-[60px] border border-solid border-[#ada790] px-6 py-4 transition hover:bg-[#eceae2] hover:text-black transform motion-safe:hover:scale-110 duration-300"
            >
              <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-full bg-[#FFD700]">
                <img
                  src={fact.imageUrl}
                  alt={`Get Started Icon ${index + 1}`} 
                  className="inline-block"
                />
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <h5 className="text-base font-bold md:text-xl">
                  <span className="group-hover:text-black">{fact.title}</span>
                </h5>
                <p className="text-[#636262] group-hover:text-black">
                  {fact.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HowItWorks;
