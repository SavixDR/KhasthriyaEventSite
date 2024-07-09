"use server";

import "./Event.css";
import { events } from "../../../../../events";
import { artists } from "../../../../../constants/index";
import Countdown from "../../../../../components/Countdown/Countdown";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import CheckoutButton from "@/components/Buttons/CheckoutButton";
import { redirect, useRouter } from "next/navigation";
import EventHero from "./eventHero";
import { Session } from "next-auth";
import { db } from "@/lib/db";
import { Artist, TicketDetails } from "@prisma/client";

const Booking = async ({ params }: { params: { eventId: string } }) => {
	const session: Session | null = await getServerSession(options);

	// if (!session) {
	// 	const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
	// 	redirect(
	// 		`${baseUrl}/api/auth/signin?callbackUrl=/events/${params.eventId}`
	// 	);
	// }
	const event = await db.event.findUnique({
		where: { eventId: parseInt(params.eventId, 10) },
		include: { artists: true, ticketDetails: true },
	});
	console.log("Event Retrieved from DB", event);

	if (!event) {
		return <div className="text-white">Event not found</div>;
	}

	var {artists, ticketDetails, ...eventWithoutTicketandArtists} = event;
	
	// to sort the ticket prices in ascending order
	 ticketDetails = ticketDetails.sort((a,b) => a.ticketPrice-b.ticketPrice);

	return (
		<div className="wrapper bg-[#1a1a1a]">
			<div className="wallpaper w-full">
				<img
					className="wallpaperimg w-full h-full object-cover"
					src={event.eventPosterUrl}
					alt={event.eventName}
				/>
			</div>

			<div className="details flex justify-center bg-black flex-col items-center w-full   ">
				<EventHero
					event={{
						eventId: event.eventId.toString(),
						date: event.eventDate,
						poster: event.eventPosterUrl,
						title: event.eventName,
						venue: event.eventVenue,
					}}
				/>

				<div className="w-full -mt-[200px] h-[1000px]">
					<div className="px-10 mt-20 bg-black">
						<h1 className="text-white text-4xl font-semibold text-center mb-10  md:mx-10">
							Featured Artists
						</h1>
						<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
							{artists.map((artist:Artist) => (
								<div
									key={artist.artistId}
									className="my-10 flex items-center flex-col"
								>
									<img
										src={artist.artistImageUrl}
										alt={artist.artistName}
										className="w-32 h-32 rounded-full object-cover mb-4"
									/>
									<p className="text-white text-center text-lg">
										{artist.artistName}
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

							<Countdown date={event.eventDate} />

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
									{ticketDetails.map((ticket: TicketDetails) => (
										<div
											id={ticket.ticketId}
											className="flex justify-between border-b border-neutral-700 px-10 py-5"
										>
											<p className="text-white text-xl">{ticket.ticketType}</p>
											<p className="text-white text-xl">
												{ticket.ticketPrice} LKR
											</p>
										</div>
									))}

									<CheckoutButton
										session={session}
										event={eventWithoutTicketandArtists}
										ticketDetails={ticketDetails}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Booking;
