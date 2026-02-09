import type { Metadata } from "next";
import "./globals.css"; // Это критически важно для дизайна!
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

        {/* Наш Агент-Викинг */}
        <div className="fixed bottom-5 right-5 z-50 pointer-events-none">
          <div className="relative w-40 h-40 opacity-90">
          <Image 
  src="/avatar.png" // Теперь путь совпадает с твоим файлом
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