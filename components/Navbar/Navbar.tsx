import React from "react";
import { Link as ScrollLink } from "react-scroll/modules";
import  Link from 'next/link'

const Navbar = () => {
  return (
    <div className=" w-full flex text-md justify-around py-4  items-center   text-semibold fixed z-10 text-white bg-[#1a1a1a] bg-opacity-20 ">
      <div>logo</div>

      <div>
        <ul className="flex items-center gap-6 ">

          <li className="hover:text-lg hover:cursor-pointer duration-300" ><Link href="#Home" >Home</Link></li>
          {/* <ScrollLink
              to="About"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-150}
              duration={500}
            >
              <a
                className="text-white transition hover:text-[#FFD700]"
                href="#"
              >
                About
              </a>
            </ScrollLink>
          </li> */}

          <li className="hover:text-lg hover:cursor-pointer duration-300"><Link href="#Shows">Shows</Link></li>

          <li className="hover:text-lg hover:cursor-pointer duration-300"><Link href="#About">About</Link></li>

          <li className="hover:text-lg hover:cursor-pointer duration-300"><Link href="#Reviews">Reviews</Link></li>
        </ul>
      </div>

      <div>
        <button className="px-5 py-2 border-2 border-white rounded-xl">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
