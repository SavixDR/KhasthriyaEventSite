'use client'
import React from 'react';

import { checkoutOrder } from '@/lib/purchase';
import { useRouter } from 'next/navigation';
import { User } from '@prisma/client';

interface TicketPrices {
  [key: string]: number;
}

interface StripeFormProps {
  ticketList: TicketPrices;
  totalAmount: string;
  eventName: string;
  buyer: User;
  eventImage:string
}

const StripeForm = ({ ticketList, totalAmount, eventName, buyer ,eventImage}: StripeFormProps) => {
  const router = useRouter(); // Correct function call

  const onCheckout = async () => {
    const order = {
      eventTitle: eventName,
      buyer: buyer,
      totalAmount: totalAmount,
      ticketList: ticketList,
      eventImage:eventImage
    };

    console.log('Initiating checkout:', order);

    router.push(`/checkout?order=${encodeURIComponent(JSON.stringify(order))}`); // Use template literals and encode the order

    // await checkoutOrder(order); // Uncomment and use if checkoutOrder is needed
  };

  return (
    <div>
      <button
        className='text-white'
        onClick={(e) => {
          e.preventDefault(); // Prevent default behavior
          onCheckout(); // Call checkout function
        }}
      >
        Checkout
      </button>
    </div>
  );
};

export default StripeForm;
