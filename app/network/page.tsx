"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Star, Users, Zap, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useAcademy } from "../../context/AcademyContext";

export default function NetworkAcademy() {
  const { addLog } = useAcademy();

  useEffect(() => {
    addLog("[NETWORK]: Syncing global node state...");
    addLog("[SYSTEM]: Finalizing Academy Integration.");
  }, [addLog]);

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10">
      <div className="max-w-6xl w-full mb-12 flex justify-between items-center">
        <Link href="/"><div className="flex items-center text-[#A9DDD3]/60 hover:text-[#A9DDD3] cursor-pointer font-mono text-[10px] uppercase tracking-widest transition-colors"><ArrowLeft className="mr-2" size={14} /> [ Back ]</div></Link>
        <div className="bg-[#A9DDD3]/5 border border-[#A9DDD3]/20 px-5 py-2 rounded-full text-[#E8E3D5] font-mono text-[10px] uppercase tracking-widest">Final Module</div>
      </div>

      <div className="max-w-5xl w-full text-center space-y-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <h1 className="text-6xl md:text-9xl font-black text-[#E8E3D5] tracking-tighter italic uppercase leading-none">The <span className="text-[#A9DDD3] text-glow-mint">Nexus</span> <br/>is Ready</h1>
              <p className="text-xl text-[#E8E3D5]/50 max-w-2xl mx-auto italic font-medium">
                  Rialo is not just a blockchain; it's the decentralized operating system for the AI-driven future.
              </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Zap, label: "Speed", value: "50ms" },
                { icon: ShieldCheck, label: "Security", value: "ZK-REX" },
                { icon: Users, label: "Agency", value: "Sovereign AI" }
              ].map((item, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/10 p-10 rounded-[3rem] flex flex-col items-center shadow-inner">
                    <item.icon className="text-[#A9DDD3] mb-4" size={32} />
                    <p className="text-2xl font-black text-[#E8E3D5]">{item.value}</p>
                </div>
              ))}
          </div>

          <button className="px-16 py-8 bg-[#A9DDD3] text-[#010101] font-black uppercase text-sm tracking-[0.5em] rounded-full shadow-[0_0_60px_rgba(169,221,211,0.3)] hover:scale-105 transition-all">
              COMPLETE ARCHITECT PATH
          </button>
      </div>
    </main>
  );
}