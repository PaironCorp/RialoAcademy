"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Bot, Brain, Cpu, Wallet, Zap } from 'lucide-react';
import Link from 'next/link';
import { useAcademy } from "../../context/AcademyContext";

export default function AIAgentsMission() {
  const { addLog } = useAcademy();

  useEffect(() => {
    addLog("[AGENT_SYSTEM]: Initializing Neural Interface...");
    addLog("[ECONOMY]: Establishing Machine-to-Machine rails...");
  }, [addLog]);

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10">
      <div className="max-w-6xl w-full mb-12 flex justify-between items-center">
        <Link href="/"><div className="flex items-center text-[#A9DDD3]/60 hover:text-[#A9DDD3] cursor-pointer font-mono text-[10px] uppercase tracking-widest transition-colors"><ArrowLeft className="mr-2" size={14} /> [ Back to Atrium ]</div></Link>
        <div className="bg-[#A9DDD3]/5 border border-[#A9DDD3]/20 px-5 py-2 rounded-full text-[#E8E3D5] font-mono text-[10px] uppercase tracking-widest">Education: <span className="text-[#A9DDD3] font-bold">The Machine Economy</span></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#010101]/80 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 md:p-14 shadow-2xl overflow-hidden relative">
            
            <h1 className="text-5xl md:text-7xl font-black text-[#E8E3D5] mb-8 tracking-tighter italic uppercase leading-none">Sovereign <br/><span className="text-[#A9DDD3]">AI Agents</span></h1>
            
            <div className="space-y-10 text-[#E8E3D5]/70 text-lg md:text-xl font-medium leading-relaxed italic">
                <p>Imagine an AI that isn't just a chatbot, but a <strong className="text-white underline decoration-[#A9DDD3]">Sovereign Entity</strong>.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm not-italic opacity-100">
                    <div className="p-6 bg-[#A9DDD3]/5 rounded-3xl border border-[#A9DDD3]/20">
                        <Wallet className="text-[#A9DDD3] mb-4" size={24} />
                        <h4 className="text-white font-bold mb-2 uppercase text-xs font-mono">Economic Agency</h4>
                        <p className="text-white/60">On Rialo, AI Agents have their own native wallets. They can earn fees, trade assets, and pay for their own compute power.</p>
                    </div>
                    <div className="p-6 bg-[#A9DDD3]/5 rounded-3xl border border-[#A9DDD3]/20">
                        <Zap className="text-[#A9DDD3] mb-4" size={24} />
                        <h4 className="text-white font-bold mb-2 uppercase text-xs font-mono">0ms Decision Logic</h4>
                        <p className="text-white/60">Because Rialo is ultra-fast, agents can react to market events in real-time without human intervention.</p>
                    </div>
                </div>

                <div className="mt-8 border-l-2 border-[#A9DDD3] pl-8 py-2">
                    <p className="text-sm">"This is the shift from **SaaS (Software as a Service)** to **Sovereign Agents**. Machines that operate as first-class citizens in a decentralized economy."</p>
                </div>
            </div>
          </motion.div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
            <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md">
                <h3 className="text-[#E8E3D5] font-black tracking-widest uppercase text-xs mb-8 italic">Academy Insights</h3>
                <div className="p-6 bg-[#010101] rounded-2xl border border-white/5 space-y-4">
                    <div className="flex items-center space-x-2 text-[#A9DDD3]"><Brain size={16} /><span className="text-[10px] font-mono uppercase font-bold">Concept Check</span></div>
                    <p className="text-xs text-white/40 leading-relaxed italic">"Standard AI is a product you use. Rialo AI is an entity you collaborate with."</p>
                </div>
                <button className="w-full mt-10 py-5 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.3em] rounded-xl">DEPLOY AGENT</button>
            </div>
        </div>
      </div>
    </main>
  );
}