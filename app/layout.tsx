import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rialo Academy",
  description: "Learn the full-stack blockchain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}