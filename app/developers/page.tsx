"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Code2, Terminal, Cpu, Database, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useAcademy } from "../../context/AcademyContext";

export default function DevelopersMission() {
  const { addLog } = useAcademy();

  useEffect(() => {
    addLog("[SYSTEM]: Accessing Dev_Core...");
    addLog("[RUNTIME]: Loading Rust/SVM documentation...");
  }, [addLog]);

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10">
      <div className="max-w-6xl w-full mb-12 flex justify-between items-center">
        <Link href="/"><div className="flex items-center text-[#A9DDD3]/60 hover:text-[#A9DDD3] cursor-pointer font-mono text-[10px] uppercase tracking-widest transition-colors"><ArrowLeft className="mr-2" size={14} /> [ Back to Atrium ]</div></Link>
        <div className="bg-[#A9DDD3]/5 border border-[#A9DDD3]/20 px-5 py-2 rounded-full text-[#E8E3D5] font-mono text-[10px] uppercase tracking-widest">Technical Module: <span className="text-[#A9DDD3] font-bold">RUST & SVM Core</span></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#010101]/80 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 md:p-14 shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-black text-[#E8E3D5] mb-8 tracking-tighter italic uppercase leading-none">The <span className="text-[#A9DDD3]">Sovereign</span> <br/>SVM Stack</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[#E8E3D5]/70 text-sm leading-relaxed">
                <div className="space-y-4">
                    <h3 className="text-[#A9DDD3] font-mono text-[10px] uppercase tracking-widest font-bold">01 // High-Performance Rust</h3>
                    <p>Rialo contracts are written in **Rust**, the most memory-safe and efficient language. This allows for zero-cost abstractions and direct hardware interaction.</p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-[#A9DDD3] font-mono text-[10px] uppercase tracking-widest font-bold">02 // Parallel Execution</h3>
                    <p>Unlike EVM (Ethereum) which is sequential, Rialo uses the **SVM (Solana Virtual Machine)** to process thousands of transactions simultaneously.</p>
                </div>
            </div>

            {/* TECHNICAL DEEP DIVE BOX */}
            <div className="mt-12 p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] space-y-6">
                <div className="flex items-center space-x-3 text-[#A9DDD3]">
                    <Terminal size={18} />
                    <span className="text-xs font-mono uppercase tracking-[0.3em] font-black">Deep Academy Readout</span>
                </div>
                <div className="space-y-4 text-sm text-[#E8E3D5]/60 italic">
                    <p>"The core innovation lies in **Sealevel**. While Ethereum acts like a single-lane road, Rialo's SVM is an 8-lane superhighway. Every core of a validator's CPU is utilized, ensuring that as hardware gets better, Rialo gets faster."</p>
                    <div className="grid grid-cols-3 gap-4 pt-4">
                        <div className="p-4 bg-black rounded-xl border border-white/5"><p className="text-[10px] text-[#A9DDD3] mb-1 uppercase font-mono">Memory</p><p className="text-lg font-bold text-white">Safe</p></div>
                        <div className="p-4 bg-black rounded-xl border border-white/5"><p className="text-[10px] text-[#A9DDD3] mb-1 uppercase font-mono">Runtime</p><p className="text-lg font-bold text-white">Parallel</p></div>
                        <div className="p-4 bg-black rounded-xl border border-white/5"><p className="text-[10px] text-[#A9DDD3] mb-1 uppercase font-mono">Language</p><p className="text-lg font-bold text-white">Rust</p></div>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>

        {/* SIDEBAR - CURRICULUM */}
        <div className="space-y-6">
            <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md">
                <h3 className="text-[#E8E3D5] font-black tracking-widest uppercase text-xs mb-8">Curriculum Status</h3>
                <div className="space-y-4 mb-10">
                    {["Rust Basics", "SVM Architecture", "Parallelization", "Gas Optimization"].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                            <span className="text-[11px] font-mono text-white/40 uppercase">{item}</span>
                            <ChevronRight size={14} className="text-[#A9DDD3]" />
                        </div>
                    ))}
                </div>
                <button className="w-full py-5 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.3em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(169,221,211,0.2)]">START CODING</button>
            </div>
        </div>
      </div>
    </main>
  );
}