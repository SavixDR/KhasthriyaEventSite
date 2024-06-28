import React from "react";
import { motion } from 'framer-motion';


const Header = () => {
  return (
    <section id="Home" className="section section1">
      <div className="w-full h-[100vh] place-content-center text-center relative">
        <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:from-black/95 sm:to-black/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l h-[120vh]"></div>
        <div className="absolute h-[120vh] w-full inset-0 bg-black opacity-50"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:px-8 flex h-full items-center justify-center">
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
              href="#"
              className="inline-block rounded-full bg-[#FFD700] px-8 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white"
            >
              Get Started
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
