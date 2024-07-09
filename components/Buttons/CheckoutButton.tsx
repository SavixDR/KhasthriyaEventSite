'use client'

import { useState } from "react";
import CheckoutModal from "../CheckoutModal";
import { Event } from "@/types";


  

const CheckoutButton = () => {
	const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

	return (
		<div>
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
	);
};

export default CheckoutButton;
