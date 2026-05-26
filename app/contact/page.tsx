import type { Metadata } from "next";
import CallRequestForm from "@/components/CallRequestForm";
import QuickQuestionForm from "@/components/QuickQuestionForm";

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

					<QuickQuestionForm />
				</div>
			</section>
		</>
	);
}
