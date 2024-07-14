import "./Event.css";
import Countdown from "../../../../../components/Countdown/Countdown";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import CheckoutButton from "@/components/Buttons/CheckoutButton";
import EventHero from "./eventHero";
import { Session } from "next-auth";
import { db } from "@/lib/db";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import TicketTable from "@/components/TicketTable";
import EventMoreInfo from "@/components/EventMoreInfo";

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
	// console.log("Event Retrieved from DB", event);

  if (!event) {
    return <div className="text-white bg-black">Event not found</div>;
  }
  var { artists, ticketDetails, ...eventWithoutTicketandArtists } = event;

  // to sort the ticket prices in ascending order
  ticketDetails = ticketDetails.sort((a, b) => a.ticketPrice - b.ticketPrice);

  return (
    // <div className="wrapper bg-[#1a1a1a]">
    <div className="bg-black">
      <Hero
        imgsrc={event.eventPosterUrl}
        imgalt={event.eventName}
        event={event}
      />

      <div className=" md:px-20   lg:px-10 justify-center items-center lg:items-start flex flex-col lg:flex-row bg-black">
        <EventMoreInfo event={event} />

        <div
          id="tickets"
          className="w-full lg:w-1/3 mt-20 flex flex-col items-center "
        >
          <div className="px-10">
            <h1 className="text-white text-lg font-semibold text-center md:mx-10 mb-10 ">
              Time Remaining
            </h1>
            <Countdown date={event.eventDate} />
          </div>
          <div className="ml-4 max-w-[800px] mb-20">
            <div className="bg-[#151515] w-full h-full rounded-3xl flex flex-col justify-center mt-10">
              <h1 className="text-white text-4xl font-semibold text-center md:mx-10 my-10 ">
                Ticket Prices
              </h1>
              <div className="px-10 mt-5 ">
                <TicketTable ticketDetails={ticketDetails} />

                <div className=" flex justify-center my-4">
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
      <Footer />
    </div>
  );
};

export default Booking;
