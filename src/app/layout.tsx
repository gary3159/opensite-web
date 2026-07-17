import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://opensite-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Opensite — Build your site with AI",
    template: "%s · Opensite",
  },
  description:
    "Opensite is the AI-native platform that builds your business website, content, and growth engine — in minutes. Available on iOS, Android, and Web.",
  keywords: [
    "Opensite",
    "AI website builder",
    "AI app",
    "site generator",
    "business website",
    "OpenSite app",
  ],
  authors: [{ name: "Opensite" }],
  creator: "Opensite",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Opensite — Build your site with AI",
    description:
      "AI-native platform to build your business website, content, and growth engine in minutes.",
    siteName: "Opensite",
  },
  twitter: {
    card: "summary_large_image",
    title: "Opensite — Build your site with AI",
    description:
      "AI-native platform to build your business website, content, and growth engine in minutes.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg text-fg flex flex-col">
        {children}
      </body>
    </html>
  );
}