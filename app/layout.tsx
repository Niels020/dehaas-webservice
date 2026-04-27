import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderConstruction from "@/components/UnderConstruction";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "dehaas webservice — websites for small businesses",
		template: "%s | dehaas webservice",
	},
	description:
		"A personal web service that builds, maintains, and updates websites for small businesses. No jargon, honest pricing, a real person on the other end.",
	metadataBase: new URL("https://dehaaswebservice.nl"),
	icons: {
		icon: "/favicon.svg",
		shortcut: "/favicon.svg",
	},
	openGraph: {
		siteName: "dehaas webservice",
		locale: "nl_NL",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="nl"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className="flex min-h-full flex-col">
				<UnderConstruction />
				<Header />
				<main id="main-content" className="flex flex-1 flex-col">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
