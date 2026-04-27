import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const base = "https://dehaaswebservice.nl";
	return [
		{
			url: base,
			lastModified: new Date("2026-04-27"),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${base}/about`,
			lastModified: new Date("2026-04-27"),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${base}/faq`,
			lastModified: new Date("2026-04-27"),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${base}/contact`,
			lastModified: new Date("2026-04-27"),
			changeFrequency: "yearly",
			priority: 0.9,
		},
	];
}
