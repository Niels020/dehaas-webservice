"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { sendQuestion } from "@/app/actions/send-question";

const ic =
	"rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

export default function QuickQuestionForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	// Honeypot — hidden from real users; bots that fill it are silently dropped
	const [website, setWebsite] = useState("");
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [submitted, setSubmitted] = useState(false);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setSubmitting(true);
		setError(null);

		try {
			const result = await sendQuestion({ name, email, message, website });

			if (result.success) {
				setSubmitted(true);
			} else {
				setError(result.error ?? "Something went wrong. Please try again.");
				setSubmitting(false);
			}
		} catch {
			setError("Something went wrong. Please try again.");
			setSubmitting(false);
		}
	}

	if (submitted) {
		return (
			<div className="rounded-2xl border border-primary/30 bg-card px-6 py-10 text-center">
				<Check className="mx-auto mb-4 h-8 w-8 text-primary" />
				<h3 className="mb-1.5 text-base font-semibold text-foreground">
					Message sent!
				</h3>
				<p className="text-sm text-muted-foreground">
					I&apos;ll get back to you as soon as possible.
				</p>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-5">
			{/* Honeypot field — offscreen and untabbable for real users */}
			<div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
				<label htmlFor="q-website">Website</label>
				<input
					id="q-website"
					name="website"
					type="text"
					tabIndex={-1}
					autoComplete="off"
					value={website}
					onChange={(e) => setWebsite(e.target.value)}
				/>
			</div>

			<div className="flex flex-col gap-1.5">
				<label htmlFor="q-name" className="text-sm font-medium text-foreground">
					Your name
				</label>
				<input
					id="q-name"
					name="name"
					type="text"
					required
					autoComplete="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className={ic}
				/>
			</div>

			<div className="flex flex-col gap-1.5">
				<label
					htmlFor="q-email"
					className="text-sm font-medium text-foreground"
				>
					Email address
				</label>
				<input
					id="q-email"
					name="email"
					type="email"
					required
					autoComplete="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className={ic}
				/>
			</div>

			<div className="flex flex-col gap-1.5">
				<label
					htmlFor="q-message"
					className="text-sm font-medium text-foreground"
				>
					Your question
				</label>
				<textarea
					id="q-message"
					name="message"
					rows={4}
					required
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className={`${ic} w-full resize-none`}
				/>
			</div>

			{error && (
				<p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-2.5 text-sm text-destructive">
					{error}
				</p>
			)}

			<button
				type="submit"
				disabled={submitting}
				className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-60 disabled:cursor-default"
			>
				{submitting ? "Sending…" : (
					<>
						Send message
						<ArrowRight className="h-4 w-4" />
					</>
				)}
			</button>
		</form>
	);
}
