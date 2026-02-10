"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Code2, Trophy, CheckCircle, Terminal, Cpu, Database, FastForward, Unlock, Lock } from 'lucide-react';
import Link from 'next/link';
import { useAcademy } from "../../context/AcademyContext";

export default function DevelopersMission() {
  const { setIsFocused, addLog } = useAcademy();
  const [isCompleted, setIsCompleted] = useState(false);
  const [isCompiling, setIsCompiling] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    addLog("[SYSTEM]: Accessing Developers_Core v2.1...");
    addLog("[RUNTIME]: Environment: High-Performance Rust / SVM Core.");
    return () => setIsFocused(false);
  }, [setIsFocused, addLog]);

  const runCompile = () => {
    setIsCompiling(true);
    setIsFocused(true);
    addLog("[RUSTC]: Compiling smart contract for Rialo SVM...");
    addLog("[SVM]: Optimizing parallel execution paths...");
    
    setTimeout(() => {
      setIsCompiling(false);
      setIsReady(true);
      addLog("[CORE]: Build success. Contract ready for sovereign deployment.");
    }, 2500);
  };

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10">
      
      <AnimatePresence>
        {isCompleted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-[#010101]/95 backdrop-blur-2xl flex items-center justify-center p-6 text-center">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-[#A9DDD3]/10 border border-[#A9DDD3]/30 p-12 rounded-[3.5rem] max-w-sm">
                <CheckCircle className="text-[#A9DDD3] mx-auto mb-6" size={80} />
                <h2 className="text-3xl font-black text-[#E8E3D5] italic mb-2 uppercase">Architect Verified</h2>
                <p className="text-[#A9DDD3] font-mono text-[10px] tracking-widest uppercase mb-10">Rust & SVM Core Mastered</p>
                <Link href="/ai-agents">
                    <button className="w-full py-5 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.3em] rounded-2xl flex items-center justify-center group hover:bg-white transition-all shadow-xl">
                        Proceed to AI Agents <FastForward className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </button>
                </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl w-full mb-12 flex justify-between items-center relative z-10">
        <Link href="/"><div className="flex items-center text-[#A9DDD3]/60 hover:text-[#A9DDD3] cursor-pointer font-mono text-[10px] uppercase tracking-[0.3em] transition-colors"><ArrowLeft className="mr-2" size={14} /> [ Back to Nexus ]</div></Link>
        <div className="bg-[#A9DDD3]/5 border border-[#A9DDD3]/20 px-5 py-2 rounded-full text-[#E8E3D5] font-mono text-[10px] uppercase tracking-widest shadow-[0_0_15px_rgba(169,221,211,0.1)]">Mission 06: <span className="text-[#A9DDD3] font-bold text-glow-mint">Rust & SVM Core</span></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        <div className="lg:col-span-2 space-y-6">
            <motion.div layout className="bg-[#010101]/80 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden transition-all duration-500">
                <h1 className="text-5xl md:text-7xl font-black text-[#E8E3D5] mb-8 tracking-tighter italic uppercase leading-[0.9]">The <span className="text-[#A9DDD3]">Sovereign</span> <br/>SVM Stack</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[#E8E3D5]/70 text-sm leading-relaxed mb-12">
                    <div className="space-y-4">
                        <h3 className="text-[#A9DDD3] font-mono text-[11px] uppercase tracking-widest font-black italic">01 // Memory Safety</h3>
                        <p>Rialo contracts utilize **Rust**, eliminating common memory bugs and ensuring zero-cost abstractions for the highest security tier.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-[#A9DDD3] font-mono text-[11px] uppercase tracking-widest font-black italic">02 // Parallel Runtime</h3>
                        <p>Unlike EVM's sequential processing, Rialo's **SVM** handles thousands of transactions in parallel using a multi-threaded architecture.</p>
                    </div>
                </div>

                <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 shadow-inner">
                    <div className="flex items-center space-x-3 text-[#A9DDD3] mb-6">
                        <Terminal size={20} className="animate-pulse" />
                        <span className="text-xs font-mono uppercase tracking-[0.4em] font-black">Deep Academy Technical Readout</span>
                    </div>
                    <div className="space-y-4 text-[13px] text-[#E8E3D5]/60 italic border-l-2 border-[#A9DDD3]/20 pl-6 py-2">
                        <p>"The innovation of Rialo lies in its **Sealevel** runtime. While legacy chains act as single-lane roads, Rialo's SVM is an 8-lane superhighway, utilizing every CPU core for maximum throughput."</p>
                    </div>
                    <button onClick={runCompile} disabled={isCompiling} className={`w-full mt-10 py-6 rounded-full font-mono text-[11px] uppercase tracking-[0.6em] transition-all duration-500 border-2 font-black ${isReady ? 'bg-[#A9DDD3]/10 text-[#A9DDD3] border-[#A9DDD3]/20' : 'bg-[#A9DDD3] text-[#010101] border-[#A9DDD3] shadow-[0_0_30px_rgba(169,221,211,0.2)] hover:bg-white'}`}>
                        {isReady ? "CONTRACT READY FOR MAINNET" : isCompiling ? "COMPILING RUST..." : "INITIALIZE RUST COMPILER"}
                    </button>
                </div>
            </motion.div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
            <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md">
                <div className="flex items-center space-x-3 mb-8"><Trophy className="text-[#A9DDD3]" size={20} /><h3 className="text-[#E8E3D5] font-black tracking-widest uppercase text-xs">Curriculum Loot</h3></div>
                <div className="space-y-6 mb-10">
                    <div className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${isReady ? 'bg-[#A9DDD3]/5 border-[#A9DDD3]/20 shadow-lg' : 'bg-white/5 border-white/5 opacity-40'}`}>
                        <div className="flex flex-col"><span className="text-[9px] font-mono text-[#A9DDD3]/60 uppercase mb-1">Experience</span><span className="text-base font-bold text-[#E8E3D5]">+4,000 XP</span></div>
                        <Code2 size={18} className={isReady ? 'text-[#A9DDD3] animate-pulse' : 'text-white/20'} />
                    </div>
                </div>
                <button onClick={() => setIsCompleted(true)} disabled={!isReady} className={`w-full py-5 font-black uppercase text-xs tracking-[0.3em] rounded-xl transition-all flex items-center justify-center space-x-2 ${isReady ? 'bg-[#A9DDD3] text-[#010101] hover:bg-white shadow-xl shadow-[#A9DDD3]/20' : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'}`}>
                    {isReady ? <><Unlock size={14} /> <span>COMPLETE MISSION</span></> : <><Lock size={14} /> <span>BUILD REQUIRED</span></>}
                </button>
            </div>
        </div>
      </div>
    </main>
  );
}