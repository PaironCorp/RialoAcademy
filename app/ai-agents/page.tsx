"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Bot, Trophy, CheckCircle, Cpu, Brain, Rocket, TrendingUp, FastForward } from 'lucide-react';
import Link from 'next/link';
import { useAcademy } from "../../context/AcademyContext";

export default function AIAgentsMission() {
  const { setIsFocused, addLog } = useAcademy();
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [isAgentActive, setIsAgentActive] = useState(false);
  const [alreadyClaimed, setAlreadyClaimed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("mission_07_complete");
    if (saved === "true") setAlreadyClaimed(true);
    return () => setIsFocused(false);
  }, [setIsFocused]);

  const deployAgent = () => {
    setIsDeploying(true);
    setIsFocused(true);
    addLog("[NEURAL_CORE]: Allocating RAM for Sovereign AI Agent...");
    addLog("[RUNTIME]: Booting SVM Agent Sandbox...");

    setTimeout(() => {
      setIsDeploying(false);
      setIsAgentActive(true);
      addLog("[AGENT_01]: Online. Neural pathways synced.");
      addLog("[MARKET]: DEX opportunity detected. Executing arbitrage swap...");
      addLog("[LEDGER]: Signature verified by machine-owned wallet.");
    }, 2500);
  };

  const handleComplete = () => {
    if (!isAgentActive) return;
    if (!alreadyClaimed) {
        const currentXp = parseInt(localStorage.getItem("rialo_xp") || "0");
        localStorage.setItem("rialo_xp", (currentXp + 5000).toString());
        localStorage.setItem("mission_07_complete", "true");
        setAlreadyClaimed(true);
    }
    setIsCompleted(true);
    addLog("[ACADEMY]: Mission 07 Complete. +5,000 XP.");
  };

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10">
      
      {/* SUCCESS MODAL -> ПЕРЕХОД К ФИНАЛУ */}
      <AnimatePresence>
        {isCompleted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-[#010101]/95 backdrop-blur-2xl flex items-center justify-center p-6 text-center">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-[#A9DDD3]/10 border border-[#A9DDD3]/30 p-12 rounded-[3.5rem] max-w-sm shadow-[0_0_50px_rgba(169,221,211,0.2)]">
                <CheckCircle className="text-[#A9DDD3] mx-auto mb-6" size={80} />
                <h2 className="text-3xl font-black text-[#E8E3D5] italic mb-2 uppercase tracking-tighter">Neural Link Active</h2>
                <p className="text-[#A9DDD3] font-mono text-[10px] tracking-widest uppercase mb-10">AI Citizen Status: Verified</p>
                <Link href="/network">
                    <button className="w-full py-5 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.3em] rounded-2xl flex items-center justify-center group hover:bg-white transition-all">
                        Final Stage: Network <FastForward className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </button>
                </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl w-full mb-12 flex justify-between items-center relative z-10">
        <Link href="/"><div className="flex items-center text-[#A9DDD3]/60 hover:text-[#A9DDD3] cursor-pointer font-mono text-[10px] uppercase tracking-[0.3em] transition-colors"><ArrowLeft className="mr-2" size={14} /> [ Back to Nexus ]</div></Link>
        <div className="bg-[#A9DDD3]/5 border border-[#A9DDD3]/20 px-5 py-2 rounded-full text-[#E8E3D5] font-mono text-[10px] uppercase tracking-widest">Mission 07: <span className="text-[#A9DDD3] font-bold text-glow-mint">Machine Economy</span></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10">
        <div className="lg:col-span-2 space-y-6">
            <motion.div layout className="bg-[#010101]/80 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden transition-all duration-500">
                <h1 className="text-5xl md:text-7xl font-black text-[#E8E3D5] mb-6 tracking-tighter italic uppercase leading-[0.9]">The <br/><span className="text-[#A9DDD3]">Sovereign</span> Brain</h1>
                <p className="text-[#E8E3D5]/70 text-lg font-medium leading-relaxed max-w-xl mb-12 italic">Rialo provides the native rails for AI Agents to hold wallets, pay fees, and execute logic without human oversight.</p>

                <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 shadow-inner text-center">
                    <AnimatePresence mode="wait">
                        {!isAgentActive ? (
                            <motion.div key="idle" className="py-10">
                                <Brain size={64} className={`mx-auto mb-6 ${isDeploying ? 'animate-pulse text-[#A9DDD3]' : 'text-white/10'}`} />
                                <button onClick={deployAgent} disabled={isDeploying} className="px-12 py-6 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.4em] rounded-full shadow-[0_0_40px_rgba(169,221,211,0.3)] hover:bg-white transition-all">
                                    {isDeploying ? "UPLOADING NEURAL WEIGHTS..." : "DEPLOY SOVEREIGN AGENT"}
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div key="active" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-10 space-y-8">
                                <div className="flex justify-center space-x-6">
                                    <div className="p-6 bg-[#A9DDD3]/10 border border-[#A9DDD3]/30 rounded-full animate-bounce shadow-[0_0_30px_rgba(169,221,211,0.2)]"><TrendingUp className="text-[#A9DDD3]" size={32} /></div>
                                    <div className="p-6 bg-[#A9DDD3]/10 border border-[#A9DDD3]/30 rounded-full animate-pulse"><Cpu className="text-[#A9DDD3]" size={32} /></div>
                                    <div className="p-6 bg-[#A9DDD3]/10 border border-[#A9DDD3]/30 rounded-full animate-bounce [animation-delay:0.2s] shadow-[0_0_30px_rgba(169,221,211,0.2)]"><Rocket className="text-[#A9DDD3]" size={32} /></div>
                                </div>
                                <div className="p-6 bg-[#010101]/60 rounded-2xl border border-[#A9DDD3]/20 inline-block">
                                    <p className="font-mono text-[#A9DDD3] text-xs uppercase tracking-widest font-black">Agent Status: ACTIVE & TRADING</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>

        <div className="space-y-6">
            <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md">
                <div className="flex items-center space-x-3 mb-8"><Trophy className="text-[#A9DDD3]" size={20} /><h3 className="text-[#E8E3D5] font-black tracking-widest uppercase text-xs">Mission Loot</h3></div>
                <div className="space-y-6 mb-10">
                    <div className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${isAgentActive ? 'bg-[#A9DDD3]/5 border-[#A9DDD3]/20 shadow-lg' : 'bg-white/5 border-white/5 opacity-40'}`}>
                        <div className="flex flex-col"><span className="text-[9px] font-mono text-[#A9DDD3]/60 uppercase mb-1">Experience</span><span className="text-base font-bold text-[#E8E3D5]">+5,000 XP</span></div>
                        <Bot size={18} className={isAgentActive ? 'text-[#A9DDD3] animate-pulse' : 'text-white/20'} />
                    </div>
                </div>
                <button onClick={handleComplete} disabled={!isAgentActive} className={`w-full py-5 font-black uppercase text-xs tracking-[0.3em] rounded-xl transition-all flex items-center justify-center space-x-2 ${isAgentActive ? 'bg-[#A9DDD3] text-[#010101] hover:bg-white shadow-xl shadow-[#A9DDD3]/20' : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'}`}>
                    {isAgentActive ? "MISSION COMPLETE" : "AI DEPLOYMENT REQUIRED"}
                </button>
            </div>
        </div>
      </div>
    </main>
  );
}