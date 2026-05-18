import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const base = "https://dehaaswebservice.nl";
	return [
		{ url: base, changeFrequency: "monthly", priority: 1 },
		{ url: `${base}/services`, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${base}/faq`, changeFrequency: "monthly", priority: 0.7 },
		{ url: `${base}/contact`, changeFrequency: "yearly", priority: 0.9 },
		{ url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
	];
}
