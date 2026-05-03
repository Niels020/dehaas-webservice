import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
	Activity,
	ArrowDown,
	ArrowRight,
	CircleDot,
	Eye,
	FileCheck,
	FileSearch,
	HardDrive,
	Search,
	ShieldCheck,
	Wrench,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
	title: "dehaas webservice — websites for small businesses",
	description:
		"A personal web service that builds, maintains, and updates websites for small businesses. No jargon, honest pricing, a real person on the other end.",
};

// Hero
const hero = {
	heading: "A site that works, and stays that way.",
	subheadline: "Built right. Kept running. Updated when you need it.",
	body1:
		"Every business needs a modern website. AI tools let anyone design and deploy one, but web development is still complex, and keeping a site running still takes consistent attention.",
	body2:
		"The same tools made developers far more productive. Professional design and maintenance no longer need an enterprise budget. I handle it, and the site stops needing your attention. The changes you do want? Easy.",
	cta: "Book a free 30-minute video call",
};

// Services
const servicesSection = {
	heading: "What I do",
	subheading: "Three things, done well.",
};

const services = [
	{
		title: "Build",
		body: "I can create a brand new website, or rebuild your existing site. We will make a design plan together. Then I handle the build, present the new site and we will look at final changes. The result is fast on any device, easy on the eye, and built to last.",
		pricing: "Fixed price, agreed up front.",
		href: "#how-it-works-heading",
	},
	{
		title: "Maintain",
		body: "The most important, and most boring part. Once the site is live, I keep it healthy: updates, security patches, backups, monitoring, and basic SEO checks. All done quietly in the background. This is what every site needs and what you don't want to do yourself.",
		pricing: "Low monthly fee, no hidden costs.",
		href: "#maintenance-heading",
	},
	{
		title: "Change",
		body: "Want to update opening hours, increase some prices, or change some sentences on the homepage? Smaller changes to the site are free once a month. For anything more, like a new page, a redesign or added features, send the request and I'll send a quote back before I start work.",
		pricing: "Smaller changes included.",
		href: "#change-requests-heading",
	},
];

// Why choose me
const whySection = {
	heading: "Why choose me",
	subheading:
		"Choosing how to set up your website is a big decision that can get very complex. I think it's mostly about trust. I give honest answers, work delivered as agreed, and clear prices with no surprises.",
};

const whyReasons = [
	{
		title: "One person, no nonsense",
		body: "There is no sales team, no account manager, no confusing contract. You deal with me directly, from the first call to every question after launch. You get honest answers, a fixed price agreed up front, and someone who actually knows your site. Small business owner to small business owner.",
	},
	{
		title: "Costs stay low",
		body: "AI tools let me work faster and manage more without cutting corners. Recreating a site, applying routine changes, monitoring deployments: a lot of the time-consuming work is automated. That means the savings are passed on to you. Professional quality without the agency price tag.",
	},
	{
		title: "I take it off your plate",
		body: "Building a site is the easy part. Keeping it running, secure, and up to date is where most businesses quietly fall behind. I handle all of it (maintenance, updates, and changes), so you never have to think about it. Want to update your opening hours or swap out a photo? Send me a message and it's done.",
	},
];

// Start the build
const howItWorksSection = {
	heading: "Start the build",
	subheading:
		"From first contact to live site in a handful of steps. There will be work for you involved too, but I aim to make the process as easy for you as possible.",
	outro: "And you are live!",
	outroSub: "From here the maintenance takes over.",
};

const steps = [
	{
		n: "01",
		title: "Start",
		body: "First, you will be directed to a form. It gives me a good starting point and is also where you can ask any questions you might have. After that, simply schedule the call. I will get back to you to confirm and answer your questions.",
	},
	{
		n: "02",
		title: "Homework",
		body: "Yes, homework. I can do a lot but you have to deliver the content. Text, images or any other media you want on the site. What also helps are some examples of websites you like. The more you have finished, the better.",
	},
	{
		n: "03",
		title: "Call",
		body: "A free 30-minute video call. We will go through a design plan together where we will talk about your business needs. After the call, I send you a proposal with the final price and the design plan. When you sign off, I will go to work.",
	},
	{
		n: "04",
		title: "Build",
		body: "I handle the build. Within a week or two the site goes up on a preview link. You can browse it on your phone or laptop just like any real site. For the final touch ups, tell me what feels right and what doesn't and I will do the final changes.",
	},
];

// Full maintenance
const maintenanceSection = {
	heading: "Full maintenance",
	subheading:
		"This is where so many fail. Don't do this for a year and best case, your site looks outdated and is slow. Worst case, it gets hacked and takes your business down with it.",
};

const maintenanceChecks = [
	{
		icon: ShieldCheck,
		title: "Updates and security patches",
		body: "Framework and dependencies kept current, applied before anything breaks. Critical patches get attention the same day.",
	},
	{
		icon: Activity,
		title: "Technical SEO health",
		body: "Page speed, broken links, metadata, sitemap, structured data. Reviewed once a month with fixes shipped.",
	},
	{
		icon: Eye,
		title: "Uptime monitoring",
		body: "I see problems before you do. Continuous checks confirm the site is up and running. If it goes down, I get an alert and start working immediately.",
	},
	{
		icon: FileCheck,
		title: "Compliance check",
		body: "Once a year I review the cookie banner, privacy policy, and consent flow against current rules.",
	},
	{
		icon: Search,
		title: "Metrics tracking",
		body: "Visitor numbers, popular pages, traffic sources. Privacy-friendly analytics with no cookie banner, reviewed monthly. I send a short summary and flag anything worth knowing.",
	},
	{
		icon: Wrench,
		title: "Form and functional checks",
		body: "Once a month I run a test submission through your contact form to make sure it's still working.",
	},
	{
		icon: FileSearch,
		title: "Content drift check",
		body: "Once a quarter I scan for outdated information (last year's footer, holiday hours that don't apply anymore, broken external links) and flag what to update.",
	},
	{
		icon: HardDrive,
		title: "Domain, DNS, SSL, and backups",
		body: "Quarterly health check, plus daily off-site backups recoverable to any point in the last 30 days.",
	},
];

// Change requests
const changeRequestsSection = {
	heading: "Change requests",
	subheading: "All changes you want, done by me.",
	body: "Whenever you want something changed, send me an email. Tell me where the change should be and what you want it to say or show. One smaller change per month is included: think opening hours, a price, or a some sentences on the homepage. For anything bigger, like a new page or a redesigned section, I send you a quote before I start. Every change goes through me, which means it is done properly and nothing breaks. The trade-off is that you cannot make changes yourself and depend on me when something needs updating.",
};

// Common questions
const faqSection = {
	heading: "Common questions",
	subheading: "Quick answers to things most people ask first.",
};

const faqTeaser = [
	{
		q: "How much does a build cost?",
		a: "Most websites start at €1,200. The exact price depends on the number of pages and whether you need any custom features. I give you a fixed price before work starts, so there are no surprises.",
	},
	{
		q: "How long does a build take?",
		a: "Usually two to four weeks from the kick-off call to launch. It depends on how quickly we can align on the design and how fast you can supply any content or photos.",
	},
	{
		q: "What is included in the monthly maintenance fee?",
		a: "Hosting, backups, security updates, and smaller content changes. You pay €75 per month and can cancel at any time.",
	},
];

// CTA
const ctaSection = {
	heading: "Still on the fence?",
	button: "Ask a question",
};

export default function HomePage() {
	return (
		<>
			{/* Hero */}
			<section
				aria-labelledby="hero-heading"
				className="bg-background px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<div className="max-w-3xl">
						<h1
							id="hero-heading"
							className="text-4xl font-semibold leading-tight tracking-[-0.02em] text-foreground sm:text-5xl md:text-6xl"
						>
							{hero.heading}
						</h1>
						<p className="mt-6 text-xl text-muted-foreground sm:text-2xl">
							{hero.subheadline}
						</p>
						<p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
							{hero.body1}
							<br />
							<br />
							{hero.body2}
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

			{/* Services */}
			<section
				aria-labelledby="services-heading"
				className="bg-muted/50 px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<h2
						id="services-heading"
						className="mb-4 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
					>
						{servicesSection.heading}
					</h2>
					<p className="mb-12 max-w-2xl text-lg text-muted-foreground">
						{servicesSection.subheading}
					</p>
					<div className="grid gap-6 md:grid-cols-3">
						{services.map(({ title, body, pricing, href }) => (
							<Card key={title} className="flex flex-col border-border">
								<CardHeader>
									<CardTitle className="text-lg font-semibold">
										{title}
									</CardTitle>
								</CardHeader>
								<CardContent className="flex flex-1 flex-col gap-4">
									<p className="flex-1 leading-relaxed text-muted-foreground">
										{body}
									</p>
									<div className="flex items-center justify-between">
										<p className="text-sm italic text-muted-foreground">
											{pricing}
										</p>
										<a
											href={href}
											aria-label={`Read more about ${title}`}
											className="text-primary transition-colors hover:text-primary/70"
										>
											<ArrowDown className="h-4 w-4" />
										</a>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Why choose me */}
			<section
				aria-labelledby="why-heading"
				className="bg-background px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<div className="grid items-start gap-12 lg:grid-cols-2">
						{/* Left — heading, subheading, image */}
						<div className="lg:sticky lg:top-24">
							<h2
								id="why-heading"
								className="mb-4 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
							>
								{whySection.heading}
							</h2>
							<p className="mb-8 text-lg text-muted-foreground">
								{whySection.subheading}
							</p>
							<div className="overflow-hidden rounded-lg">
								<Image
									src="/pakata-goh-RDolnHtjVCY-unsplash.jpg"
									alt="A person having an honest one-on-one conversation"
									width={640}
									height={480}
									className="h-80 w-full object-cover saturate-[0.7]"
								/>
							</div>
						</div>

						{/* Right — three reasons */}
						<div className="flex flex-col divide-y divide-border pl-24 pr-24">
							{whyReasons.map(({ title, body }) => (
								<div key={title} className="py-10 first:pt-0 last:pb-0">
									<h3 className="mb-3 text-xl font-semibold text-foreground">
										{title}
									</h3>
									<p className="leading-relaxed text-muted-foreground">
										{body}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* How it works */}
			<section
				aria-labelledby="how-it-works-heading"
				className="bg-muted/50 px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<h2
						id="how-it-works-heading"
						className="mb-4 scroll-mt-24 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
					>
						{howItWorksSection.heading}
					</h2>
					<p className="mb-12 max-w-2xl text-lg text-muted-foreground">
						{howItWorksSection.subheading}
					</p>
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{steps.map(({ n, title, body }) => (
							<div key={n} className="flex flex-col gap-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
									<span className="text-sm font-semibold">{n}</span>
								</div>
								<h3 className="text-lg font-semibold text-foreground">
									{title}
								</h3>
								<p className="leading-relaxed text-muted-foreground">{body}</p>
							</div>
						))}
					</div>
					<p className="mt-12 text-right text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl">
						{howItWorksSection.outro}
					</p>
					<p className="mt-2 text-right text-lg text-muted-foreground">
						{howItWorksSection.outroSub}
					</p>
				</div>
			</section>

			{/* Maintenance */}
			<section
				aria-labelledby="maintenance-heading"
				className="bg-background px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl pl-24">
					<div className="grid items-start gap-32 lg:grid-cols-[2fr_3fr]">
						{/* Left — 8 checks */}
						<ul className="flex flex-col divide-y divide-border">
							{maintenanceChecks.map(({ icon: Icon, title, body }) => (
								<li key={title} className="flex gap-4 py-6">
									<Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
									<div>
										<p className="font-medium text-foreground">{title}</p>
										<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
											{body}
										</p>
									</div>
								</li>
							))}
						</ul>

						{/* Right — heading, subheading, image */}
						<div className="lg:sticky lg:top-24">
							<h2
								id="maintenance-heading"
								className="mb-4 scroll-mt-24 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
							>
								{maintenanceSection.heading}
							</h2>
							<p className="mb-8 text-lg leading-relaxed text-muted-foreground">
								{maintenanceSection.subheading}
							</p>
							<div className="overflow-hidden rounded-lg">
								<Image
									src="/glenn-carstens-peters-P1qyEf1g0HU-unsplash.jpg"
									alt="Person monitoring a website at a desk"
									width={640}
									height={480}
									className="h-80 w-full object-cover saturate-[0.7]"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Change requests */}
			<section
				aria-labelledby="change-requests-heading"
				className="bg-muted/50 px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<div className="grid items-center gap-12 lg:grid-cols-2">
						{/* Left — image */}
						<div className="overflow-hidden rounded-lg">
							<Image
								src="/simon-abrams-k_T9Zj3SE8k-unsplash.jpg"
								alt="Person working at a desk making changes"
								width={640}
								height={480}
								className="h-80 w-full object-cover saturate-[0.7]"
							/>
						</div>

						{/* Right — text */}
						<div>
							<h2
								id="change-requests-heading"
								className="mb-4 scroll-mt-24 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
							>
								{changeRequestsSection.heading}
							</h2>
							<p className="mb-6 text-lg text-muted-foreground">
								{changeRequestsSection.subheading}
							</p>
							<p className="leading-relaxed text-muted-foreground">
								{changeRequestsSection.body}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ teaser */}
			<section
				aria-labelledby="faq-teaser-heading"
				className="bg-muted/50 px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<div className="max-w-2xl">
						<h2
							id="faq-teaser-heading"
							className="mb-4 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
						>
							{faqSection.heading}
						</h2>
						<p className="mb-8 text-lg text-muted-foreground">
							{faqSection.subheading}
						</p>
						<Accordion className="w-full">
							{faqTeaser.map(({ q, a }) => (
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
						<div className="mt-8">
							<Link
								href="/faq"
								className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
							>
								See all questions
								<ArrowRight className="h-4 w-4" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Consultation CTA */}
			<section
				aria-labelledby="cta-heading"
				className="bg-background px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<div className="max-w-xl">
						<CircleDot className="mb-6 h-8 w-8 text-primary" />
						<h2
							id="cta-heading"
							className="mb-4 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
						>
							{ctaSection.heading}
						</h2>
						<p className="mb-8 text-lg leading-relaxed text-muted-foreground">
							Check the{" "}
							<Link
								href="/faq"
								className="underline underline-offset-4 hover:text-foreground"
							>
								frequently asked questions
							</Link>{" "}
							— chances are your question is already answered. Or just ask it
							directly and I will get back to you.
						</p>
						<Link
							href=""
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
