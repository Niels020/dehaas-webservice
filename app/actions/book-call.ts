"use server";

import { Resend } from "resend";
import { render } from "@react-email/render";
import BookingConfirmation from "@/app/emails/booking-confirmation";
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

const RATE_LIMIT = 3; // bookings per IP per window

const SUBJECTS = {
	nl: "Bedankt voor het boeken van een gesprek",
	en: "Thanks for booking a call",
};

interface BookingPayload {
	start: string;
	name: string;
	email: string;
	notes: string;
	/** Honeypot — real users never fill this. */
	website?: string;
}

interface BookingResult {
	success: boolean;
	error?: string;
}

export async function createBooking(
	payload: BookingPayload,
): Promise<BookingResult> {
	// Bot filled the honeypot: pretend everything went fine.
	if (payload.website) {
		return { success: true };
	}

	if (!rateLimit(`book:${await clientIp()}`, RATE_LIMIT)) {
		return {
			success: false,
			error: "Too many booking attempts. Please try again later.",
		};
	}

	const name = cleanLine(payload.name, MAX_NAME_LENGTH);
	const email = cleanLine(payload.email, MAX_EMAIL_LENGTH);
	const notes = cleanText(payload.notes, MAX_MESSAGE_LENGTH);

	if (!name) {
		return { success: false, error: "Please fill in your name." };
	}
	if (!isValidEmail(email)) {
		return { success: false, error: "Invalid email address." };
	}
	const startMs = Date.parse(payload.start);
	if (Number.isNaN(startMs) || startMs < Date.now()) {
		return {
			success: false,
			error: "This slot may no longer be available. Please pick another time.",
		};
	}

	const apiKey = process.env.CAL_API_KEY;
	if (!apiKey) {
		console.error("CAL_API_KEY is not set");
		return { success: false, error: "Booking service not configured." };
	}

	try {
		const res = await fetch("https://app.cal.eu/api/v2/bookings", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"cal-api-version": "2024-08-13",
				Authorization: `Bearer ${apiKey}`,
			},
			body: JSON.stringify({
				eventTypeId: siteConfig.cal.eventTypeId,
				start: new Date(startMs).toISOString(),
				attendee: {
					name,
					email,
					timeZone: siteConfig.cal.timeZone,
					language: siteConfig.defaultLocale,
				},
				bookingFieldsResponses: {
					notes,
				},
			}),
		});

		if (!res.ok) {
			const text = await res.text();
			console.error("Cal.com booking failed:", res.status, text);
			return {
				success: false,
				error: "This slot may no longer be available. Please pick another time.",
			};
		}

		await sendConfirmationEmail(name, email);

		return { success: true };
	} catch (err) {
		console.error("Cal.com booking network error:", err);
		return { success: false, error: "Could not reach booking service. Please try again." };
	}
}

async function sendConfirmationEmail(name: string, email: string) {
	const apiKey = process.env.RESEND_API_KEY;
	if (!apiKey) {
		console.error("RESEND_API_KEY is not set, skipping confirmation email");
		return;
	}

	const locale = siteConfig.defaultLocale;
	const firstName = name.split(/\s+/)[0] || "there";

	try {
		const html = await render(
			BookingConfirmation({ clientName: firstName, locale }),
		);

		const resend = new Resend(apiKey);
		const { error } = await resend.emails.send({
			from: "Niels de Haas <noreply@info.dehaaswebservice.nl>",
			to: email,
			subject: SUBJECTS[locale],
			html,
		});

		if (error) {
			console.error("Resend error (booking confirmation):", JSON.stringify(error, null, 2));
		}
	} catch (err) {
		console.error("Failed to send booking confirmation email:", err);
	}
}
