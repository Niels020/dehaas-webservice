import { headers } from "next/headers";

// In-memory sliding-window rate limiter. State lives per function instance;
// with Fluid Compute instances are reused across requests, so this throttles
// the common abuse case (one bot hammering the contact actions) without an
// external store. It is best-effort, not a hard guarantee across instances.

const WINDOW_MS = 10 * 60 * 1000;
const MAX_BUCKETS = 5000;

const buckets = new Map<string, number[]>();

export function rateLimit(key: string, limit: number): boolean {
	const now = Date.now();
	const cutoff = now - WINDOW_MS;

	if (buckets.size > MAX_BUCKETS) {
		for (const [k, times] of buckets) {
			if ((times[times.length - 1] ?? 0) < cutoff) buckets.delete(k);
		}
	}

	const times = (buckets.get(key) ?? []).filter((t) => t > cutoff);
	if (times.length >= limit) {
		buckets.set(key, times);
		return false;
	}
	times.push(now);
	buckets.set(key, times);
	return true;
}

/** Client IP for rate-limit keys (x-forwarded-for is set by Vercel). */
export async function clientIp(): Promise<string> {
	const h = await headers();
	return (
		h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
		h.get("x-real-ip") ||
		"unknown"
	);
}
