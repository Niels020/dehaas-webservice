import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CircleDot } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: "dehaas webservice: services and pricing",
	description:
		"Specs, scope, tech, and pricing for a website built and maintained by me.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const hero = {
	heading: "What you get, and what it costs.",
	subheadline: "Specs, scope, tech, and pricing. All in one place, no fine print.",
	body: "This is the full picture of working with me. What is delivered with a build, what's possible to add, the tech behind your site, and what each part costs. If something is not on this page, it is not part of the default offer. Anything you want beyond it, I quote separately before I start.",
	cta: "Book a free 30-minute video call",
};

const buildSection = {
	heading: "What's in a build",
	subheading:
		"Every site I deliver comes with the same baseline. Add what you need, leave off what you don't.",
};

const buildBaseline = [
	"Designed and built from scratch",
	"Responsive on phone, tablet, and desktop",
	"Basic SEO setup (page title, description, social sharing image)",
	"Free SSL certificate, hosted on Vercel",
	"Custom domain pointed at the site",
	"Logo and favicon placement",
	"Lighthouse score above 90 on launch (performance, accessibility, best practices, SEO)",
];

const buildPricing = [
	{ label: "1-page site", price: "€275" },
	{ label: "3-page site", price: "€440" },
	{ label: "Each additional page beyond that", price: "€100" },
];

const functionalitiesSection = {
	heading: "Possible functionalities",
	subheading:
		"Features you can add to a build, and the ones that are not part of the standard offer.",
	intro:
		"Most small business sites only need a handful of these. Each add-on adds somewhere between €30 and €100 to the build, depending on scope. I quote the exact amount before I start.",
};

const addOns = [
	"Contact form, with messages delivered to your inbox and spam filtering",
	"Cookie consent banner, GDPR-compliant",
	"Image or photo gallery, scrollable and lightbox-style",
	"Map embed tied to your address",
	"Newsletter signup (embed for Mailchimp, Buttondown, or similar; you bring the account)",
	"Booking widget (Cal.com embed)",
	"Stripe checkout button for a single product, donation, or tip (Stripe account required)",
	"Blog or news section, lightweight and file-based",
	"Social media links and share buttons",
	"Video embeds (YouTube, Vimeo)",
	"Multi-section homepage with anchor navigation",
	"Testimonials section",
];

const notIncluded = [
	"Custom backends, databases, or user accounts",
	"E-commerce platforms beyond a single Stripe checkout (no shopping carts, no inventory)",
	"Multi-language sites",
	"Sites over ~10 pages or with ~10,000+ monthly visitors",
	"Email hosting (info@yourdomain.nl etc.); use a separate provider through your domain registrar or Google Workspace",
	"Industry-specific compliance (medical records, finance, accessibility WCAG AAA, custom data processing agreements)",
	"Search ranking guarantees (technical SEO yes, ranking promises never)",
	"Custom infrastructure beyond Vercel",
];

// TODO: Add maintenance and change requests section here.
// Content: pricing for the monthly maintenance subscription (€9.95/mo),
// what is included, and how change requests work (one small change/mo included,
// larger changes quoted before work starts at €79.95/hr).

const techSection = {
	heading: "The tech behind the site",
	subheading:
		"What runs your site, why I chose it, and what it means for you.",
	intro:
		"These are deliberate choices, not defaults. Each one is here because it directly affects how the site performs, how secure it is, or how easy it is to maintain.",
	outro:
		"The whole stack is industry-standard for sites that need to be fast, reliable, and maintainable. Nothing here is bespoke or one-off, which means anyone you hire after me can pick up where I left off without untangling a custom system.",
};

const techItems = [
	{
		name: "Next.js with TypeScript",
		description:
			"A modern web framework used by major brands, paired with a typed language that catches errors before they reach production.",
		forYou:
			"A site that loads fast, ranks well in search results, and stays maintainable for years without a costly rewrite.",
	},
	{
		name: "Tailwind CSS with shadcn/ui",
		description:
			"A styling system and a library of pre-tested interface components. Together they keep the design consistent across pages and easy to update.",
		forYou:
			"Changes look intentional, never patched on, and the visual language stays coherent as the site grows.",
	},
	{
		name: "Vercel hosting with a global content delivery network",
		description:
			"The hosting platform built by the team behind Next.js, with a delivery network that serves your site from a server close to every visitor. Automatic SSL is included, and any change can be rolled back instantly if something breaks.",
		forYou: "A site that's always up and always fast, anywhere visitors come from.",
	},
	{
		name: "Preview deployments on every change",
		description:
			"Every update to the site, whether mine or one you've requested, gets a private preview link before it goes live. Nothing reaches your real visitors until I sign off and you've seen it.",
		forYou: "Zero surprises on the live site, ever.",
	},
	{
		name: "Plausible analytics",
		description:
			"Privacy-friendly analytics with no cookies and no banner, GDPR-compliant out of the box.",
		forYou:
			"Real visitor data without the legal overhead, and without the cookie pop-up that puts off visitors before they reach the page.",
	},
	{
		name: "UptimeRobot monitoring",
		description:
			"Continuous uptime checks that ping my phone the moment something is down, day or night.",
		forYou:
			"I usually know before you do, and I'm working on it before the first complaint comes in.",
	},
	{
		name: "Resend for email delivery",
		description:
			"A modern transactional email service that handles contact form submissions reliably. Avoids the \"submitted but never arrived\" failure mode that quietly plagues old contact forms.",
		forYou: "Every message a visitor sends actually reaches your inbox.",
	},
	{
		name: "GitHub version control",
		description:
			"Every line of code is tracked, with a full history of every change. Nothing is one bad save away from being lost.",
		forYou:
			"Complete recovery from any past state, and the code is yours to take if you ever leave.",
	},
	{
		name: "Lighthouse benchmarking on every launch",
		description:
			"Google's standard scoring tool for performance, accessibility, best practices, and SEO. Every new build is verified against it before going live.",
		forYou:
			"Not a vague promise of \"fast and modern\" but a measurable score above 90 across all four categories on day one."
	},
];

const pricingSection = {
	heading: "Pricing summary",
	subheading: "Everything in one place.",
	note: "All prices in euros, exclusive of VAT.",
};

const pricingRows = [
	{ item: "1-page build", price: "€275", notes: "Includes responsive design, SEO basics, SSL, hosting setup, custom domain." },
	{ item: "3-page build", price: "€440", notes: "Same baseline, more pages." },
	{ item: "Each additional page beyond 3", price: "€100", notes: "Up to 10 pages total." },
	{ item: "Functionality add-ons", price: "€30 – €100 each", notes: "Quoted before work starts." },
	{ item: "Maintenance subscription", price: "€9.95 / month", notes: "Hosting included, cancel with one month's notice." },
	{ item: "Larger change requests and custom work", price: "€79.95 / hour", notes: "Quoted before work starts." },
];

const ctaSection = {
	heading: "Ready to talk specifics?",
	body: "A free 30-minute video call is the next step. Bring questions, I bring honest answers.",
	button: "Book a free 30-minute video call",
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
	return (
		<>
			{/* Hero */}
			<section
				aria-labelledby="services-hero-heading"
				className="bg-background px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<div className="max-w-3xl">
						<h1
							id="services-hero-heading"
							className="text-4xl font-semibold leading-tight tracking-[-0.02em] text-foreground sm:text-5xl md:text-6xl"
						>
							{hero.heading}
						</h1>
						<p className="mt-6 text-xl text-muted-foreground sm:text-2xl">
							{hero.subheadline}
						</p>
						<p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
							{hero.body}
						</p>
						<div className="mt-8">
							<Link
								href="/contact"
								className={cn(buttonVariants({ size: "lg" }), "gap-2")}
							>
								{hero.cta}
								<ArrowRight className="h-4 w-4" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* What's in a build */}
			<section
				aria-labelledby="build-heading"
				className="bg-muted/50 px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<h2
						id="build-heading"
						className="mb-4 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
					>
						{buildSection.heading}
					</h2>
					<p className="mb-12 max-w-2xl text-lg text-muted-foreground">
						{buildSection.subheading}
					</p>

					<div className="grid gap-12 lg:grid-cols-2">
						{/* Baseline */}
						<div>
							<h3 className="mb-6 text-lg font-semibold text-foreground">
								Baseline, always included
							</h3>
							<ul className="flex flex-col gap-3">
								{buildBaseline.map((item) => (
									<li key={item} className="flex gap-3 text-muted-foreground">
										<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
										{item}
									</li>
								))}
							</ul>
						</div>

						{/* Pricing table */}
						<div>
							<h3 className="mb-6 text-lg font-semibold text-foreground">
								Pricing by site size
							</h3>
							<table className="w-full text-sm">
								<thead>
									<tr className="border-b border-border text-left">
										<th className="pb-3 font-medium text-foreground">Build</th>
										<th className="pb-3 font-medium text-foreground">Price</th>
									</tr>
								</thead>
								<tbody>
									{buildPricing.map(({ label, price }) => (
										<tr key={label} className="border-b border-border last:border-0">
											<td className="py-3 text-muted-foreground">{label}</td>
											<td className="py-3 font-medium text-foreground">{price}</td>
										</tr>
									))}
								</tbody>
							</table>
							<p className="mt-6 text-sm leading-relaxed text-muted-foreground">
								That covers a clean, fast, professional site. From there, you add
								the features that fit your business.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Possible functionalities */}
			<section
				aria-labelledby="functionalities-heading"
				className="bg-background px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<h2
						id="functionalities-heading"
						className="mb-4 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
					>
						{functionalitiesSection.heading}
					</h2>
					<p className="mb-4 max-w-2xl text-lg text-muted-foreground">
						{functionalitiesSection.subheading}
					</p>
					<p className="mb-12 max-w-2xl text-base text-muted-foreground">
						{functionalitiesSection.intro}
					</p>

					<div className="grid gap-12 lg:grid-cols-2">
						{/* Add-ons */}
						<div>
							<h3 className="mb-6 text-lg font-semibold text-foreground">
								Available as add-ons
							</h3>
							<ul className="flex flex-col gap-3">
								{addOns.map((item) => (
									<li key={item} className="flex gap-3 text-muted-foreground">
										<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
										{item}
									</li>
								))}
							</ul>
						</div>

						{/* Not included */}
						<div>
							<h3 className="mb-6 text-lg font-semibold text-foreground">
								Not in the default model
							</h3>
							<ul className="flex flex-col gap-3">
								{notIncluded.map((item) => (
									<li key={item} className="flex gap-3 text-muted-foreground">
										<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
										{item}
									</li>
								))}
							</ul>
							<p className="mt-6 text-sm leading-relaxed text-muted-foreground">
								If your site needs something on this second list, ask. I will
								either quote a custom arrangement that sits outside the standard
								model, or point you to a team better suited for it.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* TODO: Maintenance and change requests section */}
			{/* Insert a section between here and "The tech behind the site" covering:
			    - Monthly maintenance subscription (€9.95/mo): what is included
			    - Change requests: one small change per month included, larger changes
			      quoted at €79.95/hr before work starts
			    Match the style of the sections above. */}

			{/* The tech behind the site */}
			<section
				aria-labelledby="tech-heading"
				className="bg-muted/50 px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<h2
						id="tech-heading"
						className="mb-4 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
					>
						{techSection.heading}
					</h2>
					<p className="mb-4 max-w-2xl text-lg text-muted-foreground">
						{techSection.subheading}
					</p>
					<p className="mb-12 max-w-2xl text-base text-muted-foreground">
						{techSection.intro}
					</p>

					<ul className="flex flex-col divide-y divide-border">
						{techItems.map(({ name, description, forYou }) => (
							<li key={name} className="py-6">
								<div className="grid gap-2 sm:grid-cols-[1fr_1fr]">
									<div>
										<p className="font-semibold text-foreground">{name}</p>
										<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
											{description}
										</p>
									</div>
									<p className="text-sm leading-relaxed text-muted-foreground sm:pl-8">
										<span className="font-medium text-foreground">For you:</span>{" "}
										{forYou}
									</p>
								</div>
							</li>
						))}
					</ul>

					<p className="mt-12 max-w-2xl text-base leading-relaxed text-muted-foreground">
						{techSection.outro}
					</p>
				</div>
			</section>

			{/* Pricing summary */}
			<section
				aria-labelledby="pricing-heading"
				className="bg-background px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<h2
						id="pricing-heading"
						className="mb-4 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
					>
						{pricingSection.heading}
					</h2>
					<p className="mb-12 max-w-2xl text-lg text-muted-foreground">
						{pricingSection.subheading}
					</p>

					<div className="overflow-x-auto">
						<table className="w-full text-sm">
							<thead>
								<tr className="border-b border-border text-left">
									<th className="pb-3 font-medium text-foreground">Item</th>
									<th className="pb-3 font-medium text-foreground">Price</th>
									<th className="pb-3 font-medium text-foreground">Notes</th>
								</tr>
							</thead>
							<tbody>
								{pricingRows.map(({ item, price, notes }) => (
									<tr key={item} className="border-b border-border last:border-0">
										<td className="py-4 pr-6 font-medium text-foreground">{item}</td>
										<td className="py-4 pr-6 text-muted-foreground">{price}</td>
										<td className="py-4 text-muted-foreground">{notes}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					<p className="mt-6 text-sm text-muted-foreground">{pricingSection.note}</p>
				</div>
			</section>

			{/* CTA */}
			<section
				aria-labelledby="services-cta-heading"
				className="bg-muted/50 px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<div className="max-w-xl">
						<CircleDot className="mb-6 h-8 w-8 text-primary" />
						<h2
							id="services-cta-heading"
							className="mb-4 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
						>
							{ctaSection.heading}
						</h2>
						<p className="mb-8 text-lg leading-relaxed text-muted-foreground">
							{ctaSection.body}
						</p>
						<Link
							href="/contact"
							className={cn(buttonVariants({ size: "lg" }), "gap-2")}
						>
							{ctaSection.button}
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
