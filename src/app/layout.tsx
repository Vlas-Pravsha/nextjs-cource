import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="min-h-screen bg-background">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
