"use server";

const EVENT_TYPE_ID = 305419;

interface BookingPayload {
	start: string;
	name: string;
	email: string;
	notes: string;
}

interface BookingResult {
	success: boolean;
	error?: string;
}

export async function createBooking(
	payload: BookingPayload,
): Promise<BookingResult> {
	const apiKey = process.env.CAL_API_KEY;
	if (!apiKey) {
		console.error("CAL_API_KEY is not set");
		return { success: false, error: "Booking service not configured." };
	}

	const res = await fetch("https://app.cal.eu/api/v2/bookings", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"cal-api-version": "2024-08-13",
			Authorization: `Bearer ${apiKey}`,
		},
		body: JSON.stringify({
			eventTypeId: EVENT_TYPE_ID,
			start: payload.start,
			attendee: {
				name: payload.name,
				email: payload.email,
				timeZone: "Europe/Amsterdam",
				language: "nl",
			},
			bookingFieldsResponses: {
				notes: payload.notes,
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

	return { success: true };
}
