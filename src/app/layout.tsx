import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Blinks",
  description: "Blinks by Ayush Agrawal",
  openGraph: {
    title: "Blinks",
    description: "Blinks by Ayush Agrawal",
    type: "website",
    url: "https://blinks.ayushagr.me",
    siteName: "Blinks",
    images: [
      {
        url: "https://blinks.ayushagr.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blinks",
      },
    ],
  },
  twitter: {
    creator: "@A91y",
    site: "@A91y",
    card: "summary_large_image",
    title: "Blinks",
    description: "Blinks by Ayush Agrawal",
    images: ["https://blinks.ayushagr.me/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-background text-foreground`}
      >
        <NextUIProvider>
          <main className="dark text-foreground bg-background flex flex-col items-center min-h-screen">
            {children}
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
