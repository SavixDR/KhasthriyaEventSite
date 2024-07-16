interface SendSMSParams {
	recipient: string;
	sender_id: string;
	
}

const otp = Math.floor(100000 + Math.random() * 900000);

const message = `Your OTP is ${otp}. Please do not share this with anyone.`;

async function sendOtp(params: SendSMSParams) {
	const apiEndPoint = "https://api.smsgatewayhub.com/v1/sms";
	const apiToken = process.env.SMS_GATEWAY_API_TOKEN;

	const response = await fetch(apiEndPoint, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiToken}`,
			Accept: "application/json",
		},
		body: new URLSearchParams({
			recipient: params.recipient,
			sender_id: params.sender_id,
			message: message,
		}).toString(),
	});

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error sending SMS: ${errorText}`);
      }
    
    return response.json();
}
