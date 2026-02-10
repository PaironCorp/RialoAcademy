"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Coins, Globe, Zap, Cog, ShieldAlert, Code2, Bot, Users } from 'lucide-react';

export default function RialoNexusAtrium() {
  const modules = [
    { id: 1, title: "ECONOMICS", tagline: "Start Here // Module 01", desc: "Understand the 'Invisible Tax' and how vertical integration solves it.", path: "/economics", icon: Coins, active: true },
    { id: 2, title: "RIALO EDGE", tagline: "Connectivity", desc: "Direct HTTPS-bridge for real-world data.", path: "#", icon: Globe },
    { id: 3, title: "VELOCITY", tagline: "Performance", desc: "50ms block times at internet scale.", path: "#", icon: Zap },
    { id: 4, title: "WORKFLOWS", tagline: "Automation", desc: "Native, event-driven smart contracts.", path: "#", icon: Cog },
    { id: 5, title: "PRIVACY", tagline: "Confidentiality", desc: "REX computation with zero-knowledge proofs.", path: "#", icon: ShieldAlert },
    { id: 6, title: "DEVELOPERS", tagline: "Environment", desc: "High-performance Rust & SVM stack.", path: "#", icon: Code2 },
    { id: 7, title: "AI AGENTS", tagline: "Autonomy", desc: "Infrastructure for sovereign AI interactions.", path: "#", icon: Bot },
    { id: 8, title: "NETWORK", tagline: "Community", desc: "Join the collective building the future.", path: "#", icon: Users },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 pb-32 relative overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-rialo-beige uppercase italic relative inline-block">
          <span className="relative z-10 text-glow-mint">NEXUS</span> PROTOCOL
          <div className="absolute -inset-2 bg-rialo-mint/20 blur-3xl -z-10 rounded-full opacity-50 animate-pulse"></div>
        </h1>
        <p className="font-mono text-xs md:text-sm tracking-[0.4em] text-rialo-mint uppercase">
          Initialize Learning Sequence v1.2
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full relative z-10">
        {modules.map((mod, index) => (
          <Link href={mod.path} key={mod.id} className="group relative">
            {/* Энергетическое поле вокруг активного модуля */}
            {mod.active && (
                <div className="absolute -inset-[2px] bg-gradient-to-r from-rialo-mint via-transparent to-rialo-mint rounded-[2rem] blur-md opacity-70 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            )}

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`h-full bg-[#010101]/80 backdrop-blur-xl border ${mod.active ? 'border-rialo-mint/60 neon-border-glow' : 'border-rialo-beige/10'} rounded-[2rem] p-8 flex flex-col items-start justify-between transition-all duration-300 group-hover:border-rialo-mint/50 group-hover:bg-[#010101]/90 relative overflow-hidden z-10`}
            >
              {/* Сканирующая линия внутри карточки */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rialo-mint/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-[1.5s] ease-in-out"></div>
              
              <div className={`p-4 rounded-2xl mb-8 transition-colors shadow-lg ${mod.active ? 'bg-rialo-mint/20 text-rialo-mint shadow-rialo-mint/20' : 'bg-rialo-beige/5 text-rialo-beige/60 group-hover:text-rialo-mint group-hover:bg-rialo-mint/10'}`}>
                <mod.icon size={30} strokeWidth={1.5} />
              </div>

              <div>
                <p className={`text-[10px] font-mono tracking-widest mb-2 uppercase ${mod.active ? 'text-rialo-mint font-bold animate-pulse' : 'text-rialo-mint/60'}`}>
                    [{mod.tagline}]
                </p>
                <h3 className="text-xl font-bold text-rialo-beige mb-3 tracking-tight group-hover:text-rialo-mint transition-colors">
                  {mod.title}
                </h3>
                <p className="text-sm text-rialo-beige/50 leading-relaxed font-medium">
                  {mod.desc}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </main>
  );
}