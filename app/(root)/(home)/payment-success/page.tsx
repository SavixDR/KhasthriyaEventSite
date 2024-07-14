'use client'
import { User } from '@prisma/client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import tick from '../../../../tick.json';

interface TicketPrices {
  [key: string]: number;
}

interface CheckoutOrderProps {
  ticketList: TicketPrices;
  totalAmount: string;
  eventTitle: string;
  buyer: User;
  eventImage: string;
}

const Page = () => {
  const router = useRouter()
  const searchParams = useSearchParams();
  const [order, setOrder] = useState<CheckoutOrderProps | null>(null); // Initialize with null or appropriate default
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    const getOrder = async () => {
      const orderParam = searchParams.get('order');
      if (orderParam) {
        try {
          const decodedOrder = JSON.parse(decodeURIComponent(orderParam));
          setOrder(decodedOrder);
        } catch (error) {
          console.error('Failed to parse order:', error);
        }
      }
    };

    getOrder();
  }, [searchParams]);

  useEffect(() => {
    if (order && !animationPlayed) {
      setAnimationPlayed(true);
    }
  }, [order, animationPlayed]);

  return (
    <div className='bg-black text-white h-screen flex justify-center items-center'>
      {order ? (
        <div className='text-center' >
          {animationPlayed && <Lottie animationData={tick} loop={false} />}
          <h2 className='text-center text-2xl font-semibold text-[#ffd700]'>Payment Successful!</h2>


          {/* <p>Event Title: {order.eventTitle}</p>
          <p>Buyer Email: {order.buyer.email}</p> */}
          <p className='text-center text-[#ffd700] font-semibold text-xl'>{order.totalAmount} {" "}LKR</p>
          {/* Render ticketList if needed */}
          {/* <ul>
            {Object.keys(order.ticketList).map(ticketType => (
              <li key={ticketType}>
                {ticketType}: {order.ticketList[ticketType]}
              </li>
            ))}
          </ul> */}
          {/* Display other order details as needed */}

          <button className='px-4 py-2 mt-10 rounded-lg border-2 border-[#ffd700] text-[#FFD700] font-semibold' onClick={()=>router.push('/')}>Go to Home</button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Page;
