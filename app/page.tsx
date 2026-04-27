import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, CircleDot } from "lucide-react";
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

const services = [
	{
		title: "Build",
		body: "A new website, built to your brief. I design, develop, and launch a fast, modern site that represents your business honestly and looks good on every screen.",
		pricing: "From €1,200 — fixed price, agreed before work starts.",
	},
	{
		title: "Maintain",
		body: "Once the site is live I keep it running. That means security updates, hosting, backups, and making sure nothing silently breaks. You focus on your business; I watch the site.",
		pricing: "€75 per month, cancel any time.",
	},
	{
		title: "Change requests",
		body: "Business changes, and your site should follow. Swap photos, update opening hours, rewrite a paragraph, add a new service — smaller changes are included in the monthly fee.",
		pricing: "Included in maintenance. Larger changes quoted separately.",
	},
];

const steps = [
	{
		n: "01",
		title: "Consultation",
		body: "A free 30-minute video call. You tell me what your business does and what you need from a website. No preparation needed.",
	},
	{
		n: "02",
		title: "Plan",
		body: "I send a short written proposal: what I will build, what it will cost, and how long it will take. Nothing starts until you have signed off on it.",
	},
	{
		n: "03",
		title: "Build",
		body: "I design and build the site. One round of feedback is included. You see the site before it goes live.",
	},
	{
		n: "04",
		title: "Launch and maintain",
		body: "The site goes live. From that point I handle hosting, updates, and smaller changes as part of the monthly plan.",
	},
];

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
							A site that works, and stays that way.
						</h1>
						<p className="mt-6 text-xl text-muted-foreground sm:text-2xl">
							Built right. Kept running. Updated when you need it.
						</p>
						<p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
							Every business or entrepreneur is expected to have a fancy and
							modern website. Thanks to AI everyone can now design and deploy
							their own website. But web development is still complex and
							maintaining a site still takes time and consistency. But AI also
							made developers way more productive. It's now possible to offer
							professional services for a much lower fee, therefore making it a
							lot more interesting to let your web design and maintenance be
							handled by someone like me.
						</p>
						<div className="mt-8">
							<Link
								href="/contact"
								className={cn(buttonVariants({ size: "lg" }), "gap-2")}
							>
								Book a free 30-minute video call
								<ArrowRight className="h-4 w-4" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Why — Out with the Old / In with the New */}
			<section
				aria-labelledby="why-heading"
				className="bg-muted/50 px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<h2
						id="why-heading"
						className="mb-12 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
					>
						Why it matters
					</h2>
					<div className="grid gap-12 lg:grid-cols-2">
						{/* Out with the Old */}
						<div className="flex flex-col gap-6">
							<div className="overflow-hidden rounded-lg">
								<Image
									src="/dan-burton-wHsOV75Xi8Y-unsplash.jpg"
									alt="An old, cluttered desk setup with an ageing laptop"
									width={640}
									height={360}
									className="h-56 w-full object-cover saturate-[0.7]"
								/>
							</div>
							<div>
								<h3 className="text-xl font-semibold text-foreground">
									Out with the old
								</h3>
								<p className="mt-3 leading-relaxed text-muted-foreground">
									Templates that looked fine three years ago, plugins that
									stopped updating, a hosting dashboard nobody checks. A website
									that started as a quick fix and turned into a source of quiet
									stress every time someone asks for the URL.
								</p>
							</div>
						</div>

						{/* In with the New */}
						<div className="flex flex-col gap-6">
							<div className="overflow-hidden rounded-lg">
								<Image
									src="/pakata-goh-RDolnHtjVCY-unsplash.jpg"
									alt="A clean, modern workspace with a laptop and tidy desk"
									width={640}
									height={360}
									className="h-56 w-full object-cover saturate-[0.7]"
								/>
							</div>
							<div>
								<h3 className="text-xl font-semibold text-foreground">
									In with the new
								</h3>
								<p className="mt-3 leading-relaxed text-muted-foreground">
									A site built on a solid foundation, fast on every device, and
									maintained so it stays that way. When you need a change, you
									ask for it. I handle the rest.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services */}
			<section
				aria-labelledby="services-heading"
				className="bg-background px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<h2
						id="services-heading"
						className="mb-4 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
					>
						What I do
					</h2>
					<p className="mb-12 max-w-2xl text-lg text-muted-foreground">
						Three things, done well.
					</p>
					<div className="grid gap-6 md:grid-cols-3">
						{services.map(({ title, body, pricing }) => (
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
									<p className="text-sm italic text-muted-foreground">
										{pricing}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Maintenance */}
			<section
				aria-labelledby="maintenance-heading"
				className="bg-muted/50 px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<div className="grid items-center gap-12 lg:grid-cols-2">
						<div>
							<h2
								id="maintenance-heading"
								className="mb-4 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
							>
								Maintenance that actually means something
							</h2>
							<p className="mb-6 leading-relaxed text-muted-foreground">
								Most maintenance plans are just hosting with a different label.
								Mine is not. I actively keep your site in good shape so you
								never have to think about it.
							</p>
							<ul className="flex flex-col gap-3">
								{[
									"Hosting on a fast, reliable platform",
									"Automatic daily backups",
									"Security and dependency updates",
									"Uptime monitoring — I notice problems before you do",
									"Smaller content changes included",
									"Direct contact — no ticket system, no waiting queue",
								].map((item) => (
									<li key={item} className="flex items-start gap-3">
										<CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
										<span className="text-muted-foreground">{item}</span>
									</li>
								))}
							</ul>
						</div>
						<div className="overflow-hidden rounded-lg">
							<Image
								src="/microsoft-365-1MeZCPon3vk-unsplash.jpg"
								alt="A small business owner working at a clean desk"
								width={640}
								height={480}
								className="h-full min-h-72 w-full object-cover saturate-[0.7]"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* How it works */}
			<section
				aria-labelledby="how-it-works-heading"
				className="bg-background px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<h2
						id="how-it-works-heading"
						className="mb-4 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
					>
						How it works
					</h2>
					<p className="mb-12 max-w-2xl text-lg text-muted-foreground">
						From first contact to live site in a handful of steps.
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
							Common questions
						</h2>
						<p className="mb-8 text-lg text-muted-foreground">
							Quick answers to things most people ask first.
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
							Still on the fence?
						</h2>
						<p className="mb-8 text-lg leading-relaxed text-muted-foreground">
							A 30-minute call answers most of it. No obligation, no sales
							pitch. Just a conversation about what your business needs.
						</p>
						<Link
							href="/contact"
							className={cn(buttonVariants({ size: "lg" }), "gap-2")}
						>
							Book a free 30-minute video call
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
