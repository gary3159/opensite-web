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
    default: "Opensite — 香港裝修工程管理 App",
    template: "%s · Opensite",
  },
  description:
    "Opensite 幫你由報價到完工，一手掌握裝修項目。報價、材料、進度、成本 4 大模塊，手機一 App 搞掂。",
  keywords: [
    "Opensite",
    "裝修 App",
    "工程管理",
    "裝修報價",
    "裝修進度",
    "OpenSite 香港",
  ],
  authors: [{ name: "Opensite" }],
  creator: "Opensite",
  openGraph: {
    type: "website",
    locale: "zh_HK",
    url: siteUrl,
    title: "Opensite — 香港裝修工程管理 App",
    description: "由報價到完工，一手掌握裝修項目。",
    siteName: "Opensite",
  },
  twitter: {
    card: "summary_large_image",
    title: "Opensite — 香港裝修工程管理 App",
    description: "由報價到完工，一手掌握裝修項目。",
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
      lang="zh-HK"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg text-fg flex flex-col">
        {children}
      </body>
    </html>
  );
}