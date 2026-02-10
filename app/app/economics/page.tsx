"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Coins, Zap, ShieldCheck, Trophy, Target, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function EconomicsMission() {
  const [step, setStep] = useState(1);
  const [userCost, setUserCost] = useState(1000);
  
  // Logic: Legacy Web3 tax is ~82%, Rialo is ~10%
  const legacyLoss = userCost * 0.82;
  const rialoSaving = userCost * 0.9;

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10">
      
      {/* 1. Навигация и Статус Миссии */}
      <div className="max-w-6xl w-full mb-12 flex justify-between items-center">
        <Link href="/">
          <motion.div 
            whileHover={{ x: -5 }}
            className="flex items-center text-rialo-mint/60 hover:text-rialo-mint cursor-pointer font-mono text-[10px] uppercase tracking-[0.3em] transition-colors"
          >
            <ArrowLeft className="mr-2" size={14} /> [ Abort to Atrium ]
          </motion.div>
        </Link>
        <div className="flex items-center space-x-4 bg-rialo-mint/5 border border-rialo-mint/20 px-4 py-2 rounded-full">
            <Target className="text-rialo-mint" size={16} />
            <span className="font-mono text-[10px] text-rialo-beige uppercase tracking-widest">
                Mission: <span className="text-rialo-mint font-bold">Unmasking the Middleware Tax</span>
            </span>
        </div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* ЛЕВАЯ КОЛОНКА: Контент урока */}
        <div className="lg:col-span-2 space-y-6">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#010101]/60 backdrop-blur-xl border border-rialo-mint/20 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-10 text-rialo-mint/5 -z-10">
                    <Coins size={180} strokeWidth={1} />
                </div>

                <p className="text-rialo-mint font-mono text-[10px] tracking-[0.4em] mb-4 uppercase">Phase 01 // The Economics of Scale</p>
                <h1 className="text-4xl md:text-6xl font-black text-rialo-beige mb-8 tracking-tighter italic uppercase leading-none">
                    The <span className="text-rialo-mint text-glow-mint">Invisible</span> <br/>Middleware Tax
                </h1>
                
                <div className="space-y-6 text-rialo-beige/70 text-lg leading-relaxed max-w-2xl font-medium">
                    <p>
                        In the current Web3 landscape, dApps are built like LEGO sets from different providers. Each layer—L1, Oracles, Automation—charges its own <strong className="text-rialo-beige">monopoly premium</strong>.
                    </p>
                    <p className="border-l-2 border-rialo-mint/30 pl-6 italic">
                        This leads to "Double Marginalization": the final cost for the end-user is up to <span className="text-rialo-mint font-bold">10x higher</span> than it should be.
                    </p>
                </div>

                {/* ИНТЕРАКТИВНЫЙ КАЛЬКУЛЯТОР */}
                <div className="mt-12 bg-rialo-beige/[0.02] border border-white/5 rounded-3xl p-8">
                    <div className="flex justify-between items-center mb-8">
                        <label className="text-rialo-beige/40 font-mono text-[10px] uppercase tracking-widest">Monthly Operational Volume</label>
                        <span className="text-rialo-mint font-black text-2xl">${userCost.toLocaleString()}</span>
                    </div>
                    <input 
                        type="range" min="500" max="10000" step="500"
                        value={userCost}
                        onChange={(e) => setUserCost(Number(e.target.value))}
                        className="w-full h-1 bg-rialo-beige/10 rounded-lg appearance-none cursor-pointer accent-rialo-mint mb-10"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-2xl flex justify-between items-center">
                            <div>
                                <p className="text-[10px] font-mono text-red-500/60 uppercase">Legacy Drain</p>
                                <p className="text-xl font-bold text-red-500">-${legacyLoss.toFixed(0)}</p>
                            </div>
                            <Zap size={24} className="text-red-500/20" />
                        </div>
                        <div className="p-6 bg-rialo-mint/10 border border-rialo-mint/30 rounded-2xl flex justify-between items-center neon-border-glow">
                            <div>
                                <p className="text-[10px] font-mono text-rialo-mint uppercase">Rialo Efficiency</p>
                                <p className="text-xl font-bold text-rialo-mint">+${rialoSaving.toFixed(0)}</p>
                            </div>
                            <ShieldCheck size={24} className="text-rialo-mint" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* ПРАВАЯ КОЛОНКА: Прогресс и Награды */}
        <div className="space-y-6">
            {/* Карточка наград */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-rialo-beige/[0.03] border border-rialo-beige/10 rounded-[2rem] p-8"
            >
                <div className="flex items-center space-x-3 mb-6">
                    <Trophy className="text-rialo-mint" size={20} />
                    <h3 className="text-rialo-beige font-bold tracking-widest uppercase text-xs">Mission Rewards</h3>
                </div>
                
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 opacity-50">
                        <span className="text-xs font-mono text-rialo-beige/60">"Economic Visionary" Badge</span>
                        <div className="w-6 h-6 rounded-full bg-rialo-beige/10 border border-white/10" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-rialo-mint/5 rounded-xl border border-rialo-mint/20">
                        <span className="text-xs font-mono text-rialo-mint font-bold">500 XP</span>
                        <div className="w-6 h-6 rounded-full bg-rialo-mint animate-pulse shadow-[0_0_10px_#A9DDD3]" />
                    </div>
                </div>

                <button className="w-full mt-8 py-4 bg-rialo-mint text-rialo-black font-black uppercase text-xs tracking-[0.2em] rounded-xl hover:bg-white transition-all shadow-lg shadow-rialo-mint/20">
                    Complete Mission
                </button>
            </motion.div>

            {/* Блок следующего уровня */}
            <div className="p-8 border border-white/5 rounded-[2rem] bg-white/[0.01]">
                <p className="text-[10px] font-mono text-rialo-beige/30 uppercase mb-4">Next Objective</p>
                <h4 className="text-rialo-beige font-bold mb-2">RIALO EDGE: DATA FEEDS</h4>
                <p className="text-xs text-rialo-beige/40 leading-relaxed mb-6">Learn how native world sensors eliminate the oracle middleman.</p>
                <div className="flex items-center text-rialo-mint/40 text-[10px] font-mono">
                    LOCKED <ChevronRight size={12} className="ml-1" />
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}