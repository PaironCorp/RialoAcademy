"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Globe, Trophy, Cpu, CheckCircle, Wifi, Lock, Unlock, ChevronRight } from 'lucide-react';
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
    if (!isBridgeActive) return;
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
      
      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {isCompleted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-[#010101]/95 backdrop-blur-2xl flex items-center justify-center p-6">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-[#A9DDD3]/10 border border-[#A9DDD3]/30 p-12 rounded-[3.5rem] text-center max-w-sm shadow-[0_0_50px_rgba(169,221,211,0.2)]">
                <CheckCircle className="text-[#A9DDD3] mx-auto mb-6" size={80} />
                <h2 className="text-3xl font-black text-[#E8E3D5] italic mb-2 uppercase tracking-tighter">Bridge Secured</h2>
                <Link href="/"><button className="w-full mt-8 py-5 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.3em] rounded-2xl hover:bg-white transition-all shadow-[0_0_30px_rgba(169,221,211,0.2)]">Return to Atrium</button></Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVIGATION */}
      <div className="max-w-6xl w-full mb-12 flex justify-between items-center">
        <Link href="/"><div className="flex items-center text-[#A9DDD3]/60 hover:text-[#A9DDD3] cursor-pointer font-mono text-[10px] uppercase tracking-[0.3em] transition-colors"><ArrowLeft className="mr-2" size={14} /> [ Back to Nexus ]</div></Link>
        <div className="bg-[#A9DDD3]/5 border border-[#A9DDD3]/20 px-5 py-2 rounded-full text-[#E8E3D5] font-mono text-[10px] uppercase tracking-widest">Mission 02: <span className="text-[#A9DDD3] font-bold text-glow-mint">The World Sensor</span></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#010101]/80 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-14 shadow-2xl relative">
                <h1 className="text-5xl md:text-7xl font-black text-[#E8E3D5] mb-8 tracking-tighter italic uppercase leading-[0.9]">The <span className="text-[#A9DDD3]">Rialo</span> <br/>Edge Interface</h1>
                <p className="text-[#E8E3D5]/70 text-lg font-medium leading-relaxed max-w-xl">Traditional blockchains suffer from the <strong className="text-white italic">"Oracle Gap"</strong>—data latency that kills real-time dApps.</p>

                {/* BRIDGE VISUALIZER */}
                <div className="mt-16 bg-white/[0.02] border border-white/5 rounded-[3.5rem] p-12 text-center relative overflow-hidden shadow-inner">
                    <div className="flex justify-around items-center mb-16 relative z-10">
                        <div className="flex flex-col items-center">
                            <motion.div animate={isBridgeActive ? { scale: [1, 1.05, 1], rotate: 360 } : {}} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className={`p-6 rounded-full border transition-all duration-700 ${isBridgeActive ? 'border-[#A9DDD3] text-[#A9DDD3] shadow-[0_0_40px_rgba(169,221,211,0.3)]' : 'border-white/10 text-white/10'}`}><Globe size={44} /></motion.div>
                            <span className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[#E8E3D5]/30 italic">Web2 World</span>
                        </div>
                        <div className="flex-1 px-10 relative">
                            <div className="h-[2px] w-full bg-white/5 relative">
                                <AnimatePresence>
                                    {isBridgeActive && (
                                        <>
                                            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} className="absolute inset-0 bg-[#A9DDD3]/40 shadow-[0_0_15px_#A9DDD3]" />
                                            {[...Array(6)].map((_, i) => (
                                                <motion.div key={i} initial={{ x: "-20%", opacity: 0 }} animate={{ x: "120%", opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.12, ease: "easeInOut" }} className="absolute top-[-6px] flex items-center">
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
                            <span className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[#A9DDD3] italic">Rialo L1</span>
                        </div>
                    </div>

                    <button 
                        onClick={toggleBridge} 
                        className={`px-12 py-5 rounded-full font-mono text-[11px] uppercase tracking-[0.4em] transition-all duration-500 border-2 
                        ${isBridgeActive ? 'bg-[#A9DDD3] text-[#010101] border-[#A9DDD3]' : 'bg-transparent text-[#A9DDD3] border-[#A9DDD3]/40 hover:bg-[#A9DDD3]/5 animate-pulse shadow-[0_0_20px_rgba(169,221,211,0.1)]'}`}
                    >
                        {isBridgeActive ? "BRIDGE ACTIVE // SYNCING" : "INITIALIZE NATIVE BRIDGE"}
                    </button>
                </div>
            </motion.div>
        </div>

        {/* SIDEBAR - NOW FULLY VISIBLE */}
        <div className="space-y-6">
            <div className="bg-[#E8E3D5]/[0.03] border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md relative z-20">
                <div className="flex items-center space-x-3 mb-8"><Trophy className="text-[#A9DDD3]" size={20} /><h3 className="text-[#E8E3D5] font-black tracking-widest uppercase text-xs">Mission Loot</h3></div>
                <div className="space-y-6 mb-10">
                    <div className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${isBridgeActive ? 'bg-[#A9DDD3]/5 border-[#A9DDD3]/20 shadow-[0_0_15px_rgba(169,221,211,0.05)]' : 'bg-white/5 border-white/5 opacity-40'}`}>
                        <div className="flex flex-col"><span className="text-[9px] font-mono text-[#A9DDD3]/60 uppercase mb-1">Experience</span><span className="text-base font-bold text-[#A9DDD3]">+1,500 XP</span></div>
                        <div className={`w-4 h-4 rounded-full bg-[#A9DDD3] ${isBridgeActive ? 'animate-ping' : ''}`} />
                    </div>
                </div>

                <button 
                    onClick={handleComplete} 
                    disabled={!isBridgeActive}
                    className={`w-full py-5 font-black uppercase text-xs tracking-[0.3em] rounded-xl transition-all flex items-center justify-center space-x-2
                    ${isBridgeActive ? 'bg-[#A9DDD3] text-[#010101] shadow-[0_0_30px_rgba(169,221,211,0.15)] hover:bg-white' : 'bg-white/5 text-white/20 cursor-not-allowed'}`}
                >
                    {isBridgeActive ? <><Unlock size={14} /> <span>COMPLETE MISSION</span></> : <><Lock size={14} /> <span>BRIDGE LOCKED</span></>}
                </button>
            </div>
        </div>
      </div>

      {/* --- REPOSITIONED ANALYSIS MODAL (NO OVERLAP) --- */}
      <AnimatePresence>
        {isBridgeActive && (
          <motion.div 
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
            className="fixed bottom-[440px] right-[28%] z-[60] p-8 bg-[#010101]/95 backdrop-blur-3xl border border-[#A9DDD3]/30 rounded-[3rem] max-w-lg shadow-[0_0_60px_rgba(169,221,211,0.15)] pointer-events-none"
          >
             <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-[#A9DDD3]/10 rounded-xl text-[#A9DDD3]"><Wifi size={24} className="animate-pulse" /></div>
                <span className="text-sm font-mono text-[#A9DDD3] uppercase tracking-[0.3em] font-bold">Analysis // World Sensor</span>
             </div>
             
             <div className="space-y-6 text-[#E8E3D5]">
                <p className="text-lg font-bold italic border-b border-white/10 pb-4">"Native connectivity is the core of Rialo."</p>
                <p className="text-sm leading-relaxed opacity-90">
                   By baking HTTPS-bridges natively into the consensus, we eliminate the 3rd-party "Oracle Tax". This allows for trustless, real-time data ingestion.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="p-6 bg-white/5 rounded-3xl border border-white/10"><p className="text-[11px] font-mono text-[#A9DDD3] uppercase mb-2">Latency</p><p className="text-xl font-black">12ms <span className="text-xs opacity-30 italic">Native</span></p></div>
                    <div className="p-6 bg-white/5 rounded-3xl border border-white/10"><p className="text-[11px] font-mono text-[#A9DDD3] uppercase mb-2">Security</p><p className="text-xl font-black">Direct <span className="text-xs opacity-30 italic">Consensus</span></p></div>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}