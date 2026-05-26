"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
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

// ─── Notes compiler ──────────────────────────────────────────────────────────

interface FormValues {
	businessName: string;
	phone: string;
	hasWebsite: string;
	websiteUrl: string;
	websiteProblem: string;
	hasDomain: string;
	domainName: string;
	designCertainty: string;
	pageCount: string;
	functionalityText: string;
	timeline: string;
	textReady: string;
	photosReady: string;
	hasLogo: string;
	questions: string;
}

function buildNotes(v: FormValues): string {
	const l = (map: Record<string, string>, key: string) => map[key] ?? key;

	const certainty: Record<string, string> = {
		"1": "No idea", "2": "Rough idea", "3": "Pretty clear", "4": "I know exactly",
	};
	const pages: Record<string, string> = {
		"1": "1", "2": "2", "3": "3", "4": "4", more: "More than 4", "dont-know": "Don't know",
	};
	const timelines: Record<string, string> = {
		"no-rush": "No rush",
		"within-a-month": "Within a month",
		"within-a-few-weeks": "Within a few weeks",
		asap: "As soon as possible",
	};
	const ready: Record<string, string> = {
		yes: "Yes", partly: "Partly", "no-help-needed": "No — needs help", no: "No — needs help",
	};
	const domain: Record<string, string> = { yes: "Yes", no: "No", "not-sure": "Not sure" };

	const lines: string[] = [];

	if (v.businessName) lines.push(`Business: ${v.businessName}`);
	if (v.phone) lines.push(`Phone: ${v.phone}`);

	lines.push("", `Current website: ${v.hasWebsite === "yes" ? "Yes" : "No"}`);
	if (v.hasWebsite === "yes") {
		if (v.websiteUrl) lines.push(`URL: ${v.websiteUrl}`);
		if (v.websiteProblem) lines.push(`Why changing: ${v.websiteProblem}`);
	} else if (v.hasWebsite === "no") {
		lines.push(`Domain owned: ${l(domain, v.hasDomain)}`);
		if (v.hasDomain === "yes" && v.domainName) lines.push(`Domain: ${v.domainName}`);
	}

	lines.push(
		"",
		`Design certainty: ${l(certainty, v.designCertainty)}`,
		`Pages needed: ${l(pages, v.pageCount)}`,
	);
	if (v.functionalityText) lines.push(`Special functionality: ${v.functionalityText}`);
	lines.push(`Timeline: ${l(timelines, v.timeline)}`);

	lines.push(
		"",
		`Text ready: ${l(ready, v.textReady)}`,
		`Photos ready: ${l(ready, v.photosReady)}`,
		`Logo: ${v.hasLogo === "yes" ? "Yes" : "No — needs help"}`,
	);

	if (v.questions) lines.push("", `Questions:\n${v.questions}`);

	return lines.join("\n").trim();
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function CallRequestForm() {
	// Section 1
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [businessName, setBusinessName] = useState("");
	const [phone, setPhone] = useState("");

	// Section 2 — tracked for completion + conditional fields
	const [hasWebsite, setHasWebsite] = useState<"" | "yes" | "no">("");
	const [websiteUrl, setWebsiteUrl] = useState("");
	const [websiteProblem, setWebsiteProblem] = useState("");
	const [hasDomain, setHasDomain] = useState<"" | "yes" | "no" | "not-sure">(
		"",
	);
	const [domainName, setDomainName] = useState("");

	// Section 3 — tracked for completion
	const [designCertainty, setDesignCertainty] = useState("");
	const [pageCount, setPageCount] = useState("");
	const [functionalityText, setFunctionalityText] = useState("");
	const [timeline, setTimeline] = useState("");

	// Section 4 — tracked for completion
	const [textReady, setTextReady] = useState("");
	const [photosReady, setPhotosReady] = useState("");
	const [hasLogo, setHasLogo] = useState("");

	// Section 5
	const [questions, setQuestions] = useState("");

	// Ref so the Cal.com setTimeout always reads the latest field values,
	// even if the user keeps typing after section 5 unlocks.
	const formRef = useRef<FormValues>({
		businessName, phone, hasWebsite, websiteUrl, websiteProblem,
		hasDomain, domainName, designCertainty, pageCount, functionalityText,
		timeline, textReady, photosReady, hasLogo, questions,
	});
	formRef.current = {
		businessName, phone, hasWebsite, websiteUrl, websiteProblem,
		hasDomain, domainName, designCertainty, pageCount, functionalityText,
		timeline, textReady, photosReady, hasLogo, questions,
	};


	// Accordion state
	const [closedByUser, setClosedByUser] = useState<Set<SectionId>>(new Set());

	// Form submission
	const [submitted, setSubmitted] = useState(false);

	const unlockedSections = useMemo<Set<SectionId>>(() => {
		const s = new Set<SectionId>([1]);
		if (fullName.trim() && email.trim()) s.add(2);
		if (hasWebsite === "yes" || (hasWebsite === "no" && hasDomain)) s.add(3);
		if (designCertainty && pageCount && timeline) s.add(4);
		if (textReady && photosReady && hasLogo) s.add(5);
		return s;
	}, [
		fullName,
		email,
		hasWebsite,
		hasDomain,
		designCertainty,
		pageCount,
		timeline,
		textReady,
		photosReady,
		hasLogo,
	]);

	const openSections = useMemo<Set<SectionId>>(
		() => new Set([...unlockedSections].filter((id) => !closedByUser.has(id))),
		[unlockedSections, closedByUser],
	);

	// True as soon as section 5 is open in the accordion
	const isSection5Open = openSections.has(5 as SectionId);

	// Guards against double-initialisation (React StrictMode, etc.)
	const calInitRef = useRef(false);

	// Defer initialising Cal.com until section 5 is open so the iframe
	// mounts into a container with real dimensions (after the 300ms animation).
	//
	// embed.js is NOT a standalone library — it upgrades a pre-existing shim.
	// The correct pattern is: install the official shim first, queue all
	// configuration calls, then let the shim load embed.js asynchronously.
	useEffect(() => {
		if (!isSection5Open || calInitRef.current) return;

		const timer = setTimeout(() => {
			if (calInitRef.current) return;
			calInitRef.current = true;

			/* eslint-disable @typescript-eslint/no-explicit-any */
			const w = window as any;

			// Official Cal.com shim — mirrors the inline embed snippet.
			// Queues calls made before embed.js arrives and auto-loads the script.
			if (!w.Cal) {
				const cal: any = function (...args: any[]) {
					if (!cal.loaded) {
						cal.ns = {};
						cal.q = cal.q || [];
						const s = document.createElement("script");
						s.src = "https://app.cal.eu/embed/embed.js";
						s.async = true;
						document.head.appendChild(s);
						cal.loaded = true;
					}
					if (args[0] === "init") {
						const ns = args[1];
						const api: any = function (...a: any[]) {
							api.q.push(a);
						};
						api.q = [];
						if (typeof ns === "string") {
							cal.ns[ns] = cal.ns[ns] || api;
							api.q.push(args);
							cal.q.push(["initNamespace", ns]);
						} else {
							cal.q.push(args);
						}
						return;
					}
					cal.q.push(args);
				};
				cal.q = [];
				cal.ns = {};
				w.Cal = cal;
			}
			/* eslint-enable @typescript-eslint/no-explicit-any */

			const Cal = w.Cal;
			Cal("init", "inline", { origin: "https://app.cal.eu" });
			Cal.ns.inline("inline", {
				elementOrSelector: "#cal-inline",
				calLink: "dehaas/free-consult",
				layout: "month_view",
				config: {
					name: fullName,
					email,
					notes: buildNotes(formRef.current),
				},
			});
			Cal.ns.inline("ui", {
				styles: { branding: { brandColor: "#000000" } },
				hideEventTypeDetails: false,
				layout: "month_view",
			});
			Cal.ns.inline("on", {
				action: "bookingSuccessful",
				callback: () => setSubmitted(true),
			});
		}, 400);

		return () => clearTimeout(timer);
	}, [isSection5Open]);

	// Auto-unlock next section when current section is complete
	function isComplete(id: SectionId): boolean {
		switch (id) {
			case 1:
				return !!fullName.trim() && !!email.trim();
			case 2:
				return (
					hasWebsite === "yes" || (hasWebsite === "no" && hasDomain !== "")
				);
			case 3:
				return designCertainty !== "" && pageCount !== "" && timeline !== "";
			case 4:
				return textReady !== "" && photosReady !== "" && hasLogo !== "";
			case 5:
				return false;
		}
	}

	function toggleSection(id: SectionId) {
		if (!unlockedSections.has(id)) return;
		setClosedByUser((prev) => {
			const next = new Set(prev);
			if (openSections.has(id)) next.add(id);
			else next.delete(id);
			return next;
		});
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

	if (submitted) {
		return (
			<div className="rounded-2xl border border-primary/30 bg-card px-6 py-10 text-center">
				<Check className="mx-auto mb-4 h-8 w-8 text-primary" />
				<h3 className="mb-1.5 text-base font-semibold text-foreground">
					Request received!
				</h3>
				<p className="text-sm text-muted-foreground">
					Check your email for the booking confirmation. Looking forward to our
					call.
				</p>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-3">
			<p className="mb-2 text-sm leading-relaxed text-muted-foreground">
				Fill in as much as you can. The more detail, the better — it helps me
				prepare so we can use our 30 minutes as well as possible. Nothing here
				is set in stone.
			</p>

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
							value={businessName}
							onChange={(e) => setBusinessName(e.target.value)}
							className={ic}
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
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							className={ic}
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
							onChange={(v) => {
								setHasWebsite(v as "yes" | "no");
								if (v === "yes") setHasDomain("");
							}}
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
									value={websiteUrl}
									onChange={(e) => setWebsiteUrl(e.target.value)}
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
									value={websiteProblem}
									onChange={(e) => setWebsiteProblem(e.target.value)}
									className={tc}
									placeholder="It's outdated, hard to find on Google, doesn't look good on mobile…"
								/>
							</div>
						</>
					)}

					{hasWebsite === "no" && (
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
					)}

					{hasWebsite === "no" && hasDomain === "yes" && (
						<div>
							<label htmlFor="domain-name" className={lc}>
								Domain name
							</label>
							<input
								id="domain-name"
								name="domain-name"
								type="text"
								value={domainName}
								onChange={(e) => setDomainName(e.target.value)}
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
						<span className={lc}>
							How sure are you about how the website should look?
						</span>
						<PillRadio
							name="design-certainty"
							options={[
								{ value: "1", label: "no idea" },
								{ value: "2", label: "rough idea" },
								{ value: "3", label: "pretty clear" },
								{ value: "4", label: "I know exactly" },
							]}
							value={designCertainty}
							onChange={setDesignCertainty}
						/>
					</div>

					<div>
						<span className={lc}>How many pages do you need?</span>
						<PillRadio
							name="page-count"
							options={[
								{ value: "1", label: "1" },
								{ value: "2", label: "2" },
								{ value: "3", label: "3" },
								{ value: "4", label: "4" },
								{ value: "more", label: "More" },
								{ value: "dont-know", label: "I don't know" },
							]}
							value={pageCount}
							onChange={setPageCount}
						/>
					</div>

					<div>
						<label htmlFor="functionality" className={lc}>
							Do you need any specific functionality?{" "}
							<span className="font-normal text-muted-foreground">
								(optional)
							</span>
						</label>
						<input
							id="functionality"
							name="functionality"
							type="text"
							value={functionalityText}
							onChange={(e) => setFunctionalityText(e.target.value)}
							className={ic}
							placeholder="e.g. contact form, image gallery, special animations"
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
								{ value: "no", label: "No, I need help" },
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
								{ value: "no", label: "No, I need help" },
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
							value={questions}
							onChange={(e) => setQuestions(e.target.value)}
							className={tc}
							placeholder="Anything you'd like to know before our call."
						/>
					</div>

					<div>
						<div className="mb-1.5 flex items-center gap-2">
							<span className="text-sm font-medium text-foreground">
								Pick a time that works for you
							</span>
						</div>
						<div id="cal-inline" style={{ minHeight: "450px" }} />
					</div>
				</div>
			</SectionShell>
		</div>
	);
}
