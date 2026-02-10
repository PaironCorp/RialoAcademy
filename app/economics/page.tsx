"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Coins, Zap, ShieldCheck, Trophy, Target, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function EconomicsMission() {
  const [userCost, setUserCost] = useState(9000);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const legacyLoss = userCost * 0.82;
  const rialoSaving = userCost * 0.9;

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10">
      
      {/* 1. Header & Navigation */}
      <div className="max-w-6xl w-full mb-12 flex justify-between items-center">
        <Link href="/">
          <motion.div 
            whileHover={{ x: -5 }}
            className="flex items-center text-rialo-mint/60 hover:text-rialo-mint cursor-pointer font-mono text-xs uppercase tracking-[0.3em] transition-colors"
          >
            <ArrowLeft className="mr-2" size={16} /> [ Return to Atrium ]
          </motion.div>
        </Link>
        <div className="flex items-center space-x-4 bg-rialo-mint/5 border border-rialo-mint/20 px-6 py-2 rounded-full shadow-[0_0_20px_rgba(169,221,211,0.1)]">
            <Target className="text-rialo-mint animate-pulse" size={18} />
            <span className="font-mono text-xs text-rialo-beige uppercase tracking-widest">
                Mission 01: <span className="text-rialo-mint font-bold text-glow-mint">The Middleware War</span>
            </span>
        </div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        
        {/* LEFT COLUMN: Content */}
        <div className="lg:col-span-2 space-y-8">
            <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#010101]/80 backdrop-blur-2xl border border-rialo-mint/20 rounded-[3rem] p-10 md:p-14 relative overflow-hidden shadow-2xl"
            >
                <div className="absolute -top-24 -right-24 w-80 h-80 bg-rialo-mint/10 blur-[120px] rounded-full pointer-events-none"></div>

                <p className="text-rialo-mint font-mono text-xs tracking-[0.5em] mb-6 uppercase opacity-70">Phase 01 // Vertical Integration</p>
                <h1 className="text-5xl md:text-8xl font-black text-rialo-beige mb-10 tracking-tighter italic uppercase leading-[0.85]">
                    The <span className="text-rialo-mint text-glow-mint">Invisible</span> <br/>Middleware Tax
                </h1>
                
                {/* УВЕЛИЧЕННЫЙ ТЕКСТ (text-xl) */}
                <div className="space-y-8 text-rialo-beige/80 text-xl md:text-2xl leading-relaxed font-medium">
                    <p>
                        In the current Web3 landscape, dApps are built like LEGO sets from different providers. Each layer charges its own <strong className="text-rialo-beige border-b-2 border-rialo-mint/30 italic">monopoly premium</strong>.
                    </p>
                    <div className="p-10 bg-rialo-mint/5 rounded-[2.5rem] border-l-4 border-rialo-mint shadow-inner italic text-2xl">
                        "This leads to Double Marginalization: the final cost for the end-user is up to <span className="text-rialo-mint font-bold">10x higher</span> than it should be."
                    </div>
                </div>

                {/* CALCULATOR TERMINAL */}
                <div className="mt-16 bg-white/[0.02] border border-white/5 rounded-[3rem] p-12">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                           <p className="text-xs font-mono text-rialo-mint/50 uppercase tracking-widest mb-3">Adjust Operational Volume</p>
                           <span className="text-rialo-mint font-black text-5xl text-glow-mint">${userCost.toLocaleString()}</span>
                        </div>
                        <Sparkles className="text-rialo-mint/20" size={48} />
                    </div>
                    
                    <input 
                        type="range" min="1000" max="25000" step="1000"
                        value={userCost}
                        onChange={(e) => setUserCost(Number(e.target.value))}
                        className="w-full h-1.5 bg-rialo-beige/10 rounded-lg appearance-none cursor-pointer accent-rialo-mint mb-14"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-10 bg-red-500/5 border border-red-500/10 rounded-[2rem] flex flex-col justify-between">
                            <p className="text-xs font-mono text-red-500/60 uppercase tracking-widest mb-6">Legacy Waste</p>
                            <div className="flex items-center justify-between">
                                <span className="text-4xl font-bold text-red-500">-${legacyLoss.toFixed(0)}</span>
                                <Zap size={32} className="text-red-500/20" />
                            </div>
                        </div>
                        <div className="p-10 bg-rialo-mint/10 border border-rialo-mint/30 rounded-[2rem] flex flex-col justify-between neon-border-glow">
                            <p className="text-xs font-mono text-rialo-mint uppercase tracking-widest mb-6">Rialo Efficiency</p>
                            <div className="flex items-center justify-between">
                                <span className="text-4xl font-bold text-rialo-mint">+${rialoSaving.toFixed(0)}</span>
                                <ShieldCheck size={32} className="text-rialo-mint" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* RIGHT COLUMN: Progress */}
        <div className="space-y-8">
            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-rialo-beige/[0.03] border border-rialo-beige/10 rounded-[3rem] p-12 backdrop-blur-md"
            >
                <div className="flex items-center space-x-4 mb-10">
                    <Trophy className="text-rialo-mint" size={28} />
                    <h3 className="text-rialo-beige font-black tracking-widest uppercase text-base">Mission Loot</h3>
                </div>
                
                <div className="space-y-8 mb-12">
                    <div className="group flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5 transition-all hover:bg-rialo-mint/5 hover:border-rialo-mint/20">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-rialo-beige/40 uppercase mb-1">Badge</span>
                            <span className="text-lg font-bold text-rialo-beige">Economic Visionary</span>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-rialo-beige/10 border border-white/10 group-hover:border-rialo-mint/40 flex items-center justify-center">
                            <Sparkles size={20} className="text-rialo-beige/20 group-hover:text-rialo-mint" />
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-6 bg-rialo-mint/5 rounded-2xl border border-rialo-mint/20">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-rialo-mint/60 uppercase mb-1">Experience</span>
                            <span className="text-lg font-bold text-rialo-mint">+1,250 XP</span>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-rialo-mint animate-ping shadow-[0_0_20px_#A9DDD3]" />
                    </div>
                </div>

                <button 
                  onClick={() => setIsCompleted(true)}
                  className="w-full py-6 bg-rialo-mint text-rialo-black font-black uppercase text-sm tracking-[0.4em] rounded-2xl hover:bg-white transition-all shadow-[0_0_40px_rgba(169,221,211,0.25)]"
                >
                    {isCompleted ? "MISSION SECURED" : "COMPLETE MISSION"}
                </button>
            </motion.div>
        </div>
      </div>
    </main>
  );
}