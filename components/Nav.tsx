import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Nav.css";

function Nav() {
  return (
    // <header className="">
    <header className="fixed w-full z-10 top-0  transition-all duration-300   shadow-lg">
      <div className="mx-auto max-w-screen-lg ">
        <div className="flex h-14 justify-between items-center">
          <div className="text-white font-bold p-8 mx-2 md:flex md:items-center md:gap-12">
            LOGO
          </div>
          <div className="justify-right  items-center hidden md:block  rounded-full p-4 bg-white bg-opacity-20 backdrop-blur-lg  drop-shadow-lg ">
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
                    shows
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

          <div className="flex items-center gap-4 mx-5 p-8 ">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-xl font-bold bg-[#FFD700] px-5 py-2.5 text-sm  text-gray-700 hover:text-black shadow hover:bg-[#ddc74a]"
                href="#"
              >
                Login
              </a>
            </div>

            <div className="block md:hidden">
              <button className="rounded text-white hover:text-white/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
