const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

interface TicketPrices {
  [key: string]: number;
}

interface CheckoutOrderProps {
  ticketList: TicketPrices;
  totalAmount: string;
  eventTitle: string;
  buyerId: string;
}

export const checkoutOrder = async (order: CheckoutOrderProps) => {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  try {
    
    const line_items = [
      {
        price_data: {
          currency: 'usd',
          unit_amount: parseInt(order.totalAmount, 10) * 100,
          product_data: {
            name: order.eventTitle,
          },
        },
        quantity: 1,
      },
    ];

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      metadata: {
        eventName: order.eventTitle,
       buyerId: order.buyerId,
        ticketList:order.ticketList,
        totalAmount:order.totalAmount
      },
      mode: 'payment',
      success_url: `${process.env.PUBLIC_SERVER_URL}/`,
      cancel_url: `${process.env.PUBLIC_SERVER_URL}/`,
    });

    return session.url;
  } catch (error) {
    throw error;
  }
};
