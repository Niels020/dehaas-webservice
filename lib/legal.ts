// Renders the bilingual privacy policy from markdown to HTML.
// Reads content/legal/privacy.{nl,en}.md, replaces {{placeholders}}
// with values from site.config.ts, and converts to HTML via remark.
//
// This runs at build time (server component), not in the browser.

import fs from "node:fs";
import path from "node:path";
import { remark } from "remark";
import html from "remark-html";
import { siteConfig } from "@/site.config";

// Maps template placeholders to siteConfig keys
const PLACEHOLDERS: Record<string, keyof typeof siteConfig> = {
	"{{client_name}}": "clientName",
	"{{kvk_number}}": "kvkNumber",
	"{{controller_address}}": "controllerAddress",
	"{{contact_email}}": "contactEmail",
	"{{site_url}}": "siteUrl",
	"{{data_processors}}": "dataProcessors",
	"{{effective_date}}": "effectiveDate",
};

export async function renderPolicy(locale: "nl" | "en"): Promise<string> {
	const file = path.join(
		process.cwd(),
		"content/legal",
		`privacy.${locale}.md`
	);
	let raw = fs.readFileSync(file, "utf8");

	// Strip the HTML comment block at the top (editor notes, not for visitors)
	raw = raw.replace(/^<!--[\s\S]*?-->\s*/, "");

	// Replace each {{placeholder}} with the real value from config
	for (const [token, key] of Object.entries(PLACEHOLDERS)) {
		raw = raw.replaceAll(token, String(siteConfig[key]));
	}

	// Convert markdown to HTML
	const result = await remark().use(html).process(raw);
	return result.toString();
}
