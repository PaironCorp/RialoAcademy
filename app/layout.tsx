import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { AcademyProvider } from "../context/AcademyContext";
import GlobalClientUI from "./GlobalClientUI"; // Мы создадим этот файл следующим шагом

// --- СЕКЦИЯ 1: ПРОФЕССИОНАЛЬНОЕ SEO (Builder Grade) ---
export const metadata: Metadata = {
  title: "Rialo Academy | The Forge of Sovereign Future",
  description: "Master 50ms finality and REX privacy with our Viking AI Mentor. Explore the Rialo Nexus architecture.",
  metadataBase: new URL('https://rialo-academy.vercel.app'),
  openGraph: {
    title: "Rialo Academy | Nexus V2.1",
    description: "Sovereign infrastructure for the machine economy. Featuring 50ms block times and REX computation.",
    url: 'https://rialo-academy.vercel.app',
    siteName: 'Rialo Academy',
    images: [{ url: '/images/logo.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rialo Academy',
    description: 'Forge your path in the Rialo Nexus.',
    images: ['/images/logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Подключение PWA Манифеста */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#010101" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <AcademyProvider>
        {/* Мы вынесли весь "use client" код в отдельный компонент для стабильности */}
        <GlobalClientUI>{children}</GlobalClientUI>
      </AcademyProvider>
    </html>
  );
}