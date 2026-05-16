import { defineConfig } from "@playwright/test";

// Playwright configuration for dehaas-webservice.
//
// What this does:
// - Starts the Next.js dev server automatically before tests run
// - Tests against http://localhost:3000
// - Uses Chromium only (keeping it fast — add Firefox/WebKit if needed later)
// - Retries once on CI to handle flaky network/startup timing

export default defineConfig({
	testDir: "./tests/e2e",
	fullyParallel: true,
	forbidOnly: !!process.env.CI, // fail if .only is left in on CI
	retries: process.env.CI ? 1 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: process.env.CI ? "github" : "html",

	use: {
		baseURL: "http://localhost:3000",
		trace: "on-first-retry", // captures a trace on retry for debugging
	},

	projects: [
		{
			name: "chromium",
			use: { browserName: "chromium" },
		},
	],

	// Start Next.js dev server before running tests
	webServer: {
		command: "npm run dev",
		url: "http://localhost:3000",
		reuseExistingServer: !process.env.CI,
		timeout: 30_000,
	},
});
