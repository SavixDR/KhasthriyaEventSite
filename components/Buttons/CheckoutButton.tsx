"use client";

import { useState } from "react";
import CheckoutModal from "../CheckoutModal";
import { Session } from "next-auth";
import LoginModal from "../LoginModal";
import { Event, TicketDetails } from "@prisma/client";

const CheckoutButton = ({
	session,
	event,
	ticketDetails,
}: {
	session: Session | null;
	event: Event;
	ticketDetails: TicketDetails[];
}) => {
	const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

	console.log("session: ", session);

	const handleTicketBooking = () => {
		if (session?.user) {
			setIsCheckoutModalOpen(true);
		} else {
			setIsLoginModalOpen(true);
		}
	};

	return (
		<div>
			<a
				className="group justify-center inline-block overflow-hidden border-2 rounded-lg border-[#FFD700] px-10 py-2 my-5 focus:outline-none focus:ring"
				type="button"
				onClick={handleTicketBooking}
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
					ticketDetails={ticketDetails}
					user={session?.user}
					eventName={event.eventName}
					eventImage={event.eventPosterUrl}
				/>
			)}
			{isLoginModalOpen && (
				<LoginModal
					isOpen={isLoginModalOpen}
					handleClose={() => setIsLoginModalOpen(false)}
					callBackUrl={`/events/${event.eventId}`}
				/>
			)}
		</div>
	);
};

export default CheckoutButton;