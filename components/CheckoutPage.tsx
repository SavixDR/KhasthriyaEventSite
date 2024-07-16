import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { User } from "@prisma/client";

interface TicketPrices {
  [key: string]: number;
}

interface CheckoutOrderProps {
  ticketList: TicketPrices;
  totalAmount: number;
  eventTitle: string;
  buyer: User;
  eventImage: string;
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
        return_url: `http://localhost:3000/payment-success?order=${encodeURIComponent(
          JSON.stringify(order)
        )}`,
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
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black w-full h-screen flex justify-center items-center">
      <form
     
        onSubmit={handleSubmit}
        className="bg-[#1a1a1a] w-[75%] h-[75vh]  rounded-md flex"
      >
        {/* Left side: Event details */}
        <div
         style={{backgroundImage:`url(${order.eventImage})` , backgroundSize:'contain'}}
          
          className="w-1/2 pr-8 m-4 rounded-md sm:hidden lg:block"
        >
          
         
          <div className=" pt-4">
           

           
          </div>
          {/* Add other details as needed */}
        </div>

        {/* Right side: Payment element and Pay button */}
        <div className=" sm:w-full lg:w-1/2 p-4  flex flex-col justify-between">
          <div>
          <h2 className="text-2xl text-[#ffd700] font-bold mb-4">{order.eventTitle}</h2>
          
          <table className="my-4 w-full text-white">
  
  <tbody>
    {Object.entries(order.ticketList).map(([ticketType, quantity]) => (
      <tr key={ticketType} className="border-b border-neutral-700">
        <td className="p-2">{ticketType}</td>
        <td className="p-2">{quantity} tickets</td>
      </tr>
    ))}
  </tbody>
</table>

            <PaymentElement  />
            {errorMessage && (
              <div className="text-red-500 mt-2">{errorMessage}</div>
            )}
          </div>
          <button
            type="submit"
            disabled={!stripe || loading}
            className="text-black w-full p-3 bg-[#ffd700] mt-3 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse hover:bg-[#c9ac02] focus:outline-none focus:ring focus:ring-black"
          >
            {!loading ? `Pay ${order.totalAmount}LKR` : "Processing..."}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
