"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Coins, Globe, Zap, Cog, ShieldAlert, Code2, Bot, Users } from 'lucide-react';

export default function RialoNexusAtrium() {
  const modules = [
    { id: 1, title: "ECONOMICS", tagline: "VERTICAL INTEGRATION", desc: "How Rialo captures value by merging L1 core with native dApp services.", path: "/economics", icon: Coins, active: true },
    { id: 2, title: "RIALO EDGE", tagline: "NATIVE CONNECTIVITY", desc: "Technical breakdown of native HTTPS oracles baked into consensus.", path: "/edge", icon: Globe, active: true },
    { id: 3, title: "VELOCITY", tagline: "50MS FINALITY", desc: "The science behind parallel execution and ultra-fast block times.", path: "/velocity", icon: Zap, active: true },
    { id: 4, title: "WORKFLOWS", tagline: "AUTONOMOUS LOGIC", desc: "Moving from reactive smart contracts to proactive autonomous workflows.", path: "/workflows", icon: Cog, active: true },
    { id: 5, title: "PRIVACY", tagline: "REX COMPUTATION", desc: "Understanding Zero-Knowledge proofs in an encrypted runtime environment.", path: "/privacy", icon: ShieldAlert, active: true },
    { id: 6, title: "DEVELOPERS", tagline: "RUST & SVM CORE", desc: "Deep dive into the SVM architecture and high-performance Rust contracts.", path: "/developers", icon: Code2, active: true }, // ТЕПЕРЬ АКТИВНО
    { id: 7, title: "AI AGENTS", tagline: "MACHINE ECONOMY", desc: "Sovereign AI: Agents with wallets, agency, and financial independence.", path: "/ai-agents", icon: Bot, active: true },
    { id: 8, title: "NETWORK", tagline: "THE COLLECTIVE", desc: "Global node distribution and the future of decentralized coordination.", path: "/network", icon: Users, active: true },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 py-20 overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-[#E8E3D5] uppercase italic leading-none">
          RIALO <span className="text-[#A9DDD3] text-glow-mint">ACADEMY</span>
        </h1>
        <p className="font-mono text-[10px] tracking-[0.5em] text-[#A9DDD3]/50 uppercase italic">Advanced Protocol Learning v2.0</p>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full relative z-10">
        {modules.map((mod, index) => (
          <Link href={mod.path} key={mod.id}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -5, borderColor: '#A9DDD3', backgroundColor: 'rgba(169, 221, 211, 0.05)' }}
              className="h-full bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-[2rem] p-8 flex flex-col items-start justify-between transition-all duration-300"
            >
              <div className="p-3 bg-[#A9DDD3]/10 text-[#A9DDD3] rounded-xl mb-8"><mod.icon size={24} /></div>
              <div>
                <p className="text-[9px] font-mono tracking-widest text-[#A9DDD3] mb-2 uppercase font-bold">{mod.tagline}</p>
                <h3 className="text-xl font-bold text-[#E8E3D5] mb-3">{mod.title}</h3>
                <p className="text-xs text-[#E8E3D5]/40 leading-relaxed italic">{mod.desc}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </main>
  );
}