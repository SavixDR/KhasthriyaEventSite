import React from "react";
import "./Home.css";
import Navbar from "@/components/Navbar/Navbar";

import { motion } from "framer-motion";
import Showlist from "@/components/Showlist";
import AboutUs from "@/components/AboutUs";
import Facts from "@/components/Facts";
import HowItWorks from "@/components/HowitWorks";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Login from "@/components/Login";
import { VideoCarousel } from "@/components/VideoCarousel";
import ComingShow from "@/components/ComingShow";

const Home = () => {
  return (
    <div className="home scroll-smooth">
      <Navbar />
      <Header />
      <div className="section section2">
        <ComingShow />
        {/* <LoginPage /> */}
        <VideoCarousel />
        <Showlist />
        <AboutUs />

        <Facts />
        <HowItWorks />
        <Reviews />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
