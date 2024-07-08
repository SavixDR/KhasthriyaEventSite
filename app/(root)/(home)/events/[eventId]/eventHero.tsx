'use client';

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAward,
	faCalendar,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


interface EventProps {
	event: {
		eventId: string;
		title: string;
		date: string;
		poster: string;
	};
}

const eventHero = ({ event }: EventProps) => {
	return (
		<div>
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
		</div>
	);
};

export default eventHero;
