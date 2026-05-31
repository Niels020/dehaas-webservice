"use client";

// Cookie consent banner — renders nothing unless requiresCookieConsent
// is true in site.config.ts. Safe to mount unconditionally in layout.tsx.
//
// When active:
// - Shows on first visit (no localStorage entry yet)
// - User chooses Accept or Decline
// - Choice is stored in localStorage so the banner doesn't reappear
//
// Use hasConsent() to conditionally load third-party scripts that set cookies.

import { useState, useSyncExternalStore } from "react";
import { siteConfig } from "@/site.config";

const STORAGE_KEY = "cookie-consent-v1";

export function CookieBanner() {
	const hasNoConsent = useSyncExternalStore(
		(callback) => {
			window.addEventListener("storage", callback);
			return () => window.removeEventListener("storage", callback);
		},
		() => !localStorage.getItem(STORAGE_KEY),
		() => false,
	);
	const [dismissed, setDismissed] = useState(false);

	if (!siteConfig.requiresCookieConsent || !hasNoConsent || dismissed) return null;

	const decide = (value: "accept" | "decline") => {
		localStorage.setItem(
			STORAGE_KEY,
			JSON.stringify({ value, at: new Date().toISOString() }),
		);
		setDismissed(true);
	};

	const nl = siteConfig.defaultLocale === "nl";
	return (
		<div
			role="dialog"
			aria-modal="true"
			aria-label={nl ? "Cookie-instellingen" : "Cookie settings"}
			className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-lg border bg-background p-4 shadow-lg"
		>
			<p className="mb-3 text-sm">
				{nl
					? "Deze site gebruikt functionele cookies van derden voor onderdelen zoals afspraken of betalingen. Zie de "
					: "This site uses functional third-party cookies for features like booking or payments. See the "}
				<a className="underline" href="/privacy">
					{nl ? "privacyverklaring" : "privacy notice"}
				</a>
				.
			</p>
			<div className="flex justify-end gap-2">
				<button
					type="button"
					className="rounded-md border px-3 py-1.5 text-sm"
					onClick={() => decide("decline")}
				>
					{nl ? "Weigeren" : "Decline"}
				</button>
				<button
					type="button"
					className="rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground"
					onClick={() => decide("accept")}
				>
					{nl ? "Akkoord" : "Accept"}
				</button>
			</div>
		</div>
	);
}

/** True if the user has accepted cookie consent. Use to gate third-party script loading. */
export function hasConsent(): boolean {
	if (typeof window === "undefined") return false;
	try {
		return (
			JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}").value === "accept"
		);
	} catch {
		return false;
	}
}
