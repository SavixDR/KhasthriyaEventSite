"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CheckoutModal from "./CheckoutModal";
import LoginModal from "./LoginModal";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const ComingShow = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const router = useRouter();
  const session = useSession();

  const eventId = 1;

  const handleTicketBooking = () => {
    if (session.data?.user) {
      router.push(`/events/${eventId}`);
    } else {
      setIsLoginModalOpen(true);
    }
  };

  return (
    <div className="relative px-5 md:px-10">
      <div className="mx-auto w-full max-w-7xl py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div className="max-w-[720px]">
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="mb-4 mt-6 pb-4 text-4xl font-bold text-white md:text-6xl"
            >
              Reserve your tickets Today!
            </motion.h2>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.p className="mb-6 max-w-[480px] text-[#aeaeae] md:mb-10 lg:mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Proin fermentum leo vel orci. Dui faucibus in ornare quam
                viverra orci sagittis eu. Viverra nam libero justo laoreet sit
                amet. Vulputate odio ut enim blandit volutpat maecenas volutpat
                blandit. A lacus vestibulum sed arcu non odio euismod.
              </motion.p>

              <Link href={`/events/${eventId}`}>
                <motion.div
                  initial={{ x: 0, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 4, delay: 0.5 }}
                  className="inline-block rounded-full bg-[#FFD700] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white"
                >
                  Book Tickets!
                </motion.div>
              </Link>

              {/* <button onClick={handleTicketBooking}>
								<motion.div
									initial={{ x: 0, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{ duration: 4, delay: 0.5 }}
									className="inline-block rounded-full bg-[#FFD700] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white"
								>
									Book Tickets!
								</motion.div>
							</button> */}
            </motion.div>
          </div>
          {/* {isLoginModalOpen && (
						<LoginModal
							isOpen={isLoginModalOpen}
							handleClose={() => setIsLoginModalOpen(false)}
							callBackUrl={`/events/${eventId}`}
						/>
					)} */}
          {/* Image Div */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            // viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            <img
              src="/image.png"
              alt="CTA Card Image"
              className="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ComingShow;
