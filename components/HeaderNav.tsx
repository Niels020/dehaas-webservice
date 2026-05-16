"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { cn } from "@/lib/utils";

type NavLink = { href: string; label: string };

export default function HeaderNav({ navLinks }: { navLinks: NavLink[] }) {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	return (
		<>
			{/* Desktop nav */}
			<nav
				className="hidden items-center gap-6 md:flex"
				aria-label="Main navigation"
			>
				{navLinks.map(({ href, label }) => (
					<Link
						key={href}
						href={href}
						className={cn(
							"text-sm font-medium transition-colors hover:text-primary",
							pathname === href ? "text-primary" : "text-muted-foreground",
						)}
					>
						{label}
					</Link>
				))}
			</nav>

			{/* Mobile nav */}
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger
					className={cn(
						"inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground md:hidden",
					)}
					aria-label="Open menu"
				>
					<Menu className="h-5 w-5" />
				</SheetTrigger>
				<SheetContent side="right" className="w-72">
					<SheetHeader>
						<SheetTitle className="sr-only">Navigation</SheetTitle>
					</SheetHeader>
					<nav
						className="flex flex-col gap-6 pt-8"
						aria-label="Mobile navigation"
					>
						{navLinks.map(({ href, label }) => (
							<Link
								key={href}
								href={href}
								onClick={() => setOpen(false)}
								className={cn(
									"text-lg font-medium transition-colors hover:text-primary",
									pathname === href ? "text-primary" : "text-foreground",
								)}
							>
								{label}
							</Link>
						))}
					</nav>
				</SheetContent>
			</Sheet>
		</>
	);
}
