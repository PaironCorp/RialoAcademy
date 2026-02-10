"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Globe, Trophy, CheckCircle, Users, Zap, ShieldCheck, Cpu, Star } from 'lucide-react';
import Link from 'next/link';
import { useAcademy } from "../../context/AcademyContext";

export default function NetworkMission() {
  const { setIsFocused, addLog } = useAcademy();
  const [isCompleted, setIsCompleted] = useState(false);
  const [alreadyClaimed, setAlreadyClaimed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("mission_08_complete");
    if (saved === "true") setAlreadyClaimed(true);
    addLog("[SYSTEM]: Finalizing Neural Integration Protocol...");
    addLog("[NETWORK]: Global state synchronization: 100%");
    return () => setIsFocused(false);
  }, [setIsFocused, addLog]);

  const handleFinalize = () => {
    if (!alreadyClaimed) {
        const currentXp = parseInt(localStorage.getItem("rialo_xp") || "0");
        localStorage.setItem("rialo_xp", (currentXp + 10000).toString()); // Огромный бонус за финал
        localStorage.setItem("mission_08_complete", "true");
        setAlreadyClaimed(true);
    }
    setIsCompleted(true);
    addLog("[ACADEMY]: CONGRATULATIONS! Rialo Nexus Integration Complete.");
  };

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10">
      
      <AnimatePresence>
        {isCompleted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-[#010101]/98 backdrop-blur-3xl flex items-center justify-center p-6 text-center">
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="bg-[#A9DDD3]/10 border border-[#A9DDD3]/40 p-16 rounded-[4rem] max-w-lg shadow-[0_0_100px_rgba(169,221,211,0.2)]">
                <Star className="text-[#A9DDD3] mx-auto mb-8 animate-spin-slow" size={100} />
                <h2 className="text-5xl font-black text-[#E8E3D5] italic mb-4 uppercase tracking-tighter">Lvl Max Reached</h2>
                <p className="text-[#A9DDD3] font-mono text-xs tracking-[0.4em] uppercase mb-12">You are now a Rialo Architect</p>
                <Link href="/"><button className="w-full py-6 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.4em] rounded-2xl hover:bg-white transition-all shadow-2xl">Return to Sovereign Nexus</button></Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl w-full mb-12 flex justify-between items-center relative z-10">
        <Link href="/"><div className="flex items-center text-[#A9DDD3]/60 hover:text-[#A9DDD3] cursor-pointer font-mono text-[10px] uppercase tracking-[0.3em]"><ArrowLeft className="mr-2" size={14} /> [ Exit to Nexus ]</div></Link>
        <div className="bg-[#A9DDD3]/5 border border-[#A9DDD3]/20 px-6 py-3 rounded-full text-[#E8E3D5] font-mono text-[10px] uppercase tracking-widest shadow-lg">Final Mission: <span className="text-[#A9DDD3] font-bold">The Collective</span></div>
      </div>

      <div className="max-w-4xl w-full text-center space-y-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <h1 className="text-6xl md:text-9xl font-black text-[#E8E3D5] tracking-tighter italic uppercase leading-none">The <span className="text-[#A9DDD3] text-glow-mint text-glow-mint">Future</span> <br/>is Native</h1>
              <p className="text-xl text-[#E8E3D5]/60 max-w-2xl mx-auto italic font-medium leading-relaxed">
                  You have mastered the stack. Vertical integration, 50ms finality, and autonomous AI agents are now part of your neural signature.
              </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Zap, label: "Speed", value: "50ms" },
                { icon: ShieldCheck, label: "Security", value: "ZK-REX" },
                { icon: Globe, label: "World", value: "Edge-Direct" }
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ y: -10 }} className="bg-white/[0.03] border border-white/10 p-8 rounded-[2.5rem] flex flex-col items-center">
                    <item.icon className="text-[#A9DDD3] mb-4" size={32} />
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2">{item.label}</p>
                    <p className="text-2xl font-bold text-[#E8E3D5]">{item.value}</p>
                </motion.div>
              ))}
          </div>

          <button onClick={handleFinalize} className="px-16 py-8 bg-[#A9DDD3] text-[#010101] font-black uppercase text-sm tracking-[0.5em] rounded-full shadow-[0_0_60px_rgba(169,221,211,0.4)] hover:scale-105 transition-all">
              Finalize Neural Integration
          </button>
      </div>
    </main>
  );
}