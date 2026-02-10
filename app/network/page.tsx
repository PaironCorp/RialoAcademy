"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Globe, Star, Users, Zap, ShieldCheck, CheckCircle, FastForward, Award } from 'lucide-react';
import Link from 'next/link';
import { useAcademy } from "../../context/AcademyContext";

export default function NetworkAcademy() {
  const { addLog, setIsFocused } = useAcademy();
  const [isFinalized, setIsFinalized] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    addLog("[NETWORK]: Global node synchronization initiated...");
    addLog("[SYSTEM]: Finalizing Academy integration sequence."); 
    return () => setIsFocused(false);
  }, [addLog, setIsFocused]);

  const handleFinalize = () => {
    setIsSyncing(true);
    setIsFocused(true);
    addLog("[SYSTEM]: Synchronizing neural weights with the Nexus...");
    
    // Имитация финальной записи в блокчейн
    setTimeout(() => {
      const currentXp = parseInt(localStorage.getItem("rialo_xp") || "0");
      localStorage.setItem("rialo_xp", (currentXp + 5000).toString());
      localStorage.setItem("academy_complete", "true");
      
      setIsSyncing(false);
      setIsFinalized(true);
      addLog("[NETWORK]: Integration 100%. Architect Status: VERIFIED.");
    }, 2500);
  };

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10 transform-gpu overflow-hidden">
      
      {/* --- FINAL SUCCESS MODAL: СТАТУС АРХИТЕКТОРА --- */}
      <AnimatePresence>
        {isFinalized && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="fixed inset-0 z-[100] bg-[#010101]/98 flex items-center justify-center p-6 text-center"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 20 }} 
              animate={{ scale: 1, y: 0 }} 
              className="max-w-md p-12 bg-[#050505] border border-[#A9DDD3]/30 rounded-[4rem] shadow-[0_0_100px_rgba(169,221,211,0.2)]"
            >
                <Award className="text-[#A9DDD3] mx-auto mb-8 animate-bounce" size={100} />
                <h2 className="text-4xl md:text-5xl font-black text-[#E8E3D5] italic mb-4 uppercase tracking-tighter leading-none">
                  Architect <br/><span className="text-[#A9DDD3]">Verified</span>
                </h2>
                <p className="text-[#A9DDD3] font-mono text-[10px] tracking-[0.4em] uppercase mb-12 italic font-bold">Nexus Integration Complete</p>
                
                <Link href="/">
                    <button className="w-full py-6 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.4em] rounded-2xl hover:bg-white transition-all shadow-2xl">
                        Return to Sovereign Nexus
                    </button>
                </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HEADER --- */}
      <div className="max-w-6xl w-full mb-12 flex justify-between items-center relative z-10">
        <Link href="/"><div className="flex items-center text-[#A9DDD3]/60 hover:text-[#A9DDD3] cursor-pointer font-mono text-xs uppercase tracking-widest transition-colors"><ArrowLeft className="mr-2" size={14} /> [ Exit to Atrium ]</div></Link>
        <div className="bg-[#050505] border border-[#A9DDD3]/20 px-6 py-3 rounded-full text-[#E8E3D5] font-mono text-xs uppercase tracking-widest shadow-lg italic">
          Final Module: <span className="text-[#A9DDD3] font-bold">The Collective</span>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-5xl w-full text-center space-y-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <h1 className="text-6xl md:text-9xl font-black text-[#E8E3D5] tracking-tighter italic uppercase leading-none">
                The <span className="text-[#A9DDD3] text-glow-mint">Nexus</span> <br/>is Ready
              </h1>
              <p className="text-xl md:text-2xl text-[#E8E3D5]/50 max-w-3xl mx-auto italic font-medium leading-relaxed">
                  Rialo is the decentralized operating system for the AI-driven future. 
                  You have mastered the Sovereign Stack.
              </p>
          </motion.div>

          {/* STATS CARDS: ГЛАВНЫЕ ТЕХНОЛОГИИ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Zap, label: "Finality", value: "50ms" },
                { icon: ShieldCheck, label: "Security", value: "ZK-REX" },
                { icon: Users, label: "Economy", value: "Sovereign AI" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#080808] border border-white/10 p-10 rounded-[3rem] flex flex-col items-center shadow-inner group hover:border-[#A9DDD3]/30 transition-colors"
                >
                    <item.icon className="text-[#A9DDD3] mb-6 opacity-40 group-hover:opacity-100 transition-opacity" size={40} />
                    <p className="text-sm font-mono text-white/20 uppercase tracking-widest mb-2 font-bold">{item.label}</p>
                    <p className="text-3xl font-black text-[#E8E3D5] italic">{item.value}</p>
                </motion.div>
              ))}
          </div>

          {/* FINAL ACTION BUTTON */}
          <div className="pt-10">
            <button 
              onClick={handleFinalize} 
              disabled={isSyncing}
              className={`px-16 py-8 font-black uppercase text-sm tracking-[0.5em] rounded-full shadow-[0_0_60px_rgba(169,221,211,0.3)] transition-all active:scale-95
              ${isSyncing ? "bg-[#A9DDD3]/20 text-[#A9DDD3] animate-pulse cursor-wait" : "bg-[#A9DDD3] text-[#010101] hover:scale-105 hover:bg-white"}`}
            >
                {isSyncing ? "SYNCHRONIZING..." : "COMPLETE ARCHITECT PATH"}
            </button>
          </div>
      </div>
    </main>
  );
}