import React, { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { events } from "@/events";
import Show from "./Show/Show";

const Showlist = () => {
	return (
		<div
			className="my-20"
			id="Shows"
		>
			<h1 className="text-[#FFD700] text-center text-5xl font-bold   my-8  pt-[200px]">
				Upcoming shows
			</h1>

			<div className="md:max-w-screen-lg container  my-5 grid mx-auto gap-5 grid-cols-1 md:grid-cols-2  px-2 md:px-4 lg:px-10 py-5 ">
				{events.map((event) => (
					<motion.div
						key={event.eventId}
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 2 }}
					>
						<Show
							key={event.eventId}
							event={event}
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Showlist;
