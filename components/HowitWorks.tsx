import React, { useEffect, useRef } from "react";
import { delay, motion, useAnimation, useInView } from "framer-motion";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div ref={ref} className="w-full">
      {" "}
      {/* Container */}{" "}
      <motion.div
        ref={ref}
        className="mx-auto w-full max-w-3xl px-5 py-12 md:px-10 md:py-16 lg:py-20"
      >
        {" "}
        {/* Heading */}{" "}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mx-auto mb-12 max-w-3xl text-center text-3xl font-extrabold md:mb-20 md:text-5xl text-white"
        >
          Get Started In 4 Easy Steps
        </motion.h2>{" "}
        {/* How it Works */}{" "}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6">
          {" "}
          {/* Item */}{" "}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.6 }}
            className=" group flex flex-row items-center gap-6 rounded-[60px] border border-solid border-[#ada790] px-6 py-4 transition hover:bg-[#eceae2] hover:text-black transform motion-safe:hover:scale-110 duration-300"
          >
            <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-full bg-[#FFD700]">
              <img
                src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a274_CodepenLogo.svg"
                alt="Get Started Icon 1"
                className="inline-block"
              />
            </div>
            <div className="flex flex-col items-start gap-2.5">
              <h5 className="text-base font-bold md:text-xl  ">
                <span className="text-white group-hover:text-black">
                  Sign up for account
                </span>
              </h5>
              <p className="text-[#636262] group-hover:text-black">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit amet dolor sit amet consectetur adipiscing
              </p>
            </div>
          </motion.div>{" "}
          {/* Item */}{" "}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="group flex flex-row items-center gap-6 rounded-[60px] border border-solid border-[#ada790] px-6 py-4 transition hover:bg-[#eceae2] transform motion-safe:hover:scale-110 duration-300"
          >
            <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-full bg-[#FFD700]">
              <img
                src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a28e_GitlabLogo.svg"
                alt="Get Started Icon 2"
                className="inline-block"
              />
            </div>
            <div className="flex flex-col items-start gap-2.5">
              <h5 className="text-base font-bold md:text-xl text-white group-hover:text-black">
                Select your favourite show
              </h5>
              <p className="text-[#636262] group-hover:text-black">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit amet dolor sit amet consectetur adipiscing
              </p>
            </div>
          </motion.div>{" "}
          {/* Item */}{" "}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="group flex flex-row items-center gap-6 rounded-[60px] border border-solid border-[#ada790] px-6 py-4 transition hover:bg-[#eceae2] transform motion-safe:hover:scale-110 duration-300"
          >
            <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-full bg-[#FFD700]">
              <img
                src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a274_CodepenLogo.svg"
                alt="Get Started Icon 3"
                className="inline-block"
              />
            </div>
            <div className="flex flex-col items-start gap-2.5">
              <h5 className="text-base font-bold md:text-xl text-white group-hover:text-black">
                Book your tickets
              </h5>
              <p className="text-[#636262] group-hover:text-black">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit amet dolor sit amet consectetur adipiscing
              </p>
            </div>
          </motion.div>{" "}
          {/* Item */}{" "}
          {/* <div className="flex flex-row items-center gap-6 rounded-[60px] border border-solid border-[#ada790] px-6 py-4 transition hover:bg-[#eceae2]">
            <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-full bg-[#c9fd02]">
              <img
                src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a28e_GitlabLogo.svg"
                alt="Get Started Icon 4"
                className="inline-block"
              />
            </div>
            <div className="flex flex-col items-start gap-2.5">
              <h5 className="text-base font-bold md:text-xl">Ready set go!</h5>
              <p className="text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit amet dolor sit amet consectetur adipiscing
              </p>
            </div>
          </div> */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HowItWorks;
