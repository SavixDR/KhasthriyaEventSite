import React from 'react'
import './Navbar.css'
import Link from 'next/link'
import Login from '../Login'


const Navbar = () => {
  return (
    <div className='w-full flex text-md justify-around py-4  items-center text-semibold fixed z-10 text-white bg-[#1a1a1a] bg-opacity-20 '>
      <div>
        logo
      </div>
      <div>
        <ul className="flex items-center gap-6  ">
          <li>
            <Link href="#Home" >Home</Link>
          </li>

          <li>
            <Link href="#Shows">Shows</Link>
          </li>



          <li>
            <Link href="#About">About</Link>
          </li>

          <li>
            <Link href="#Reviews">Reviews</Link>
          </li>
        </ul>
      </div>

      {/* <div>
        <button className='px-5 py-2 border-2 border-white rounded-md'>Login</button>   
      </div> */}
      <Login />

    </div>
  )
}

export default Navbar
