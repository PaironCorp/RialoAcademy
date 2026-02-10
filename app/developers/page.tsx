"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Code2, CheckCircle, Terminal, Cpu, FastForward, Unlock, Lock, Binary, Brackets } from 'lucide-react';
import Link from 'next/link';
import { useAcademy } from "../../context/AcademyContext";

export default function DevelopersAcademy() {
  const { setIsFocused, addLog } = useAcademy();
  const [isCompleted, setIsCompleted] = useState(false);
  const [isCompiling, setIsCompiling] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    addLog("[SYSTEM]: Developers_Core v2.5 Online.");
    addLog("[INFO]: SVM Runtime environment detected.");
    return () => setIsFocused(false);
  }, [setIsFocused, addLog]);

  const runBuild = () => {
    setIsCompiling(true);
    setIsFocused(true);
    addLog("[RUSTC]: Compiling sovereign_logic.rs...");
    addLog("[SVM]: Optimizing parallel transaction accounts...");
    
    setTimeout(() => {
      setIsCompiling(false);
      setIsReady(true);
      addLog("[CORE]: Build successful. Parallelism efficiency: +400%.");
    }, 2500);
  };

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10 transform-gpu overflow-hidden">
      
      {/* SUCCESS MODAL -> ПЕРЕХОД К AI AGENTS */}
      <AnimatePresence>
        {isCompleted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-[#010101] flex items-center justify-center p-6 text-center">
            <div className="bg-[#050505] border border-[#A9DDD3]/30 p-12 rounded-[3.5rem] max-w-sm shadow-2xl">
                <Code2 className="text-[#A9DDD3] mx-auto mb-6" size={80} />
                <h2 className="text-3xl font-black text-[#E8E3D5] italic mb-8 uppercase">Contract Verified</h2>
                <Link href="/ai-agents">
                    <button className="w-full py-5 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.3em] rounded-2xl flex items-center justify-center">
                        Proceed to AI Agents <FastForward className="ml-2" size={16} />
                    </button>
                </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl w-full mb-12 flex justify-between items-center relative z-10">
        <Link href="/"><div className="flex items-center text-[#A9DDD3]/60 hover:text-[#A9DDD3] cursor-pointer font-mono text-xs uppercase tracking-widest transition-colors"><ArrowLeft className="mr-2" size={14} /> [ Back ]</div></Link>
        <div className="bg-[#050505] border border-[#A9DDD3]/20 px-6 py-3 rounded-full text-[#E8E3D5] font-mono text-xs uppercase tracking-widest shadow-lg italic">Mission 06: <span className="text-[#A9DDD3] font-bold">Rust & SVM Core</span></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
        <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#080808] border border-white/10 rounded-[3rem] p-10 md:p-14 shadow-2xl">
                <h1 className="text-5xl md:text-7xl font-black text-[#E8E3D5] mb-8 tracking-tighter italic uppercase leading-none">The <span className="text-[#A9DDD3]">Sovereign</span> <br/>SVM Stack</h1>
                
                <div className="space-y-10 text-[#E8E3D5]/70 text-lg leading-relaxed italic mb-12">
                    <section className="space-y-4">
                        <h3 className="text-[#A9DDD3] font-mono text-[11px] uppercase tracking-widest font-black italic border-b border-[#A9DDD3]/20 pb-2">01 // Why Rust?</h3>
                        <p>Rust is the foundation of Rialo. Unlike older languages, it provides <strong className="text-white">Memory Safety</strong> without a garbage collector, ensuring that smart contracts are physically unable to have certain types of vulnerabilities.</p>
                    </section>
                    
                    {/* ИНСПЕКТОР КОДА (ВИЗУАЛЬНЫЙ) */}
                    <div className="p-8 bg-black rounded-[2.5rem] border border-white/5 font-mono text-xs leading-relaxed text-[#E8E3D5]/40 relative group">
                        <div className="absolute top-4 right-6 text-[10px] uppercase text-[#A9DDD3] opacity-30 font-black italic">contract.rs</div>
                        <p><span className="text-[#A9DDD3]">pub fn</span> <span className="text-white">execute_order</span>(ctx: Context, amount: <span className="text-[#A9DDD3]">u64</span>) {"{"}</p>
                        <p className="pl-6 text-white/60">// SVM processes this in parallel with other accounts</p>
                        <p className="pl-6"><span className="text-[#A9DDD3]">let</span> account = &<span className="text-white">mut ctx.accounts.user_wallet</span>;</p>
                        <p className="pl-6">account.balance -= amount;</p>
                        <p>{"}"}</p>
                        
                        <div className="mt-8 pt-8 border-t border-white/5">
                            <h4 className="text-[#A9DDD3] font-black uppercase text-[10px] mb-3 italic">Technical Breakthrough: Sealevel</h4>
                            <p className="text-[12px]">Rialo's SVM uses <strong className="text-white">Sealevel</strong>, which allows the chain to know exactly which accounts a transaction will touch before it runs. This enables thousands of contracts to run at the same time on different CPU cores.</p>
                        </div>
                    </div>
                </div>

                <button onClick={runBuild} disabled={isCompiling} className={`w-full py-6 rounded-full font-mono text-sm uppercase tracking-[0.5em] border-2 font-black transition-all shadow-xl ${isReady ? 'bg-[#A9DDD3]/10 text-[#A9DDD3] border-[#A9DDD3]/20' : 'bg-[#A9DDD3] text-[#010101] border-[#A9DDD3] hover:bg-white'}`}>
                    {isReady ? "CODE VERIFIED BY SVM" : isCompiling ? "PARALLELIZING..." : "COMPILE SOVEREIGN CODE"}
                </button>
            </div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
            <div className="bg-[#080808] border border-white/10 rounded-[3rem] p-10 shadow-xl">
                <h3 className="text-[#E8E3D5] font-black tracking-widest uppercase text-xs mb-8 italic">Mission Loot</h3>
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl mb-12">
                    <span className="text-[10px] font-mono text-[#A9DDD3]/60 uppercase block mb-2 tracking-widest italic">Dev Experience</span>
                    <span className="text-2xl font-black text-white">+4,000 XP</span>
                </div>
                <button onClick={() => setIsCompleted(true)} disabled={!isReady} className={`w-full py-5 font-black uppercase text-xs tracking-[0.3em] rounded-xl transition-all ${isReady ? 'bg-[#A9DDD3] text-[#010101] hover:bg-white shadow-xl' : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'}`}>
                    {isReady ? <><Unlock size={14} /> <span>COMPLETE MISSION</span></> : <span>BUILD REQUIRED</span>}
                </button>
            </div>
        </div>
      </div>
    </main>
  );
}