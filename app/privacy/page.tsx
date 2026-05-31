import { renderPolicy } from "@/lib/legal";
import { siteConfig } from "@/site.config";

export const metadata = {
	title:
		siteConfig.defaultLocale === "nl"
			? "Privacyverklaring"
			: "Privacy notice",
};

export default async function PrivacyPage() {
	let body: string;
	try {
		body = await renderPolicy(siteConfig.defaultLocale);
	} catch (err) {
		console.error("Failed to render privacy policy:", err);
		body = "<p>Privacy policy unavailable.</p>";
	}
	return (
		<article className="prose mx-auto max-w-2xl px-4 py-12 dark:prose-invert">
			<div dangerouslySetInnerHTML={{ __html: body }} />
		</article>
	);
}
