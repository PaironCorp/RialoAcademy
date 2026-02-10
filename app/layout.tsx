"use client";

import "./globals.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Terminal as TerminalIcon } from "lucide-react";
import NexusBackground from "../components/NexusBackground";
import { AcademyProvider, useAcademy } from "../context/AcademyContext";

// Внутренняя обертка интерфейса
function GlobalUI({ children }: { children: React.ReactNode }) {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const pathname = usePathname();
  const { isFocused, logs } = useAcademy(); // Теперь терминал видит логи!

  useEffect(() => {
    const savedXp = localStorage.getItem("rialo_xp") || "0";
    const totalXp = parseInt(savedXp);
    setXp(totalXp);
    setLevel(Math.floor(totalXp / 2000) + 1);
  }, [pathname]);

  const progress = (xp % 2000) / 20;

  const getAgentMessage = () => {
    if (pathname === "/") return "Welcome back. Select a portal to continue your neural integration.";
    if (pathname === "/economics") return "Analyze the capital flow. Rialo eliminates the hidden taxes.";
    if (pathname === "/edge") return isFocused ? "System synchronized. Data flowing natively." : "Initialize the Bridge.";
    if (pathname === "/velocity") return isFocused ? "50ms Threshold breached." : "Engage the Velocity Test.";
    if (pathname === "/privacy") return isFocused ? "REX Computation active. Proof verified." : "Initialize the REX Shield.";
    return "Stay focused, Initiate.";
  };

  return (
    <body className="antialiased bg-[#010101] text-[#E8E3D5] selection:bg-[#A9DDD3] selection:text-[#010101] overflow-x-hidden">
      <div className="fixed inset-0 z-0"><NexusBackground /></div>
      
      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-40 h-20 flex items-center justify-between px-8 bg-[#010101]/60 backdrop-blur-xl border-b border-[#A9DDD3]/10">
          <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#A9DDD3]/10 rounded-lg border border-[#A9DDD3]/30 text-[#A9DDD3]"><Cpu size={22} /></div>
                  <span className="text-xl font-black tracking-tighter text-[#A9DDD3] italic">RIALO <span className="text-[#E8E3D5] font-thin">ACADEMY</span></span>
              </div>
              <div className="hidden md:flex items-center space-x-4 border-l border-white/10 pl-6">
                  <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-[#A9DDD3]/50 uppercase tracking-widest">Neural Rank</span>
                      <span className="text-xs font-bold text-[#E8E3D5] uppercase">Lvl {level}</span>
                  </div>
                  <div className="w-32 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div animate={{ width: `${progress}%` }} className="h-full bg-[#A9DDD3] shadow-[0_0_10px_#A9DDD3]" />
                  </div>
              </div>
          </div>
          <div className="font-mono text-[10px] text-[#A9DDD3]/40 tracking-[0.3em] uppercase">SYNC_STATUS: ENCRYPTED</div>
      </header>

      {/* --- CONTENT --- */}
      <div className="relative z-10 pt-20 pb-40">{children}</div>

      {/* --- LIVE NEURAL TERMINAL --- */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] h-32 bg-[#010101]/90 backdrop-blur-2xl border-t border-[#A9DDD3]/20 p-5 font-mono shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <div className="max-w-7xl mx-auto flex items-start space-x-8">
              <div className="flex items-center space-x-2 text-[#A9DDD3] opacity-50 shrink-0">
                  <TerminalIcon size={14} className="animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest font-black">Live Node Logs</span>
              </div>
              <div className="flex-1 h-20 space-y-1.5 overflow-hidden">
                  <AnimatePresence initial={false}>
                      {logs.map((log: string, i: number) => (
                          <motion.p 
                            key={log + i} 
                            initial={{ opacity: 0, x: -10 }} 
                            animate={{ opacity: 1 - i * 0.2, x: 0 }} 
                            className="text-[10px] text-[#A9DDD3] leading-none tracking-tight font-medium"
                          >
                            {log}
                          </motion.p>
                      ))}
                  </AnimatePresence>
              </div>
          </div>
      </div>

      {/* --- AGENT (MOVED UP ABOVE TERMINAL) --- */}
      <div className="fixed bottom-36 right-8 z-50 flex items-end space-x-4 pointer-events-none">
          <AnimatePresence mode="wait">
              <motion.div 
                key={getAgentMessage()}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="agent-bubble p-4 rounded-xl max-w-xs mb-12 relative border border-[#A9DDD3]/20 bg-[#010101]/80 backdrop-blur-md shadow-2xl"
              >
                <p className="text-[#A9DDD3] font-mono text-[9px] uppercase mb-1 tracking-widest italic font-bold">AI Mentor</p>
                <p className="text-[#E8E3D5] text-[11px] leading-relaxed font-medium italic">"{getAgentMessage()}"</p>
              </motion.div>
          </AnimatePresence>

          <motion.div 
            animate={{ y: [0, -8, 0], scale: isFocused ? 1.1 : 1 }}
            transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
            className="relative w-32 h-32 md:w-44 md:h-44 drop-shadow-[0_0_40px_rgba(169,221,211,0.2)]"
          >
              <Image src="/avatar.png" alt="Rialo Mentor" width={176} height={176} className="object-contain" priority />
          </motion.div>
      </div>
    </body>
  );
}

// Финальный экспорт RootLayout для Next.js
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <AcademyProvider>
        <GlobalUI>{children}</GlobalUI>
      </AcademyProvider>
    </html>
  );
}