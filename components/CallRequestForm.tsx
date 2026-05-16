"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types & constants ────────────────────────────────────────────────────────

type SectionId = 1 | 2 | 3 | 4 | 5;

const SECTIONS: { id: SectionId; title: string }[] = [
	{ id: 1, title: "About you" },
	{ id: 2, title: "Your current situation" },
	{ id: 3, title: "What you're looking for" },
	{ id: 4, title: "Content readiness" },
	{ id: 5, title: "Scheduling & questions" },
];

const FUNCTIONALITY_OPTIONS = [
	"Contact form",
	"Booking system",
	"Online payments",
	"Multilingual",
];

// ─── Shared classes ───────────────────────────────────────────────────────────

const ic =
	"w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";
const tc =
	"w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none";
const lc = "block text-sm font-medium text-foreground mb-1.5";

// ─── Pill radio/checkbox ──────────────────────────────────────────────────────

function PillRadio({
	name,
	options,
	value,
	onChange,
}: {
	name: string;
	options: { value: string; label: string }[];
	value: string;
	onChange: (v: string) => void;
}) {
	return (
		<div className="flex flex-wrap gap-2">
			{options.map((opt) => (
				<label
					key={opt.value}
					className={cn(
						"flex cursor-pointer select-none items-center rounded-lg border px-4 py-2 text-sm transition-colors duration-150",
						value === opt.value
							? "border-primary bg-primary/10 font-medium text-primary"
							: "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground",
					)}
				>
					<input
						type="radio"
						name={name}
						value={opt.value}
						checked={value === opt.value}
						onChange={() => onChange(opt.value)}
						className="sr-only"
					/>
					{opt.label}
				</label>
			))}
		</div>
	);
}

// ─── Section shell ────────────────────────────────────────────────────────────

function SectionShell({
	id,
	title,
	open,
	unlocked,
	complete,
	onToggle,
	children,
}: {
	id: SectionId;
	title: string;
	open: boolean;
	unlocked: boolean;
	complete: boolean;
	onToggle: () => void;
	children: React.ReactNode;
}) {
	return (
		<div
			className={cn(
				"rounded-2xl border bg-card transition-colors duration-200",
				complete
					? "border-primary/30"
					: unlocked
						? "border-border"
						: "border-border/40 opacity-50",
			)}
		>
			{/* Header button */}
			<button
				type="button"
				onClick={onToggle}
				disabled={!unlocked}
				aria-expanded={open}
				className={cn(
					"flex w-full items-center gap-4 rounded-t-2xl px-6 py-5 text-left transition-colors duration-150",
					unlocked && !complete && "hover:bg-muted/50",
					unlocked && complete && "hover:bg-primary/5",
					!unlocked && "cursor-default",
					!open && "rounded-b-2xl",
				)}
			>
				{/* Number / checkmark badge */}
				<span
					className={cn(
						"flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors duration-300",
						complete
							? "bg-primary text-primary-foreground"
							: unlocked
								? "bg-muted text-foreground"
								: "bg-muted/50 text-muted-foreground",
					)}
				>
					{complete ? <Check className="h-3.5 w-3.5" /> : id}
				</span>

				<span
					className={cn(
						"flex-1 text-base font-semibold",
						unlocked ? "text-foreground" : "text-muted-foreground",
					)}
				>
					{title}
				</span>

				{unlocked && (
					<ChevronDown
						className={cn(
							"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
							open && "rotate-180",
						)}
					/>
				)}
			</button>

			{/* Animated content area */}
			<div
				className="grid transition-[grid-template-rows] duration-300 ease-in-out"
				style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
				aria-hidden={!open}
			>
				<div className="overflow-hidden">
					<div className="border-t border-border px-6 pb-8 pt-6">
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function CallRequestForm() {
	// Accordion state
	const [openSections, setOpenSections] = useState<Set<SectionId>>(
		new Set([1]),
	);
	const [unlockedSections, setUnlockedSections] = useState<Set<SectionId>>(
		new Set([1]),
	);

	// Section 1 — tracked for completion
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");

	// Section 2 — tracked for completion + conditional fields
	const [hasWebsite, setHasWebsite] = useState<"" | "yes" | "no">("");
	const [hasDomain, setHasDomain] = useState<"" | "yes" | "no" | "not-sure">(
		"",
	);

	// Section 3 — tracked for completion
	const [projectType, setProjectType] = useState("");
	const [timeline, setTimeline] = useState("");
	const [functionality, setFunctionality] = useState<string[]>([]);

	// Section 4 — tracked for completion
	const [textReady, setTextReady] = useState("");
	const [photosReady, setPhotosReady] = useState("");
	const [hasLogo, setHasLogo] = useState("");

	// Auto-unlock next section when current section is complete
	useEffect(() => {
		if (fullName.trim() && email.trim()) {
			setUnlockedSections((p) => (p.has(2) ? p : new Set([...p, 2])));
			setOpenSections((p) => (p.has(2) ? p : new Set([...p, 2])));
		}
	}, [fullName, email]);

	useEffect(() => {
		if (hasWebsite && hasDomain) {
			setUnlockedSections((p) => (p.has(3) ? p : new Set([...p, 3])));
			setOpenSections((p) => (p.has(3) ? p : new Set([...p, 3])));
		}
	}, [hasWebsite, hasDomain]);

	useEffect(() => {
		if (projectType && timeline) {
			setUnlockedSections((p) => (p.has(4) ? p : new Set([...p, 4])));
			setOpenSections((p) => (p.has(4) ? p : new Set([...p, 4])));
		}
	}, [projectType, timeline]);

	useEffect(() => {
		if (textReady && photosReady && hasLogo) {
			setUnlockedSections((p) => (p.has(5) ? p : new Set([...p, 5])));
			setOpenSections((p) => (p.has(5) ? p : new Set([...p, 5])));
		}
	}, [textReady, photosReady, hasLogo]);

	function isComplete(id: SectionId): boolean {
		switch (id) {
			case 1:
				return !!fullName.trim() && !!email.trim();
			case 2:
				return hasWebsite !== "" && hasDomain !== "";
			case 3:
				return projectType !== "" && timeline !== "";
			case 4:
				return textReady !== "" && photosReady !== "" && hasLogo !== "";
			case 5:
				return false;
		}
	}

	function toggleSection(id: SectionId) {
		if (!unlockedSections.has(id)) return;
		setOpenSections((prev) => {
			const next = new Set(prev);
			if (next.has(id)) next.delete(id);
			else next.add(id);
			return next;
		});
	}

	function toggleFunctionality(opt: string) {
		setFunctionality((prev) =>
			prev.includes(opt) ? prev.filter((v) => v !== opt) : [...prev, opt],
		);
	}

	function shellProps(id: SectionId) {
		return {
			id,
			title: SECTIONS[id - 1].title,
			open: openSections.has(id),
			unlocked: unlockedSections.has(id),
			complete: isComplete(id),
			onToggle: () => toggleSection(id),
		};
	}

	return (
		<form
			className="flex flex-col gap-3"
			action="mailto:info@dehaaswebservice.nl"
			method="get"
			encType="text/plain"
		>
			{/* ── Section 1: About you ── */}
			<SectionShell {...shellProps(1)}>
				<div className="flex flex-col gap-5">
					<div>
						<label htmlFor="full-name" className={lc}>
							Full name
						</label>
						<input
							id="full-name"
							name="full-name"
							type="text"
							required
							autoComplete="name"
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
							className={ic}
							placeholder="Jan de Vries"
						/>
					</div>

					<div>
						<label htmlFor="business-name" className={lc}>
							Business name
						</label>
						<input
							id="business-name"
							name="business-name"
							type="text"
							className={ic}
							placeholder="De Vries Loodgieters"
						/>
					</div>

					<div>
						<label htmlFor="cr-email" className={lc}>
							Email address
						</label>
						<input
							id="cr-email"
							name="email"
							type="email"
							required
							autoComplete="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className={ic}
							placeholder="jan@devriesloodgieters.nl"
						/>
					</div>

					<div>
						<label htmlFor="phone" className={lc}>
							Phone number
						</label>
						<input
							id="phone"
							name="phone"
							type="tel"
							autoComplete="tel"
							className={ic}
							placeholder="+31 6 12 34 56 78"
						/>
					</div>
				</div>
			</SectionShell>

			{/* ── Section 2: Your current situation ── */}
			<SectionShell {...shellProps(2)}>
				<div className="flex flex-col gap-6">
					<div>
						<span className={lc}>Do you have a current website?</span>
						<PillRadio
							name="has-website"
							options={[
								{ value: "yes", label: "Yes" },
								{ value: "no", label: "No" },
							]}
							value={hasWebsite}
							onChange={(v) => setHasWebsite(v as "yes" | "no")}
						/>
					</div>

					{hasWebsite === "yes" && (
						<>
							<div>
								<label htmlFor="website-url" className={lc}>
									Current website URL
								</label>
								<input
									id="website-url"
									name="website-url"
									type="url"
									autoComplete="url"
									className={ic}
									placeholder="https://example.nl"
								/>
							</div>
							<div>
								<label htmlFor="website-problem" className={lc}>
									What&apos;s wrong with it, or why do you want to change?
								</label>
								<textarea
									id="website-problem"
									name="website-problem"
									rows={3}
									className={tc}
									placeholder="It's outdated, hard to find on Google, doesn't look good on mobile…"
								/>
							</div>
						</>
					)}

					<div>
						<span className={lc}>Do you own a domain name?</span>
						<PillRadio
							name="has-domain"
							options={[
								{ value: "yes", label: "Yes" },
								{ value: "no", label: "No" },
								{ value: "not-sure", label: "Not sure" },
							]}
							value={hasDomain}
							onChange={(v) => setHasDomain(v as "yes" | "no" | "not-sure")}
						/>
					</div>

					{hasDomain === "yes" && (
						<div>
							<label htmlFor="domain-name" className={lc}>
								Domain name
							</label>
							<input
								id="domain-name"
								name="domain-name"
								type="text"
								className={ic}
								placeholder="devriesloodgieters.nl"
							/>
						</div>
					)}
				</div>
			</SectionShell>

			{/* ── Section 3: What you're looking for ── */}
			<SectionShell {...shellProps(3)}>
				<div className="flex flex-col gap-6">
					<div>
						<span className={lc}>What do you need?</span>
						<PillRadio
							name="project-type"
							options={[
								{ value: "rebuild", label: "Rebuild existing site" },
								{ value: "new", label: "New site from scratch" },
								{ value: "not-sure", label: "Not sure yet" },
							]}
							value={projectType}
							onChange={setProjectType}
						/>
					</div>

					<div>
						<label htmlFor="pages" className={lc}>
							Which pages do you think you need?
						</label>
						<textarea
							id="pages"
							name="pages"
							rows={2}
							className={tc}
							placeholder="Home, about, services, contact…"
						/>
					</div>

					<div>
						<span className={lc}>Any specific functionality?</span>
						<div className="flex flex-wrap gap-2">
							{FUNCTIONALITY_OPTIONS.map((opt) => (
								<label
									key={opt}
									className={cn(
										"flex cursor-pointer select-none items-center rounded-lg border px-4 py-2 text-sm transition-colors duration-150",
										functionality.includes(opt)
											? "border-primary bg-primary/10 font-medium text-primary"
											: "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground",
									)}
								>
									<input
										type="checkbox"
										name="functionality"
										value={opt.toLowerCase().replace(/ /g, "-")}
										checked={functionality.includes(opt)}
										onChange={() => toggleFunctionality(opt)}
										className="sr-only"
									/>
									{opt}
								</label>
							))}
						</div>
						<input
							type="hidden"
							name="functionality-list"
							value={functionality.join(", ")}
						/>
						<div className="mt-3">
							<label
								htmlFor="functionality-other"
								className="block text-sm text-muted-foreground mb-1.5"
							>
								Anything else?
							</label>
							<input
								id="functionality-other"
								name="functionality-other"
								type="text"
								className={ic}
								placeholder="Blog, newsletter signup, members area…"
							/>
						</div>
					</div>

					<div>
						<label htmlFor="reference-sites" className={lc}>
							Are there websites you like the look of?{" "}
							<span className="font-normal text-muted-foreground">
								(optional)
							</span>
						</label>
						<textarea
							id="reference-sites"
							name="reference-sites"
							rows={2}
							className={tc}
							placeholder="URLs or descriptions — anything that gives me an idea of the style you like."
						/>
					</div>

					<div>
						<span className={lc}>When would you like the site to be live?</span>
						<PillRadio
							name="timeline"
							options={[
								{ value: "no-rush", label: "No rush" },
								{ value: "within-a-month", label: "Within a month" },
								{ value: "within-a-few-weeks", label: "Within a few weeks" },
								{ value: "asap", label: "As soon as possible" },
							]}
							value={timeline}
							onChange={setTimeline}
						/>
					</div>
				</div>
			</SectionShell>

			{/* ── Section 4: Content readiness ── */}
			<SectionShell {...shellProps(4)}>
				<div className="flex flex-col gap-6">
					<div>
						<span className={lc}>Do you have text ready for your pages?</span>
						<PillRadio
							name="text-ready"
							options={[
								{ value: "yes", label: "Yes" },
								{ value: "partly", label: "Partly" },
								{ value: "no-help-needed", label: "No, I need help" },
							]}
							value={textReady}
							onChange={setTextReady}
						/>
					</div>

					<div>
						<span className={lc}>Do you have photos and images ready?</span>
						<PillRadio
							name="photos-ready"
							options={[
								{ value: "yes", label: "Yes" },
								{ value: "partly", label: "Partly" },
								{ value: "no", label: "No" },
							]}
							value={photosReady}
							onChange={setPhotosReady}
						/>
					</div>

					<div>
						<span className={lc}>Do you have a logo?</span>
						<PillRadio
							name="has-logo"
							options={[
								{ value: "yes", label: "Yes" },
								{ value: "no", label: "No" },
							]}
							value={hasLogo}
							onChange={setHasLogo}
						/>
					</div>

					<p className="rounded-xl border border-border bg-muted/40 px-4 py-3.5 text-sm leading-relaxed text-muted-foreground">
						<strong className="text-foreground">Tip:</strong> The more text,
						photos, and other content you can prepare before our call, the
						faster we can get started. Don&apos;t worry if it&apos;s not perfect
						— we&apos;ll go over everything together.
					</p>
				</div>
			</SectionShell>

			{/* ── Section 5: Scheduling & questions ── */}
			<SectionShell {...shellProps(5)}>
				<div className="flex flex-col gap-5">
					<div>
						<label htmlFor="preferred-time" className={lc}>
							Preferred day/time for a 30-minute video call
						</label>
						<input
							id="preferred-time"
							name="preferred-time"
							type="text"
							className={ic}
							placeholder="e.g. weekday mornings, Tuesday afternoons…"
						/>
					</div>

					<div>
						<label htmlFor="referral" className={lc}>
							How did you find us?{" "}
							<span className="font-normal text-muted-foreground">
								(optional)
							</span>
						</label>
						<input
							id="referral"
							name="referral"
							type="text"
							className={ic}
							placeholder="Google, word of mouth, social media…"
						/>
					</div>

					<div>
						<label htmlFor="cr-questions" className={lc}>
							Any questions for me?{" "}
							<span className="font-normal text-muted-foreground">
								(optional)
							</span>
						</label>
						<textarea
							id="cr-questions"
							name="questions"
							rows={3}
							className={tc}
							placeholder="Anything you'd like to know before our call."
						/>
					</div>
				</div>
			</SectionShell>

			{/* Submit */}
			<div className="pt-2">
				<button
					type="submit"
					className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
				>
					Send request
					<ArrowRight className="h-4 w-4" />
				</button>
			</div>
		</form>
	);
}
