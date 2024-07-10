'use client'
import { User } from '@prisma/client';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface TicketPrices {
  [key: string]: number;
}

interface CheckoutOrderProps {
  ticketList: TicketPrices;
  totalAmount: string;
  eventTitle: string;
  buyer: User;
  eventImage:string
}

const Page = () => {
  const searchParams = useSearchParams();
  const [order, setOrder] = useState<CheckoutOrderProps | null>(null); // Initialize with null or appropriate default

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

  return (
    <div>
      {order ? (
        <div>
          <h2>Payment Successful!</h2>
          <p>Event Title: {order.eventTitle}</p>
          <p>Buyer Email: {order.buyer.email}</p>
          <p>Total Amount: {order.totalAmount}</p>
          {/* Render ticketList if needed */}
          <ul>
            {Object.keys(order.ticketList).map(ticketType => (
              <li key={ticketType}>
                {ticketType}: {order.ticketList[ticketType]}
              </li>
            ))}
          </ul>
          {/* Display other order details as needed */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Page;
