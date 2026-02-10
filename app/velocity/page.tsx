"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Zap, CheckCircle, Activity, FastForward, Gauge, Trophy, Unlock } from 'lucide-react';
import Link from 'next/link';
import { useAcademy } from "../../context/AcademyContext";

export default function VelocityMission() {
  const { setIsFocused, addLog } = useAcademy();
  const [isCompleted, setIsCompleted] = useState(false);
  const [status, setStatus] = useState("IDLE"); // IDLE, RACING, COOLED
  const [raceProgress, setRaceProgress] = useState({ eth: 0, sol: 0, rialo: 0 });

  useEffect(() => {
    addLog("[SYSTEM]: Velocity Module v2.2 active.");
    addLog("[INFO]: Aligning SVM clock cycles...");
    return () => setIsFocused(false);
  }, [setIsFocused, addLog]);

  const startRace = () => {
    setStatus("RACING");
    setIsFocused(true);
    setRaceProgress({ eth: 0, sol: 0, rialo: 0 });
    addLog("[RUNTIME]: Test initiated. Analyzing block propagation...");

    setTimeout(() => {
        setRaceProgress(prev => ({ ...prev, rialo: 100 }));
        addLog("[RIALO]: Finality confirmed: 50ms.");
        setTimeout(() => setStatus("COOLED"), 1500);
    }, 150);
    
    setTimeout(() => {
        setRaceProgress(prev => ({ ...prev, sol: 100 }));
        addLog("[SOLANA]: Finality confirmed: 400ms.");
    }, 800);

    const ethInterval = setInterval(() => {
        setRaceProgress(prev => {
            if (prev.eth >= 15 || status === "COOLED") { 
                clearInterval(ethInterval); 
                return prev; 
            }
            return { ...prev, eth: prev.eth + 1 };
        });
    }, 400);
  };

  const handleComplete = () => {
    const currentXp = parseInt(localStorage.getItem("rialo_xp") || "0");
    localStorage.setItem("rialo_xp", (currentXp + 2000).toString());
    localStorage.setItem("mission_03_complete", "true");
    setIsCompleted(true);
    addLog("[ACADEMY]: Velocity Verified. Proceeding to autonomous layer.");
  };

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10 transform-gpu overflow-hidden">
      
      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {isCompleted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-[#010101] flex items-center justify-center p-6 text-center">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-[#050505] border border-[#A9DDD3]/30 p-12 rounded-[3.5rem] max-w-sm shadow-2xl">
                <CheckCircle className="text-[#A9DDD3] mx-auto mb-6" size={80} />
                <h2 className="text-3xl font-black text-[#E8E3D5] italic mb-2 uppercase tracking-tighter">Speed Mastered</h2>
                <p className="text-[#A9DDD3] font-mono text-[10px] tracking-widest uppercase mb-10 italic font-bold">50ms Threshold Breached</p>
                <Link href="/workflows">
                    <button className="w-full py-5 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.3em] rounded-2xl flex items-center justify-center group hover:bg-white transition-all shadow-xl">
                        Proceed to Workflows <FastForward className="ml-2 group-hover:translate-x-1" size={16} />
                    </button>
                </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl w-full mb-12 flex justify-between items-center relative z-10">
        <Link href="/"><div className="flex items-center text-[#A9DDD3]/60 hover:text-[#A9DDD3] cursor-pointer font-mono text-xs uppercase tracking-widest transition-colors"><ArrowLeft className="mr-2" size={14} /> [ Back to Nexus ]</div></Link>
        <div className="bg-[#050505] border border-[#A9DDD3]/20 px-6 py-3 rounded-full text-[#E8E3D5] font-mono text-xs uppercase tracking-widest italic shadow-lg">
            Mission 03: <span className="text-[#A9DDD3] font-bold">Velocity Test</span>
        </div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
        <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#050505] border border-white/10 rounded-[3.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden">
                <h1 className="text-6xl md:text-8xl font-black text-[#E8E3D5] mb-8 tracking-tighter italic uppercase leading-[0.85]">
                   Beyond <br/><span className="text-[#A9DDD3] text-glow-mint">Real-Time</span>
                </h1>
                
                <div className="space-y-6 mb-12">
                    <div className="p-8 bg-[#A9DDD3]/5 border border-[#A9DDD3]/40 rounded-[2.5rem] shadow-lg">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center space-x-3">
                                <Zap className="text-[#A9DDD3]" size={24} />
                                <span className="font-mono text-sm text-[#A9DDD3] uppercase tracking-[0.4em] font-black italic">Rialo SVM [50ms]</span>
                            </div>
                            <span className="font-mono text-xs text-[#A9DDD3] font-bold uppercase">{raceProgress.rialo === 100 ? "Verified" : "Syncing"}</span>
                        </div>
                        <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-1">
                            <motion.div initial={{ width: 0 }} animate={{ width: `${raceProgress.rialo}%` }} className="h-full bg-[#A9DDD3] shadow-[0_0_20px_#A9DDD3] rounded-full" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-60">
                        <div className="p-6 bg-[#080808] border border-white/5 rounded-3xl">
                            <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-4 font-bold italic">Solana [400ms]</p>
                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden"><motion.div animate={{ width: `${raceProgress.sol}%` }} className="h-full bg-white/20" /></div>
                        </div>
                        <div className="p-6 bg-[#080808] border border-white/5 rounded-3xl">
                            <p className="font-mono text-[10px] text-white/20 uppercase tracking-widest mb-4 font-bold italic">Ethereum [12s]</p>
                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden"><motion.div animate={{ width: `${raceProgress.eth}%` }} className="h-full bg-red-500/20" /></div>
                        </div>
                    </div>
                </div>

                {/* --- КНОПКА С ИСПРАВЛЕННОЙ ЦЕНТРОВКОЙ ИКОНКИ --- */}
                <button 
                  onClick={startRace} 
                  disabled={status === "RACING"} 
                  className={`w-full py-7 rounded-full font-mono text-sm uppercase tracking-[0.6em] border-2 font-black transition-all flex items-center justify-center space-x-5
                  ${status === "RACING" ? 'bg-[#A9DDD3]/10 text-[#A9DDD3] border-[#A9DDD3]/10 cursor-wait' : 'bg-transparent text-[#A9DDD3] border-[#A9DDD3]/30 hover:bg-[#A9DDD3] hover:text-[#010101]'}`}
                >
                    <Gauge size={22} className={status === "RACING" ? "animate-spin" : ""} />
                    <span>{status === "RACING" ? "SYNCING..." : "ENGAGE VELOCITY TEST"}</span>
                </button>

                <AnimatePresence>
                  {status === "COOLED" && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-14 pt-14 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-10 text-[#E8E3D5]">
                        <div className="space-y-6">
                            <p className="text-3xl font-bold italic leading-tight">"50ms is the new speed of trust."</p>
                            <p className="text-base text-white/40 leading-relaxed italic">Rialo's sub-second finality enables on-chain AI agents that are physically impossible on legacy rails.</p>
                        </div>
                        <div className="p-10 bg-[#A9DDD3]/10 border border-[#A9DDD3]/30 rounded-[3rem] text-center">
                            <p className="text-[11px] font-mono text-[#A9DDD3] uppercase mb-2 tracking-widest font-black opacity-60 italic">Global Rank</p>
                            <p className="text-7xl font-black text-[#A9DDD3] text-glow-mint italic tracking-tighter">TIER-0</p>
                        </div>
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>
        </div>

        <div className="space-y-6">
            <div className="bg-[#050505] border border-white/10 rounded-[3rem] p-10 shadow-2xl">
                <div className="flex items-center space-x-3 mb-10 text-[#A9DDD3]"><Trophy size={20} /><h3 className="text-white font-black tracking-widest uppercase text-xs italic">Mission Loot</h3></div>
                <div className="p-6 bg-[#080808] border border-white/5 rounded-3xl mb-12">
                    <span className="text-[10px] font-mono text-[#A9DDD3]/60 uppercase block mb-2 tracking-widest italic font-bold">Experience</span>
                    <span className="text-2xl font-black text-white">+2,000 XP</span>
                </div>
                <button 
                  onClick={handleComplete} 
                  disabled={status !== "COOLED"} 
                  className={`w-full py-6 font-black uppercase text-xs tracking-[0.4em] rounded-2xl transition-all flex items-center justify-center space-x-2
                  ${status === 'COOLED' ? 'bg-[#A9DDD3] text-[#010101] hover:bg-white shadow-[0_0_30px_rgba(169,221,211,0.3)]' : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'}`}
                >
                    {status === 'COOLED' ? <><Unlock size={14} /> <span>COMPLETE MISSION</span></> : <span>LOCKED</span>}
                </button>
            </div>
        </div>
      </div>
    </main>
  );
}