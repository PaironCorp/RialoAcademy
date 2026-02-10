"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Brain, Wallet, Zap, ShieldCheck, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useAcademy } from "../../context/AcademyContext";

export default function AIAgentsAcademy() {
  const { addLog } = useAcademy();

  useEffect(() => {
    addLog("[ACADEMY]: Module 07: Machine Economy Loaded.");
    addLog("[AGENT_SYSTEM]: Neural rails ready for sovereign execution.");
  }, [addLog]);

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10">
      <div className="max-w-6xl w-full mb-12 flex justify-between items-center">
        <Link href="/"><div className="flex items-center text-[#A9DDD3]/60 hover:text-[#A9DDD3] cursor-pointer font-mono text-[10px] uppercase tracking-widest transition-colors"><ArrowLeft className="mr-2" size={14} /> [ Back ]</div></Link>
        <div className="bg-[#A9DDD3]/5 border border-[#A9DDD3]/20 px-5 py-2 rounded-full text-[#E8E3D5] font-mono text-[10px] uppercase tracking-widest">Protocol Education</div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#010101]/90 border border-white/10 rounded-[3rem] p-10 md:p-14 shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-black text-[#E8E3D5] mb-8 tracking-tighter italic uppercase leading-none">The <span className="text-[#A9DDD3]">Sovereign</span> <br/>AI Agent</h1>
            
            <div className="space-y-10">
                <section className="space-y-4">
                    <h3 className="text-[#A9DDD3] font-mono text-[10px] uppercase tracking-[0.3em] font-bold border-b border-[#A9DDD3]/20 pb-2 italic">A New Economic Class</h3>
                    <p className="text-[#E8E3D5]/70 text-lg leading-relaxed italic">
                        In Rialo, AI is not just a tool—it's an **Economic Agent**. It can own assets, make decisions, and interact with smart contracts natively.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: Wallet, title: "Self-Custody", desc: "Agents hold their own wallets and sign transactions without human permission." },
                      { icon: ShieldCheck, title: "Verified Logic", desc: "REX ensures that an agent's code is exactly what it claims to be." }
                    ].map((card, i) => (
                      <div key={i} className="p-6 bg-white/[0.03] border border-white/5 rounded-3xl space-y-3">
                          <card.icon className="text-[#A9DDD3]" size={24} />
                          <h4 className="text-white font-bold text-xs uppercase font-mono">{card.title}</h4>
                          <p className="text-xs text-white/40 leading-relaxed italic">{card.desc}</p>
                      </div>
                    ))}
                </div>

                <div className="p-8 bg-[#A9DDD3]/5 border-l-4 border-[#A9DDD3] rounded-r-3xl">
                    <p className="text-sm italic font-medium">"Rialo provides the infrastructure for a **Machine-to-Machine** economy, where AI agents trade and collaborate with 50ms finality."</p>
                </div>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
            <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md">
                <h3 className="text-[#E8E3D5] font-black tracking-widest uppercase text-xs mb-8">Concept Map</h3>
                <div className="space-y-3 mb-10">
                    {["Agent Sovereignty", "SVM Parallelism", "Token Gating"].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-black rounded-xl border border-white/5">
                            <span className="text-[10px] font-mono text-white/40 uppercase">{item}</span>
                            <ChevronRight size={14} className="text-[#A9DDD3]" />
                        </div>
                    ))}
                </div>
                <button onClick={() => addLog("[AGENT]: Sandbox initialized. Simulation active.")} className="w-full py-5 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.3em] rounded-xl hover:bg-white transition-all shadow-xl">SIMULATE DEPLOYMENT</button>
            </div>
        </div>
      </div>
    </main>
  );
}