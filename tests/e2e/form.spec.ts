import { test, expect } from "@playwright/test";

// Contact form tests — verify the CallRequestForm and quick-question form
// render correctly and key elements are present.
//
// These are rendering tests, not submission tests. Actual form submission
// (Layer 2) is a monthly manual pass — see monthly-form-checks.md.

test.describe("Contact page forms", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/contact");
	});

	test("call request form renders with all 5 sections", async ({ page }) => {
		// The progressive accordion form should show all section headers
		await expect(page.getByText("About you")).toBeVisible();
		await expect(page.getByText("Your current situation")).toBeVisible();
		await expect(page.getByText("What you're looking for")).toBeVisible();
		await expect(page.getByText("Content readiness")).toBeVisible();
		await expect(page.getByText("Scheduling & questions")).toBeVisible();
	});

	test("section 1 fields are visible on load", async ({ page }) => {
		// Section 1 (About you) should be open by default
		await expect(page.getByLabel(/full name/i)).toBeVisible();
		await expect(page.getByLabel(/email/i).first()).toBeVisible();
	});

	test("submit button exists", async ({ page }) => {
		// The form should have a submit button (even if later sections are locked).
		// Section 5 is collapsed (inert) by default, so getByRole can't see
		// it — use a plain CSS locator instead, which ignores inert.
		const submit = page.locator("button", { hasText: /book call/i });
		await expect(submit).toBeAttached();
	});

	test("quick question form renders", async ({ page }) => {
		// The simpler form at the bottom of the page
		const heading = page.getByRole("heading", {
			name: /quick question/i,
		});
		await expect(heading).toBeVisible();

		// Should have name, email, and message fields
		const sendButton = page.getByRole("button", { name: /send message/i });
		await expect(sendButton).toBeVisible();
	});

	test("skip link to quick question exists", async ({ page }) => {
		// The hero should have a skip link that anchors to #quick-question
		const skipLink = page.locator('a[href="#quick-question"]');
		await expect(skipLink).toBeVisible();
	});
});
