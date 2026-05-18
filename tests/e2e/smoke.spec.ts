import { test, expect } from "@playwright/test";

// Smoke tests — verify every route loads without errors.
// These catch broken pages, missing imports, and server-side crashes
// before they reach production.

const routes = [
	{ path: "/", title: "dehaas webservice" },
	{ path: "/services", title: "Services" },
	{ path: "/faq", title: "Questions" },
	{ path: "/contact", title: "Book a call" },
	{ path: "/privacy", title: "Privacy" },
];

for (const { path, title } of routes) {
	test(`${path} loads and contains "${title}" in the title`, async ({
		page,
	}) => {
		const errors: string[] = [];
		page.on("pageerror", (err) => errors.push(err.message));

		const response = await page.goto(path);

		expect(response?.status()).toBe(200);
		await expect(page).toHaveTitle(new RegExp(title, "i"));

		// Give the page a moment to settle (hydration, client components)
		await page.waitForTimeout(500);
		expect(errors).toHaveLength(0);
	});
}
