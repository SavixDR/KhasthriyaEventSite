import React from "react";

export default function Reviews() {
  return (
    <section id="Reviews" className="bg-black text-white">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Title */}
        <h2 className="mb-8  text-2xl font-bold md:mb-14 md:text-5xl text-left">
          What our clients are saying ...
        </h2>
        {/* Testimonial List */}
        <ul className="mb-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:mb-16">
          <li className="grid gap-8 bg-[#1f1f1f] p-8 md:p-10 rounded-xl">
            <img
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cd455b21e96db53b7ef3_Vector-8.svg"
              alt=""
              className="inline-block max-w-[128px]"
            />
            <p>
              “Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"
            </p>
            <div className="flex">
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb67bf1bca198e298c35_Ellipse%205-2.png"
                alt=""
                className="mr-4 h-16 w-16"
              />
              <div className="flex flex-col">
                <h6 className="font-bold">Laila Bahar</h6>
                <p className="text-sm">Designer</p>
              </div>
            </div>
          </li>
          <li className="grid gap-8 bg-[#1f1f1f] p-8 md:p-10 rounded-xl">
            <img
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cd455b21e96db53b7ef3_Vector-8.svg"
              alt=""
              className="inline-block max-w-[128px]"
            />
            <p>
              “Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"
            </p>
            <div className="flex">
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb5e3ea08ab4c244194a_Ellipse%205-4.png"
                alt=""
                className="mr-4 h-16 w-16"
              />
              <div className="flex flex-col">
                <h6 className="font-bold">Laila Bahar</h6>
                <p className="text-sm">Designer</p>
              </div>
            </div>
          </li>
          <li className="grid gap-8 bg-[#1f1f1f] p-8 md:p-10 rounded-xl">
            <img
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cd455b21e96db53b7ef3_Vector-8.svg"
              alt=""
              className="inline-block max-w-[128px]"
            />
            <p>
              “Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"
            </p>
            <div className="flex">
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb614a296368b383467c_Ellipse%205-3.png"
                alt=""
                className="mr-4 h-16 w-16"
              />
              <div className="flex flex-col">
                <h6 className="text-base font-bold">Laila Bahar</h6>
                <p className="text-sm">Designer</p>
              </div>
            </div>
          </li>
        </ul>
        {/* Buttons*/}
        <div className="flex justify-center flex-col sm:flex-row">
          <a
            href="#"
            className="flex items-center justify-center border-[1.5px] border-solid border-[#FFD700] py-4 text-center font-semibold px-8 mr-5 lg:mr-8 mb-4 sm:mb-0 rounded-2xl"
          >
            <p className=" font-bold text-[#FFD700]">Get Started</p>
          </a>
        </div>
      </div>
    </section>
  );
}
