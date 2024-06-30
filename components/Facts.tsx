import React from "react";

const Facts = () => {
  return (
    <div>
      {/* Container */}
      <div className="px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Component */}
        <div className="mx-auto flex w-full max-w-[798px] flex-col rounded-[36px] bg-black py-8 text-white">
          {/* Facts Div */}
          <div className="grid h-full w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
            {/* Fact Item */}
            <div className="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#FFD700]">
              <h4 className="mb-4 text-2xl font-bold md:text-3xl">20+</h4>
              <p className="text-sm">Shows</p>
            </div>
            {/* Fact Item */}
            <div className="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#FFD700]">
              <h4 className="mb-4 text-2xl font-bold md:text-3xl">45+</h4>
              <p className="text-sm">Artists</p>
            </div>
            {/* Fact Item */}
            <div className="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#FFD700]">
              <h4 className="mb-4 text-2xl font-bold md:text-3xl">1500+</h4>
              <p className="text-sm">Attendies</p>
            </div>
            {/* Fact Item */}
            <div className="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#FFD700]">
              <h4 className="mb-4 text-2xl font-bold md:text-3xl">6</h4>
              <p className="text-sm">venues</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
