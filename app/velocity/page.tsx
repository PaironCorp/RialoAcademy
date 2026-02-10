"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Zap, Trophy, CheckCircle, Wifi, Lock, Unlock, Timer, Activity, FastForward, Gauge } from 'lucide-react';
import Link from 'next/link';
import { useAcademy } from "../../context/AcademyContext";

export default function VelocityMission() {
  const { setIsFocused } = useAcademy();
  const [isCompleted, setIsCompleted] = useState(false);
  const [status, setStatus] = useState("IDLE"); // IDLE, RACING, COOLED
  const [raceProgress, setRaceProgress] = useState({ eth: 0, sol: 0, rialo: 0 });
  const [alreadyClaimed, setAlreadyClaimed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("mission_03_complete");
    if (saved === "true") setAlreadyClaimed(true);
    // При уходе со страницы возвращаем Агента в обычное состояние
    return () => setIsFocused(false);
  }, [setIsFocused]);

  const startRace = () => {
    setStatus("RACING");
    setIsFocused(true);
    setRaceProgress({ eth: 0, sol: 0, rialo: 0 });

    // RIALO: 50ms - Мгновенный финиш для эффекта "телепортации"
    setTimeout(() => {
        setRaceProgress(prev => ({ ...prev, rialo: 100 }));
        // Режим охлаждения после вспышки
        setTimeout(() => setStatus("COOLED"), 1000);
    }, 100);
    
    // SOLANA: 400ms - Быстро, но заметно медленнее Rialo
    setTimeout(() => setRaceProgress(prev => ({ ...prev, sol: 100 })), 800);

    // ETHEREUM: 12s - Симуляция долгого ожидания
    const ethInterval = setInterval(() => {
        setRaceProgress(prev => {
            if (prev.eth >= 12 || status === "COOLED") { 
                clearInterval(ethInterval); 
                return prev; 
            }
            return { ...prev, eth: prev.eth + 1 };
        });
    }, 400);
  };

  const handleComplete = () => {
    if (raceProgress.rialo < 100) return;
    if (!alreadyClaimed) {
        const currentXp = parseInt(localStorage.getItem("rialo_xp") || "0");
        localStorage.setItem("rialo_xp", (currentXp + 2000).toString());
        localStorage.setItem("mission_03_complete", "true");
        setAlreadyClaimed(true);
    }
    setIsCompleted(true);
    setIsFocused(false); // Возвращаем аватара
  };

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10 overflow-hidden">
      
      {/* --- ЭФФЕКТ СВЕРХЗВУКОВОЙ ВСПЫШКИ --- */}
      <AnimatePresence>
        {raceProgress.rialo === 100 && status === "RACING" && (
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} exit={{ opacity: 0 }}
                className="fixed inset-0 bg-[#A9DDD3] z-0 blur-[120px] pointer-events-none"
            />
        )}
      </AnimatePresence>

      {/* --- SUCCESS MODAL С ПЕРЕХОДОМ В WORKFLOWS --- */}
      <AnimatePresence>
        {isCompleted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-[#010101]/95 backdrop-blur-2xl flex items-center justify-center p-6 text-center">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-[#A9DDD3]/10 border border-[#A9DDD3]/30 p-12 rounded-[3.5rem] max-w-sm shadow-[0_0_50px_rgba(169,221,211,0.2)]">
                <CheckCircle className="text-[#A9DDD3] mx-auto mb-6" size={80} />
                <h2 className="text-3xl font-black text-[#E8E3D5] italic mb-2 uppercase tracking-tighter">Velocity Mastered</h2>
                <p className="text-[#A9DDD3] font-mono text-[10px] tracking-widest uppercase mb-10 italic">50ms Threshold Breached</p>
                <Link href="/workflows">
                    <button className="w-full py-5 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.3em] rounded-2xl hover:bg-white transition-all shadow-[0_0_30px_rgba(169,221,211,0.2)] flex items-center justify-center group">
                        Proceed to Workflows <FastForward className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </button>
                </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HEADER --- */}
      <div className="max-w-6xl w-full mb-12 flex justify-between items-center relative z-10">
        <Link href="/"><div className="flex items-center text-[#A9DDD3]/60 hover:text-[#A9DDD3] cursor-pointer font-mono text-[10px] uppercase tracking-[0.3em] transition-colors"><ArrowLeft className="mr-2" size={14} /> [ Return to Atrium ]</div></Link>
        <div className="bg-[#A9DDD3]/5 border border-[#A9DDD3]/20 px-5 py-2 rounded-full text-[#E8E3D5] font-mono text-[10px] uppercase tracking-widest shadow-[0_0_15px_rgba(169,221,211,0.1)]">Mission 03: <span className="text-[#A9DDD3] font-bold text-glow-mint">Velocity Paradox</span></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10">
        <div className="lg:col-span-2 space-y-6">
            <motion.div layout className={`bg-[#010101]/80 backdrop-blur-3xl border ${status === 'RACING' ? 'border-[#A9DDD3]/50' : 'border-white/10'} rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden transition-all duration-700`}>
                
                <div className={`absolute -top-20 -right-20 w-80 h-80 rounded-full blur-[120px] transition-colors duration-1000 ${status === 'RACING' ? 'bg-[#A9DDD3]/20' : 'bg-[#A9DDD3]/5'}`}></div>

                <h1 className="text-5xl md:text-8xl font-black text-[#E8E3D5] mb-6 tracking-tighter italic uppercase leading-[0.85]">
                   Beyond <br/><span className="text-[#A9DDD3] text-glow-mint">Real-Time</span>
                </h1>
                <p className="text-[#E8E3D5]/70 text-lg md:text-xl font-medium leading-relaxed max-w-xl mb-12 italic">
                    While others confirm blocks, Rialo has already finalized the world. <strong className="text-white">50ms</strong> isn't speed—it's a new dimension of efficiency.
                </p>

                {/* --- THE SPEED RACE CORE --- */}
                <div className="bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 space-y-12 relative shadow-inner">
                    
                    {/* RIALO L1: THE SONIC BAR */}
                    <div className="relative">
                        <div className="flex justify-between items-end mb-4">
                            <div className="flex items-center space-x-2">
                                <Zap size={16} className={raceProgress.rialo === 100 ? "text-[#A9DDD3] animate-pulse" : "text-white/20"} />
                                <span className="font-mono text-[11px] text-[#A9DDD3] uppercase tracking-[0.4em] font-black italic">RIALO L1 [50ms]</span>
                            </div>
                            <span className={`text-[10px] font-mono ${raceProgress.rialo === 100 ? 'text-[#A9DDD3]' : 'text-white/20'}`}>
                                {raceProgress.rialo === 100 ? "FINALITY ACHIEVED" : "READY TO SYNC"}
                            </span>
                        </div>
                        <div className="h-5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 relative p-[3px]">
                            <motion.div 
                                initial={{ width: 0 }} 
                                animate={{ width: `${raceProgress.rialo}%` }} 
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="h-full bg-gradient-to-r from-[#A9DDD3]/50 to-[#A9DDD3] shadow-[0_0_30px_#A9DDD3] rounded-full relative"
                            >
                                {status === "RACING" && raceProgress.rialo < 100 && (
                                    <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 0.4 }} className="absolute inset-0 bg-white/40 skew-x-12" />
                                )}
                            </motion.div>
                        </div>
                    </div>

                    {/* COMPETITOR ANALYTICS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-40 group hover:opacity-60 transition-opacity">
                        <div className="space-y-3">
                            <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest italic font-medium">Solana [400ms]</span>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div animate={{ width: `${raceProgress.sol}%` }} className="h-full bg-white/20" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest italic font-medium">Ethereum [12s]</span>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div animate={{ width: `${raceProgress.eth}%` }} className="h-full bg-red-500/10" />
                            </div>
                        </div>
                    </div>

                    <button 
                        onClick={startRace}
                        disabled={status === "RACING"}
                        className={`w-full py-6 rounded-full font-mono text-xs uppercase tracking-[0.6em] transition-all duration-700 border-2 flex items-center justify-center space-x-4
                        ${status === "RACING" 
                            ? 'bg-[#A9DDD3]/20 text-[#A9DDD3] border-[#A9DDD3]/20 cursor-wait' 
                            : 'bg-transparent text-[#A9DDD3] border-[#A9DDD3]/40 hover:bg-[#A9DDD3] hover:text-[#010101] shadow-[0_0_40px_rgba(169,221,211,0.1)]'}`}
                    >
                        <Gauge size={18} className={status === "RACING" ? "animate-spin" : ""} />
                        <span>{status === "RACING" ? "SYNCING HYPER-BLOCKS" : "ENGAGE VELOCITY TEST"}</span>
                    </button>
                </div>

                {/* --- POST-RACE DATA FEED --- */}
                <AnimatePresence>
                  {status === "COOLED" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                      className="mt-12 pt-12 border-t border-white/5 space-y-8"
                    >
                       <div className="flex items-center space-x-3">
                          <Activity size={24} className="text-[#A9DDD3] animate-pulse" />
                          <h3 className="text-sm font-mono text-[#A9DDD3] uppercase tracking-[0.4em] font-bold">Latency Benchmark Result</h3>
                       </div>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#E8E3D5]">
                          <div className="space-y-4">
                             <p className="text-xl font-bold italic">"Confirmations at the speed of human thought."</p>
                             <p className="text-sm opacity-60 leading-relaxed font-medium">Rialo's 50ms finality enables on-chain high-frequency trading and real-time AI agents that are technically impossible on legacy rails.</p>
                          </div>
                          <div className="p-8 bg-[#A9DDD3]/5 border border-[#A9DDD3]/20 rounded-[2.5rem] flex flex-col justify-center text-center shadow-inner">
                                <p className="text-[10px] font-mono text-[#A9DDD3] uppercase mb-2 tracking-widest">Global Speed Rank</p>
                                <p className="text-5xl font-black text-[#A9DDD3] text-glow-mint italic uppercase tracking-tighter">Tier-0</p>
                                <p className="text-[9px] opacity-30 mt-4 italic font-mono uppercase tracking-widest">Consensus: Sovereign High-Speed Core</p>
                          </div>
                       </div>
                    </motion.div>
                  )}
                </AnimatePresence>
            </motion.div>
        </div>

        {/* --- SIDEBAR REWARDS --- */}
        <div className="space-y-6">
            <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md relative z-20">
                <div className="flex items-center space-x-3 mb-8"><Trophy className="text-[#A9DDD3]" size={20} /><h3 className="text-[#E8E3D5] font-black tracking-widest uppercase text-xs">Mission Loot</h3></div>
                <div className="space-y-6 mb-10">
                    <div className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${status === 'COOLED' ? 'bg-[#A9DDD3]/5 border-[#A9DDD3]/20 shadow-lg' : 'bg-white/5 border-white/5 opacity-40'}`}>
                        <div className="flex flex-col"><span className="text-[9px] font-mono text-[#A9DDD3]/60 uppercase mb-1">Experience</span><span className="text-base font-bold text-[#A9DDD3]">+2,000 XP</span></div>
                        <Zap size={18} className={status === 'COOLED' ? 'text-[#A9DDD3] animate-pulse' : 'text-white/20'} />
                    </div>
                </div>

                <button 
                    onClick={handleComplete} 
                    disabled={status !== "COOLED"}
                    className={`w-full py-5 font-black uppercase text-xs tracking-[0.3em] rounded-xl transition-all flex items-center justify-center space-x-2
                    ${status === 'COOLED' ? 'bg-[#A9DDD3] text-[#010101] hover:bg-white shadow-xl shadow-[#A9DDD3]/20' : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'}`}
                >
                    {status === 'COOLED' ? <><Unlock size={14} /> <span>COMPLETE MISSION</span></> : <><Lock size={14} /> <span>SYSTEM BUSY</span></>}
                </button>
            </div>
        </div>
      </div>
    </main>
  );
}