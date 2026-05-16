import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const base = "https://dehaaswebservice.nl";
	return [
		{
			url: base,
			lastModified: new Date("2026-05-16"),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${base}/services`,
			lastModified: new Date("2026-05-16"),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${base}/faq`,
			lastModified: new Date("2026-05-16"),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${base}/contact`,
			lastModified: new Date("2026-05-16"),
			changeFrequency: "yearly",
			priority: 0.9,
		},
		{
			url: `${base}/privacy`,
			lastModified: new Date("2026-05-16"),
			changeFrequency: "yearly",
			priority: 0.3,
		},
	];
}
