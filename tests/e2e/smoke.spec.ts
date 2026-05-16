import { test, expect } from "@playwright/test";

// Smoke tests — verify every route loads without errors.
// These catch broken pages, missing imports, and server-side crashes
// before they reach production.

const routes = [
	{ path: "/", title: "dehaas webservice" },
	{ path: "/services", title: "Services" },
	{ path: "/faq", title: "FAQ" },
	{ path: "/contact", title: "Contact" },
	{ path: "/privacy", title: "Privacy" },
];

for (const { path, title } of routes) {
	test(`${path} loads and contains "${title}" in the title`, async ({
		page,
	}) => {
		const response = await page.goto(path);

		// Page should return 200
		expect(response?.status()).toBe(200);

		// Title should contain the expected text
		await expect(page).toHaveTitle(new RegExp(title, "i"));

		// No uncaught errors in the console
		const errors: string[] = [];
		page.on("pageerror", (err) => errors.push(err.message));
		// Give the page a moment to settle (hydration, client components)
		await page.waitForTimeout(500);
		expect(errors).toHaveLength(0);
	});
}
