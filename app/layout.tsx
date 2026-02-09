import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Rialo Academy",
  description: "Интерактивная школа Rialo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}

        {/* Наш Агент-Викинг — теперь он знает свое место (в углу!) */}
        <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
          <div className="relative w-32 h-32 md:w-48 md:h-48 drop-shadow-2xl opacity-90">
            <Image 
              src="/avatar.png" 
              alt="Rialo Guide" 
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </body>
    </html>
  );
}