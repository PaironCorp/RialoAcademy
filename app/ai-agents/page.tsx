"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Bot, Brain, Wallet, Zap, ShieldCheck, ChevronRight, CheckCircle, FastForward, Unlock, Lock, Cpu } from 'lucide-react';
import Link from 'next/link';
import { useAcademy } from "../../context/AcademyContext";

export default function AIAgentsAcademy() {
  const { setIsFocused, addLog } = useAcademy();
  const [status, setStatus] = useState("IDLE"); // IDLE, DEPLOYING, ACTIVE
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    addLog("[SYSTEM]: AI_Sovereignty Module Initialized.");
    addLog("[INFO]: Systems optimized for Machine-to-Machine rails.");
    return () => setIsFocused(false);
  }, [setIsFocused, addLog]);

  const startDeployment = () => {
    setStatus("DEPLOYING");
    setIsFocused(true);
    addLog("[NEURAL_LINK]: Synthesizing sovereign weights...");
    addLog("[SVM_RUNTIME]: Allocating isolated execution sandbox...");
    
    setTimeout(() => {
      setStatus("ACTIVE");
      addLog("[CORE]: Agent Online. Status: Economic Citizen.");
      addLog("[WALLET]: Native address 0xRialo...8fb established.");
    }, 2500);
  };

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10 transform-gpu overflow-hidden">
      
      {/* SUCCESS MODAL -> PROCEED TO NETWORK */}
      <AnimatePresence>
        {isCompleted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-[#010101]/98 flex items-center justify-center p-6 text-center">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-[#050505] border border-[#A9DDD3]/30 p-12 rounded-[4rem] max-w-sm shadow-2xl">
                <CheckCircle className="text-[#A9DDD3] mx-auto mb-6" size={80} />
                <h2 className="text-3xl font-black text-[#E8E3D5] italic mb-8 uppercase tracking-tighter">Agency Verified</h2>
                <Link href="/network">
                    <button className="w-full py-5 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.3em] rounded-2xl flex items-center justify-center group hover:bg-white transition-all shadow-xl">
                        Proceed to Network <FastForward className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </button>
                </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER */}
      <div className="max-w-6xl w-full mb-12 flex justify-between items-center relative z-10">
        <Link href="/"><div className="flex items-center text-[#A9DDD3]/60 hover:text-[#A9DDD3] cursor-pointer font-mono text-xs uppercase tracking-widest"><ArrowLeft className="mr-2" size={14} /> [ Back to Nexus ]</div></Link>
        <div className="bg-[#050505] border border-[#A9DDD3]/20 px-6 py-3 rounded-full text-[#E8E3D5] font-mono text-xs uppercase tracking-widest italic shadow-lg">
          Mission 07: <span className="text-[#A9DDD3] font-bold">Machine Economy</span>
        </div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
        <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#080808] border border-white/10 rounded-[3.5rem] p-10 md:p-14 shadow-2xl overflow-hidden relative">
                
                <h1 className="text-6xl md:text-8xl font-black text-[#E8E3D5] mb-8 tracking-tighter italic uppercase leading-[0.85]">
                   Sovereign <br/><span className="text-[#A9DDD3] text-glow-mint">AI Agents</span>
                </h1>
                
                <div className="space-y-12">
                    {/* EDUCATION SECTION 01 */}
                    <section className="space-y-4">
                        <h3 className="text-[#A9DDD3] font-mono text-[11px] uppercase tracking-widest font-black italic border-b border-[#A9DDD3]/20 pb-2">The Shift: From Tools to Citizens</h3>
                        <p className="text-[#E8E3D5]/70 text-lg leading-relaxed italic">
                            In traditional Web2, AI is a tool owned by a corporation. In Rialo, AI is a **Sovereign Entity**. 
                            It doesn't just process data; it executes **Economic Agency**.
                        </p>
                    </section>

                    {/* INTERACTIVE DEPLOYMENT SIMULATOR */}
                    <div className="bg-black border border-white/5 rounded-[3.5rem] p-12 text-center relative overflow-hidden group shadow-inner">
                        <AnimatePresence mode="wait">
                            {status === "DEPLOYING" ? (
                                <motion.div key="dep" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-12 space-y-6">
                                    <Brain className="text-[#A9DDD3] animate-pulse mx-auto" size={72} />
                                    <p className="font-mono text-[10px] text-[#A9DDD3] uppercase animate-pulse tracking-[0.5em] font-black italic">Synthesizing Agency...</p>
                                </motion.div>
                            ) : status === "ACTIVE" ? (
                                <motion.div key="act" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-12 space-y-10">
                                    <div className="flex justify-center space-x-8">
                                        <div className="p-6 bg-[#A9DDD3]/10 border border-[#A9DDD3]/20 rounded-full shadow-[0_0_30px_rgba(169,221,211,0.2)]"><Wallet className="text-[#A9DDD3]" size={40} /></div>
                                        <div className="p-6 bg-[#A9DDD3]/10 border border-[#A9DDD3]/20 rounded-full animate-pulse"><Cpu className="text-[#A9DDD3]" size={40} /></div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="font-mono text-base text-[#A9DDD3] uppercase font-black italic tracking-widest">Agent Fully Operational</p>
                                        <p className="text-[10px] opacity-40 uppercase font-mono tracking-[0.3em] font-bold">Autonomous Wallet Linked // 0xRialo...8fb</p>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="py-12 space-y-8">
                                    <Bot className="text-white/10 mx-auto" size={72} />
                                    <p className="text-sm italic text-white/40 max-w-sm mx-auto">Click below to allocate L1 compute resources for a native AI agent within the SVM sandbox.</p>
                                    <button 
                                      onClick={startDeployment} 
                                      className="px-14 py-6 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.4em] rounded-full shadow-[0_0_50px_rgba(169,221,211,0.3)] hover:bg-white transition-all transform-gpu"
                                    >
                                        Simulate Deployment
                                    </button>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* EDUCATION SECTION 02: THE TECH PILLARS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                        <div className="p-8 bg-[#A9DDD3]/5 border border-[#A9DDD3]/20 rounded-[2.5rem] space-y-4">
                            <Wallet className="text-[#A9DDD3]" size={28} />
                            <h4 className="text-white font-black text-sm uppercase font-mono italic tracking-widest">Financial Agency</h4>
                            <p className="text-xs text-white/40 italic leading-relaxed">
                                Rialo agents own their private keys. They earn fees from their work and pay for their own L1 gas, creating a self-sustaining machine-to-machine loop.
                            </p>
                        </div>
                        <div className="p-8 bg-[#A9DDD3]/5 border border-[#A9DDD3]/20 rounded-[2.5rem] space-y-4">
                            <ShieldCheck className="text-[#A9DDD3]" size={28} />
                            <h4 className="text-white font-black text-sm uppercase font-mono italic tracking-widest">Immutable Logic</h4>
                            <p className="text-xs text-white/40 italic leading-relaxed">
                                REX (Encrypted Execution) ensures the agent's neural logic remains tamper-proof and private, allowing for secure high-stakes decision making.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
            <div className="bg-[#080808] border border-white/10 rounded-[3rem] p-10 shadow-xl">
                <div className="flex items-center space-x-3 mb-10 text-[#A9DDD3]"><Zap size={20} /><h3 className="text-white font-black tracking-widest uppercase text-xs italic">Concept Map</h3></div>
                
                <div className="space-y-3 mb-12">
                    {["Agent Sovereignty", "SVM Parallelism", "Token Gating", "Machine Finance"].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-5 bg-black rounded-2xl border border-white/5 group hover:border-[#A9DDD3]/40 transition-colors">
                            <span className="text-[11px] font-mono text-white/40 uppercase font-black italic">{item}</span>
                            <ChevronRight size={14} className="text-[#A9DDD3]" />
                        </div>
                    ))}
                </div>

                <button 
                  onClick={() => setIsCompleted(true)} 
                  disabled={status !== "ACTIVE"} 
                  className={`w-full py-6 font-black uppercase text-xs tracking-[0.4em] rounded-2xl transition-all flex items-center justify-center space-x-2
                  ${status === "ACTIVE" ? "bg-[#A9DDD3] text-[#010101] hover:bg-white shadow-[0_0_30px_rgba(169,221,211,0.3)]" : "bg-white/5 text-white/20 cursor-not-allowed border border-white/5"}`}
                >
                    {status === "ACTIVE" ? <><Unlock size={14} /> <span>COMPLETE MISSION</span></> : <><Lock size={14} /> <span>AGENCY REQUIRED</span></>}
                </button>
            </div>
        </div>
      </div>
    </main>
  );
}