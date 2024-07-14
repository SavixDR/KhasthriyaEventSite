// pages/checkout.tsx
'use client';

import React, { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutPage from '@/components/CheckoutPage';
import { OrderContext } from '@/app/context/orderContext';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const Page = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error('OrderContext is not available');
  }

  const { order } = context;

  return (
    <div>
      {order && (
        <Elements
          stripe={stripePromise}
          options={{
            mode: 'payment',
            amount: order.totalAmount * 100,
            currency: 'lkr',
            appearance: {
              theme: 'night',
              variables: {
                colorPrimary: 'white',
                colorBackground: '#333',
                colorText: 'white',
                colorDanger: '#df1b41',
                fontFamily: 'Ideal Sans, system-ui, sans-serif',
                borderRadius: '4px',
              },
            },
          }}
        >
          <CheckoutPage order={order} />
        </Elements>
      )}
    </div>
  );
};

export default Page;
