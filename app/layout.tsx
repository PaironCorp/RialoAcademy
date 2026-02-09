import type { Metadata } from "next";
import "./globals.css"; // Импорт стилей
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
      <body className="bg-[#FFFBF5]">
        {children}

        {/* Наш Агент-Викинг (будет виден на всех страницах) */}
        <div className="fixed bottom-8 right-8 z-50 pointer-events-none">
          <div className="relative w-40 h-40 opacity-90 drop-shadow-2xl">
            <Image 
              src="/avatar.png" // Файл должен лежать в папке public
              alt="Rialo Guide" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </body>
    </html>
  );
}