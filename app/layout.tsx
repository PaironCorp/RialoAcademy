"use client";

import "./globals.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Cpu, Terminal as TerminalIcon } from "lucide-react";
import NexusBackground from "../components/NexusBackground";
import { AcademyProvider, useAcademy } from "../context/AcademyContext";

function GlobalUI({ children }: { children: React.ReactNode }) {
  const [xp, setXp] = useState(0);
  const pathname = usePathname();
  const { logs } = useAcademy();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setXp(parseInt(localStorage.getItem("rialo_xp") || "0"));
    }
  }, [pathname]);

  return (
    <body className="antialiased bg-[#010101] text-[#E8E3D5] overflow-x-hidden">
      {/* ФОН: Изолируем в отдельный слой через opacity и pointer-events */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 will-change-opacity">
        <NexusBackground />
      </div>
      
      {/* HEADER: Чистый черный фон без размытия */}
      <header className="fixed top-0 left-0 right-0 z-40 h-20 flex items-center justify-between px-8 bg-[#010101] border-b border-[#A9DDD3]/10">
          <div className="flex items-center space-x-6">
              <Cpu size={22} className="text-[#A9DDD3]" />
              <span className="text-xl font-black tracking-tighter text-[#A9DDD3] italic uppercase">RIALO ACADEMY</span>
          </div>
          <div className="font-mono text-[10px] text-[#A9DDD3]/30 uppercase tracking-[0.3em]">STATE: STABLE</div>
      </header>

      {/* CONTENT */}
      <div className="relative z-10 pt-24 pb-48">{children}</div>

      {/* TERMINAL: Полностью статичный фон для разгрузки видеокарты */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] h-32 bg-[#050505] border-t border-[#A9DDD3]/10 p-5 font-mono shadow-[0_-10px_50px_rgba(0,0,0,0.9)]">
          <div className="max-w-7xl mx-auto flex items-start space-x-8">
              <div className="flex items-center space-x-2 text-[#A9DDD3] opacity-40 shrink-0">
                  <TerminalIcon size={14} />
                  <span className="text-[10px] uppercase font-bold">Node_Output</span>
              </div>
              <div className="flex-1 space-y-1 overflow-hidden transform-gpu">
                  {logs.map((log: string, i: number) => (
                      <p key={i} className="text-[10px] text-[#A9DDD3]/70 leading-tight border-l border-[#A9DDD3]/10 pl-3">{log}</p>
                  ))}
              </div>
          </div>
      </div>

      {/* AGENT: Упрощенная анимация */}
      <div className="fixed bottom-36 right-8 z-50 flex items-end space-x-4 pointer-events-none transform-gpu">
          <div className="p-4 rounded-xl max-w-xs mb-12 border border-[#A9DDD3]/10 bg-[#050505] shadow-2xl">
              <p className="text-[#A9DDD3] font-mono text-[9px] uppercase mb-1 font-bold">AI Mentor</p>
              <p className="text-[#E8E3D5] text-[11px] leading-relaxed italic opacity-80">"System core optimized for high-load operations."</p>
          </div>
          <motion.div 
            animate={{ y: [0, -5, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="relative w-32 h-32 md:w-40 md:h-40"
          >
              <Image src="/avatar.png" alt="Rialo Mentor" width={160} height={160} className="object-contain" priority />
          </motion.div>
      </div>
    </body>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <AcademyProvider><GlobalUI>{children}</GlobalUI></AcademyProvider>
    </html>
  );
}