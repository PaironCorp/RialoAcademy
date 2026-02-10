"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Cog, Trophy, CheckCircle, Wifi, Lock, Unlock, Play, ChevronRight, Settings } from 'lucide-react';
import Link from 'next/link';
import { useAcademy } from "../../context/AcademyContext";

export default function WorkflowsMission() {
  const { setIsFocused } = useAcademy();
  const [isCompleted, setIsCompleted] = useState(false);
  const [step, setStep] = useState(0); // 0: Idle, 1: Logic Set, 2: Executing
  const [alreadyClaimed, setAlreadyClaimed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("mission_04_complete");
    if (saved === "true") setAlreadyClaimed(true);
    return () => setIsFocused(false);
  }, [setIsFocused]);

  const runWorkflow = () => {
    setStep(1);
    setIsFocused(true);
    setTimeout(() => setStep(2), 1500);
  };

  const handleComplete = () => {
    if (step !== 2) return;
    if (!alreadyClaimed) {
        const currentXp = parseInt(localStorage.getItem("rialo_xp") || "0");
        localStorage.setItem("rialo_xp", (currentXp + 2500).toString());
        localStorage.setItem("mission_04_complete", "true");
        setAlreadyClaimed(true);
    }
    setIsCompleted(true);
  };

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10">
      
      <AnimatePresence>
        {isCompleted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-[#010101]/95 backdrop-blur-2xl flex items-center justify-center p-6 text-center">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-[#A9DDD3]/10 border border-[#A9DDD3]/30 p-12 rounded-[3.5rem] max-w-sm">
                <CheckCircle className="text-[#A9DDD3] mx-auto mb-6" size={80} />
                <h2 className="text-3xl font-black text-[#E8E3D5] italic mb-8 uppercase">Logic Autonomous</h2>
                <Link href="/"><button className="w-full py-5 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.3em] rounded-2xl">Return to Atrium</button></Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl w-full mb-12 flex justify-between items-center">
        <Link href="/"><div className="flex items-center text-[#A9DDD3]/60 hover:text-[#A9DDD3] cursor-pointer font-mono text-[10px] uppercase tracking-[0.3em]"><ArrowLeft className="mr-2" size={14} /> [ Back to Nexus ]</div></Link>
        <div className="bg-[#A9DDD3]/5 border border-[#A9DDD3]/20 px-5 py-2 rounded-full text-[#E8E3D5] font-mono text-[10px] uppercase tracking-widest shadow-[0_0_15px_rgba(169,221,211,0.1)]">Mission 04: <span className="text-[#A9DDD3] font-bold text-glow-mint text-[11px]">Autonomous Workflows</span></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
            <motion.div layout className="bg-[#010101]/80 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-12 shadow-2xl relative overflow-hidden">
                <h1 className="text-5xl md:text-7xl font-black text-[#E8E3D5] mb-6 tracking-tighter italic uppercase leading-[0.9]">Smart <br/>But <span className="text-[#A9DDD3]">Autonomous</span></h1>
                <p className="text-[#E8E3D5]/70 text-lg font-medium leading-relaxed max-w-xl mb-12">Rialo doesn't just store data; it acts on it. Native workflows eliminate the need for centralized bots or keepers.</p>

                {/* --- WORKFLOW BUILDER VISUAL --- */}
                <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-12 relative overflow-hidden shadow-inner">
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 mb-12 relative z-10">
                        
                        {/* Event Trigger */}
                        <div className={`p-8 rounded-[2rem] border transition-all duration-500 text-center ${step >= 1 ? 'border-[#A9DDD3] bg-[#A9DDD3]/5 text-[#A9DDD3] shadow-[0_0_30px_rgba(169,221,211,0.2)]' : 'border-white/10 text-white/20'}`}>
                            <Wifi size={32} className="mx-auto mb-4" />
                            <p className="font-mono text-[10px] uppercase tracking-widest">On Price Change</p>
                        </div>

                        <ChevronRight className={`hidden md:block transition-colors ${step >= 1 ? 'text-[#A9DDD3]' : 'text-white/10'}`} />

                        {/* Autonomous Action */}
                        <div className={`p-8 rounded-[2rem] border transition-all duration-500 text-center ${step >= 2 ? 'border-[#A9DDD3] bg-[#A9DDD3]/5 text-[#A9DDD3] shadow-[0_0_30px_rgba(169,221,211,0.2)]' : 'border-white/10 text-white/20'}`}>
                            <Settings size={32} className={`mx-auto mb-4 ${step === 1 ? 'animate-spin' : ''}`} />
                            <p className="font-mono text-[10px] uppercase tracking-widest">Execute Hedge</p>
                        </div>
                    </div>

                    <button 
                        onClick={runWorkflow}
                        className={`w-full py-5 rounded-full font-mono text-[11px] uppercase tracking-[0.5em] transition-all duration-500 border-2 flex items-center justify-center space-x-3
                        ${step === 1 ? 'bg-[#A9DDD3]/20 text-[#A9DDD3] border-[#A9DDD3]/20' : 'bg-transparent text-[#A9DDD3] border-[#A9DDD3]/30 hover:bg-[#A9DDD3]/10'}`}
                    >
                        <Play size={16} /> <span>{step === 0 ? "INITIALIZE AUTONOMOUS LOGIC" : step === 1 ? "PROCESSING ON-CHAIN..." : "WORKFLOW COMPLETED"}</span>
                    </button>
                </div>

                {/* --- ACADEMY ANALYTICS --- */}
                <AnimatePresence>
                  {step === 2 && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-10 pt-10 border-t border-white/5">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                             <p className="text-xl font-bold italic text-[#E8E3D5]">"Code that triggers itself."</p>
                             <p className="text-sm opacity-60 leading-relaxed text-[#E8E3D5]">By integrating event-driven logic into the core, Rialo enables fully sovereign finance where the chain is the bot.</p>
                          </div>
                          <div className="p-6 bg-white/[0.03] border border-white/10 rounded-3xl">
                             <p className="text-[10px] font-mono text-[#A9DDD3] uppercase mb-2">Benefit</p>
                             <p className="text-xl font-bold">Zero Keepers <span className="text-[10px] opacity-30 italic font-normal">No Middlemen</span></p>
                          </div>
                       </div>
                    </motion.div>
                  )}
                </AnimatePresence>
            </motion.div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
            <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md">
                <div className="flex items-center space-x-3 mb-8"><Trophy className="text-[#A9DDD3]" size={20} /><h3 className="text-[#E8E3D5] font-black tracking-widest uppercase text-xs">Mission Loot</h3></div>
                <div className="space-y-6 mb-10">
                    <div className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${step === 2 ? 'bg-[#A9DDD3]/5 border-[#A9DDD3]/20 shadow-lg' : 'bg-white/5 border-white/5 opacity-40'}`}>
                        <div className="flex flex-col"><span className="text-[9px] font-mono text-[#A9DDD3]/60 uppercase mb-1">Experience</span><span className="text-base font-bold text-[#E8E3D5]">+2,500 XP</span></div>
                        <div className={`w-4 h-4 rounded-full bg-[#A9DDD3] ${step === 2 ? 'animate-ping' : ''}`} />
                    </div>
                </div>

                <button 
                    onClick={handleComplete} 
                    disabled={step !== 2}
                    className={`w-full py-5 font-black uppercase text-xs tracking-[0.3em] rounded-xl transition-all flex items-center justify-center space-x-2
                    ${step === 2 ? 'bg-[#A9DDD3] text-[#010101] hover:bg-white shadow-xl shadow-[#A9DDD3]/20' : 'bg-white/5 text-white/20 cursor-not-allowed'}`}
                >
                    {step === 2 ? <><Unlock size={14} /> <span>COMPLETE MISSION</span></> : <><Lock size={14} /> <span>LOGIC REQUIRED</span></>}
                </button>
            </div>
        </div>
      </div>
    </main>
  );
}