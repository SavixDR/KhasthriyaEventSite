import React, { useState } from "react";

interface TicketPrices {
  [key: string]: number;
}

const CheckoutForm = () => {
  const ticketPrices: TicketPrices = {
    "General": 2500,
    "VIP": 5000,
  };

  const initialNumTicketsState: TicketPrices = Object.fromEntries(
    Object.keys(ticketPrices).map((ticketType) => [ticketType, 0])
  );

  const [numTickets, setNumTickets] = useState<TicketPrices>(initialNumTicketsState);

  const addTicket = (ticketType: string) => {
    setNumTickets((prevState) => ({
      ...prevState,
      [ticketType]: prevState[ticketType] + 1,
    }));
  };

  const removeTicket = (ticketType: string) => {
    if (numTickets[ticketType] > 0) {
      setNumTickets((prevState) => ({
        ...prevState,
        [ticketType]: prevState[ticketType] - 1,
      }));
    }
  };

  const calculateTotalAmount = () => {
    let totalAmount = 0;
    for (const ticketType in numTickets) {
      totalAmount += ticketPrices[ticketType] * numTickets[ticketType];
    }
    return totalAmount.toFixed(2);
  };

  const generateTableRows = () => {
    return Object.entries(ticketPrices).map(([ticketType, price]) => (
      <tr className="text-center" key={ticketType}>
        <td className="py-2">{ticketType}</td>
        <td className="py-2">{price.toFixed(2)} LKR</td>
        <td className="py-2 flex items-center justify-center space-x-2">
          <span onClick={() => addTicket(ticketType)} className="cursor-pointer px-2 text-lg">+</span>
          {numTickets[ticketType]}
          <span onClick={() => removeTicket(ticketType)} className="cursor-pointer px-2 text-lg">-</span>
        </td>
        <td className="py-2">{(price * numTickets[ticketType]).toFixed(2)} LKR</td>
      </tr>
    ));
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-4xl bg-[#262626] rounded-xl shadow-2xl p-6">
        <h1 className="text-3xl mb-6 text-white text-center">Alan Walker: World Tour</h1>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="username" className="text-white mb-2">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="p-3 rounded-lg bg-[#333] text-white focus:outline-none focus:ring-1 focus:ring-[#ffd700]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="p-3 rounded-lg bg-[#333] text-white focus:outline-none focus:ring-1 focus:ring-[#ffd700]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="nic" className="text-white mb-2">NIC:</label>
              <input
                type="text"
                id="nic"
                name="nic"
                placeholder="Enter your NIC"
                className="p-3 rounded-lg bg-[#333] text-white focus:outline-none focus:ring-1 focus:ring-[#ffd700]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="telno" className="text-white mb-2">Telephone Number:</label>
              <input
                type="tel"
                id="telno"
                name="telno"
                placeholder="Enter your telephone number"
                className="p-3 rounded-lg bg-[#333] text-white focus:outline-none focus:ring-1 focus:ring-[#ffd700]"
              />
            </div>
          </div>

          <table className="w-full text-[12px] md:text-xl  border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr className="border-b border-[#dddddd31] text-[#FFD700]">
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Price</th>
                <th className="py-4 px-6">No. of Tickets</th>
                <th className="py-4 px-6">Amount</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {generateTableRows()}
              <tr className="border-t text-center border-[#dddddd31]">
                <td className="font-bold py-4 px-6">Total</td>
                <td></td>
                <td></td>
                <td className="font-bold py-4 px-6">{calculateTotalAmount()} LKR</td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-center">
            <button
              type="submit"
              className="group relative inline-block overflow-hidden border-2 rounded-lg border-[#FFD700] px-10 py-2 focus:outline-none focus:ring"
            >
              <span className="absolute inset-y-0 left-0 w-[2px] bg-[#FFD700] transition-all group-hover:w-full"></span>
              <span className="relative text-xl font-semibold text-[#FFD700] transition-colors group-hover:text-black">
                Checkout
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
