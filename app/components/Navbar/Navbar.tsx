import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className=' w-full flex text-md justify-around py-4  items-center text-semibold fixed z-10 text-white bg-[#1a1a1a] bg-opacity-20 '>

        <div>

            logo

        </div>

        <div>
        <ul className="flex items-center gap-6  ">
            <li>
              About
            </li>

            <li>
             Careers
            </li>

           

            <li>
             Projects
            </li>

            <li>
             Blog
            </li>
          </ul>
        </div>

        <div>

            <button className='px-5 py-2 border-2 border-white rounded-md'>Login</button>

        </div>
      
    </div>
  )
}

export default Navbar
