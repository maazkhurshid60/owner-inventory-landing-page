import type { Metadata } from "next";
import { Geist, Geist_Mono, Onest } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/pages/navbar/Navbar";
import Footer from "@/components/pages/Footer";
import Lenis from "@studio-freight/lenis/types";
import LenisProvider from "@/components/pages/LenixProvider";


// Load fonts with CSS variable bindings
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Owners Inventory",
  description: "Grow Faster with Smarter Inventory Tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${onest.variable} antialiased`}
      >

        <Navbar/>
        <div>
    <LenisProvider>{children}</LenisProvider>
        </div>
        <Footer/>
     
      </body>
    </html>
  );
}
