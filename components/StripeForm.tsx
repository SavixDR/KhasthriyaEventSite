// components/StripeForm.tsx
'use client';

import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@prisma/client';
import { OrderContext } from '@/app/context/orderContext';

interface TicketPrices {
  [key: string]: number;
}

interface StripeFormProps {
  ticketList: TicketPrices;
  totalAmount: number;
  eventName: string;
  buyer: User;
  eventImage: string;
}

const StripeForm = ({ ticketList, totalAmount, eventName, buyer, eventImage }: StripeFormProps) => {
  const router = useRouter();
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error('OrderContext is not available');
  }

  const { setOrder } = context;

  const onCheckout = async () => {
    const order = {
      eventTitle: eventName,
      buyer: buyer,
      totalAmount: totalAmount,
      ticketList: ticketList,
      eventImage: eventImage,
    };

    setOrder(order);

    console.log('Initiating checkout:', order);

    router.push(`/checkout`);
  };

  return (
    <div>
      <button
        className="text-white"
        onClick={(e) => {
          e.preventDefault();
          onCheckout();
        }}
      >
        Checkout
      </button>
    </div>
  );
};

export default StripeForm;
