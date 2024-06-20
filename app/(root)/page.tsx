'use client'
import React from "react";
import "./Home.css";
import Events from "../components/Events/Events";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <div className="home container-full">
      <div className="section section1">
        <motion.div
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        transition={{duration:2}}
         className="  w-full h-[100vh] place-content-center text-center );">
          <div className="text-white text-7xl font-bold leading-[100px]">
            Experience the Magic of <br /> Live Performances
          </div>

          <div className="mt-10">
            <button
              className="text-white text-2xl px-3 py-2 border-2 border-white rounded-md hover:bg-white 
            hover:text-transparent
             
             
            
             transition-all duration-300"
            >
              Explore Events
            </button>

            {/* <button className="text-2xl bg-white mix-blend-screen px-3 py-3 border-2 border-white rounded-md font-semibold hover:bg-transparent hover:text-white transition-all duration-200">
              Explore Events
            </button> */}
          </div>
        </motion.div>
      </div>
      <div className="section section2">
        <Events />
      </div>
    </div>
  );
};

export default Home;
