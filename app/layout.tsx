import type { Metadata } from "next";
// Подключаем Google Font для технологичного вида
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image"; // Нужен для оптимизированных картинок

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Rialo Academy",
  description: "Интерактивная школа блокчейна нового поколения",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="h-full">
      <body className={`${inter.className} h-full bg-[#FFFBF5]`}>
        {/* Основной контент страницы */}
        {children}

        {/* Наш Агент-Учитель */}
        <div className="fixed bottom-5 right-5 z-50 pointer-events-none select-none">
          {/* pointer-events-none: чтобы сквозь него можно было кликать
            opacity-80: делаем его полупрозрачным
          */}
          <div className="relative w-32 h-32 opacity-80 hover:opacity-100 transition-opacity duration-300">
             
           <Image 
  src="/avatar.png.png" // Используем имя как на твоем скриншоте
  alt="Rialo Agent Guide" 
  width={200} 
  height={200}
  className="object-contain drop-shadow-2xl"
  priority
/>
          </div>
        </div>
      </body>
    </html>
  );
}