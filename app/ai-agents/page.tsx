"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Bot, Brain, Wallet, Zap, ShieldCheck, ChevronRight, CheckCircle, FastForward, Unlock, Lock } from 'lucide-react';
import Link from 'next/link';
import { useAcademy } from "../../context/AcademyContext";

export default function AIAgentsAcademy() {
  const { setIsFocused, addLog } = useAcademy();
  const [status, setStatus] = useState("IDLE"); // IDLE, DEPLOYING, ACTIVE
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    addLog("[SYSTEM]: AI_Sovereignty Module Initialized.");
    addLog("[INFO]: Neural rails optimized for Machine-to-Machine economy.");
    return () => setIsFocused(false);
  }, [setIsFocused, addLog]);

  const startDeployment = () => {
    setStatus("DEPLOYING");
    setIsFocused(true);
    addLog("[AGENT]: Synthesizing sovereign neural weights...");
    addLog("[WALLET]: Generating native machine-owned address...");
    
    setTimeout(() => {
      setStatus("ACTIVE");
      addLog("[CORE]: Agent Online. Status: Sovereign.");
      addLog("[MARKET]: Autonomous arbitrage opportunities detected.");
    }, 2500);
  };

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10 transform-gpu overflow-hidden">
      
      {/* SUCCESS MODAL -> ПЕРЕХОД К ФИНАЛУ (NETWORK) */}
      <AnimatePresence>
        {isCompleted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-[#010101] flex items-center justify-center p-6 text-center">
            <div className="bg-[#050505] border border-[#A9DDD3]/30 p-12 rounded-[3.5rem] max-w-sm shadow-2xl">
                <CheckCircle className="text-[#A9DDD3] mx-auto mb-6" size={80} />
                <h2 className="text-3xl font-black text-[#E8E3D5] italic mb-8 uppercase">Agency Established</h2>
                <Link href="/network">
                    <button className="w-full py-5 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.3em] rounded-2xl flex items-center justify-center group">
                        Final Stage: Network <FastForward className="ml-2" size={16} />
                    </button>
                </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl w-full mb-12 flex justify-between items-center relative z-10">
        <Link href="/"><div className="flex items-center text-[#A9DDD3]/60 hover:text-[#A9DDD3] cursor-pointer font-mono text-xs uppercase tracking-widest transition-colors"><ArrowLeft className="mr-2" size={14} /> [ Back ]</div></Link>
        <div className="bg-[#050505] border border-[#A9DDD3]/20 px-6 py-3 rounded-full text-[#E8E3D5] font-mono text-xs uppercase tracking-widest shadow-lg italic">Mission 07: <span className="text-[#A9DDD3] font-bold">Machine Economy</span></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
        <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#080808] border border-white/10 rounded-[3rem] p-10 md:p-14 shadow-2xl overflow-hidden relative">
                
                <h1 className="text-5xl md:text-7xl font-black text-[#E8E3D5] mb-8 tracking-tighter italic uppercase leading-none">The <span className="text-[#A9DDD3]">Sovereign</span> <br/>AI Agent</h1>
                
                <div className="space-y-10 text-[#E8E3D5]/70 text-lg leading-relaxed italic mb-12">
                    <section className="space-y-4">
                        <h3 className="text-[#A9DDD3] font-mono text-[11px] uppercase tracking-widest font-black italic border-b border-[#A9DDD3]/20 pb-2">Web2 AI vs. Rialo AI</h3>
                        <p>В обычном интернете ИИ — это инструмент, за который платит человек. В Rialo ИИ — это <strong className="text-white">Экономический Агент</strong>. Он сам владеет своими деньгами, сам оплачивает свой «compute» и сам исполняет логику без посредников.</p>
                    </section>

                    {/* СИМУЛЯТОР ДЕПЛОЯ (ТЕПЕРЬ ПОНЯТНЫЙ) */}
                    <div className="bg-black border border-white/5 rounded-[3rem] p-10 text-center relative overflow-hidden group">
                        <AnimatePresence mode="wait">
                            {status === "DEPLOYING" ? (
                                <motion.div key="dep" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-10 space-y-6">
                                    <Brain className="text-[#A9DDD3] animate-pulse mx-auto" size={64} />
                                    <p className="font-mono text-xs text-[#A9DDD3] uppercase animate-pulse tracking-[0.4em] font-black italic">Synthesizing Agency...</p>
                                </motion.div>
                            ) : status === "ACTIVE" ? (
                                <motion.div key="act" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-10 space-y-8">
                                    <div className="flex justify-center space-x-6">
                                        <div className="p-6 bg-[#A9DDD3]/10 border border-[#A9DDD3]/20 rounded-full shadow-[0_0_30px_rgba(169,221,211,0.2)]"><Wallet className="text-[#A9DDD3]" size={32} /></div>
                                        <div className="p-6 bg-[#A9DDD3]/10 border border-[#A9DDD3]/20 rounded-full animate-pulse"><Zap className="text-[#A9DDD3]" size={32} /></div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="font-mono text-sm text-[#A9DDD3] uppercase font-black italic tracking-widest underline decoration-[#A9DDD3]/30">Agent Online & Trading</p>
                                        <p className="text-[10px] opacity-40 uppercase font-mono tracking-widest font-bold">Neural Signature Verified by REX</p>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="py-10 space-y-8">
                                    <Bot className="text-white/10 mx-auto" size={64} />
                                    <p className="text-sm italic text-white/40 max-w-xs mx-auto">Нажми ниже, чтобы выделить часть ресурсов Rialo для автономного ИИ-агента.</p>
                                    <button onClick={startDeployment} className="px-12 py-6 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.4em] rounded-full shadow-[0_0_40px_rgba(169,221,211,0.3)] hover:bg-white transition-all transform-gpu">
                                        Simulate Deployment
                                    </button>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                        <div className="p-6 bg-[#A9DDD3]/5 border border-[#A9DDD3]/20 rounded-3xl space-y-3">
                            <ShieldCheck className="text-[#A9DDD3]" size={24} />
                            <h4 className="text-white font-black text-xs uppercase font-mono italic tracking-widest">Self-Sovereignty</h4>
                            <p className="text-xs text-white/40 italic leading-relaxed">Agent owns its keys. No human can intercept its financial agency.</p>
                        </div>
                        <div className="p-6 bg-[#A9DDD3]/5 border border-[#A9DDD3]/20 rounded-3xl space-y-3">
                            <Zap className="text-[#A9DDD3]" size={24} />
                            <h4 className="text-white font-black text-xs uppercase font-mono italic tracking-widest">Native Agency</h4>
                            <p className="text-xs text-white/40 italic leading-relaxed">Logic executed at 50ms block times directly within the SVM runtime.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
            <div className="bg-[#080808] border border-white/10 rounded-[3rem] p-10 shadow-xl">
                <h3 className="text-[#E8E3D5] font-black tracking-widest uppercase text-xs mb-8 italic">Concept Map</h3>
                <div className="space-y-3 mb-12">
                    {["Agent Sovereignty", "SVM Parallelism", "Token Gating"].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-5 bg-black rounded-xl border border-white/5 group hover:border-[#A9DDD3]/30 transition-colors">
                            <span className="text-[11px] font-mono text-white/40 uppercase font-black italic">{item}</span>
                            <ChevronRight size={14} className="text-[#A9DDD3]" />
                        </div>
                    ))}
                </div>
                <button onClick={() => setIsCompleted(true)} disabled={status !== "ACTIVE"} className={`w-full py-5 font-black uppercase text-xs tracking-[0.3em] rounded-xl transition-all flex items-center justify-center space-x-2 ${status === "ACTIVE" ? "bg-[#A9DDD3] text-[#010101] hover:bg-white shadow-xl shadow-[#A9DDD3]/20" : "bg-white/5 text-white/20 cursor-not-allowed border border-white/5"}`}>
                    {status === "ACTIVE" ? <><Unlock size={14} /> <span>COMPLETE MISSION</span></> : <><Lock size={14} /> <span>AGENCY REQUIRED</span></>}
                </button>
            </div>
        </div>
      </div>
    </main>
  );
}