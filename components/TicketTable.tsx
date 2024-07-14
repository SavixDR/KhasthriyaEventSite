import React from "react";
import { TicketDetails } from "@prisma/client";

const TicketTable = (props: any) => {
  return (
    <div>
      <table className="rounded-xl min-w-full divide-y-2  ">
        <thead className="text-left ">
          <tr>
            <th className="mt-10 whitespace-nowrap px-4 py-2 font-medium text-yellow-200">
              type
            </th>
            <th className="mt-10 whitespace-nowrap px-4 py-2 font-medium text-yellow-200">
              price
            </th>
            <th className="mt-10 whitespace-nowrap px-4 py-2 font-medium text-yellow-200">
              status
            </th>
          </tr>
        </thead>
        <tbody className="bg-[#0f0f0f] ">
          {props.ticketDetails.map((ticket: TicketDetails) => (
            <tr id={ticket.ticketId} className="my-20  rounded-xl gap-4">
              <td className="whitespace-nowrap px-4 py-8 font-medium text-white ">
                {ticket.ticketType}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-white">
                {ticket.ticketPrice} LKR
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium    text-white">
                available
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;
