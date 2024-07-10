'use client'
import React, { useEffect, useState } from 'react';


import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSearchParams } from 'next/navigation';
import CheckoutPage from '@/components/CheckoutPage';
import { User } from '@prisma/client';


if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
    throw Error("Public key is undefined");
  }
  
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

  interface TicketPrices {
    [key: string]: number;
  }
  
  interface CheckoutOrderProps {
    ticketList: TicketPrices;
    totalAmount: string;
    eventTitle: string;
   buyer:User
    eventImage:string
  }

const Page = () => {
  const searchParams = useSearchParams();
  const [order, setOrder] = useState<CheckoutOrderProps | null>(null);
  

  useEffect(() => {
    const order = searchParams.get('order');
    if (order) {
      try {
        const decodedOrder = JSON.parse(decodeURIComponent(order));
        setOrder(decodedOrder);
        
      } catch (error) {
        console.error('Failed to parse order:', error);
      }
    }
  }, [searchParams]);

  return (
    <div>
     


{order && (
        <Elements stripe={stripePromise}
        options={{
            mode: "payment",
            amount:(parseInt(order.totalAmount)*100),
            currency: "lkr",
          }}>

            <CheckoutPage order={order}/>

            
         
        </Elements>
      )}
    </div>
  );
};

export default Page;
