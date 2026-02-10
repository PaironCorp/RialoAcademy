"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Coins, Zap, ShieldCheck, Trophy, Target, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function EconomicsMission() {
  const [userCost, setUserCost] = useState(1000);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const legacyLoss = userCost * 0.82;
  const rialoSaving = userCost * 0.9;

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10">
      
      {/* Navigation */}
      <div className="max-w-6xl w-full mb-12 flex justify-between items-center">
        <Link href="/">
          <motion.div 
            whileHover={{ x: -5 }}
            className="flex items-center text-rialo-mint/60 hover:text-rialo-mint cursor-pointer font-mono text-[10px] uppercase tracking-[0.3em] transition-colors"
          >
            <ArrowLeft className="mr-2" size={14} /> [ Return to Atrium ]
          </motion.div>
        </Link>
        <div className="flex items-center space-x-4 bg-rialo-mint/5 border border-rialo-mint/20 px-5 py-2 rounded-full shadow-[0_0_20px_rgba(169,221,211,0.1)]">
            <Target className="text-rialo-mint animate-pulse" size={16} />
            <span className="font-mono text-[10px] text-rialo-beige uppercase tracking-widest">
                Mission 01: <span className="text-rialo-mint font-bold text-glow-mint">Middleware Tax War</span>
            </span>
        </div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#010101]/80 backdrop-blur-2xl border border-rialo-mint/20 rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden shadow-2xl"
            >
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-rialo-mint/10 blur-[100px] rounded-full pointer-events-none"></div>

                <p className="text-rialo-mint font-mono text-[9px] tracking-[0.5em] mb-4 uppercase opacity-60">Phase 01 // Efficiency Protocol</p>
                <h1 className="text-5xl md:text-7xl font-black text-rialo-beige mb-8 tracking-tighter italic uppercase leading-[0.9]">
                    The <span className="text-rialo-mint text-glow-mint">Invisible</span> <br/>Middleware Tax
                </h1>
                
                {/* Refined Text Sizes */}
                <div className="space-y-6 text-rialo-beige/80 text-lg md:text-xl leading-relaxed font-medium">
                    <p>
                        Web3 development is currently hindered by <strong className="text-rialo-beige border-b border-rialo-mint/20">fragmented costs</strong>. 
                        Every oracle call and automation trigger acts as a hidden tax on your innovation.
                    </p>
                    <div className="p-8 bg-rialo-mint/5 rounded-3xl border-l-2 border-rialo-mint italic text-xl">
                        "Rialo solves Double Marginalization by unifying the entire middleware stack into one sovereign execution layer."
                    </div>
                </div>

                {/* Calculator Terminal */}
                <div className="mt-14 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                           <p className="text-[10px] font-mono text-rialo-mint/50 uppercase tracking-widest mb-2">Operating Volume</p>
                           <span className="text-rialo-mint font-black text-4xl text-glow-mint">${userCost.toLocaleString()}</span>
                        </div>
                        <Sparkles className="text-rialo-mint/20" size={36} />
                    </div>
                    
                    <input 
                        type="range" min="1000" max="25000" step="1000"
                        value={userCost}
                        onChange={(e) => setUserCost(Number(e.target.value))}
                        className="w-full h-1 bg-rialo-beige/10 rounded-lg appearance-none cursor-pointer accent-rialo-mint mb-12"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-8 bg-red-500/5 border border-red-500/10 rounded-3xl flex flex-col justify-between">
                            <p className="text-[9px] font-mono text-red-500/60 uppercase tracking-widest mb-4">Legacy Drain</p>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-red-500">-${legacyLoss.toFixed(0)}</span>
                                <Zap size={24} className="text-red-500/20" />
                            </div>
                        </div>
                        <div className="p-8 bg-rialo-mint/10 border border-rialo-mint/30 rounded-3xl flex flex-col justify-between neon-border-glow">
                            <p className="text-[9px] font-mono text-rialo-mint uppercase tracking-widest mb-4">Rialo Efficiency</p>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-rialo-mint">+${rialoSaving.toFixed(0)}</span>
                                <ShieldCheck size={24} className="text-rialo-mint" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
            <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-rialo-beige/[0.03] border border-rialo-beige/10 rounded-[2.5rem] p-10 backdrop-blur-md"
            >
                <div className="flex items-center space-x-3 mb-8">
                    <Trophy className="text-rialo-mint" size={20} />
                    <h3 className="text-rialo-beige font-black tracking-widest uppercase text-xs">Mission Loot</h3>
                </div>
                
                <div className="space-y-6 mb-10">
                    <div className="group flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 transition-all hover:bg-rialo-mint/5 hover:border-rialo-mint/20">
                        <div className="flex flex-col">
                            <span className="text-[9px] font-mono text-rialo-beige/40 uppercase mb-1">Badge</span>
                            <span className="text-base font-bold text-rialo-beige">Economic Visionary</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-rialo-beige/10 border border-white/10 group-hover:border-rialo-mint/40 flex items-center justify-center">
                            <Sparkles size={18} className="text-rialo-beige/20 group-hover:text-rialo-mint" />
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-5 bg-rialo-mint/5 rounded-2xl border border-rialo-mint/20">
                        <div className="flex flex-col">
                            <span className="text-[9px] font-mono text-rialo-mint/60 uppercase mb-1">Experience</span>
                            <span className="text-base font-bold text-rialo-mint">+1,250 XP</span>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-rialo-mint animate-ping shadow-[0_0_15px_#A9DDD3]" />
                    </div>
                </div>

                <button 
                  onClick={() => setIsCompleted(true)}
                  className="w-full py-5 bg-rialo-mint text-rialo-black font-black uppercase text-xs tracking-[0.3em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(169,221,211,0.2)]"
                >
                    {isCompleted ? "MISSION SECURED" : "COMPLETE MISSION"}
                </button>
            </motion.div>
        </div>
      </div>
    </main>
  );
}