"use server";

export type SlotsMap = Record<string, { start: string }[]>;

export async function getAvailableSlots(
	year: number,
	month: number,
): Promise<SlotsMap> {
	const start = new Date(year, month, 1).toISOString();
	const end = new Date(year, month + 1, 0, 23, 59, 59, 999).toISOString();

	const url =
		`https://app.cal.eu/api/v2/slots` +
		`?username=dehaas` +
		`&eventTypeSlug=free-consult` +
		`&start=${encodeURIComponent(start)}` +
		`&end=${encodeURIComponent(end)}`;

	try {
		const res = await fetch(url, {
			headers: { "cal-api-version": "2024-09-04" },
			next: { revalidate: 300 },
		});
		if (!res.ok) return {};
		const data = await res.json();
		return data.data ?? {};
	} catch {
		return {};
	}
}
