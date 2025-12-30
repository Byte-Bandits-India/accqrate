// app/layout.tsx
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { Inter } from "next/font/google";

import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import FloatingPhone from "@/Components/FloatingPhone";
import BackToTop from "@/Components/BackToTop";

import { LoadingProvider } from "@/Util/LoadingContext";
import { CountryProvider } from "../contexts/CountryContext";
import LayoutContent from "./LayoutContentClient";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "ACCQRATE",
  description: "Business and Retail Solutions",
};

// Create a wrapper component that uses the loading context
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <CountryProvider>
          <LoadingProvider>
            <LayoutContent>{children}</LayoutContent>
          </LoadingProvider>
        </CountryProvider>
      </body>
    </html>
  );
}