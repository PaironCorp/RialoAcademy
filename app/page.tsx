"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Coins, Globe, Zap, Cog, ShieldAlert, Code2, Bot, Users } from 'lucide-react';

export default function RialoNexusAtrium() {
  const modules = [
    { id: 1, title: "ECONOMICS", tagline: "VERTICAL INTEGRATION", desc: "Solving Double Marginalization via full-stack architecture.", path: "/economics", icon: Coins, active: true },
    { id: 2, title: "RIALO EDGE", tagline: "NATIVE CONNECTIVITY", desc: "Low-latency HTTPS bridges for direct Web2 data feeds.", path: "/edge", icon: Globe, active: true },
    { id: 3, title: "VELOCITY", tagline: "ULTRA-FAST BLOCKS", desc: "50ms block times designed for global internet-scale.", path: "/velocity", icon: Zap, active: true },
    { id: 4, title: "WORKFLOWS", tagline: "AUTONOMOUS LOGIC", desc: "Event-driven smart contracts acting natively.", path: "/workflows", icon: Cog, active: true },
    { id: 5, title: "PRIVACY", tagline: "REX COMPUTATION", desc: "Zero-knowledge verification for confidential logic.", path: "/privacy", icon: ShieldAlert, active: true },
    { id: 6, title: "DEVELOPERS", tagline: "RUST & SVM CORE", desc: "The ultimate habitat for advanced SVM builders.", path: "#", icon: Code2 },
    { id: 7, title: "AI AGENTS", tagline: "MACHINE ECONOMY", desc: "Sovereign infrastructure for autonomous AI.", path: "/ai-agents", icon: Bot, active: true },
    { id: 8, title: "NETWORK", tagline: "THE COLLECTIVE", desc: "Join the ecosystem and define the future.", path: "/network", icon: Users, active: true },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 py-20 overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-24 relative z-10">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-[#E8E3D5] uppercase italic leading-none">
          RIALO <span className="text-[#A9DDD3] text-glow-mint">NEXUS</span>
        </h1>
        <p className="font-mono text-[10px] md:text-xs tracking-[0.5em] text-[#A9DDD3]/50 uppercase italic">Initialize Learning Sequence v2.0</p>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
        {modules.map((mod, index) => (
          <Link href={mod.path} key={mod.id} className={`group ${mod.active ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: index * 0.05 }}
              whileHover={mod.active ? { y: -8, borderColor: '#A9DDD3' } : {}}
              className={`h-full bg-white/[0.02] backdrop-blur-xl border ${mod.active ? 'border-[#A9DDD3]/30 shadow-[0_0_20px_rgba(169,221,211,0.1)]' : 'border-white/10 opacity-40'} rounded-[2.5rem] p-8 flex flex-col items-start justify-between transition-all duration-500`}
            >
              <div className={`p-4 rounded-2xl ${mod.active ? 'bg-[#A9DDD3]/10 text-[#A9DDD3]' : 'bg-white/5 text-white/20'} mb-10`}>
                <mod.icon size={28} />
              </div>
              <div>
                <p className="text-[9px] font-mono tracking-widest text-[#A9DDD3]/70 mb-2 uppercase italic font-bold">{mod.tagline}</p>
                <h3 className="text-2xl font-bold text-[#E8E3D5] mb-3 tracking-tight">{mod.title}</h3>
                <p className="text-sm text-[#E8E3D5]/40 leading-relaxed font-medium italic">{mod.desc}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </main>
  );
}