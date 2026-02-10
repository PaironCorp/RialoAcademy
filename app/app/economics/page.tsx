"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Coins, Zap, ShieldCheck, Info } from 'lucide-react';
import Link from 'next/link';

export default function EconomicsModule() {
  const [userCost, setUserCost] = useState(500);
  
  // Logic: Legacy Web3 tax is ~80%, Rialo is ~10%
  const legacyLoss = userCost * 0.82;
  const rialoSaving = userCost * 0.9;

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center">
      
      {/* Back Navigation */}
      <div className="max-w-4xl w-full mb-12">
        <Link href="/">
          <motion.div 
            whileHover={{ x: -5 }}
            className="flex items-center text-rialo-mint/60 hover:text-rialo-mint cursor-pointer font-mono text-xs uppercase tracking-widest transition-colors"
          >
            <ArrowLeft className="mr-2" size={16} /> [ Back to Nexus Atrium ]
          </motion.div>
        </Link>
      </div>

      <div className="max-w-4xl w-full">
        {/* Module Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-rialo-beige/[0.03] backdrop-blur-xl border border-rialo-mint/20 rounded-[3rem] p-8 md:p-16 relative overflow-hidden mb-8"
        >
          <div className="absolute top-0 right-0 p-8 text-rialo-mint/10">
            <Coins size={120} strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <p className="text-rialo-mint font-mono text-xs tracking-[0.3em] mb-4 uppercase">Protocol Economics // Module 01</p>
            <h1 className="text-4xl md:text-6xl font-black text-rialo-beige mb-8 tracking-tighter italic uppercase">
              The <span className="text-rialo-mint">Invisible Tax</span> War
            </h1>
            
            <div className="space-y-6 text-rialo-beige/70 text-lg leading-relaxed max-w-2xl">
              <p>
                In legacy Web3, developers suffer from <strong className="text-rialo-beige">Double Marginalization</strong>. You pay separate premiums to L1 networks, oracles, and automation keepers.
              </p>
              <p>
                Rialo eliminates this "Middleware Tax" through <strong className="text-rialo-mint italic font-bold">Vertical Integration</strong>, unifying all layers into a single, high-performance execution stack.
              </p>
            </div>
          </div>
        </motion.div>

        {/* INTERACTIVE CALCULATOR */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-[#010101] border border-rialo-beige/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative"
        >
          <div className="flex items-center space-x-3 mb-10">
             <div className="w-2 h-2 bg-rialo-mint rounded-full animate-pulse"></div>
             <h2 className="text-rialo-beige font-bold tracking-widest uppercase text-sm">Marginalization Visualizer</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Control Side */}
            <div className="space-y-8">
              <div>
                <label className="block text-rialo-beige/40 font-mono text-[10px] uppercase mb-4 tracking-widest">
                  Estimated Monthly Infrastructure Spend ($)
                </label>
                <input 
                  type="range" min="100" max="5000" step="100"
                  value={userCost}
                  onChange={(e) => setUserCost(Number(e.target.value))}
                  className="w-full h-1 bg-rialo-beige/10 rounded-lg appearance-none cursor-pointer accent-rialo-mint"
                />
                <div className="text-3xl font-black text-rialo-beige mt-4">${userCost}</div>
              </div>

              <div className="p-6 rounded-2xl bg-rialo-mint/5 border border-rialo-mint/10">
                 <div className="flex items-start space-x-3">
                    <Info className="text-rialo-mint mt-1" size={18} />
                    <p className="text-xs text-rialo-beige/60 leading-relaxed font-medium">
                       Rialo's full-stack architecture reduces operational overhead by bypassing fragmented middleware profit margins.
                    </p>
                 </div>
              </div>
            </div>

            {/* Results Side */}
            <div className="space-y-4">
               <div className="flex justify-between items-end p-6 bg-red-500/5 border border-red-500/10 rounded-2xl">
                  <div>
                    <p className="text-[10px] font-mono text-red-500/60 uppercase mb-1">Legacy Web3 Drain</p>
                    <p className="text-2xl font-bold text-red-500">-${legacyLoss.toFixed(0)}</p>
                  </div>
                  <Zap className="text-red-500/20" size={32} />
               </div>

               <div className="flex justify-between items-end p-6 bg-rialo-mint/10 border border-rialo-mint/30 rounded-2xl shadow-lg shadow-rialo-mint/5">
                  <div>
                    <p className="text-[10px] font-mono text-rialo-mint uppercase mb-1">Rialo Efficiency Gain</p>
                    <p className="text-2xl font-bold text-rialo-mint">+${rialoSaving.toFixed(0)}</p>
                  </div>
                  <ShieldCheck className="text-rialo-mint" size={32} />
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}