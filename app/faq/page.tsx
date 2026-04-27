import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
	title: "Questions",
	description:
		"Answers to common questions about pricing, process, and maintenance. If yours is not here, a 30-minute call is the best way to ask.",
};

const toSlug = (s: string) => s.toLowerCase().replace(/\s+/g, "-");

const faqCategories = [
	{
		category: "Pricing and contracts",
		items: [
			{
				q: "How much does a build cost?",
				a: "Most websites start at €1,200. The exact price depends on the number of pages and any custom features. I give you a fixed price before work starts, so there are no surprises.",
			},
			{
				q: "What is in the monthly maintenance fee?",
				a: "Hosting, daily backups, security updates, uptime monitoring, and smaller content changes. You pay €75 per month and can cancel at any time with one month notice.",
			},
			{
				q: "Can I cancel maintenance later?",
				a: "Yes. One month's notice and you are done. If you want to keep the site running without me, I can help you transfer everything to your own hosting.",
			},
			{
				q: "What if I want to keep the site without you maintaining it?",
				a: "That is fine. I will transfer the code and hosting to you or a provider of your choosing. I can give you a handover document so the next person knows what is what.",
			},
		],
	},
	{
		category: "Process",
		items: [
			{
				q: "How long does a build take?",
				a: "Usually two to four weeks from the kick-off call to launch. It depends on how quickly we can align on the design and how fast you can supply content or photos.",
			},
			{
				q: "How involved do I need to be?",
				a: "Not very. I need your input at the start to understand the brief, and one round of feedback once the site is ready to review. After that, I handle everything.",
			},
			{
				q: "What if I do not like the design?",
				a: "One full round of feedback is included in every build. I will make the changes you ask for. If you want a completely different direction after that, we can discuss what that involves.",
			},
		],
	},
	{
		category: "Technical",
		items: [
			{
				q: "What is Next.js and why do you use it?",
				a: "Next.js is a framework for building websites. It is fast, reliable, and well-supported. For a small business site it is often more than enough, and it will not go out of date in two years the way some website builders do.",
			},
			{
				q: "Will my old content move over?",
				a: "Yes, for text and images. I handle the migration as part of the build. If you have a complicated existing site or a lot of content, we can talk through what that looks like.",
			},
			{
				q: "What happens to my SEO?",
				a: "I make sure the new site keeps your existing pages and URLs where possible, and I set up the basics: page titles, descriptions, and a sitemap. I do not offer ongoing SEO as a service.",
			},
		],
	},
	{
		category: "Maintenance",
		items: [
			{
				q: "What counts as a smaller change?",
				a: "Updating text, swapping a photo, changing opening hours, adding a product to a list. Anything that takes less than an hour or so. Bigger changes like adding a new page or a new section are quoted separately.",
			},
			{
				q: "How fast do you respond?",
				a: "I aim to reply within one working day. For urgent issues with the site itself, usually the same day.",
			},
			{
				q: "What if my site goes down at midnight?",
				a: "Uptime monitoring runs around the clock and alerts me automatically. I will deal with it as soon as I see the alert. I do not guarantee a specific response time outside working hours, but I keep an eye on things.",
			},
		],
	},
];

export default function FAQPage() {
	return (
		<>
			{/* Hero */}
			<section
				aria-labelledby="faq-heading"
				className="bg-background px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<div className="max-w-3xl">
						<h1
							id="faq-heading"
							className="text-4xl font-semibold leading-tight tracking-[-0.02em] text-foreground sm:text-5xl md:text-6xl"
						>
							Questions
						</h1>
						<p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
							If yours is not here, the consultation call is the best way to
							ask.
						</p>
					</div>
				</div>
			</section>

			{/* FAQ accordion */}
			<section
				aria-labelledby="faq-questions-heading"
				className="bg-muted/50 px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<h2 id="faq-questions-heading" className="sr-only">
						All questions
					</h2>
					<div className="grid gap-12 lg:grid-cols-[240px_1fr]">
						{/* Category nav — sticky on large screens */}
						<nav
							aria-label="FAQ categories"
							className="hidden lg:flex lg:flex-col lg:gap-2"
						>
							{faqCategories.map(({ category }) => (
								<a
									key={category}
									href={`#${toSlug(category)}`}
									className="text-sm text-muted-foreground transition-colors hover:text-primary"
								>
									{category}
								</a>
							))}
						</nav>

						{/* Questions */}
						<div className="flex flex-col gap-12">
							{faqCategories.map(({ category, items }) => (
								<div key={category} id={toSlug(category)}>
									<h3 className="mb-4 text-xl font-semibold text-foreground">
										{category}
									</h3>
									<Accordion className="w-full">
										{items.map(({ q, a }) => (
											<AccordionItem key={q} value={q}>
												<AccordionTrigger className="text-left text-base font-medium">
													{q}
												</AccordionTrigger>
												<AccordionContent className="text-base leading-relaxed text-muted-foreground">
													{a}
												</AccordionContent>
											</AccordionItem>
										))}
									</Accordion>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* CTA band */}
			<section
				aria-labelledby="faq-cta-heading"
				className="bg-background px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<div className="max-w-xl">
						<h2
							id="faq-cta-heading"
							className="mb-4 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
						>
							Still have questions?
						</h2>
						<p className="mb-8 text-lg text-muted-foreground">
							Book a 30-minute call and ask them directly.
						</p>
						<Link
							href="/contact"
							className={cn(buttonVariants({ size: "lg" }), "gap-2")}
						>
							Book a free call
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
