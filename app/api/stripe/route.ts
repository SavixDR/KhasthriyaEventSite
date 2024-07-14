import { NextRequest, NextResponse } from "next/server";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export async function POST(request:NextRequest){

try {

    const {amount} = await request.json()
    console.log(`Amount received: ${amount}`);
    const convertedAmount = Math.round(amount * 100);

    const paymentIntent = await stripe.paymentIntents.create({
        amount:convertedAmount,
        currency:'lkr',
        automatic_payment_methods:{enabled:true}
    })

    return (NextResponse.json({clientSecret:paymentIntent.client_secret}))
    
} catch (error) {
    console.error("Internal Error",error);

    return NextResponse.json({
        error:"Internal server error",
        status:500
    })
    
}

}