"use client";

import "./globals.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu } from "lucide-react";
import NexusBackground from "../components/NexusBackground";
import { AcademyProvider, useAcademy } from "../context/AcademyContext";

function GlobalUI({ children }: { children: React.ReactNode }) {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const pathname = usePathname();
  const { isFocused } = useAcademy();

  useEffect(() => {
    const savedXp = localStorage.getItem("rialo_xp") || "0";
    const totalXp = parseInt(savedXp);
    setXp(totalXp);
    setLevel(Math.floor(totalXp / 2000) + 1);
  }, [pathname]);

  const progress = (xp % 2000) / 20;

  const getAgentMessage = () => {
    if (pathname === "/") return "Welcome back. Select a portal to continue your neural integration.";
    if (pathname === "/economics") return "Observe the middleware drain. Rialo's stack eliminates the hidden taxes.";
    if (pathname === "/edge") return isFocused ? "System synchronized. Data is flowing through the L1 core." : "Initialize the Bridge to witness native connectivity.";
    if (pathname === "/velocity") return isFocused ? "50ms Threshold breached. This is the speed of global internet." : "Engage the Velocity Test to break the speed barrier.";
    if (pathname === "/workflows") return isFocused ? "Autonomous logic confirmed. Code that triggers itself." : "Deploy the workflow to see Rialo's autonomous engine.";
    if (pathname === "/privacy") return isFocused ? "REX Computation active. The validators see the proof, never the data." : "Privacy is a human right. Initialize the REX Shield."; // НОВАЯ РЕПЛИКА
    return "Stay focused on the mission, Initiate.";
  };

  return (
    <body className="antialiased bg-[#010101] text-[#E8E3D5] selection:bg-[#A9DDD3] selection:text-[#010101]">
      <div className="fixed inset-0 z-0"><NexusBackground /></div>
      
      <header className="fixed top-0 left-0 right-0 z-40 h-20 flex items-center justify-between px-8 bg-[#010101]/60 backdrop-blur-xl border-b border-[#A9DDD3]/10">
          <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#A9DDD3]/10 rounded-lg border border-[#A9DDD3]/30 text-[#A9DDD3]"><Cpu size={22} /></div>
                  <span className="text-xl font-black tracking-tighter text-[#A9DDD3] italic">RIALO <span className="text-[#E8E3D5] font-thin">ACADEMY</span></span>
              </div>
              <div className="hidden md:flex items-center space-x-4 border-l border-white/10 pl-6">
                  <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-[#A9DDD3]/50 uppercase tracking-widest">Neural Rank</span>
                      <span className="text-xs font-bold text-[#E8E3D5] uppercase">Initiate [Lvl {level}]</span>
                  </div>
                  <div className="w-32 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div animate={{ width: `${progress}%` }} className="h-full bg-[#A9DDD3] shadow-[0_0_10px_#A9DDD3]" />
                  </div>
              </div>
          </div>
          <div className="font-mono text-[10px] text-[#A9DDD3]/40 tracking-[0.3em] uppercase flex items-center">
              <span className="w-1.5 h-1.5 bg-[#A9DDD3] rounded-full mr-2 animate-pulse" />SYNC_STATUS: <span className="text-[#A9DDD3] ml-1">ENCRYPTED</span>
          </div>
      </header>

      <div className="relative z-10 pt-20">{children}</div>

      <div className="fixed bottom-8 right-8 z-50 flex items-end space-x-4 pointer-events-none">
          <AnimatePresence mode="wait">
              <motion.div 
                key={getAgentMessage()}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="agent-bubble p-4 rounded-xl max-w-xs mb-12 relative"
              >
                <p className="text-[#A9DDD3] font-mono text-[9px] uppercase mb-1 tracking-widest italic">AI Mentor // Voice</p>
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <AcademyProvider><GlobalUI>{children}</GlobalUI></AcademyProvider>
    </html>
  );
}