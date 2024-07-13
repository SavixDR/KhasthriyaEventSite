"use client";
import React from "react";
import { motion } from "framer-motion";

const MotionText = () => {
  return (
    <div className="relative w-full text-center text-white">
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-6 text-white text-4xl font-bold md:text-6xl"
      >
        The Website You Want Without The Dev bye bye.
      </motion.h1>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="mx-auto mb-8 text-white max-w-[528px] text-xl"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus
      </motion.p>
      <motion.a
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.12 }}
        href="#GetStarted"
        className="inline-block rounded-full bg-[#FFD700] px-8 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white"
      >
        Get Started
      </motion.a>
    </div>
  );
};

export default MotionText;
