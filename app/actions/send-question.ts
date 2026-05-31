"use server";

import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface QuestionPayload {
	name: string;
	email: string;
	message: string;
}

interface QuestionResult {
	success: boolean;
	error?: string;
}

export async function sendQuestion(
	payload: QuestionPayload,
): Promise<QuestionResult> {
	if (!EMAIL_REGEX.test(payload.email)) {
		return { success: false, error: "Invalid email address." };
	}

	const apiKey = process.env.RESEND_API_KEY;
	if (!apiKey) {
		console.error("RESEND_API_KEY is not set");
		return { success: false, error: "Message service not configured." };
	}

	const resend = new Resend(apiKey);

	try {
		const { error } = await resend.emails.send({
			from: "noreply@info.dehaaswebservice.nl",
			to: "info@dehaaswebservice.nl",
			replyTo: payload.email,
			subject: `Quick question from ${payload.name}`,
			text: `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`,
		});

		if (error) {
			console.error("Resend error:", JSON.stringify(error, null, 2));
			return { success: false, error: "Failed to send message. Please try again." };
		}
	} catch (err) {
		console.error("Resend network error:", err);
		return { success: false, error: "Could not send message. Please try again." };
	}

	return { success: true };
}
