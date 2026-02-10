"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Добавлена иконка Award в импорт ниже
import { ArrowLeft, Coins, Zap, ShieldCheck, Trophy, Target, Sparkles, CheckCircle, Award } from 'lucide-react';
import Link from 'next/link';

export default function EconomicsMission() {
  const [userCost, setUserCost] = useState(12000);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const legacyLoss = userCost * 0.82;
  const rialoSaving = userCost * 0.9;

  const handleComplete = () => {
    const currentXp = parseInt(localStorage.getItem("rialo_xp") || "0");
    const newXp = currentXp + 1250;
    localStorage.setItem("rialo_xp", newXp.toString());
    setIsCompleted(true);
    // Refresh to update the global XP bar in layout
    setTimeout(() => window.location.reload(), 1500);
  };

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10">
      
      {/* Success Modal */}
      <AnimatePresence>
        {isCompleted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-[#010101]/90 backdrop-blur-xl flex items-center justify-center p-6">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-rialo-mint/10 border border-rialo-mint/30 p-12 rounded-[3rem] text-center max-w-sm shadow-[0_0_50px_rgba(169,221,211,0.2)]">
                <CheckCircle className="text-rialo-mint mx-auto mb-6" size={80} />
                <h2 className="text-3xl font-black text-rialo-beige italic mb-2 uppercase tracking-tighter">Mission Secured</h2>
                <p className="text-rialo-mint font-mono text-[10px] tracking-widest uppercase mb-8">+1,250 XP // Synchronizing Profile</p>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5 }} className="h-full bg-rialo-mint" />
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <div className="max-w-6xl w-full mb-12 flex justify-between items-center">
        <Link href="/">
          <motion.div whileHover={{ x: -5 }} className="flex items-center text-rialo-mint/60 hover:text-rialo-mint cursor-pointer font-mono text-[10px] uppercase tracking-[0.3em] transition-colors">
            <ArrowLeft className="mr-2" size={14} /> [ Return to Atrium ]
          </motion.div>
        </Link>
        <div className="flex items-center space-x-4 bg-rialo-mint/5 border border-rialo-mint/20 px-5 py-2 rounded-full shadow-[0_0_20px_rgba(169,221,211,0.1)]">
            <Target className="text-rialo-mint animate-pulse" size={16} />
            <span className="font-mono text-[10px] text-rialo-beige uppercase tracking-widest">
                Mission 01: <span className="text-rialo-mint font-bold text-glow-mint text-[11px]">Middleware Tax War</span>
            </span>
        </div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#010101]/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden shadow-2xl">
                <p className="text-rialo-mint font-mono text-[8px] tracking-[0.5em] mb-4 uppercase opacity-60 italic">Efficiency Protocol 1.0.1</p>
                <h1 className="text-5xl md:text-7xl font-black text-rialo-beige mb-8 tracking-tighter italic uppercase leading-[0.9]">
                    The <span className="text-rialo-mint text-glow-mint">Invisible</span> <br/>Middleware Tax
                </h1>
                
                <div className="space-y-6 text-rialo-beige/70 text-lg md:text-xl leading-relaxed font-medium">
                    <p>Web3 development is hindered by <strong className="text-rialo-beige">fragmented costs</strong>. Every oracle call triggers a hidden tax.</p>
                    <div className="p-8 bg-rialo-mint/5 rounded-3xl border-l-2 border-rialo-mint italic text-xl">
                        "Rialo solves Double Marginalization by unifying the middleware stack into one sovereign layer."
                    </div>
                </div>

                <div className="mt-14 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                           <p className="text-[10px] font-mono text-rialo-mint/50 uppercase tracking-widest mb-2">Operating Volume</p>
                           <span className="text-rialo-mint font-black text-4xl text-glow-mint">${userCost.toLocaleString()}</span>
                        </div>
                        <Sparkles className="text-rialo-mint/20" size={36} />
                    </div>
                    <input type="range" min="1000" max="25000" step="1000" value={userCost} onChange={(e) => setUserCost(Number(e.target.value))} className="w-full h-1 bg-rialo-beige/10 rounded-lg appearance-none cursor-pointer accent-rialo-mint mb-12" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-8 bg-red-500/5 border border-red-500/10 rounded-3xl">
                            <p className="text-[9px] font-mono text-red-500/60 uppercase mb-4 tracking-widest">Legacy Drain</p>
                            <span className="text-3xl font-bold text-red-500">-${legacyLoss.toFixed(0)}</span>
                        </div>
                        <div className="p-8 bg-rialo-mint/10 border border-rialo-mint/30 rounded-3xl neon-border-glow">
                            <p className="text-[9px] font-mono text-rialo-mint uppercase mb-4 tracking-widest">Rialo Efficiency</p>
                            <span className="text-3xl font-bold text-rialo-mint">+${rialoSaving.toFixed(0)}</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        <div className="space-y-6">
            <motion.div whileHover={{ scale: 1.01 }} className="bg-rialo-beige/[0.03] border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md">
                <div className="flex items-center space-x-3 mb-8">
                    <Trophy className="text-rialo-mint" size={20} />
                    <h3 className="text-rialo-beige font-black tracking-widest uppercase text-xs">Mission Loot</h3>
                </div>
                <div className="space-y-6 mb-10">
                    <div className="group flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 transition-all hover:bg-rialo-mint/5">
                        <div className="flex flex-col"><span className="text-[8px] font-mono text-rialo-beige/40 uppercase">Badge</span><span className="text-base font-bold text-rialo-beige">Economic Visionary</span></div>
                        {/* Иконка Award теперь импортирована корректно */}
                        <Award size={18} className="text-rialo-beige/20 group-hover:text-rialo-mint" />
                    </div>
                    <div className="flex items-center justify-between p-5 bg-rialo-mint/5 rounded-2xl border border-rialo-mint/20">
                        <div className="flex flex-col"><span className="text-[8px] font-mono text-rialo-mint/60 uppercase">Experience</span><span className="text-base font-bold text-rialo-mint">+1,250 XP</span></div>
                        <div className="w-4 h-4 rounded-full bg-rialo-mint animate-ping shadow-[0_0_15px_rgba(169,221,211,0.5)]" />
                    </div>
                </div>
                <button 
                  onClick={handleComplete}
                  className="w-full py-5 bg-rialo-mint text-rialo-black font-black uppercase text-xs tracking-[0.3em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(169,221,211,0.2)]"
                >
                    MISSION SECURED
                </button>
            </motion.div>
        </div>
      </div>
    </main>
  );
}