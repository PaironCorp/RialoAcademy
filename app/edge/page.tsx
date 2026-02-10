"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Globe, Trophy, Cpu, CheckCircle, Activity, Wifi } from 'lucide-react';
import Link from 'next/link';
import { useAcademy } from "../../context/AcademyContext";

export default function RialoEdgeMission() {
  const { setIsFocused } = useAcademy();
  const [isCompleted, setIsCompleted] = useState(false);
  const [alreadyClaimed, setAlreadyClaimed] = useState(false);
  const [isBridgeActive, setIsBridgeActive] = useState(false);

  useEffect(() => {
    const savedStatus = localStorage.getItem("mission_02_complete");
    if (savedStatus === "true") setAlreadyClaimed(true);
    return () => setIsFocused(false);
  }, [setIsFocused]);

  const toggleBridge = () => {
    const newState = !isBridgeActive;
    setIsBridgeActive(newState);
    setIsFocused(newState);
  };

  const handleComplete = () => {
    if (!alreadyClaimed) {
        const currentXp = parseInt(localStorage.getItem("rialo_xp") || "0");
        localStorage.setItem("rialo_xp", (currentXp + 1500).toString());
        localStorage.setItem("mission_02_complete", "true");
        setAlreadyClaimed(true);
    }
    setIsCompleted(true);
    setIsFocused(false);
  };

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10">
      
      <AnimatePresence>
        {isCompleted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-[#010101]/95 backdrop-blur-2xl flex items-center justify-center p-6">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-[#A9DDD3]/10 border border-[#A9DDD3]/30 p-12 rounded-[3.5rem] text-center max-w-sm">
                <CheckCircle className="text-[#A9DDD3] mx-auto mb-6" size={80} />
                <h2 className="text-3xl font-black text-[#E8E3D5] italic mb-2 uppercase">Bridge Secured</h2>
                <Link href="/"><button className="w-full mt-8 py-5 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.3em] rounded-2xl hover:bg-white transition-all">Return to Atrium</button></Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl w-full mb-12 flex justify-between items-center">
        <Link href="/"><div className="flex items-center text-[#A9DDD3]/60 hover:text-[#A9DDD3] cursor-pointer font-mono text-[10px] uppercase tracking-[0.3em] transition-colors"><ArrowLeft className="mr-2" size={14} /> [ Return to Atrium ]</div></Link>
        <div className="bg-[#A9DDD3]/5 border border-[#A9DDD3]/20 px-5 py-2 rounded-full text-[#E8E3D5] font-mono text-[10px] uppercase tracking-widest shadow-[0_0_15px_rgba(169,221,211,0.1)]">Mission 02: <span className="text-[#A9DDD3] font-bold text-glow-mint">The World Sensor</span></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#010101]/80 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-12 shadow-2xl overflow-hidden relative">
                <h1 className="text-5xl md:text-7xl font-black text-[#E8E3D5] mb-8 tracking-tighter italic uppercase leading-[0.9]">The <span className="text-[#A9DDD3]">Rialo</span> <br/>Edge Interface</h1>
                <div className="space-y-6 text-[#E8E3D5]/70 text-lg md:text-xl font-medium leading-relaxed">
                    <p>Traditional blockchains are blind. Rialo Edge integrates HTTPS-bridges natively, eliminating 3rd-party latency.</p>
                </div>

                <div className="mt-16 bg-white/[0.02] border border-white/5 rounded-[3rem] p-12 text-center relative overflow-hidden shadow-inner">
                    <div className="flex justify-around items-center mb-16 relative z-10">
                        <div className="flex flex-col items-center">
                            <motion.div animate={isBridgeActive ? { scale: [1, 1.05, 1], rotate: 360 } : {}} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className={`p-6 rounded-full border transition-all duration-700 ${isBridgeActive ? 'border-[#A9DDD3] text-[#A9DDD3] shadow-[0_0_40px_rgba(169,221,211,0.3)]' : 'border-white/10 text-white/10'}`}><Globe size={44} /></motion.div>
                            <span className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[#E8E3D5]/30">Web2 Source</span>
                        </div>

                        <div className="flex-1 px-10 relative">
                            <div className="h-[2px] w-full bg-white/5 relative">
                                <AnimatePresence>
                                    {isBridgeActive && (
                                        <>
                                            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} className="absolute inset-0 bg-[#A9DDD3]/40 shadow-[0_0_15px_#A9DDD3]" />
                                            {[...Array(6)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ x: "-20%", opacity: 0 }}
                                                    animate={{ x: "120%", opacity: [0, 1, 0] }}
                                                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.12, ease: "easeInOut" }}
                                                    className="absolute top-[-6px] flex items-center"
                                                >
                                                    <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_15px_#ffffff] z-10"></div>
                                                    <div className="w-20 h-1 bg-gradient-to-r from-[#A9DDD3] to-transparent blur-[1px]"></div>
                                                </motion.div>
                                            ))}
                                        </>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <motion.div animate={isBridgeActive ? { boxShadow: ["0 0 20px rgba(169,221,211,0.1)", "0 0 40px rgba(169,221,211,0.4)", "0 0 20px rgba(169,221,211,0.1)"] } : {}} transition={{ duration: 1.5, repeat: Infinity }} className={`p-6 rounded-full border transition-colors duration-700 ${isBridgeActive ? 'border-[#A9DDD3] text-[#A9DDD3] bg-[#A9DDD3]/10' : 'border-white/10 text-white/10'}`}><Cpu size={44} /></motion.div>
                            <span className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[#A9DDD3]">Rialo L1</span>
                        </div>
                    </div>
                    <button onClick={toggleBridge} className={`px-12 py-5 rounded-full font-mono text-[11px] uppercase tracking-[0.4em] transition-all duration-500 border-2 ${isBridgeActive ? 'bg-[#A9DDD3] text-[#010101] border-[#A9DDD3] shadow-[0_0_40px_rgba(169,221,211,0.25)]' : 'bg-transparent text-[#A9DDD3] border-[#A9DDD3]/40 hover:bg-[#A9DDD3]/10'}`}>
                        {isBridgeActive ? "SYNC_ACTIVE // REAL-TIME" : "ESTABLISH HTTPS BRIDGE"}
                    </button>
                </div>
            </motion.div>
        </div>

        <div className="space-y-6">
            <div className="bg-[#E8E3D5]/[0.03] border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md">
                <div className="flex items-center space-x-3 mb-8"><Trophy className="text-[#A9DDD3]" size={20} /><h3 className="text-[#E8E3D5] font-black tracking-widest uppercase text-xs">Mission Loot</h3></div>
                <div className="space-y-6 mb-10"><div className="flex items-center justify-between p-5 bg-[#A9DDD3]/5 rounded-2xl border border-[#A9DDD3]/20"><div className="flex flex-col"><span className="text-[9px] font-mono text-[#A9DDD3]/60 uppercase mb-1">Experience</span><span className="text-base font-bold text-[#A9DDD3]">+1,500 XP</span></div><div className="w-4 h-4 rounded-full bg-[#A9DDD3] animate-ping" /></div></div>
                <button onClick={handleComplete} className="w-full py-5 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.3em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(169,221,211,0.2)]">{alreadyClaimed ? "MISSION SECURED" : "COMPLETE MISSION"}</button>
            </div>
        </div>
      </div>

      {/* --- LIVE AGENT SPEECH OVERLAY (УЛУЧШЕННАЯ ЧИТАЕМОСТЬ) --- */}
      <AnimatePresence>
        {isBridgeActive && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
            // Увеличена ширина (max-w-[280px]) и изменена позиция (bottom-44 right-40)
            className="fixed bottom-44 right-40 z-[60] p-6 bg-[#010101]/95 backdrop-blur-xl border-l-4 border-[#A9DDD3] rounded-r-2xl max-w-[280px] shadow-2xl pointer-events-none"
          >
             <div className="flex items-center space-x-2 mb-3">
                <Wifi size={16} className="text-[#A9DDD3] animate-pulse" />
                {/* Увеличен шрифт заголовка */}
                <span className="text-[10px] font-mono text-[#A9DDD3] uppercase tracking-widest">Neural Feed Active</span>
             </div>
             {/* Увеличен основной шрифт (text-sm) */}
             <p className="text-sm text-[#E8E3D5] leading-relaxed italic font-medium">
                "Detecting native HTTPS packets. Latency confirmed at <span className="text-[#A9DDD3] font-bold">12ms</span>. We have successfully bypassed the Oracle Tax, Initiate."
             </p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}