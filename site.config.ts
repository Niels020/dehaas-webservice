// Site-wide configuration — values that change per client.
// For dehaas-webservice this is filled in with real values.
// In the template, these are REPLACE: placeholders swapped at build time.

export const siteConfig = {
	// Privacy policy placeholders
	clientName: "dehaas webservice",
	kvkNumber: "[placeholder]", // fill in when KvK registration is done
	controllerAddress: "[placeholder]", // registered address
	contactEmail: "info@dehaaswebservice.nl",
	siteUrl: "https://dehaaswebservice.nl",
	dataProcessors:
		"- Vercel Inc. — hosting (US, EU-US DPF)\n- Plausible Insights OÜ — website analytics (EU)\n- UptimeRobot — uptime monitoring (EU/US)",
	effectiveDate: "2026-05-16",

	// Compliance toggles
	requiresCookieConsent: false, // flip to true when an embed sets cookies (Cal.com, Stripe, YouTube)
	defaultLocale: "nl" as "nl" | "en",
};
