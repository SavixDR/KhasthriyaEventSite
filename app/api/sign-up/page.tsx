import React from "react";

function SignUpPage() {
  return (
    // <div className="justify-center">
    <div className=" flex justify-center bg-black py-2 ">
      <div className="lg:w-[368px] xl:w-[368px]  max-w-sm p-4 sm:m-12 border border-[#FFD700] rounded-3xl bg-black shadow-[#FFD700]/20 shadow-2xl   ">
        <div>
          <img src="/logo.svg" className="w-24 mx-auto" alt="Logo" />
        </div>
        <div className="mt-2 flex flex-col items-center">
          <h1 className="text-lg xl:text-lg font-extrabold text-white">
            Sign Up to our platform
          </h1>
          <div className="w-full flex-1 ">
            <div className="flex flex-col items-center"></div>

            <div className=" border-b text-center">
              <div className="leading-none px-2 inline-block text-sm text-gray-300 tracking-wide font-medium bg-black transform translate-y-1/2">
                Or sign up with e-mail
              </div>
            </div>

            <div className="mx-auto max-w-xs mt-12">
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-900 border border-[#FFD700] placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email"
                placeholder="Email"
              />
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-900 border border-[#FFD700] placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="userName"
                placeholder="user name"
              />
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-900 border border-[#FFD700] placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="password"
                placeholder="Password"
              />
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-900 border border-[#FFD700] placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="password"
                placeholder="Re-enter your Password"
              />
              <button className="mt-5 tracking-wide font-semibold bg-[#FFD700] text-gray-100 w-full py-4 rounded-lg hover:bg-[#b49e1f] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                <svg
                  className="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  color="black"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M20 8v6M23 11h-6" />
                  <circle cx="8.5" cy="7" r="4" />
                </svg>
                <span className="ml-3 text-black">Sign Up</span>
              </button>
              <p className="mt-6 text-xs text-gray-600 text-center">
                I agree to abide by templatana's{" "}
                <a href="#" className="border-b border-gray-500 border-dotted">
                  Terms of Service
                </a>{" "}
                and its{" "}
                <a href="#" className="border-b border-gray-500 border-dotted">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
