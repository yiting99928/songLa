import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import { Toaster } from "@/components/ui/toaster";
import { Noto_Sans, Prompt } from "next/font/google";

const noto_sans = Noto_Sans({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-noto-sans",
});

const prompt = Prompt({
	weight: "700",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-prompt",
});

export const metadata: Metadata = {
	title: "söngLa",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${noto_sans.variable} ${prompt.variable}`}>
			<body className="relative font-noto">
				<Header />
				<div className="min-h-[calc(100vh_-_50px)]">{children}</div>
				<Toaster />
			</body>
		</html>
	);
}
