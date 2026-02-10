"use client";
import "./globals.css";
import Image from "next/image";
import NexusBackground from "../components/NexusBackground";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu } from "lucide-react";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const pathname = usePathname();

  useEffect(() => {
    const savedXp = localStorage.getItem("rialo_xp") || "0";
    const totalXp = parseInt(savedXp);
    setXp(totalXp);
    setLevel(Math.floor(totalXp / 2000) + 1);
  }, [pathname]); // Обновляем при смене страницы

  // --- ДИНАМИЧЕСКИЕ РЕПЛИКИ АГЕНТА ---
  const getAgentMessage = () => {
    if (pathname === "/") return "Welcome back, Initiate. Our Nexus is expanding. Select a portal to continue your integration.";
    if (pathname === "/economics") return "Watch the capital leak in legacy systems. Rialo's vertical stack is the only cure for this tax.";
    if (pathname === "/edge") return "We are now at the Edge. Here, the blockchain finally feels the real world through native sensors.";
    return "Stay focused. Every bit of data here is a step toward full-stack mastery.";
  };

  const progress = (xp % 2000) / 20;

  return (
    <html lang="en">
      <body className="antialiased bg-[#010101]">
        <div className="fixed inset-0 z-0"><NexusBackground /></div>
        
        <header className="fixed top-0 left-0 right-0 z-40 h-20 flex items-center justify-between px-8 bg-[#010101]/60 backdrop-blur-xl border-b border-rialo-mint/10">
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                    <div className="p-2 bg-rialo-mint/10 rounded-lg border border-rialo-mint/30 text-rialo-mint neon-border-glow"><Cpu size={22} /></div>
                    <span className="text-xl font-black tracking-tighter text-rialo-mint italic text-glow-mint">RIALO <span className="text-rialo-beige font-thin">ACADEMY</span></span>
                </div>
                <div className="hidden md:flex items-center space-x-4 border-l border-white/10 pl-6">
                    <div className="flex flex-col">
                        <span className="text-[9px] font-mono text-rialo-mint/50 uppercase tracking-widest">Neural Rank</span>
                        <span className="text-xs font-bold text-rialo-beige uppercase">Initiate [Lvl {level}]</span>
                    </div>
                    <div className="w-32 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <motion.div animate={{ width: `${progress}%` }} className="h-full bg-rialo-mint shadow-[0_0_10px_#A9DDD3]" />
                    </div>
                </div>
            </div>
            <div className="font-mono text-[10px] text-rialo-mint/40 tracking-[0.3em] uppercase flex items-center">
                <span className="w-1.5 h-1.5 bg-rialo-mint rounded-full mr-2 animate-pulse" />
                SYNC_STATUS: <span className="text-rialo-mint ml-1">ENCRYPTED</span>
            </div>
        </header>

        <div className="relative z-10 pt-20">{children}</div>

        {/* --- DYNAMIC AI GUIDE --- */}
        <div className="fixed bottom-8 right-8 z-50 flex items-end space-x-4 pointer-events-none">
             <AnimatePresence mode="wait">
                 <motion.div 
                   key={pathname}
                   initial={{ opacity: 0, x: 20 }} 
                   animate={{ opacity: 1, x: 0 }} 
                   exit={{ opacity: 0, x: 20 }}
                   className="agent-bubble p-4 rounded-xl max-w-xs mb-12 relative"
                 >
                    <p className="text-rialo-mint font-mono text-[9px] uppercase mb-2 tracking-widest italic">AI Guide // Analysis</p>
                    <p className="text-rialo-beige text-[11px] leading-relaxed font-medium">
                       "{getAgentMessage()}"
                    </p>
                 </motion.div>
             </AnimatePresence>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative w-32 h-32 md:w-44 md:h-44 drop-shadow-[0_0_30px_rgba(169,221,211,0.3)]">
                <Image src="/avatar.png" alt="Rialo AI Guide" width={176} height={176} className="object-contain" priority />
            </motion.div>
        </div>
      </body>
    </html>
  );
}