import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useSession } from "next-auth/react";
import CheckoutModal from "./CheckoutModal";
import LoginModal from "./LoginModal";
const ComingShow = () => {
  const { data: session } = useSession();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleBookTicketsClick = () => {
    if (session) {
      setIsCheckoutModalOpen(true);
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
                "Api Machan Colombo – Chapter 1" is biggest exquisite musical
                event celebrating the legendary talents of Five iconic Sri
                Lankan singers –Wasthi, Dinesh Gamage, Kaizer Kaiz, Kanchana
                Anuradi and Umaria Sinhawansa. As the names suggest, these
                artists are true talented princess and princes of Sri Lankan
                music, known for their melodious voices, soulful lyrics, and
                enduring connection with their adoring fans. "Api Machan Colombo
                – Chapter 1’’ promises an enchanting evening filled with
                nostalgia, emotion, and celebration of the rich musical heritage
                of Sri Lanka. The concert is scheduled for August 31st, 2024, at
                the picturesque Viharamahadevi Open Air Theatre, creating a
                perfect ambiance for a musical journey. The show will kick off
                at 7:00PM, allowing attendees to immerse themselves in the magic
                of these five musical artists. Don't miss the chance to witness
                these legends of Sri Lankan music.
              </motion.p>

              <Link href={"/events/1"}>
                <motion.div
                  initial={{ x: 0, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 4, delay: 0.5 }}
                  className="inline-block rounded-full bg-[#FFD700] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white"
                >
                  Book Tickets!
                </motion.div>
              </Link>
            </motion.div>
          </div>
          {isCheckoutModalOpen && (
            <CheckoutModal
              isOpen={isCheckoutModalOpen}
              handleClose={() => setIsCheckoutModalOpen(false)}
            />
          )}
          {isLoginModalOpen && (
            <LoginModal
              isOpen={isLoginModalOpen}
              handleClose={() => setIsLoginModalOpen(false)}
            />
          )}
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
