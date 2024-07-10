import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import Image from "next/image";
import { User } from "@prisma/client";

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

const CheckoutPage = ({ order }: { order: CheckoutOrderProps }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: order.totalAmount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [order]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://www.localhost:3000/payment-success?order=${encodeURIComponent(JSON.stringify(order))}`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      // Handle success, redirect or show success message
    }

    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md flex">
      {/* Left side: Event details */}
      <div className="w-1/2 pr-8">
        <h2 className="text-2xl font-bold mb-4">{order.eventTitle}</h2>
        <h2>{order.buyer?.email}</h2>
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg font-semibold mb-2">Ticket Details:</h3>
         <img src={order.eventImage} height={100} width={100} alt="" />
          <ul className="list-disc list-inside">
            {Object.entries(order.ticketList).map(([ticketType, quantity]) => (
              <li key={ticketType} className="mb-2">
                <span className="font-medium">{ticketType}:</span> {quantity}
              </li>
            ))}
          </ul>
        </div>
        {/* Add other details as needed */}
      </div>

      {/* Right side: Payment element and Pay button */}
      <div className="w-1/2 p-4 flex flex-col justify-between">
        <div>
          <PaymentElement />
          {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
        </div>
        <button
          type="submit"
          disabled={!stripe || loading}
          className="text-white w-full p-4 bg-black mt-4 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300"
        >
          {!loading ? `Pay ${order.totalAmount}LKR` : "Processing..."}
        </button>
      </div>
    </form>
  );
};

export default CheckoutPage;
