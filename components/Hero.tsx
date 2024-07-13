import React from "react";
import { artists } from "@/constants";

const Hero = (props: any) => {
  return (
    <div className="bg-black">
      <div className="sm2:hidden flex justify-center items-center ">
        <div className="w-[550px] h-[400px] bg-[url('../public/hero2.png')] object-cover  bg-center bg-cover"></div>
      </div>
      <div className=" relative sm2:bg-[url(../public/hero.png)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm2:bg-gradient-to-r from-black/85"></div>
        {/* <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r from-black/85"></div> */}
        <div className="">
          <div className="relative mx-auto max-w-screen-xl px-4 py-8 sm2:pt-28 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-md sm2:text-5xl font-extrabold text-white sm:text-5xl text-left">
                Let us find your
                <strong className="block font-extrabold text-[#FFD700]">
                  {" "}
                  Forever Home.{" "}
                </strong>
              </h1>

              <p className="mt-4 max-w-lg text-white sm2:text-xl/relaxed text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <a
                  href="#"
                  className="rounded-2xl block w-full  bg-[#FFD700] px-12 py-3  text-md sm2:text-xl  text-black font-extrabold shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  Book Now!
                </a>

                <a
                  href="#"
                  className="block w-full rounded-2xl text-md sm2:text-xl bg-white px-12 py-3 font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  More info
                </a>
              </div>
              <div className="px-2 mt-2 pb-8">
                <h1 className="text-white text-md font-semibold  mb-2   mt-8 text-left">
                  Featured Artists
                </h1>
                <div className="  gap-4 grid grid-cols-4 md:grid-flow-col  ">
                  {artists.map((artist: any) => (
                    <div
                      key={artist.artistId}
                      className="my-0.5 flex items-center flex-col "
                    >
                      <img
                        src={artist.imgUrl}
                        alt={artist.artistName}
                        className="w-20 h-20 rounded-full object-cover mb-2 shadow-md shadow-[#FFD700]/80"
                      />
                      <p className="text-white text-center text-lg">
                        {artist.artistName}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
