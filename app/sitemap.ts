import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const base = "https://dehaaswebservice.nl";
	const lastModified = new Date();
	return [
		{ url: base, changeFrequency: "monthly", priority: 1, lastModified },
		{ url: `${base}/services`, changeFrequency: "monthly", priority: 0.8, lastModified },
		{ url: `${base}/faq`, changeFrequency: "monthly", priority: 0.7, lastModified },
		{ url: `${base}/contact`, changeFrequency: "yearly", priority: 0.9, lastModified },
		{ url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3, lastModified },
	];
}
