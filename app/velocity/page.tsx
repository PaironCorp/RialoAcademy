"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Zap, Trophy, CheckCircle, Timer, Activity, FastForward, Gauge, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useAcademy } from "../../context/AcademyContext";

export default function VelocityMission() {
  const { setIsFocused, addLog } = useAcademy();
  const [isCompleted, setIsCompleted] = useState(false);
  const [status, setStatus] = useState("IDLE"); // IDLE, RACING, COOLED
  const [raceProgress, setRaceProgress] = useState({ eth: 0, sol: 0, rialo: 0 });

  useEffect(() => {
    addLog("[SYSTEM]: Velocity Module Initialized.");
    addLog("[INFO]: Ready to test Rialo SVM latency (Target: 50ms).");
    return () => setIsFocused(false);
  }, [setIsFocused, addLog]);

  const startRace = () => {
    setStatus("RACING");
    setIsFocused(true);
    setRaceProgress({ eth: 0, sol: 0, rialo: 0 });
    addLog("[RUNTIME]: Syncing global clock for speed test...");

    // RIALO: 50ms (0.05s) - Телепортация
    setTimeout(() => {
        setRaceProgress(prev => ({ ...prev, rialo: 100 }));
        addLog("[RIALO]: Block finalized in 50ms.");
        setTimeout(() => setStatus("COOLED"), 1500);
    }, 150);
    
    // SOLANA: 400ms
    setTimeout(() => {
        setRaceProgress(prev => ({ ...prev, sol: 100 }));
        addLog("[SOLANA]: Block finalized in 400ms.");
    }, 800);

    // ETHEREUM: Симуляция ожидания
    const ethInterval = setInterval(() => {
        setRaceProgress(prev => {
            if (prev.eth >= 15 || status === "COOLED") { clearInterval(ethInterval); return prev; }
            return { ...prev, eth: prev.eth + 1 };
        });
    }, 400);
  };

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10 overflow-hidden transform-gpu">
      
      {/* ЭФФЕКТ ЛИНИЙ СКОРОСТИ (ЛЕГКИЙ) */}
      <AnimatePresence>
        {status === "RACING" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} exit={{ opacity: 0 }} className="fixed inset-0 pointer-events-none z-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div key={i} className="absolute bg-[#A9DDD3] h-[1px]" 
                        style={{ top: `${Math.random() * 100}%`, left: '-10%', width: `${Math.random() * 20 + 10}%` }}
                        animate={{ x: ['0vw', '120vw'] }} transition={{ duration: Math.random() * 0.5 + 0.2, repeat: Infinity, ease: "linear" }}
                    />
                ))}
            </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl w-full mb-12 flex justify-between items-center relative z-10">
        <Link href="/"><div className="flex items-center text-[#A9DDD3]/60 hover:text-[#A9DDD3] cursor-pointer font-mono text-xs uppercase tracking-widest"><ArrowLeft className="mr-2" size={14} /> [ Back to Nexus ]</div></Link>
        <div className="bg-[#A9DDD3]/5 border border-[#A9DDD3]/20 px-6 py-3 rounded-full text-[#E8E3D5] font-mono text-xs uppercase tracking-widest">Mission 03: <span className="text-[#A9DDD3] font-bold">50ms Threshold</span></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
        <div className="lg:col-span-2 space-y-8">
            <motion.div layout className="bg-[#050505]/90 border border-white/10 rounded-[3.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden transition-all duration-700">
                
                <h1 className="text-6xl md:text-8xl font-black text-[#E8E3D5] mb-8 tracking-tighter italic uppercase leading-[0.85]">
                   Beyond <br/><span className="text-[#A9DDD3] text-glow-mint">Real-Time</span>
                </h1>
                
                {/* КОНСОЛЬ СРАВНЕНИЯ (КРУПНЫЕ КАРТЫ) */}
                <div className="space-y-6 mb-12">
                    {/* RIALO - ГЛАВНЫЙ ГЕРОЙ */}
                    <div className="p-8 bg-[#A9DDD3]/5 border border-[#A9DDD3]/30 rounded-[2.5rem] relative shadow-lg">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center space-x-3">
                                <Zap className="text-[#A9DDD3] animate-pulse" size={24} />
                                <span className="font-mono text-xs text-[#A9DDD3] uppercase tracking-[0.4em] font-black">Rialo SVM Core [50ms]</span>
                            </div>
                            <span className="font-mono text-xs text-[#A9DDD3] font-bold">{raceProgress.rialo === 100 ? "SYNC_CONFIRMED" : "READY"}</span>
                        </div>
                        <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-1">
                            <motion.div initial={{ width: 0 }} animate={{ width: `${raceProgress.rialo}%` }} transition={{ type: "spring", stiffness: 100 }} className="h-full bg-[#A9DDD3] shadow-[0_0_20px_#A9DDD3] rounded-full" />
                        </div>
                    </div>

                    {/* COMPETITORS (БОЛЬШЕ И КОНТРАСТНЕЕ) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl opacity-60">
                            <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-4">Solana [400ms]</p>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div animate={{ width: `${raceProgress.sol}%` }} transition={{ duration: 0.8 }} className="h-full bg-white/30" />
                            </div>
                        </div>
                        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl opacity-40">
                            <p className="font-mono text-[10px] text-white/20 uppercase tracking-widest mb-4">Ethereum [12s]</p>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div animate={{ width: `${raceProgress.eth}%` }} className="h-full bg-red-500/20" />
                            </div>
                        </div>
                    </div>
                </div>

                <button onClick={startRace} disabled={status === "RACING"} className={`w-full py-7 rounded-full font-mono text-sm uppercase tracking-[0.6em] transition-all duration-500 border-2 flex items-center justify-center space-x-4 font-black ${status === "RACING" ? 'bg-[#A9DDD3]/10 text-[#A9DDD3] border-[#A9DDD3]/10' : 'bg-transparent text-[#A9DDD3] border-[#A9DDD3]/30 hover:bg-[#A9DDD3] hover:text-[#010101] shadow-xl'}`}>
                    <Gauge size={20} className={status === "RACING" ? "animate-spin" : ""} />
                    <span>{status === "RACING" ? "OVERCLOCKING SYSTEM..." : "ENGAGE VELOCITY TEST"}</span>
                </button>

                {/* --- АНАЛИТИКА (ЯРЧЕ И БОЛЬШЕ) --- */}
                <AnimatePresence>
                  {status === "COOLED" && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-14 pt-14 border-t border-white/10 space-y-10">
                       <div className="flex items-center space-x-3 text-[#A9DDD3]">
                          <Activity size={28} className="animate-pulse" />
                          <h3 className="text-sm font-mono uppercase tracking-[0.4em] font-black">Technical Performance Readout</h3>
                       </div>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[#E8E3D5]">
                          <div className="space-y-6">
                             <p className="text-2xl font-bold italic leading-tight">"Confirmations at the speed of human thought."</p>
                             <p className="text-base opacity-50 leading-relaxed">Rialo's 50ms finality enables on-chain AI and high-frequency markets that are physically impossible on legacy Rails. It eliminates the 'wait time' from the user experience.</p>
                          </div>
                          <div className="p-10 bg-[#A9DDD3]/10 border border-[#A9DDD3]/30 rounded-[3rem] flex flex-col justify-center text-center shadow-inner">
                                <p className="text-[11px] font-mono text-[#A9DDD3] uppercase mb-3 tracking-widest font-black opacity-60">Global Latency Rank</p>
                                <p className="text-7xl font-black text-[#A9DDD3] text-glow-mint italic tracking-tighter">TIER-0</p>
                                <p className="text-xs opacity-30 mt-6 italic font-mono uppercase">Validated by Sovereign SVM Runtime</p>
                          </div>
                       </div>
                    </motion.div>
                  )}
                </AnimatePresence>
            </motion.div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
            <div className="bg-[#050505] border border-white/10 rounded-[3rem] p-10 shadow-2xl">
                <div className="flex items-center space-x-3 mb-10"><Trophy className="text-[#A9DDD3]" size={20} /><h3 className="text-[#E8E3D5] font-black tracking-widest uppercase text-xs">Mission Rewards</h3></div>
                <div className="space-y-6 mb-12">
                    <div className={`p-6 rounded-3xl border transition-all ${status === 'COOLED' ? 'bg-[#A9DDD3]/5 border-[#A9DDD3]/20' : 'bg-white/5 border-white/5 opacity-30'}`}>
                        <span className="text-[10px] font-mono text-[#A9DDD3]/60 uppercase block mb-2 tracking-widest">Experience Points</span>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-black text-[#A9DDD3]">+2,000 XP</span>
                            <Zap size={20} className={status === 'COOLED' ? 'text-[#A9DDD3] animate-pulse' : 'text-white/20'} />
                        </div>
                    </div>
                </div>
                <button onClick={() => setIsCompleted(true)} disabled={status !== "COOLED"} className={`w-full py-6 font-black uppercase text-xs tracking-[0.4em] rounded-2xl transition-all flex items-center justify-center space-x-2 ${status === 'COOLED' ? 'bg-[#A9DDD3] text-[#010101] hover:bg-white shadow-[0_0_30px_rgba(169,221,211,0.2)]' : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'}`}>
                    {status === 'COOLED' ? <><CheckCircle size={14} /> <span>COMPLETE MISSION</span></> : <span>SYSTEM COOLING...</span>}
                </button>
            </div>
        </div>
      </div>
    </main>
  );
}