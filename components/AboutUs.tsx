import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const AboutUs = () => {
  return (
    <section id="About">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* Component */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
          {/* Content */}
          <div className="flex flex-col gap-8 lg:w-3/5">
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold tracking-relaxed py-10 p-5  text-[#FFD700]"
            >
              About us
            </motion.h2>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl  leading-relaxed tracking-wide text-zinc-400 py-1 mx-auto p-5 text-justify "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin
              fermentum leo vel orci. Dui faucibus in ornare quam viverra orci
              sagittis eu. Viverra nam libero justo laoreet sit amet. Vulputate
              odio ut enim blandit volutpat maecenas volutpat blandit. A lacus
              vestibulum sed arcu non odio euismod. Feugiat pretium nibh ipsum
              consequat. Cum sociis natoque penatibus et. Leo in vitae turpis
              massa sed. Neque aliquam vestibulum morbi blandit cursus.
              Facilisis sed odio morbi quis. A pellentesque sit amet porttitor
              eget.
            </motion.p>
            <motion.a
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              href="#"
              className="w-36 rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
            >
              Learn More
            </motion.a>
            {/* Divider */} <div className="my-2 h-px w-full bg-black"></div>
          </div>
          {/* Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="w-full rounded-md bg-gray-100 max-[991px]:h-[475px] lg:w-2/5 relative"
          >
            <img
              className="object-cover w-full h-full  "
              src="/about.png"
              alt="image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
