// Shared input validation for the contact server actions. Server Functions
// are reachable via direct POST requests, so everything here must hold even
// when the client-side form validation is bypassed.

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const MAX_NAME_LENGTH = 100;
export const MAX_EMAIL_LENGTH = 254;
export const MAX_MESSAGE_LENGTH = 5000;

/** Trim and collapse to a single line (no header/subject injection), capped. */
export function cleanLine(value: unknown, max: number): string {
	if (typeof value !== "string") return "";
	return value.replace(/[\r\n]+/g, " ").trim().slice(0, max);
}

/** Trim multiline text, capped. */
export function cleanText(value: unknown, max: number): string {
	if (typeof value !== "string") return "";
	return value.trim().slice(0, max);
}

export function isValidEmail(email: string): boolean {
	return email.length <= MAX_EMAIL_LENGTH && EMAIL_REGEX.test(email);
}
