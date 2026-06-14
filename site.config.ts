// Site-wide configuration — values that change per client.
// For dehaas-webservice this is filled in with real values.
// In the template, these are REPLACE: placeholders swapped at build time.

export const siteConfig = {
	// Privacy policy placeholders
	clientName: "dehaas webservice",
	kvkNumber: "42080935",
	controllerAddress: "Klaasje Zevensterstraat 441, 1183 MD Amstelveen",
	contactEmail: "info@dehaaswebservice.nl",
	siteUrl: "https://dehaaswebservice.nl",
	dataProcessors:
		"- Vercel Inc. — hosting (US, EU-US DPF)\n- UptimeRobot — uptime monitoring (EU/US)",
	effectiveDate: "2026-05-16",

	// Compliance toggles
	requiresCookieConsent: false, // flip to true when an embed sets cookies (Cal.com, Stripe, YouTube)
	defaultLocale: "nl" as "nl" | "en",

	// Cal.com booking
	cal: {
		username: "dehaas",
		eventTypeSlug: "free-consult",
		eventTypeId: 305419,
		timeZone: "Europe/Amsterdam",
	},
};
