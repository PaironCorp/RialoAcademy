"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Globe, Zap, ShieldCheck, Trophy, Cpu, CheckCircle, Activity, Sparkles, Database, Wifi } from 'lucide-react';
import Link from 'next/link';

export default function RialoEdgeMission() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [alreadyClaimed, setAlreadyClaimed] = useState(false);
  const [isBridgeActive, setIsBridgeActive] = useState(false);

  useEffect(() => {
    const savedStatus = localStorage.getItem("mission_02_complete");
    if (savedStatus === "true") setAlreadyClaimed(true);
  }, []);

  const handleComplete = () => {
    if (!alreadyClaimed) {
        const currentXp = parseInt(localStorage.getItem("rialo_xp") || "0");
        localStorage.setItem("rialo_xp", (currentXp + 1500).toString());
        localStorage.setItem("mission_02_complete", "true");
        setAlreadyClaimed(true);
    }
    setIsCompleted(true);
  };

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10">
      
      {/* --- SUCCESS MODAL --- */}
      <AnimatePresence>
        {isCompleted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-[#010101]/95 backdrop-blur-2xl flex items-center justify-center p-6">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-rialo-mint/10 border border-rialo-mint/30 p-12 rounded-[3.5rem] text-center max-w-sm">
                <CheckCircle className="text-rialo-mint mx-auto mb-6" size={80} />
                <h2 className="text-3xl font-black text-rialo-beige italic mb-2 uppercase tracking-tighter">Edge Secured</h2>
                <p className="text-rialo-mint font-mono text-[10px] tracking-widest uppercase mb-10">Native Connectivity Established</p>
                <Link href="/">
                    <button className="w-full py-5 bg-rialo-mint text-rialo-black font-black uppercase text-xs tracking-[0.3em] rounded-2xl hover:bg-white transition-all shadow-[0_0_30px_rgba(169,221,211,0.2)]">
                        Return to Atrium
                    </button>
                </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- NAVIGATION --- */}
      <div className="max-w-6xl w-full mb-12 flex justify-between items-center">
        <Link href="/">
          <motion.div whileHover={{ x: -5 }} className="flex items-center text-rialo-mint/60 hover:text-rialo-mint cursor-pointer font-mono text-[10px] uppercase tracking-[0.3em] transition-colors">
            <ArrowLeft className="mr-2" size={14} /> [ Return to Atrium ]
          </motion.div>
        </Link>
        <div className="bg-rialo-mint/5 border border-rialo-mint/20 px-5 py-2 rounded-full text-rialo-beige font-mono text-[10px] uppercase tracking-widest shadow-[0_0_15px_rgba(169,221,211,0.1)]">
            Mission 02: <span className="text-rialo-mint font-bold text-glow-mint">The World Sensor</span>
        </div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#010101]/80 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-12 relative overflow-hidden shadow-2xl">
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-rialo-mint/5 blur-[100px] rounded-full pointer-events-none"></div>

                <p className="text-rialo-mint font-mono text-[9px] tracking-[0.5em] mb-4 uppercase opacity-60 italic">Connectivity Layer // World Interface</p>
                <h1 className="text-5xl md:text-7xl font-black text-rialo-beige mb-8 tracking-tighter italic uppercase leading-[0.9]">
                    The <span className="text-rialo-mint text-glow-mint">Rialo</span> <br/>Edge Interface
                </h1>
                
                <div className="space-y-6 text-rialo-beige/70 text-lg md:text-xl font-medium leading-relaxed">
                    <p>Traditional blockchains are blind. Rialo Edge integrates HTTPS-bridges natively into the core, eliminating 3rd-party latency.</p>
                </div>

                {/* --- ENHANCED INTERACTIVE DATA BRIDGE --- */}
                <div className="mt-16 bg-white/[0.02] border border-white/5 rounded-[3rem] p-12 text-center relative overflow-hidden shadow-inner">
                    <div className="flex justify-around items-center mb-16 relative z-10">
                        
                        {/* Web2 Source */}
                        <div className="flex flex-col items-center">
                            <motion.div 
                                animate={isBridgeActive ? { scale: [1, 1.05, 1], rotate: 360 } : {}}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className={`p-6 rounded-full border transition-all duration-700 ${isBridgeActive ? 'border-rialo-mint text-rialo-mint shadow-[0_0_40px_rgba(169,221,211,0.3)]' : 'border-white/10 text-white/10'}`}
                            >
                                <Globe size={44} />
                            </motion.div>
                            <span className="mt-4 font-mono text-[10px] uppercase tracking-widest text-rialo-beige/30">Web2 Source</span>
                        </div>

                        {/* Bridge with Data Particles */}
                        <div className="flex-1 px-10 relative">
                            <div className="h-[2px] w-full bg-white/5 relative">
                                <AnimatePresence>
                                    {isBridgeActive && (
                                        <>
                                            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} className="absolute inset-0 bg-rialo-mint/40 shadow-[0_0_15px_#A9DDD3]" />
                                            {/* Data Bits Flowing */}
                                            {[...Array(6)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ x: "-10%", opacity: 0 }}
                                                    animate={{ x: "110%", opacity: [0, 1, 0] }}
                                                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: "linear" }}
                                                    className="absolute top-[-4px] w-2 h-2 bg-rialo-mint rounded-full blur-[1px] shadow-[0_0_10px_#A9DDD3]"
                                                />
                                            ))}
                                        </>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Rialo L1 Core */}
                        <div className="flex flex-col items-center">
                            <motion.div 
                                animate={isBridgeActive ? { boxShadow: ["0 0 20px rgba(169,221,211,0.1)", "0 0 40px rgba(169,221,211,0.4)", "0 0 20px rgba(169,221,211,0.1)"] } : {}}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className={`p-6 rounded-full border transition-colors duration-700 ${isBridgeActive ? 'border-rialo-mint text-rialo-mint bg-rialo-mint/10' : 'border-white/10 text-white/10'}`}
                            >
                                <Cpu size={44} />
                            </motion.div>
                            <span className="mt-4 font-mono text-[10px] uppercase tracking-widest text-rialo-mint">Rialo L1</span>
                        </div>
                    </div>
                    
                    <button 
                        onClick={() => setIsBridgeActive(!isBridgeActive)}
                        className={`px-12 py-5 rounded-full font-mono text-[11px] uppercase tracking-[0.4em] transition-all duration-500 border-2 ${isBridgeActive ? 'bg-rialo-mint text-rialo-black border-rialo-mint shadow-[0_0_40px_rgba(169,221,211,0.25)]' : 'bg-transparent text-rialo-mint border-rialo-mint/40 hover:bg-rialo-mint/10'}`}
                    >
                        {isBridgeActive ? "SYNC_ACTIVE // REAL-TIME" : "ESTABLISH HTTPS BRIDGE"}
                    </button>
                </div>
            </motion.div>
        </div>

        {/* Sidebar Rewards */}
        <div className="space-y-6">
            <motion.div whileHover={{ scale: 1.01 }} className="bg-rialo-beige/[0.03] border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md relative overflow-hidden">
                <div className="flex items-center space-x-3 mb-8"><Trophy className="text-rialo-mint" size={20} /><h3 className="text-rialo-beige font-black tracking-widest uppercase text-xs">Mission Loot</h3></div>
                
                <div className="space-y-6 mb-10">
                    <div className="group flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5">
                        <div className="flex flex-col"><span className="text-[9px] font-mono text-rialo-beige/40 uppercase mb-1">Badge</span><span className="text-base font-bold text-rialo-beige">Edge Master</span></div>
                        <Activity size={18} className="text-rialo-beige/20 group-hover:text-rialo-mint transition-colors" />
                    </div>
                    <div className="flex items-center justify-between p-5 bg-rialo-mint/5 rounded-2xl border border-rialo-mint/20">
                        <div className="flex flex-col"><span className="text-[9px] font-mono text-rialo-mint/60 uppercase mb-1">Experience</span><span className="text-base font-bold text-rialo-mint">+1,500 XP</span></div>
                        <div className="w-4 h-4 rounded-full bg-rialo-mint animate-ping" />
                    </div>
                </div>

                <button onClick={handleComplete} className="w-full py-5 bg-rialo-mint text-rialo-black font-black uppercase text-xs tracking-[0.3em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(169,221,211,0.2)]">
                    {alreadyClaimed ? "MISSION SECURED" : "COMPLETE MISSION"}
                </button>
            </motion.div>
        </div>
      </div>

      {/* --- LIVE AGENT SPEECH OVERLAY --- */}
      <AnimatePresence>
        {isBridgeActive && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-32 right-44 z-[60] p-4 bg-rialo-black/80 backdrop-blur-md border border-rialo-mint/30 rounded-2xl max-w-[200px] shadow-[0_0_20px_rgba(169,221,211,0.1)] pointer-events-none"
          >
             <div className="flex items-center space-x-2 mb-2">
                <Wifi size={12} className="text-rialo-mint animate-pulse" />
                <span className="text-[8px] font-mono text-rialo-mint uppercase tracking-widest">Live Analysis</span>
             </div>
             <p className="text-[10px] text-rialo-beige leading-relaxed italic">
                "Detecting native HTTPS packets. Latency: <span className="text-rialo-mint font-bold">12ms</span>. This is direct vertical integration in action."
             </p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}