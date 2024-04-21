import React, { FC } from 'react'

interface ShowProps {
    title: string,
    poster: string,
};

const Show: FC<ShowProps>= (props) => {
  return (
    <div className="show rounded-lg relative h-[500px] w-full  overflow-hidden  ">
      <div className="backimage rounded-lg h-full w-full    ">
        <img
          className="  rounded-lg w-full object-cover h-full hover:scale-110 duration-500 hover:opacity-40  "
          src={props.poster}
          alt=""
        />
        <h1 className=" absolute  left-5   bottom-20 text-2xl text-[#FFD700]">
          {props.title}
        </h1>
        <div className="">
          <div className="booking absolute bottom-4 left-5 ">
            <a
              className="group relative inline-block overflow-hidden border border-2 rounded-lg border-[#FFD700] px-8 py-3 focus:outline-none focus:ring"
              href="#"
            >
              <span className="absolute inset-y-0 left-0 w-[2px] bg-[#FFD700] transition-all group-hover:w-full "></span>

              <span className="relative text-md font-medium text-[#FFD700] transition-colors group-hover:text-black">
                Book Now
              </span>
            </a>
          </div>
          <div className="booking absolute bottom-4 left-48 ">
            <a
              className="group relative inline-block overflow-hidden border border-2 rounded-lg border-[#FFD700] px-8 py-3 focus:outline-none focus:ring"
              href="#"
            >
              <span className="absolute inset-y-0 left-0 w-[2px] bg-[#FFD700] transition-all group-hover:w-full "></span>

              <span className="relative text-md font-medium text-[#FFD700] transition-colors group-hover:text-black">
                More Info
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Show