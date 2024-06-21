"use client";
import React from "react";
import "./Home.css";
import Events from "@/components/Events/Events";
import { motion } from "framer-motion";
import HowItWorks from "@/components/HowitWorks";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Showlist from "@/components/ShowList";
import Copy from "@/components/Copy";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Facts from "@/components/Facts";
import AboutUs from "@/components/AboutUs";

const Home = () => {
  return (
    <section className="bg-black">
      {/* <Nav /> */}
      {/* <Copy /> */}
      <Header />
      <Showlist />
      {/* <Events /> */}
      <AboutUs />
      {/* <About /> */}
      <Facts />
      <HowItWorks />
      <Reviews />
      <Footer />
    </section>
  );
};

export default Home;
