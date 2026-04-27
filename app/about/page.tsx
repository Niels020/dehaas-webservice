import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: "About me",
	description:
		"A bit of background on who I am and why I started dehaas webservice.",
};

const beliefs = [
	{
		title: "Trust is earned, not assumed",
		body: "I tell you upfront what I can do, what it costs, and how long it takes. If something is outside my expertise, I say so. You should never have to wonder what is going on with your site.",
	},
	{
		title: "Small scale is a choice, not a limitation",
		body: "I deliberately work with a small number of clients at a time. That means I can give each one proper attention, respond quickly, and actually know your business.",
	},
	{
		title: "Honest is better than impressive",
		body: "You do not need cutting-edge technology or a flashy agency deck. You need a site that loads fast, looks good, and helps people find and trust your business.",
	},
];

export default function AboutPage() {
	return (
		<>
			{/* Hero */}
			<section
				aria-labelledby="about-heading"
				className="bg-background px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<div className="max-w-3xl">
						<h1
							id="about-heading"
							className="text-4xl font-semibold leading-tight tracking-[-0.02em] text-foreground sm:text-5xl md:text-6xl"
						>
							About me
						</h1>
						<p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris.
						</p>
					</div>
				</div>
			</section>

			{/* Story */}
			<section
				aria-labelledby="story-heading"
				className="bg-muted/50 px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<div className="grid items-center gap-12 lg:grid-cols-2">
						<div>
							<h2
								id="story-heading"
								className="mb-6 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
							>
								Why I started dehaas webservice
							</h2>
							<div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
								</p>
								<p>
									Duis aute irure dolor in reprehenderit in voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. Excepteur sint
									occaecat cupidatat non proident, sunt in culpa qui officia
									deserunt mollit anim id est laborum.
								</p>
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium, totam rem aperiam, eaque
									ipsa quae ab illo inventore veritatis et quasi architecto
									beatae vitae dicta sunt explicabo.
								</p>
							</div>
						</div>
						<div className="overflow-hidden rounded-lg">
							<Image
								src="/simon-abrams-k_T9Zj3SE8k-unsplash.jpg"
								alt="A workspace with a laptop and notepad"
								width={640}
								height={480}
								className="h-full min-h-72 w-full object-cover saturate-[0.7]"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* What I believe */}
			<section
				aria-labelledby="beliefs-heading"
				className="bg-background px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<h2
						id="beliefs-heading"
						className="mb-12 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
					>
						What I believe
					</h2>
					<div className="grid gap-8 md:grid-cols-3">
						{beliefs.map(({ title, body }) => (
							<div key={title} className="flex flex-col gap-3">
								<h3 className="text-lg font-semibold text-foreground">
									{title}
								</h3>
								<p className="leading-relaxed text-muted-foreground">{body}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* A typical client */}
			<section
				aria-labelledby="typical-client-heading"
				className="bg-muted/50 px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<div className="max-w-2xl">
						<h2
							id="typical-client-heading"
							className="mb-6 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
						>
							A typical client
						</h2>
						<div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
							<p>
								Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
								cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA band */}
			<section
				aria-labelledby="about-cta-heading"
				className="bg-background px-4 py-24 sm:px-6 md:py-32"
			>
				<div className="mx-auto max-w-6xl">
					<div className="max-w-xl">
						<h2
							id="about-cta-heading"
							className="mb-4 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl"
						>
							Sounds like you?
						</h2>
						<p className="mb-8 text-lg text-muted-foreground">
							Book a call and we can talk through what you need.
						</p>
						<Link
							href="/contact"
							className={cn(buttonVariants({ size: "lg" }), "gap-2")}
						>
							Book a call
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
