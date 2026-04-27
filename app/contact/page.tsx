import type { Metadata } from "next";
import { Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
	title: "Book a call",
	description:
		"Book a free 30-minute video call. We talk through what your business needs, and I follow up with a written proposal.",
};

const nextSteps = [
	{
		n: "01",
		title: "Book",
		body: "Pick a time that works for you using the form below.",
	},
	{
		n: "02",
		title: "Call",
		body: "We have a 30-minute video call. You tell me about your business and what you need. No preparation required.",
	},
	{
		n: "03",
		title: "Proposal",
		body: "Within a few days I send a short written proposal: what I will build, what it costs, and how long it will take.",
	},
];

export default function ContactPage() {
	return (
		<>
			{/* Hero */}
			<section
				aria-labelledby="contact-heading"
				className="bg-background px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<div className="max-w-3xl">
						<h1
							id="contact-heading"
							className="text-4xl font-semibold leading-tight tracking-[-0.02em] text-foreground sm:text-5xl md:text-6xl"
						>
							Book a call
						</h1>
						<p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
							Thirty minutes is enough to cover the basics: what your business
							does, what you need from a website, and whether I am the right fit
							to build it. There is no obligation and no sales pressure.
						</p>
					</div>
				</div>
			</section>

			{/* Booking widget */}
			<section
				aria-labelledby="booking-heading"
				className="bg-muted/50 px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<div className="grid gap-12 lg:grid-cols-2">
						<div>
							<h2
								id="booking-heading"
								className="mb-4 text-2xl font-semibold tracking-[-0.01em] text-foreground"
							>
								Request a call
							</h2>
							<p className="mb-8 text-muted-foreground">
								Fill in a few details and I will get back to you within one
								working day to confirm a time.
							</p>

							{/* Contact form — accessible, no third-party scripts */}
							<form
								className="flex flex-col gap-5"
								action="mailto:info@dehaaswebservice.nl"
								method="get"
								encType="text/plain"
							>
								<div className="flex flex-col gap-1.5">
									<label
										htmlFor="name"
										className="text-sm font-medium text-foreground"
									>
										Your name
									</label>
									<input
										id="name"
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
										htmlFor="business"
										className="text-sm font-medium text-foreground"
									>
										Business name
									</label>
									<input
										id="business"
										name="business"
										type="text"
										required
										className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
										placeholder="De Vries Loodgieters"
									/>
								</div>

								<div className="flex flex-col gap-1.5">
									<label
										htmlFor="email"
										className="text-sm font-medium text-foreground"
									>
										Email address
									</label>
									<input
										id="email"
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
										htmlFor="current-site"
										className="text-sm font-medium text-foreground"
									>
										Current website URL{" "}
										<span className="text-muted-foreground font-normal">
											(if you have one)
										</span>
									</label>
									<input
										id="current-site"
										name="current-site"
										type="url"
										autoComplete="url"
										className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
										placeholder="https://example.nl"
									/>
								</div>

								<div className="flex flex-col gap-1.5">
									<label
										htmlFor="message"
										className="text-sm font-medium text-foreground"
									>
										What would you like to talk about?
									</label>
									<textarea
										id="message"
										name="message"
										rows={4}
										className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
										placeholder="A bit of context helps — your business, what you currently have, and what you are hoping for."
									/>
								</div>

								<button
									type="submit"
									className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
								>
									Send request
									<ArrowRight className="h-4 w-4" />
								</button>
							</form>
						</div>

						{/* What happens next */}
						<div>
							<h2
								className="mb-8 text-2xl font-semibold tracking-[-0.01em] text-foreground"
							>
								What happens next
							</h2>
							<div className="flex flex-col gap-8">
								{nextSteps.map(({ n, title, body }) => (
									<div key={n} className="flex gap-4">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
											<span className="text-sm font-semibold">{n}</span>
										</div>
										<div>
											<h3 className="font-semibold text-foreground">{title}</h3>
											<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
												{body}
											</p>
										</div>
									</div>
								))}
							</div>

							{/* Other ways to reach */}
							<div className="mt-12 border-t border-border pt-8">
								<h3 className="mb-3 font-semibold text-foreground">
									Other ways to reach me
								</h3>
								<a
									href="mailto:info@dehaaswebservice.nl"
									className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
								>
									<Mail className="h-4 w-4" />
									info@dehaaswebservice.nl
								</a>
								<p className="mt-2 text-sm text-muted-foreground">
									Phone is available on request.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
