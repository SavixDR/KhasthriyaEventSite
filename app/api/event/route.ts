import { db } from "@/lib/db";

export async function POST(req: Request){
    try{
        const body = await req.json();

        const {userId, eventId, ticketId, noOfTickets} = body;

        

        await db.eventUser.create({
            data: {
                userId,
                eventId,
                ticketId,
                numberOfTickets: noOfTickets
            }
        })
        
        
    } catch (e) {}
}