'use client';
import React from 'react';
import "./Home.css";

import { motion } from 'framer-motion';
import Showlist from '@/components/Showlist';
import AboutUs from '@/components/AboutUs';
import Facts from '@/components/Facts';
import HowItWorks from '@/components/HowitWorks';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';
import Header from '@/components/Header';


const Home = () => {
  return (
    <div className="home container-full scroll-smooth">
      <Header />
      <div className="section section2">
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
