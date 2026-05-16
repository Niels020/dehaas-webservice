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
		category: "Pricing and costs",
		items: [
			{
				q: "How much does a website cost?",
				a: "A one-page site starts at €275. A two-page site is €360, three pages is €440, and each extra page beyond that adds €100, up to seven pages total. Add-on features like a contact form, booking widget, or bilingual setup cost between €30 and €180 each. I give you a fixed price before work starts, so there are no surprises.",
			},
			{
				q: "What does the monthly maintenance cost?",
				a: "€9.95 per month. That covers hosting on Vercel, daily backups, security updates, uptime monitoring, SEO health checks, compliance reviews, and one smaller content change per month. Cancel with one month's notice.",
			},
			{
				q: "Are there any hidden costs?",
				a: "No. The build price and monthly fee are the full picture. If you request a change that goes beyond what's included, I send you a quote before I start. You never get a bill you didn't agree to.",
			},
			{
				q: "What does a 'smaller change' cost?",
				a: "Nothing. One smaller change per month is included in your subscription. A smaller change means up to 2 media items, 3 links, or 50 words of text. Think opening hours, a photo swap, or updated prices. A bit more or less is usually fine. Anything bigger is quoted before I start, at €79.95 per hour.",
			},
			{
				q: "What if I need something changed urgently?",
				a: "If it's a smaller change you need live the same day, a flat €95 urgent fee applies, with best-effort delivery within a few hours during waking hours (CET). Bigger changes can't be rushed this way; they need proper scoping.",
			},
			{
				q: "Can I cancel maintenance?",
				a: "Yes. One month's notice and you are done. The code, content, and media are yours from day one. If you want to keep the site running without me, I help you transfer everything.",
			},
			{
				q: "Why are your prices lower than a typical agency?",
				a: "AI tools let me work faster without cutting corners. Rebuilding a site, applying routine changes, running audits: a lot of the time-consuming work is automated. That means the savings are passed on to you. One person, no office, no overhead.",
			},
			{
				q: "All prices are ex. VAT?",
				a: "Yes, all prices are exclusive of VAT.",
			},
		],
	},
	{
		category: "The build process",
		items: [
			{
				q: "How long does a build take?",
				a: "Usually two to four weeks from the kick-off call to launch. It depends on how quickly we align on the design and how fast you can supply content or photos.",
			},
			{
				q: "What does the process look like?",
				a: "Four steps. First, you fill in a short form on my site and schedule a free consult. Second, you prepare your content: text, images, a logo if you have one. Third, we go through a design plan together during the consult. After that I send a proposal with the final price. When you sign off, I build the site within a week or two and put it on a preview link. You review it, tell me what to change, and then we go live.",
			},
			{
				q: "How involved do I need to be?",
				a: "Not very. I need your input at the start to understand what you want, and one round of feedback once the site is ready to review. After that, I handle everything.",
			},
			{
				q: "What if I don't like the design?",
				a: "One full round of feedback is included in every build. I make the changes you ask for. If you want a completely different direction after that, we discuss what that involves.",
			},
			{
				q: "Do I need to prepare content myself?",
				a: "Yes. Text, images, and any other media you want on the site need to come from you. The more you have ready before the call, the faster we can get started. It does not need to be perfect; we go over everything together.",
			},
			{
				q: "What is the free consultation?",
				a: "A free consultation where I explain how I work, we map out what you need (pages, features, maintenance), and you can ask anything. There is no cost and no commitment. After that I send you a written proposal with the final price and design plan.",
			},
		],
	},
	{
		category: "Maintenance",
		items: [
			{
				q: "What exactly do you do every month?",
				a: "Eight things: security updates and patching, technical SEO checks, uptime monitoring, visitor metrics, compliance review (yearly), contact form testing, content drift checks (quarterly), and domain/DNS/SSL/backup health checks (quarterly). I also handle one smaller content change per month at no extra cost.",
			},
			{
				q: "How fast do you respond to change requests?",
				a: "Smaller changes usually ship within the same or next business day. Bigger changes are quoted first and typically take up to a week.",
			},
			{
				q: "What if my site goes down?",
				a: "Uptime monitoring runs around the clock and alerts me automatically. I'm usually aware before you are and working on it before the first complaint comes in. There is no extra charge for this; it is part of the subscription.",
			},
			{
				q: "Do I get visitor statistics?",
				a: "Yes. Plausible analytics runs on every site I maintain. It's privacy-friendly and needs no cookie banner. Once a month I pull the numbers, write a short summary, and flag anything worth your attention.",
			},
			{
				q: "Can I make changes to the site myself?",
				a: "No. Every change goes through me. That is the model, not a limitation. It means changes are done properly and nothing breaks. The trade-off is that you depend on me when something needs updating. If you want full control over your own content, this service is probably not the right fit.",
			},
			{
				q: "Can you maintain my current website without rebuilding it?",
				a: "No. The sites I build follow a strict template with specific technical standards. That is what makes the maintenance fast, reliable, and affordable. Maintaining a site I did not build would mean working with unfamiliar code, which makes it impossible to guarantee the same quality.",
			},
			{
				q: "What happens if you go on holiday?",
				a: "Uptime monitoring and automated alerts keep running regardless. For planned absences I let active clients know in advance. Urgent site-down issues still reach me. Non-urgent change requests wait until I'm back.",
			},
		],
	},
	{
		category: "Security",
		items: [
			{
				q: "Is my site secure?",
				a: "Yes. SSL is included and renews automatically. The site is hosted on Vercel, which provides enterprise-grade infrastructure with built-in DDoS protection. Dependencies are patched as soon as updates are published, and critical security patches get attention the same day.",
			},
			{
				q: "How do you handle security updates?",
				a: "Automated tooling watches every dependency your site uses and flags new versions the moment they are published. I review each update, test it on a private preview deployment, and ship it once it passes. Nothing reaches your live site without being tested first.",
			},
			{
				q: "What happens if my site gets hacked?",
				a: "Daily backups mean the full site can be recovered to any point in the last 30 days. Every line of code is tracked in version control, so I can identify exactly what changed and roll it back. Because the sites I build are static with no database or user accounts, the attack surface is small to begin with.",
			},
			{
				q: "Do you store customer data on my site?",
				a: "Not by default. A basic site has no database, no user accounts, and no server-side storage. If your site has a contact form, the messages go straight to your email inbox. Nothing is stored on the site itself.",
			},
			{
				q: "What about GDPR and privacy?",
				a: "Standard GDPR compliance is included: cookie consent where needed, a privacy policy, and proper consent flows. I review these once a year against current rules. Industry-specific compliance (medical, financial, WCAG AAA) is not included.",
			},
			{
				q: "Do I need a cookie banner?",
				a: "It depends on the setup. The analytics I use (Plausible) are cookie-free and GDPR-compliant, so a basic site often does not need a banner at all. If you add functionality that requires cookies, I include a GDPR-compliant consent banner as a build add-on.",
			},
		],
	},
	{
		category: "Technical",
		items: [
			{
				q: "What is Next.js and why do you use it?",
				a: "Next.js is a modern web framework used by major brands. It's fast, reliable, and well-supported. For a small business site it delivers excellent performance, search ranking, and longevity. It will not go out of date the way some website builders do.",
			},
			{
				q: "Will my old content move over?",
				a: "Yes, text and images. I handle the migration as part of the build. If you have a complicated existing site or a lot of content, we talk through what that looks like during the call.",
			},
			{
				q: "What happens to my SEO when I switch?",
				a: "I keep your existing pages and URLs where possible, set up page titles, descriptions, a sitemap, and structured data. Technical SEO maintenance is included monthly. I do not promise specific search rankings, but the technical foundation is solid.",
			},
		],
	},
	{
		category: "What's included and what's not",
		items: [
			{
				q: "Can you build a website without the maintenance contract?",
				a: "Yes. You pay for the build and the site is yours. But the site does need to be maintained by someone with at least some technical skills. Without regular updates and security patches, any site becomes a risk over time.",
			},
			{
				q: "Do you build online shops?",
				a: "Not full e-commerce. I can add a single Stripe checkout button for a product, donation, or tip. Anything beyond that (shopping carts, inventory, order management) is outside the standard offer and would be quoted as a custom build.",
			},
			{
				q: "Can you add a booking system?",
				a: "Yes, as a build add-on. I embed Cal.com, which lets visitors book a time slot directly on your site. You bring a Cal.com account (free tier available).",
			},
			{
				q: "Do you handle email hosting?",
				a: "No. Email hosting (info@yourdomain.nl and similar) is a separate service through your domain provider or Google Workspace. I can point you in the right direction, but it is not part of what I offer.",
			},
			{
				q: "Can you build a site in languages other than Dutch and English?",
				a: "Dutch and English bilingual is available as a build add-on. Other languages are not offered, since I don't speak them and can't guarantee the quality.",
			},
			{
				q: "Is there a limit on how big my site can be?",
				a: "The standard offer covers sites up to seven pages and up to roughly 10,000 monthly visitors. Beyond that, we move to a custom arrangement.",
			},
			{
				q: "Do you write the text for my site?",
				a: "No. The content (text, images, brand assets) comes from you. I can help shape and refine what you provide, but the words and media are your responsibility. If you need a copywriter, I can suggest looking into one separately.",
			},
		],
	},
	{
		category: "Leaving or outgrowing the service",
		items: [
			{
				q: "What if my business outgrows what you offer?",
				a: "Three options. First, I can switch you to a custom maintenance arrangement with pricing based on what your site actually needs. Second, if you want to add features like a backend or e-commerce, I quote that as a custom build on top of your existing site. Third, if you genuinely outgrow what one person can deliver, I help you find a team and hand over everything.",
			},
			{
				q: "Do I own the code?",
				a: "Yes. The code, content, and media belong to you from day one. If you leave, I transfer the repo, hosting project, domain, and environment variables. Basic handover is free, capped at about an hour.",
			},
			{
				q: "Why do you openly offer to help me leave?",
				a: "Because honesty matters more than lock-in. Most providers hide the exit. Saying it out loud signals confidence, not weakness. If you outgrow me, you should have a clean path forward.",
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
