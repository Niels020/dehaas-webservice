import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import CallRequestForm from "@/components/CallRequestForm";

export const metadata: Metadata = {
	title: "Book a call",
	description:
		"Book a free first consult. We talk through what your business needs, and I follow up with a written proposal.",
};

export default function ContactPage() {
	return (
		<>
			{/* Hero */}
			<section
				aria-labelledby="contact-heading"
				className="bg-background px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-2xl">
					<h1
						id="contact-heading"
						className="text-4xl font-semibold leading-tight tracking-[-0.02em] text-foreground sm:text-5xl"
					>
						Book a call
					</h1>
					<p className="mt-6 text-lg leading-relaxed text-muted-foreground">
						Thirty minutes is enough to cover the basics: what your business
						does, what you need from a website, and whether I am the right fit
						to build it. There is no obligation and no sales pressure.
					</p>
					<p className="mt-4 text-sm text-muted-foreground">
						Just have a quick question?{" "}
						<a
							href="#quick-question"
							className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
						>
							Skip to the message form ↓
						</a>
					</p>
				</div>
			</section>

			{/* Request a call form */}
			<section
				aria-labelledby="booking-heading"
				className="bg-muted/30 px-4 py-16 sm:px-6 md:py-24"
			>
				<div className="mx-auto max-w-2xl">
					<p className="mb-8 text-sm leading-relaxed text-muted-foreground">
						Fill in as much as you can. The more detail, the better — it helps
						me prepare so we can use our 30 minutes as well as possible. Nothing
						here is set in stone.
					</p>
					<CallRequestForm />
				</div>
			</section>

			{/* Quick question */}
			<section
				id="quick-question"
				aria-labelledby="question-heading"
				className="bg-background px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-2xl">
					<h2
						id="question-heading"
						className="mb-2 text-2xl font-semibold tracking-[-0.01em] text-foreground"
					>
						Have a quick question?
					</h2>
					<p className="mb-8 text-muted-foreground">
						Not ready to book a call yet? Send me a message and I will get back
						to you.
					</p>

					<form
						className="flex flex-col gap-5"
						action="mailto:info@dehaaswebservice.nl"
						method="get"
						encType="text/plain"
					>
						<div className="flex flex-col gap-1.5">
							<label
								htmlFor="q-name"
								className="text-sm font-medium text-foreground"
							>
								Your name
							</label>
							<input
								id="q-name"
								name="name"
								type="text"
								required
								autoComplete="name"
								className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
								placeholder="Jan de Vries"
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
								className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
								placeholder="jan@devriesloodgieters.nl"
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
								className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
								placeholder="What would you like to know?"
							/>
						</div>

						<button
							type="submit"
							className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
						>
							Send message
							<ArrowRight className="h-4 w-4" />
						</button>
					</form>
				</div>
			</section>
		</>
	);
}
