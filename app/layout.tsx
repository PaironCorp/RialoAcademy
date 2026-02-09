import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import NexusBackground from "../components/NexusBackground"; // Путь теперь точный

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
      <body className="antialiased bg-[#010101] selection:bg-[#A9DDD3] selection:text-[#010101]">
        {/* Living Nexus Network Background */}
        <div className="fixed inset-0 z-0">
          <NexusBackground />
        </div>
        
        {/* Content Layer */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Neural Guide Agent */}
        <div className="fixed bottom-6 right-6 z-50 pointer-events-none drop-shadow-[0_0_20px_rgba(169,221,211,0.25)]">
          <div className="relative w-32 h-32 md:w-44 md:h-44 opacity-80">
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