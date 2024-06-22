import React from "react";
import header from "../public/header.png";

const Header = () => {
  return (
    <section
    id="Home"
      className="relative bg-cover bg-center bg-no-repeat h-screen bg-slate-800"
      style={{ backgroundImage: `url(/header.jpg)` }}
    >
      <input
        type="file"
        accept="image/*"
        //onChange={handleFileChange}
        className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
      />

      <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:from-black/95 sm:to-black/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      <div className="absolute w-full inset-0 bg-black opacity-50"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:px-8 flex h-full items-center justify-center">
        <div className="relative w-full text-center text-white">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            The Website You Want Without The Dev Time.
          </h1>
          <p className="mx-auto mb-8 max-w-[528px] text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus
          </p>
          <a
            href="#"
            className="inline-block rounded-full bg-[#FFD700] px-8 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
