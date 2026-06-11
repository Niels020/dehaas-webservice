import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/site.config";

export type SlotsMap = Record<string, { start: string }[]>;

// Read-only availability lookup. A cached GET route handler (rather than a
// server action) lets the underlying Cal.com fetch be shared across visitors
// via the data cache instead of refetching per client.
export async function GET(req: NextRequest) {
	const year = Number(req.nextUrl.searchParams.get("year"));
	const month = Number(req.nextUrl.searchParams.get("month"));

	if (
		!Number.isInteger(year) ||
		!Number.isInteger(month) ||
		year < 2020 ||
		year > 2100 ||
		month < 0 ||
		month > 11
	) {
		return NextResponse.json({}, { status: 400 });
	}

	const { username, eventTypeSlug, timeZone } = siteConfig.cal;
	const pad = (n: number) => String(n).padStart(2, "0");
	const lastDay = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
	// Date-only range + explicit timeZone so Cal.com resolves month boundaries
	// (and groups slots by day) in Europe/Amsterdam, not server-local time.
	const start = `${year}-${pad(month + 1)}-01`;
	const end = `${year}-${pad(month + 1)}-${pad(lastDay)}`;

	const url =
		`https://app.cal.eu/api/v2/slots` +
		`?username=${encodeURIComponent(username)}` +
		`&eventTypeSlug=${encodeURIComponent(eventTypeSlug)}` +
		`&start=${start}` +
		`&end=${end}` +
		`&timeZone=${encodeURIComponent(timeZone)}`;

	try {
		const res = await fetch(url, {
			headers: { "cal-api-version": "2024-09-04" },
			next: { revalidate: 300 },
		});
		if (!res.ok) return NextResponse.json({});
		const data = await res.json();
		return NextResponse.json((data.data ?? {}) as SlotsMap);
	} catch {
		return NextResponse.json({});
	}
}
