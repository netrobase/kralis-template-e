import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from '@/components/navbar/page'
import Footer from "@/components/footer/page";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "EduWave",
  description: "Kralis template for EduWave - Project E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
