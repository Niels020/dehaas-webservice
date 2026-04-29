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
		body: "I can create a brand new website, or rebuild your existing site. We will make a design plan together. Then I handle the build, present the new site and we will look at final changes. The result is fast on any device, easy on the eye, and built to last.",
		pricing: "Fixed price, agreed up front.",
	},
	{
		title: "Maintain",
		body: "The most important, and most boring part. Once the site is live, I keep it healthy: updates, security patches, backups, monitoring, and basic SEO checks. All done quietly in the background. This is what every site needs and you don't want to do.",
		pricing: "Low monthly fee, no hidden costs.",
	},
	{
		title: "Change",
		body: "Want to update opening hours, increase a price, or change a sentence on the homepage? Smaller changes to the site are free. For anything more, like a new page, a swapped image, or a design tweak, send the request and I'll send a quote back before I start work.",
		pricing: "Smaller changes included.",
	},
];

const steps = [
	{
		n: "01",
		title: "Start",
		body: "In the start you will be directed to a form. It will give me a good starting point and in this form you can also ask any questions you might have. After you simply schedule the call. I will get back to you to confirm and answer your questions.",
	},
	{
		n: "02",
		title: "Homework",
		body: "Yes, homework. I can do a lot but you have to deliver the content. Text, images or any other media you want on the site. What also helps are some examples of websites you like. The more you have finished, the better.",
	},
	{
		n: "03",
		title: "Call",
		body: "A free 30-minute video call. We will go though a design plan together where we will talk about your business needs. After the call, I send you a proposal with the final price and the design plan. When you sign off, I will go to work.",
	},
	{
		n: "04",
		title: "Build",
		body: "I handle the build. Within a week or two the site goes up on a preview link. You can browse it on your phone or laptop just like any real site. For the final touch ups, tell me what feels right and what doesn't and I will do the final changes.",
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
							Every business needs a modern website. AI tools let anyone design
							and deploy one, but web development is still complex, and keeping
							a site running still takes consistent attention.
							<br />
							<br />
							The same tools made developers far more productive. Professional
							design and maintenance no longer needs an enterprise budget. I
							handle it, and the site stops needing your attention. The changes
							you do want? Easy.
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

			{/* Why — I hate WordPress / I love Buddy */}
			<section
				aria-labelledby="why-heading"
				className="bg-background px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<h2
						id="why-heading"
						className="mb-12 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
					>
						Why it matters
					</h2>
					<div className="grid gap-12 lg:grid-cols-2">
						{/* I hate WordPress */}
						<div className="flex flex-col gap-6">
							<div className="overflow-hidden rounded-lg">
								<Image
									src="/ChatGPT%20Image%20Apr%2028%2C%202026%2C%2002_37_51%20PM.png"
									alt="A frustrated person in front of a broken WordPress site"
									width={640}
									height={360}
									className="h-56 w-full object-cover saturate-[0.7]"
								/>
							</div>
							<div>
								<h3 className="text-xl font-semibold text-foreground">
									I hate WordPress
								</h3>
								<p className="mt-3 leading-relaxed text-muted-foreground">
									If you currently have a website running in WordPress, please
									let me rebuild it. Every person moved away from WordPress
									makes the world a little bit better. I have a lot of respect
									for the mission of WordPress, to make everyone, technical or
									not, able to create websites with free, open-source software.
									But working with it is a nightmare. Changes can cause a whole
									site to break down and the vulnerabilities are off the charts.
								</p>
								<p className="mt-3 leading-relaxed text-muted-foreground">
									If you choose to use my services, changes to the site must go
									through me, and I do charge by a monthly subscription. But I
									believe it will make your life so much easier.
								</p>
							</div>
						</div>

						{/* I love Buddy */}
						<div className="flex flex-col gap-6">
							<div className="overflow-hidden rounded-lg">
								<Image
									src="/igor-omilaev-eGGFZ5X2LnA-unsplash.jpg"
									alt="A futuristic AI assistant helping with web development"
									width={640}
									height={360}
									className="h-56 w-full object-cover saturate-[0.7]"
								/>
							</div>
							<div>
								<h3 className="text-xl font-semibold text-foreground">
									I love Buddy
								</h3>
								<p className="mt-3 leading-relaxed text-muted-foreground">
									So how can I keep the costs down. I call him Buddy, my AI
									buddy (I&apos;m not very creative). Buddy can recreate your
									old website in a modern framework just by getting the URL. It
									can make changes to the code based on emails clients send me.
									And it integrates with my hosting platform, making it possible
									to manage multiple projects at once.
								</p>
								<p className="mt-3 leading-relaxed text-muted-foreground">
									So do I do anything? Well yes. All decisions go through me. I
									keep a close eye on security. All changes are tested and I
									will never let Buddy answer the questions you have for me.
								</p>
							</div>
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
						className="mb-4 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
					>
						Start the build
					</h2>
					<p className="mb-12 max-w-2xl text-lg text-muted-foreground">
						From first contact to live site in a handful of steps. There will be
						work for you involved too, but I aim to make the process as easy for
						you uas possible.
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
						And you are live!
					</p>
					<p className="mt-2 text-right text-lg text-muted-foreground">
						From here the maintenance takes over.
					</p>
				</div>
			</section>

			{/* Maintenance */}
			<section
				aria-labelledby="maintenance-heading"
				className="bg-background px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<div className="max-w-2xl mb-12">
						<h2
							id="maintenance-heading"
							className="mb-4 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
						>
							Full maintenance
						</h2>
						<p className="leading-relaxed text-muted-foreground">
							This is where so many fail. Don't do this for a year and best
							scenario, your site looks outdated and is slow. Worst case, it
							gets hacked and takes your business down with it.
						</p>
					</div>
					<ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{[
							{
								title: "Updates and security patches",
								body: "Framework and dependencies kept current, applied before anything breaks. Critical patches get attention the same day.",
							},
							{
								title: "Technical SEO health",
								body: "Page speed, broken links, metadata, sitemap, structured data. Reviewed once a month with fixes shipped.",
							},
							{
								title: "Uptime monitoring",
								body: "I see problems before you do. Verify your site is up and running. If it goes down, I get an alert and start working immediately.",
							},
							{
								title: "Compliance check",
								body: "Once a year I review the cookie banner, privacy policy, and consent flow against current rules.",
							},
							{
								title: "Form and functional checks",
								body: "Once a month I run a test submission through your contact form to make sure it's still working.",
							},
							{
								title: "Content drift check",
								body: "Once a quarter I scan for outdated information (last year's footer, holiday hours that don't apply anymore, broken external links) and flag what to update.",
							},
							{
								title: "Domain, DNS, SSL, and backups",
								body: "Quarterly health check, plus daily off-site backups recoverable to any point in the last 30 days.",
							},
							{
								title: "One free text change per month",
								body: "Opening hours, a price, a sentence on the homepage. Bigger changes go through Change requests.",
							},
						].map(({ title, body }) => (
							<li key={title} className="flex flex-col gap-2">
								<CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
								<p className="font-medium text-foreground">{title}</p>
								<p className="text-sm leading-relaxed text-muted-foreground">
									{body}
								</p>
							</li>
						))}
					</ul>
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
