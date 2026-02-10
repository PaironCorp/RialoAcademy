"use client";

import "./globals.css";
import React, { useState, useEffect, useMemo } from "react";
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
    const savedXp = typeof window !== "undefined" ? localStorage.getItem("rialo_xp") || "0" : "0";
    setXp(parseInt(savedXp));
  }, [pathname]);

  // ОПТИМИЗАЦИЯ: Только 3 лога и НИКАКИХ сложных анимаций в терминале
  const visibleLogs = useMemo(() => logs.slice(0, 3), [logs]);

  return (
    <body className="antialiased bg-[#010101] text-[#E8E3D5] overflow-x-hidden transform-gpu">
      {/* ФОН: Статичная прозрачность без блюра */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20"><NexusBackground /></div>
      
      <header className="fixed top-0 left-0 right-0 z-40 h-20 flex items-center justify-between px-8 bg-[#050505] border-b border-[#A9DDD3]/10">
          <div className="flex items-center space-x-6 text-[#A9DDD3]">
              <Cpu size={22} />
              <span className="text-xl font-black italic uppercase tracking-tighter">RIALO ACADEMY</span>
          </div>
          <div className="font-mono text-[10px] text-[#A9DDD3]/40 tracking-[0.3em]">STATE: SYNCED</div>
      </header>

      <div className="relative z-10 pt-24 pb-48">{children}</div>

      {/* TERMINAL: Чистый черный фон (bg-[#050505]) — самый быстрый вариант */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] h-32 bg-[#050505] border-t border-[#A9DDD3]/20 p-5 font-mono">
          <div className="max-w-7xl mx-auto flex items-start space-x-8">
              <div className="flex items-center space-x-2 text-[#A9DDD3] opacity-40 shrink-0">
                  <TerminalIcon size={14} />
                  <span className="text-[10px] uppercase font-black tracking-widest">Node_Logs</span>
              </div>
              <div className="flex-1 space-y-1 overflow-hidden">
                  {visibleLogs.map((log: string, i: number) => (
                      <p key={i} className="text-[10px] text-[#A9DDD3]/80 leading-tight">{log}</p>
                  ))}
              </div>
          </div>
      </div>

      {/* AGENT: Простая анимация transform-gpu */}
      <div className="fixed bottom-36 right-8 z-50 flex items-end space-x-4 pointer-events-none">
          <div className="p-4 rounded-xl max-w-xs mb-12 border border-[#A9DDD3]/10 bg-[#080808] shadow-2xl">
              <p className="text-[#A9DDD3] font-mono text-[9px] uppercase mb-1 font-bold italic">AI Mentor</p>
              <p className="text-[#E8E3D5] text-[11px] leading-relaxed italic font-medium">"System optimization active. Neural link stabilized."</p>
          </div>
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="relative w-32 h-32 md:w-40 md:h-40">
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