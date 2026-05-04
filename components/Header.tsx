import Image from "next/image";
import Link from "next/link";
import HeaderNav from "@/components/HeaderNav";

const navLinks = [
	{ href: "/about", label: "About" },
	{ href: "/services", label: "Services" },
	{ href: "/faq", label: "FAQ" },
	{ href: "/contact", label: "Contact" },
];

export default function Header() {
	return (
		<>
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:text-sm"
			>
				Skip to content
			</a>

			<header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-sm">
				<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
					<Link href="/" aria-label="dehaas webservice — home">
						<Image
							src="/dehaas-logos/dehaas-logo-light.svg"
							alt="dehaas webservice"
							width={180}
							height={56}
							priority
							className="h-16 w-auto dark:hidden"
						/>
						<Image
							src="/dehaas-logos/dehaas-logo-dark.svg"
							alt="dehaas webservice"
							width={180}
							height={56}
							priority
							className="hidden h-16 w-auto dark:block"
						/>
					</Link>
					<HeaderNav navLinks={navLinks} />
				</div>
			</header>
		</>
	);
}
