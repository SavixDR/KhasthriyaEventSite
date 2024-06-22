import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section id="About">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* Component */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
          {/* Content */}
          <div className="flex flex-col gap-8 lg:w-3/5">
            <h2 className="text-4xl font-bold tracking-relaxed py-10 p-5  text-[#FFD700]">
              About us
            </h2>
            <p className="text-xl  leading-relaxed tracking-wide text-zinc-400 py-1 mx-auto p-5 text-justify ">
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
            </p>
            <a
              href="#"
              className="w-36 rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
            >
              Learn More
            </a>
            {/* Divider */} <div className="my-2 h-px w-full bg-black"></div>
          </div>
          {/* Image */}
          <div className="w-full rounded-md bg-gray-100 max-[991px]:h-[475px] lg:w-2/5 relative">
            <img
              className="object-cover w-full h-full  "
              src="/about.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
