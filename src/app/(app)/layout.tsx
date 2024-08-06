import type { Metadata } from "next";
import "./globals.css";
import {Nunito, Sansita } from 'next/font/google';
import Topbar from "@/components/shared/TopBar/topBar";
import FooterDiv from "@/components/shared/Footer/footer";
import { Arima } from "next/font/google";

const finlandacia = Arima({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: "Luminous Life Foundation",
    template: "%s | Luminous Life Foundation",
  },
  icons: {
    icon: "/assets/sent.svg",
  },
  
  description: "An NGO Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-[100%] overflow-x-hidden">
      <body className={`h-full flex flex-col justify-between w-[100%] overflow-x-hidden ${finlandacia.className}`}>
        <Topbar/>
        {children}
        <FooterDiv/>
      </body>
    </html>
  );
}

