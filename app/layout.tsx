"use client";

import "./globals.css";
import React, { useState, useEffect } from "react";
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

  const getAgentMessage = () => {
    if (pathname === "/ai-agents") return "Sovereign AI is the final step. Machines with wallets, act natively.";
    if (pathname === "/developers") return "Rust & SVM: The highest performance stack in Web3.";
    return "Select a protocol module to begin deep integration.";
  };

  return (
    <body className="antialiased bg-[#010101] text-[#E8E3D5] overflow-x-hidden">
      <div className="fixed inset-0 z-0"><NexusBackground /></div>
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-40 h-20 flex items-center justify-between px-8 bg-[#010101]/60 backdrop-blur-xl border-b border-[#A9DDD3]/10">
          <div className="flex items-center space-x-6">
              <div className="p-2 bg-[#A9DDD3]/10 rounded-lg text-[#A9DDD3]"><Cpu size={22} /></div>
              <span className="text-xl font-black tracking-tighter text-[#A9DDD3] italic uppercase">RIALO ACADEMY</span>
          </div>
          <div className="font-mono text-[10px] text-[#A9DDD3]/40 tracking-[0.3em] uppercase">SYNC_STATUS: ACTIVE</div>
      </header>

      {/* CONTENT */}
      <div className="relative z-10 pt-20 pb-40">{children}</div>

      {/* TERMINAL LOGS */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] h-32 bg-[#010101]/95 border-t border-[#A9DDD3]/20 p-5 font-mono">
          <div className="max-w-7xl mx-auto flex items-start space-x-8">
              <div className="flex items-center space-x-2 text-[#A9DDD3] opacity-50 shrink-0">
                  <TerminalIcon size={14} className="animate-pulse" />
                  <span className="text-[10px] uppercase font-black">Live Node Logs</span>
              </div>
              <div className="flex-1 space-y-1 overflow-hidden">
                  {logs.map((log: string, i: number) => (
                      <p key={i} className="text-[10px] text-[#A9DDD3]/80 leading-none">{log}</p>
                  ))}
              </div>
          </div>
      </div>

      {/* AGENT */}
      <div className="fixed bottom-36 right-8 z-50 flex items-end space-x-4 pointer-events-none">
          <div className="p-4 rounded-xl max-w-xs mb-12 border border-[#A9DDD3]/20 bg-[#010101]/80 backdrop-blur-md shadow-2xl">
              <p className="text-[#A9DDD3] font-mono text-[9px] uppercase mb-1 font-bold">AI Mentor</p>
              <p className="text-[#E8E3D5] text-[11px] leading-relaxed italic">"{getAgentMessage()}"</p>
          </div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="relative w-32 h-32 md:w-44 md:h-44">
              <Image src="/avatar.png" alt="Rialo Mentor" width={176} height={176} className="object-contain" />
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