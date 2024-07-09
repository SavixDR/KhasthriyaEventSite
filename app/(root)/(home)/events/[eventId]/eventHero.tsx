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
		date: Date;
		poster: string;
		venue: string;
	};
}
function formatDateToCustomString(dateObj:Date) {
	const months = ["January", "February", "March", "April", "May", "June", 
					"July", "August", "September", "October", "November", "December"];
	
	// Get the components in UTC
	const month = months[dateObj.getUTCMonth()];
	const day = dateObj.getUTCDate();
	const year = dateObj.getUTCFullYear();
	let hours = dateObj.getUTCHours();
	const minutes = dateObj.getUTCMinutes().toString().padStart(2, '0');
	const seconds = dateObj.getUTCSeconds().toString().padStart(2, '0');
	const ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	const strTime = `${hours}:${minutes} ${ampm}`;
  
	return `${month} ${day} ${year} ${strTime}`;
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
							<p>{formatDateToCustomString(event.date)}</p>
						</div>
						<div className="flex items-center gap-x-3 mb-5">
							<FontAwesomeIcon icon={faLocationDot} />
							<p>{event.venue}</p>
						</div>
						<div className="flex items-center gap-x-3 mb-5">
							<FontAwesomeIcon icon={faAward} />
							<p>Organized by KW Group</p>
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
