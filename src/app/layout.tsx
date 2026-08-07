import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oakstonerenovations.ie"),

  title: {
    default: "Oakstone Renovations",
    template: "%s | Oakstone Renovations",
  },

  description:
    "Premium home renovation specialists serving Dublin, Kildare, Wicklow, and Meath. From kitchens and bathrooms to full home renovations and extensions, we deliver quality craftsmanship built to last.",

  keywords: [
    "Oakstone Renovations",
    "Home Renovation Dublin",
    "Kitchen Renovation",
    "Bathroom Renovation",
    "Home Extensions",
    "Full Home Renovation",
    "Dublin",
    "Kildare",
    "Wicklow",
    "Meath",
  ],

  authors: [
    {
      name: "Oakstone Renovations",
    },
  ],

  creator: "Oakstone Renovations",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://oakstonerenovations.ie",
    title: "Oakstone Renovations",
    description:
      "Premium home renovation specialists serving Dublin, Kildare, Wicklow, and Meath.",
    siteName: "Oakstone Renovations",
  },

  twitter: {
    card: "summary_large_image",
    title: "Oakstone Renovations",
    description:
      "Premium home renovation specialists serving Dublin, Kildare, Wicklow, and Meath.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
