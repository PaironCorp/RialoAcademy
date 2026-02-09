import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import NexusBackground from "@/components/NexusBackground"; // Импорт живого фона

export const metadata: Metadata = {
  title: "RIALO ACADEMY | The Nexus",
  description: "Advanced Blockchain Vertical Integration Learning Center",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-rialo-black selection:bg-rialo-mint selection:text-rialo-black">
        {/* Живая нейронная сеть на фоне */}
        <div className="fixed inset-0 z-0">
          <NexusBackground />
        </div>
        
        {/* Основной контент */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Агент-проводник с легким свечением */}
        <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
          <div className="relative w-32 h-32 md:w-44 md:h-44 opacity-80 drop-shadow-[0_0_20px_rgba(169,221,211,0.3)]">
            <Image 
              src="/avatar.png" 
              alt="Rialo Guide" 
              width={176}
              height={176}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </body>
    </html>
  );
}