"use server";

import { Resend } from "resend";
import { render } from "@react-email/render";
import QuestionReceived from "@/app/emails/question-received";
import { siteConfig } from "@/site.config";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import {
	cleanLine,
	cleanText,
	isValidEmail,
	MAX_EMAIL_LENGTH,
	MAX_MESSAGE_LENGTH,
	MAX_NAME_LENGTH,
} from "@/lib/validation";

const RATE_LIMIT = 3; // messages per IP per window

const SUBJECTS = {
	nl: "We hebben je vraag ontvangen",
	en: "We've received your question",
};

interface QuestionPayload {
	name: string;
	email: string;
	message: string;
	/** Honeypot — real users never fill this. */
	website?: string;
}

interface QuestionResult {
	success: boolean;
	error?: string;
}

export async function sendQuestion(
	payload: QuestionPayload,
): Promise<QuestionResult> {
	// Bot filled the honeypot: pretend everything went fine.
	if (payload.website) {
		return { success: true };
	}

	if (!rateLimit(`question:${await clientIp()}`, RATE_LIMIT)) {
		return {
			success: false,
			error: "Too many messages. Please try again later.",
		};
	}

	const name = cleanLine(payload.name, MAX_NAME_LENGTH);
	const email = cleanLine(payload.email, MAX_EMAIL_LENGTH);
	const message = cleanText(payload.message, MAX_MESSAGE_LENGTH);

	if (!name) {
		return { success: false, error: "Please fill in your name." };
	}
	if (!isValidEmail(email)) {
		return { success: false, error: "Invalid email address." };
	}
	if (!message) {
		return { success: false, error: "Please fill in your question." };
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
			replyTo: email,
			subject: `Quick question from ${name}`,
			text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
		});

		if (error) {
			console.error("Resend error:", JSON.stringify(error, null, 2));
			return { success: false, error: "Failed to send message. Please try again." };
		}
	} catch (err) {
		console.error("Resend network error:", err);
		return { success: false, error: "Could not send message. Please try again." };
	}

	await sendQuestionConfirmation(name, email, resend);

	return { success: true };
}

async function sendQuestionConfirmation(
	name: string,
	email: string,
	resend: Resend,
) {
	const locale = siteConfig.defaultLocale;
	const firstName = name.split(/\s+/)[0] || "there";

	try {
		const html = await render(
			QuestionReceived({ clientName: firstName, locale }),
		);

		const { error } = await resend.emails.send({
			from: "Niels de Haas <noreply@info.dehaaswebservice.nl>",
			to: email,
			subject: SUBJECTS[locale],
			html,
		});

		if (error) {
			console.error("Resend error (question confirmation):", JSON.stringify(error, null, 2));
		}
	} catch (err) {
		console.error("Failed to send question confirmation email:", err);
	}
}
