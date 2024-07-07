"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Login from "../Login";
import { signIn } from "next-auth/react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

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

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`sticky w-full z-10 top-0 transition-all duration-300 
      bg-black bg-opacity-10 bg-blur-lg h-14 `}
    >
      <div className="mx-auto w-full backdrop-blur-lg xl:px-[170px] lg:px-[100px]">
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
                    href="#Home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-[#FFD700]"
                    href="#Shows"
                  >
                    Shows
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-[#FFD700]"
                    href="#About"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-[#FFD700]"
                    href="#Reviews"
                  >
                    Reviews
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4 mx-5 p-8">
            <Login />
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
      <div className="sticky h-screen">
        <div
          ref={menuRef}
          className={`md:hidden top-0 left-0 h-full w-64 backdrop-blur-lg z-20 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="pt-20 text-white text-center">
            <li className="py-4">
              <a
                href="#Home"
                className="block px-4 py-2 text-white transition hover:text-[#FFD700]"
              >
                Home
              </a>
            </li>
            <li className="py-4">
              <a href="#Shows" className="block px-4 py-2 hover:text-[#FFD700]">
                Shows
              </a>
            </li>
            <li className="py-4">
              <a href="#About" className="block px-4 py-2 hover:text-[#FFD700]">
                About
              </a>
            </li>
            <li className="py-4">
              <a
                href="#Reviews"
                className="block px-4 py-2 hover:text-[#FFD700]"
              >
                Reviews
              </a>
            </li>
          </ul>
        </div>
        {/* End Hamburger Menu */}
      </div>
    </header>
  );
};

export default Navbar;
