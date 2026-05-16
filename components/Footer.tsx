import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const navLinks = [
	{ href: "/about", label: "About" },
	{ href: "/services", label: "Services" },
	{ href: "/faq", label: "FAQ" },
	{ href: "/contact", label: "Contact" },
];

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-border bg-muted/40">
			<div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
				<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
					{/* Brand */}
					<Link href="/" aria-label="dehaas webservice — home">
						<Image
							src="/dehaas-logos/dehaas-logo-light.svg"
							alt="dehaas webservice"
							width={120}
							height={36}
							className="h-8 w-auto dark:hidden"
						/>
						<Image
							src="/dehaas-logos/dehaas-logo-dark.svg"
							alt="dehaas webservice"
							width={120}
							height={36}
							className="hidden h-8 w-auto dark:block"
						/>
					</Link>

					{/* Nav */}
					<nav
						aria-label="Footer navigation"
						className="flex items-center gap-6"
					>
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
					<a
						href="mailto:info@dehaaswebservice.nl"
						className="text-sm text-muted-foreground transition-colors hover:text-primary"
					>
						info@dehaaswebservice.nl
					</a>
				</div>

				<Separator className="my-6" />

				<div className="flex flex-col gap-1 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
					<p>&copy; {year} dehaas webservice &mdash; KvK: [placeholder]</p>
					<div className="flex items-center gap-4">
						<Link
							href="/privacy"
							className="transition-colors hover:text-primary"
						>
							Privacy
						</Link>
						<p>Handmade in the Netherlands</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
