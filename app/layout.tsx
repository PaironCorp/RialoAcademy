"use client";

import "./globals.css";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Terminal as TerminalIcon } from "lucide-react";
import NexusBackground from "../components/NexusBackground";
import { AcademyProvider, useAcademy } from "../context/AcademyContext";

function GlobalUI({ children }: { children: React.ReactNode }) {
  const [xp, setXp] = useState(0);
  const pathname = usePathname();
  const { isFocused, logs } = useAcademy();

  useEffect(() => {
    const savedXp = typeof window !== "undefined" ? localStorage.getItem("rialo_xp") || "0" : "0";
    setXp(parseInt(savedXp));
  }, [pathname]);

  // ОПТИМИЗАЦИЯ: Показываем только последние 3 сообщения, чтобы не тормозить DOM
  const visibleLogs = useMemo(() => logs.slice(0, 3), [logs]);

  const getAgentMessage = () => {
    if (pathname === "/ai-agents") return "Sovereign AI: machines with wallets and native agency.";
    if (pathname === "/developers") return "SVM is the multi-threaded future of smart contracts.";
    return "Select a protocol module to begin deep integration.";
  };

  return (
    <body className="antialiased bg-[#010101] text-[#E8E3D5] overflow-x-hidden selection:bg-[#A9DDD3] selection:text-[#010101]">
      {/* ФОН: Ограничиваем прозрачность, чтобы видеокарта не перегревалась */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30"><NexusBackground /></div>
      
      {/* HEADER: Упрощенный стиль без тяжелого blur */}
      <header className="fixed top-0 left-0 right-0 z-40 h-20 flex items-center justify-between px-8 bg-[#010101]/90 border-b border-[#A9DDD3]/10">
          <div className="flex items-center space-x-6">
              <div className="p-2 bg-[#A9DDD3]/10 rounded-lg text-[#A9DDD3]"><Cpu size={22} /></div>
              <span className="text-xl font-black tracking-tighter text-[#A9DDD3] italic uppercase">RIALO ACADEMY</span>
          </div>
          <div className="font-mono text-[10px] text-[#A9DDD3]/40 tracking-[0.3em] uppercase">SYNC_STATUS: ACTIVE</div>
      </header>

      <div className="relative z-10 pt-24 pb-48">{children}</div>

      {/* TERMINAL: Чистый черный фон вместо размытия — это в 10 раз быстрее */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] h-32 bg-[#050505] border-t border-[#A9DDD3]/20 p-5 font-mono shadow-2xl">
          <div className="max-w-7xl mx-auto flex items-start space-x-8">
              <div className="flex items-center space-x-2 text-[#A9DDD3] opacity-50 shrink-0">
                  <TerminalIcon size={14} />
                  <span className="text-[10px] uppercase font-black tracking-widest">Node_Logs</span>
              </div>
              <div className="flex-1 space-y-1 overflow-hidden transform-gpu">
                  {visibleLogs.map((log: string, i: number) => (
                      <p key={i} className="text-[10px] text-[#A9DDD3]/80 leading-tight">
                        {log}
                      </p>
                  ))}
              </div>
          </div>
      </div>

      {/* AGENT: Ускоренная анимация через аппаратное ускорение (transform-gpu) */}
      <div className="fixed bottom-36 right-8 z-50 flex items-end space-x-4 pointer-events-none transform-gpu">
          <div className="p-4 rounded-xl max-w-xs mb-12 border border-[#A9DDD3]/10 bg-[#080808] shadow-2xl">
              <p className="text-[#A9DDD3] font-mono text-[9px] uppercase mb-1 font-bold italic">AI Mentor</p>
              <p className="text-[#E8E3D5] text-[11px] leading-relaxed italic">"{getAgentMessage()}"</p>
          </div>
          <motion.div 
            animate={{ y: [0, -6, 0] }} 
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