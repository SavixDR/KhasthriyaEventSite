// types.ts

// User model
export interface User {
    id: string;
    email: string;
    username: string;
    NIC: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    eventUser: EventUser[];
  }
  
  // Event model
  export interface Event {
    eventId: number;
    eventName: string;
    eventDate: Date;
    eventTime: Date;
    eventVenue: string;
    ticketDetails: TicketDetails[];
    eventUsers: EventUser[];
  }
  
  // TicketDetails model
  export interface TicketDetails {
    ticketId: string;
    ticketPrice: number;
    ticketQty: number;
    ticketType: string;
    eventId: number;
    event: Event;
    eventUser: EventUser[];
  }
  
  // EventUser model
  export interface EventUser {
    id: string;
    eventId: number;
    userId: string;
    ticketId: string;
    event: Event;
    user: User;
    ticket: TicketDetails;
  }
  