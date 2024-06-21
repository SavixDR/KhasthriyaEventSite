// pages/index.js
import Head from "next/head";

export default function Copy() {
  return (
    <div>
      <Head>
        <title>Sunset Music Festival 2024</title>
      </Head>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <nav className="absolute top-0 w-full flex justify-between p-6 bg-transparent bg-opacity-50">
          <div className="text-white font-bold">INNOVATEX</div>
          <div className="space-x-4  bg-stone-500 p-4 rounded-full px-6 gap-10 ">
            <a href="#" className="text-white font-semibold hover:underline  ">
              About
            </a>
            <a href="#" className="text-white font-semibold hover:underline ">
              Buy Tickets
            </a>
            <a href="#" className="text-white font-semibold hover:underline ">
              Venue
            </a>
            <a href="#" className="text-white font-semibold hover:underline ">
              Gallery
            </a>
            <a href="#" className="text-white font-semibold hover:underline ">
              Contact
            </a>
          </div>
        </nav>
        <div className="flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold">Sunset Music</h1>
          <h2 className="text-4xl md:text-5xl font-semibold">Festival 2024</h2>
          <p className="text-xl md:text-2xl mt-2">
            July 15-17, 2024 | Miami, FL
          </p>
          <a
            href="#"
            className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
          >
            Buy Tickets
          </a>
        </div>
      </div>
    </div>
  );
}
