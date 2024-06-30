'use client';

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Login from '../Login';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false); // Initialize with false
  const [isOpen, setIsOpen] = useState(false); // State for controlling menu open/close

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {};

  return (
    // <header
    //   className={`fixed w-full z-10 top-0 transition-all duration-300
    //     ${
    //     isScrolled ? "bg-black" : "bg-transparent"
    //   }
    //   backdrop-blur-lg `}
    // >
    <header
    className={`sticky w-full z-10 top-0 transition-all duration-300 
    
  bg-black bg-opacity-10 bg-blur-lg  `}
  >
    <div className="mx-auto w-full  backdrop-blur-lg xl:px-[170px]  lg:px-[100px]">
      <div className="flex h-14 justify-between items-center">
        <div className="text-white font-bold p-8 mx-2 md:flex md:items-center md:gap-12 px-[20px]">
          <img src="/logo.svg" alt="Logo" className="h-20" />
        </div>

        <div className="justify-right items-center hidden md:block rounded-full p-4 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
          <nav aria-label="Global">
            <ul className="flex items-center gap-6 text-sm px-5">
              <li>
                <a
                  className="text-[#FFD700] transition hover:text-[#FFD700]"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-[#FFD700]"
                  href="#"
                >
                  Shows
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-[#FFD700]"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-[#FFD700]"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4 mx-5 p-8">
          <div className="sm:flex sm:gap-4" onClick={handleClick}>
            <a
              className="rounded-xl font-bold bg-[#FFD700] px-5 py-2.5 text-sm text-gray-700 hover:text-black shadow hover:bg-[#ddc74a]"
              href="#"
            >
              Login
            </a>
          </div>
          <div className="block md:hidden">
            <button
              className="rounded text-white hover:text-white/75"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Hamburger Menu */}
    <div
      className={`md:hidden fixed top-0 left-0 h-full w-64   backdrop-blur-lg z-20 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <ul className="pt-20 text-white text-center ">
        <li className="py-4">
          <a
            href="#"
            className="block px-4 py-2 text-white transition hover:text-[#FFD700]"
          >
            Home
          </a>
        </li>
        <li className="py-4">
          <a href="#" className="block px-4 py-2 hover:text-[#FFD700]">
            Shows
          </a>
        </li>
        <li className="py-4">
          <a href="#" className="block px-4 py-2 hover:text-[#FFD700]">
            About
          </a>
        </li>
        <li className="py-4">
          <a href="#" className="block px-4 py-2 hover:text-[#FFD700]">
            Contact Us
          </a>
        </li>
        {/* <li className="py-4">
          <a
            href="#"
            className="block mx-14 py-2 bg-[#FFD700] rounded-lg text-gray-700 font-bold hover:text-black hover:bg-[#ddc74a] px-10"
          >
            Login
          </a>
        </li> */}
      </ul>
    </div>
    {/* End Hamburger Menu */}
    </header>


  );
};

export default Navbar;
