import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const navLinks = [
	{ href: "/about", label: "About" },
	{ href: "/faq", label: "FAQ" },
	{ href: "/contact", label: "Contact" },
];

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-border bg-muted/40">
			<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
				<div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
					{/* Brand */}
					<div className="flex flex-col gap-3">
						<Link href="/" aria-label="dehaas webservice — home">
							<Image
								src="/logo.svg"
								alt="dehaas webservice"
								width={160}
								height={48}
								className="h-8 w-auto"
							/>
						</Link>
						<p className="max-w-xs text-sm text-muted-foreground">
							A personal web service for small businesses that want a site that
							simply works.
						</p>
					</div>

					{/* Nav */}
					<nav aria-label="Footer navigation" className="flex flex-col gap-3">
						<p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
							Pages
						</p>
						{navLinks.map(({ href, label }) => (
							<Link
								key={href}
								href={href}
								className="text-sm text-muted-foreground transition-colors hover:text-primary"
							>
								{label}
							</Link>
						))}
					</nav>

					{/* Contact */}
					<div className="flex flex-col gap-3">
						<p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
							Contact
						</p>
						<a
							href="mailto:info@dehaaswebservice.nl"
							className="text-sm text-muted-foreground transition-colors hover:text-primary"
						>
							info@dehaaswebservice.nl
						</a>
					</div>
				</div>

				<Separator className="my-8" />

				<div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
					<p>&copy; {year} dehaas webservice &mdash; KvK: [placeholder]</p>
					<p>Handmade in the Netherlands</p>
				</div>
			</div>
		</footer>
	);
}
