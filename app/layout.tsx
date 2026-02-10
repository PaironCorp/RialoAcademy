"use client";

import "./globals.css";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Terminal as TerminalIcon, BrainCircuit } from "lucide-react";
import NexusBackground from "../components/NexusBackground";
import { AcademyProvider, useAcademy } from "../context/AcademyContext";

// Внутренняя оболочка интерфейса (здесь живет Викинг и Терминал)
function GlobalUI({ children }: { children: React.ReactNode }) {
  const [xp, setXp] = useState(0);
  const pathname = usePathname();
  const { isFocused, logs, addLog } = useAcademy();

  useEffect(() => {
    const savedXp = typeof window !== "undefined" ? localStorage.getItem("rialo_xp") || "0" : "0";
    setXp(parseInt(savedXp));
  }, [pathname]);

  // Оптимизация логов для терминала (всего 3 строки для скорости)
  const visibleLogs = useMemo(() => logs.slice(0, 3), [logs]);

  const getAgentMessage = () => {
    if (pathname === "/") return "Welcome back. Select a protocol portal to continue your neural integration.";
    if (pathname === "/economics") return "Observe the vertical stack. Rialo eliminates the hidden taxes of middleware.";
    if (pathname === "/edge") return isFocused ? "Neural Link established. Edge connectivity active." : "Initialize the Bridge to witness native connectivity.";
    if (pathname === "/velocity") return isFocused ? "50ms finality achieved. This is the speed of global internet." : "Engage the Velocity Test to break the speed barrier.";
    if (pathname === "/privacy") return isFocused ? "REX active. Data is proven without being exposed." : "Initialize the REX Shield to secure your data.";
    if (pathname === "/developers") return "Rust & SVM: The ultimate environment for high-performance builders.";
    if (pathname === "/ai-agents") return "Sovereign AI. Machines that own wallets and execute logic natively.";
    return "Stay focused on the mission, Initiate.";
  };

  return (
    <body className="antialiased bg-[#010101] text-[#E8E3D5] overflow-x-hidden selection:bg-[#A9DDD3] selection:text-[#010101]">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20"><NexusBackground /></div>
      
      {/* HEADER: Технологичный заголовок */}
      <header className="fixed top-0 left-0 right-0 z-40 h-20 flex items-center justify-between px-8 bg-[#010101] border-b border-[#A9DDD3]/10">
          <div className="flex items-center space-x-6">
              <div className="p-2 bg-[#A9DDD3]/10 rounded-lg text-[#A9DDD3] border border-[#A9DDD3]/20 shadow-[0_0_15px_rgba(169,221,211,0.1)]">
                <Cpu size={22} />
              </div>
              <span className="text-xl font-black tracking-tighter text-[#A9DDD3] italic uppercase">RIALO ACADEMY</span>
          </div>
          <div className="font-mono text-[10px] text-[#A9DDD3]/40 tracking-[0.4em] uppercase font-bold italic">
            [ Neural_Link: Stable ]
          </div>
      </header>

      {/* CONTENT: Основной контент */}
      <div className="relative z-10 pt-20 pb-40">{children}</div>

      {/* TERMINAL: Техническая лента внизу */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] h-32 bg-[#050505] border-t border-[#A9DDD3]/20 p-5 font-mono shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
          <div className="max-w-7xl mx-auto flex items-start space-x-8">
              <div className="flex items-center space-x-2 text-[#A9DDD3] opacity-40 shrink-0">
                  <TerminalIcon size={14} />
                  <span className="text-[10px] uppercase font-black tracking-widest italic">Node_Stream</span>
              </div>
              <div className="flex-1 space-y-1.5 overflow-hidden transform-gpu">
                  {visibleLogs.map((log: string, i: number) => (
                      <p key={i} className="text-[10px] text-[#A9DDD3]/80 leading-none tracking-tight">
                        {log}
                      </p>
                  ))}
              </div>
          </div>
      </div>

      {/* --- ЖИВОЙ ЦИФРОВОЙ АВАТАР (ВИКИНГ-ПОМОЩНИК) --- */}
      <div className="fixed bottom-36 right-8 z-50 flex flex-col items-end pointer-events-none transform-gpu">
          <AnimatePresence mode="wait">
              <motion.div 
                  key={getAgentMessage()}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  className="mb-6 pointer-events-auto cursor-help"
              >
                  {/* Neural Chat Window: Контрастное и крупное */}
                  <div className="relative p-6 rounded-[2.5rem] max-w-[320px] bg-[#080808] border-2 border-[#A9DDD3]/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
                      <div className="absolute -bottom-3 right-12 w-6 h-6 bg-[#080808] border-r-2 border-b-2 border-[#A9DDD3]/30 rotate-45" />
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <BrainCircuit size={14} className="text-[#A9DDD3] animate-pulse" />
                        <span className="text-[#A9DDD3] font-mono text-[10px] uppercase tracking-[0.3em] font-black italic opacity-60">Neural Mentor</span>
                      </div>
                      
                      <p className="text-[#E8E3D5] text-[14px] leading-relaxed font-black italic tracking-tight">
                          "{getAgentMessage()}"
                      </p>
                      
                      {/* Индикатор "Мыслительного процесса" */}
                      <div className="mt-4 flex space-x-1.5 opacity-40">
                          <div className="w-1.5 h-1.5 bg-[#A9DDD3] rounded-full animate-bounce" />
                          <div className="w-1.5 h-1.5 bg-[#A9DDD3] rounded-full animate-bounce [animation-delay:0.2s]" />
                          <div className="w-1.5 h-1.5 bg-[#A9DDD3] rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                  </div>
              </motion.div>
          </AnimatePresence>

          {/* АВАТАР: Реагирует на фокус (эффект свечения и пульсация) */}
          <motion.div 
              animate={{ 
                  y: [0, -10, 0],
                  scale: isFocused ? 1.15 : 1,
              }} 
              transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 0.3 }
              }}
              className="relative w-32 h-32 md:w-48 md:h-48 cursor-pointer pointer-events-auto filter drop-shadow-[0_0_30px_rgba(169,221,211,0.2)]"
              onClick={() => addLog("[MENTOR]: Analyzing system dynamics...")}
          >
              <Image 
                  src="/avatar.png" 
                  alt="Rialo Mentor" 
                  width={192} 
                  height={192} 
                  className="object-contain" 
                  priority 
              />
              
              {/* Эффект нимба при активности (isFocused) */}
              <AnimatePresence>
                {isFocused && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1.2 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 bg-[#A9DDD3]/15 blur-[45px] rounded-full -z-10 shadow-[0_0_60px_rgba(169,221,211,0.1)]"
                    />
                )}
              </AnimatePresence>
          </motion.div>
      </div>
    </body>
  );
}

// ГЛАВНЫЙ ЭКСПОРТ (Исправляет ошибку "is not a module")
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <AcademyProvider>
        <GlobalUI>{children}</GlobalUI>
      </AcademyProvider>
    </html>
  );
}