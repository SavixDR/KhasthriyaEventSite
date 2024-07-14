'use client'
import { createContext, useState, ReactNode } from 'react';
import { User } from '@prisma/client';

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

interface OrderContextProps {
  order: CheckoutOrderProps | null;
  setOrder: (order: CheckoutOrderProps | null) => void;
}

export const OrderContext = createContext<OrderContextProps | null>(null);

interface OrderContextProviderProps {
  children: ReactNode;
}

const OrderContextProvider = ({ children }: OrderContextProviderProps) => {
  const [order, setOrder] = useState<CheckoutOrderProps | null>(null);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
