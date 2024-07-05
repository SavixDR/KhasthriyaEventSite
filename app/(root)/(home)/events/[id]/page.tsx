"use client";
import React, { useState } from "react";
import "./Event.css";
import { useParams } from "next/navigation";
import { events } from "../../../../../events";
import { motion } from "framer-motion";
import { artists } from "../../../../../constants/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAward,
	faCalendar,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Countdown from "../../../../../components/Countdown/Countdown";
import Modal from "@/utils/Modal";
import CheckoutModal from "@/components/CheckoutModal";
import Link from "next/link";

const Booking = () => {
	const { id } = useParams();
	const event = events.find((event) => event.eventId === id);

	const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  

	if (!event) {
		return <div className="text-white">Event not found</div>;
	}

	return (
		<div className="wrapper bg-[#1a1a1a]">
			<div className="wallpaper w-full">
				<img
					className="wallpaperimg w-full h-full object-cover"
					src={event.poster}
					alt={event.title}
				/>
			</div>

			<div className="details flex justify-center bg-black flex-col items-center w-full   ">
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: -300 }}
					transition={{ duration: 2 }}
					className="tile w-[90%] shadow-xl bg-[#0e0e0e] rounded-lg flex  "
				>
					<div className="sm:hidden md:block md:w-1/2 lg:w-1/3 p-8 rounded-lg">
						<img
							src={event.poster}
							className="rounded-lg w-full h-full object-cover"
							alt={event.title}
						/>
					</div>
					<div className="md:w-1/2 lg:w-2/3 p-8 text-white my-5">
						<h1 className="sm:text-center md:text-left font-bold text-4xl">
							{event.title}
						</h1>

						<div className="mt-20">
							<div className="flex items-center gap-3 mb-5">
								<FontAwesomeIcon icon={faCalendar} />
								<p>{event.date}</p>
							</div>
							<div className="flex items-center gap-x-3 mb-5">
								<FontAwesomeIcon icon={faLocationDot} />
								<p>Sahas Uyana - Kandy</p>
							</div>
							<div className="flex items-center gap-x-3 mb-5">
								<FontAwesomeIcon icon={faAward} />
								<p>Organized by HASKY ENTERTAINMENT</p>
							</div>
						</div>
						<div className="my-5 mt-10">
							<Link
								href="#tickets"
								className="bg-[#ffd700] text-black px-10 py-2 font-semibold rounded-lg "
							>
								Buy tickets
							</Link>
						</div>
					</div>
				</motion.div>

				<div className="w-full -mt-[200px] h-[1000px]">
					<div className="px-10 mt-20 bg-black">
						<h1 className="text-white text-4xl font-semibold text-center mb-10  md:mx-10">
							Featured Artists
						</h1>
						<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
							{artists.map((artist, index) => (
								<div
									key={index}
									className="my-10 flex items-center flex-col"
								>
									<img
										src={artist.imgUrl}
										alt={artist.name}
										className="w-32 h-32 rounded-full object-cover mb-4"
									/>
									<p className="text-white text-center text-lg">
										{artist.name}
									</p>
								</div>
							))}
						</div>
					</div>

					<div className="md:px-20 pt-20 lg:px-10 justify-center items-center lg:items-start flex flex-col lg:flex-row bg-black">
						<div className="mx-10 lg:w-1/2 my-20 flex flex-col items-center  ">
							<h1 className="text-white text-4xl font-semibold text-center lg:text-left mb-10">
								Mark your calendar for
							</h1>

							<Countdown date="July 30 2024 00:04:30" />

							<div className="max-w-[500px] mt-10 md:px-10 lg:px-10">
								{" "}
								<p className="text-white text-justify">
									HASKY ENTERTAINMENT proudly presents "SARAMA LIVE IN CONCERT"
									on the 11th of April 2024 at Sahas Uyana, Kandy. Enjoy
									sensational performances by Sanuka and Windy, with special
									acts from Chandika Lilan and Milan. The evening will be
									brought to life with music by the acclaimed Memory SL Band and
									supported by Vini Products. Join us for a night of
									unforgettable melodies and vibrant entertainment, and make
									"SARAMA LIVE IN CONCERT" an experience to remember!
								</p>
							</div>
						</div>

						<div
							id="tickets"
							className="w-full lg:w-1/2 my-20 flex flex-col items-center"
						>
							<h1 className="text-white text-4xl font-semibold text-center md:mx-10 mb-10 ">
								Ticket Prices
							</h1>

							<div className="bg-[#151515] w-full h-full rounded-xl flex flex-col justify-center ">
								<div className="px-20 mt-5">
									<div className="flex justify-between border-b border-neutral-700 px-10 py-5">
										<p className="text-white text-xl">General</p>
										<p className="text-white text-xl">2500 LKR</p>
									</div>

									<div className="flex justify-between border-b px-10 py-5 border-neutral-700">
										<p className="text-white text-xl">VIP</p>
										<p className="text-white text-xl">5000 LKR</p>
									</div>

									<div className="flex justify-between px-10 py-5 border-neutral-700">
										<p className="text-white text-xl">VVIP</p>
										<p className="text-white text-xl">10000 LKR</p>
									</div>

									<a
										className="group justify-center inline-block overflow-hidden border-2 rounded-lg border-[#FFD700] px-10 py-2 my-5 focus:outline-none focus:ring"
										type="button"
										onClick={() => setIsCheckoutModalOpen(true)}
										href="#"
									>
										<span className="absolute inset-y-0 left-0 w-[2px] bg-[#FFD700] transition-all group-hover:w-full "></span>

										<span className="relative text-xl  text-[#FFD700] transition-colors group-hover:text-black">
											Checkout
										</span>
									</a>
									{isCheckoutModalOpen && (
										<CheckoutModal
											isOpen={isCheckoutModalOpen}
											handleClose={() => setIsCheckoutModalOpen(false)}
										/>
									)}
								</div>
							</div>
						</div>
					</div>

					<div className="px-20 mt-20 bg-black">
						<h1 className="text-white text-4xl font-semibold text-center md:text-left md:mx-10">
							Featured Artists
						</h1>
						<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
							{artists.map((artist, index) => (
								<div
									key={index}
									className="my-10 flex items-center flex-col"
								>
									<img
										src={artist.imgUrl}
										alt={artist.name}
										className="w-32 h-32 rounded-full object-cover mb-4"
									/>
									<p className="text-white text-center text-lg">
										{artist.name}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Booking;
