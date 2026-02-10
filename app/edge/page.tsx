"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Globe, Zap, ShieldCheck, Trophy, Cpu, Search, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function RialoEdgeMission() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [dataStream, setDataStream] = useState("Off-chain");

  const handleComplete = () => {
    const currentXp = parseInt(localStorage.getItem("rialo_xp") || "0");
    localStorage.setItem("rialo_xp", (currentXp + 1500).toString());
    setIsCompleted(true);
    setTimeout(() => window.location.reload(), 1500);
  };

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10">
      <AnimatePresence>
        {isCompleted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-[#010101]/95 flex items-center justify-center">
            <div className="text-center p-12 border border-rialo-mint/30 bg-rialo-mint/5 rounded-[3rem]">
                <CheckCircle className="text-rialo-mint mx-auto mb-6" size={80} />
                <h2 className="text-3xl font-black text-rialo-beige uppercase italic">Edge Synced</h2>
                <p className="text-rialo-mint font-mono text-[10px] tracking-[0.3em] mt-2">+1,500 XP SECURED</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl w-full mb-12 flex justify-between items-center">
        <Link href="/"><div className="flex items-center text-rialo-mint/60 hover:text-rialo-mint cursor-pointer font-mono text-[10px] uppercase tracking-[0.3em] transition-colors"><ArrowLeft className="mr-2" size={14} /> [ Back to Atrium ]</div></Link>
        <div className="bg-rialo-mint/5 border border-rialo-mint/20 px-5 py-2 rounded-full font-mono text-[10px] text-rialo-beige uppercase tracking-widest">
            Mission 02: <span className="text-rialo-mint font-bold text-glow-mint">The World Sensor</span>
        </div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#010101]/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 md:p-12">
                <p className="text-rialo-mint font-mono text-[8px] tracking-[0.5em] mb-4 uppercase opacity-60 italic">Connectivity Protocol 2.1</p>
                <h1 className="text-5xl md:text-7xl font-black text-rialo-beige mb-10 tracking-tighter italic uppercase leading-[0.9]">
                    The <span className="text-rialo-mint text-glow-mint">Rialo</span> <br/>Edge Interface
                </h1>
                
                <div className="space-y-6 text-rialo-beige/70 text-lg md:text-xl font-medium">
                    <p>Traditional blockchains are blind to the real world. They rely on slow, expensive third-party oracles.</p>
                    <div className="p-8 bg-rialo-mint/5 rounded-3xl border-l-2 border-rialo-mint text-xl italic">
                        "Rialo Edge integrates HTTPS-connectivity directly into the core. Native world sensors ingest data with zero middleware latency."
                    </div>
                </div>

                {/* INTERACTIVE DATA BRIDGE VISUALIZER */}
                <div className="mt-14 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 text-center">
                    <div className="flex justify-center space-x-12 mb-12">
                        <div className="flex flex-col items-center">
                            <div className={`p-6 rounded-full border transition-all duration-500 ${dataStream === 'Web2' ? 'border-rialo-mint text-rialo-mint shadow-[0_0_20px_#A9DDD3]' : 'border-white/10 text-white/20'}`}><Globe size={32} /></div>
                            <span className="mt-4 font-mono text-[10px] uppercase tracking-widest text-rialo-beige/40">Real World (Web2)</span>
                        </div>
                        <div className="flex items-center pt-8">
                            <motion.div animate={{ x: [0, 50, 0] }} transition={{ repeat: Infinity, duration: 2 }} className={`h-[1px] w-24 ${dataStream === 'Web2' ? 'bg-rialo-mint' : 'bg-white/10'}`} />
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="p-6 rounded-full border border-rialo-mint/30 text-rialo-mint bg-rialo-mint/5"><Cpu size={32} /></div>
                            <span className="mt-4 font-mono text-[10px] uppercase tracking-widest text-rialo-mint">Rialo L1</span>
                        </div>
                    </div>
                    <button 
                        onClick={() => setDataStream(dataStream === "Web2" ? "Off-chain" : "Web2")}
                        className="px-10 py-4 border border-rialo-mint/40 rounded-full text-rialo-mint font-mono text-[10px] uppercase tracking-[0.3em] hover:bg-rialo-mint hover:text-rialo-black transition-all"
                    >
                        {dataStream === "Web2" ? "Deactivate Bridge" : "Initialize Native HTTPS Bridge"}
                    </button>
                </div>
            </motion.div>
        </div>

        <div className="space-y-6">
            <div className="bg-rialo-beige/[0.03] border border-white/10 rounded-[2.5rem] p-10">
                <div className="flex items-center space-x-3 mb-8"><Trophy className="text-rialo-mint" size={20} /><h3 className="text-rialo-beige font-black tracking-widest uppercase text-xs">Mission Loot</h3></div>
                <div className="space-y-4 mb-10">
                    <div className="flex justify-between p-4 bg-white/5 rounded-xl border border-white/5 italic opacity-50"><span className="text-[10px] font-mono">Edge Oracle Badge</span><ShieldCheck size={16} /></div>
                    <div className="flex justify-between p-4 bg-rialo-mint/5 rounded-xl border border-rialo-mint/20 text-rialo-mint"><span className="text-[10px] font-mono font-bold">+1,500 XP</span><Zap size={16} /></div>
                </div>
                <button onClick={handleComplete} className="w-full py-5 bg-rialo-mint text-rialo-black font-black uppercase text-xs tracking-[0.3em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(169,221,211,0.2)]">MISSION SECURED</button>
            </div>
        </div>
      </div>
    </main>
  );
}