"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Brain, Wallet, Zap, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useAcademy } from "../../context/AcademyContext";

export default function AIAgentsAcademy() {
  const { addLog } = useAcademy();

  useEffect(() => {
    addLog("[ACADEMY]: Loading Machine Economy Module...");
    addLog("[INFO]: AI Sovereignty level: High");
  }, []);

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10">
      <div className="max-w-6xl w-full mb-12 flex justify-between items-center">
        <Link href="/"><div className="flex items-center text-[#A9DDD3]/60 hover:text-[#A9DDD3] cursor-pointer font-mono text-[10px] uppercase tracking-widest transition-colors"><ArrowLeft className="mr-2" size={14} /> [ Atrium ]</div></Link>
        <div className="bg-[#A9DDD3]/5 border border-[#A9DDD3]/20 px-5 py-2 rounded-full text-[#E8E3D5] font-mono text-[10px] uppercase tracking-widest italic">Module 07: Machine Economy</div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-[#010101]/80 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 md:p-14 shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-black text-[#E8E3D5] mb-8 tracking-tighter italic uppercase leading-none">The <span className="text-[#A9DDD3]">Sovereign</span> <br/>AI Agent</h1>
            
            <div className="space-y-12">
                <section className="space-y-4">
                    <h3 className="text-[#A9DDD3] font-mono text-[10px] uppercase tracking-[0.3em] font-bold border-b border-[#A9DDD3]/20 pb-2">What is a Sovereign Agent?</h3>
                    <p className="text-[#E8E3D5]/70 text-lg leading-relaxed italic">
                        In traditional Web2, AI is a tool owned by a corporation. In Rialo, AI is a **First-Class Citizen**. 
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl space-y-3">
                        <Wallet className="text-[#A9DDD3]" size={24} />
                        <h4 className="text-white font-bold text-sm uppercase font-mono">Native Wallets</h4>
                        <p className="text-xs text-white/40 leading-relaxed">Agents don't need human permission to trade. They hold their own private keys and sign transactions natively on-chain.</p>
                    </div>
                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl space-y-3">
                        <ShieldCheck className="text-[#A9DDD3]" size={24} />
                        <h4 className="text-white font-bold text-sm uppercase font-mono">Proof of Agency</h4>
                        <p className="text-xs text-white/40 leading-relaxed">Through REX computation, agents prove their logic is unaltered, ensuring trustless execution of complex strategies.</p>
                    </div>
                </div>

                <div className="p-8 bg-[#A9DDD3]/5 border-l-4 border-[#A9DDD3] rounded-r-3xl">
                    <p className="text-sm italic font-medium">"We are moving from Software as a Service to **Sovereignty as a Service**. A future where machines manage wealth, liquidity, and infrastructure autonomously."</p>
                </div>
            </div>
          </div>
        </div>

        {/* ACADEMY SIDEBAR */}
        <div className="space-y-6">
            <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md">
                <h3 className="text-[#E8E3D5] font-black tracking-widest uppercase text-xs mb-8">Concept Check</h3>
                <div className="p-5 bg-black rounded-2xl border border-white/5 space-y-4">
                    <div className="flex items-center space-x-2 text-[#A9DDD3]"><Brain size={16} /><span className="text-[10px] font-mono uppercase font-bold">Key Term</span></div>
                    <p className="text-[11px] text-white/40 italic leading-relaxed">**Hyper-Agency**: The ability of an AI to interact with financial protocols at the speed of 50ms block times.</p>
                </div>
                <button onClick={() => addLog("[AGENT]: Deploying sandbox agent...")} className="w-full mt-10 py-5 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.3em] rounded-xl hover:bg-white transition-all shadow-xl">SIMULATE DEPLOYMENT</button>
            </div>
        </div>
      </div>
    </main>
  );
}