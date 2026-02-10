"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Coins, Globe, Zap, Cog, ShieldAlert, Code2, Bot, Users } from 'lucide-react';

export default function RialoNexusAtrium() {
  const modules = [
    { id: 1, title: "ECONOMICS", tagline: "VERTICAL INTEGRATION", desc: "Defeating Double Marginalization via full-stack architecture.", path: "/economics", icon: Coins, active: true },
    { id: 2, title: "RIALO EDGE", tagline: "NATIVE CONNECTIVITY", desc: "Low-latency HTTPS bridges for direct Web2 data ingestion.", path: "/edge", icon: Globe, active: true }, // Ссылка исправлена
    { id: 3, title: "VELOCITY", tagline: "ULTRA-FAST BLOCKS", desc: "50ms execution layers designed for global internet-scale.", path: "#", icon: Zap },
    { id: 4, title: "WORKFLOWS", tagline: "AUTONOMOUS LOGIC", desc: "Event-driven smart contracts acting without external keepers.", path: "#", icon: Cog },
    { id: 5, title: "PRIVACY", tagline: "REX COMPUTATION", desc: "Zero-knowledge verification for confidential execution logic.", path: "#", icon: ShieldAlert },
    { id: 6, title: "DEVELOPERS", tagline: "RUST & SVM CORE", desc: "The high-performance habitat for advanced SVM builders.", path: "#", icon: Code2 },
    { id: 7, title: "AI AGENTS", tagline: "MACHINE ECONOMY", desc: "Sovereign on-chain infrastructure for autonomous AI.", path: "#", icon: Bot },
    { id: 8, title: "NETWORK", tagline: "THE COLLECTIVE", desc: "Join the Rialo ecosystem and define the future of dApps.", path: "#", icon: Users },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 py-20 overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20 relative z-10">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-rialo-beige uppercase italic">
          RIALO <span className="text-rialo-mint text-glow-mint">NEXUS</span>
        </h1>
        <p className="font-mono text-[10px] md:text-xs tracking-[0.6em] text-rialo-mint/50 uppercase">Initialize Learning Sequence v1.2</p>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
        {modules.map((mod, index) => (
          <Link href={mod.path} key={mod.id} className="group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`h-full bg-rialo-beige/[0.02] backdrop-blur-xl border ${mod.active ? 'border-rialo-mint/30 shadow-[0_0_20px_rgba(169,221,211,0.1)]' : 'border-rialo-beige/10'} rounded-[2.5rem] p-8 flex flex-col items-start justify-between transition-all duration-500`}
            >
              <div className={`p-4 rounded-2xl ${mod.active ? 'bg-rialo-mint/10 text-rialo-mint' : 'bg-white/5 text-white/20'} mb-10`}>
                <mod.icon size={28} />
              </div>
              <div>
                <p className="text-[9px] font-mono tracking-widest text-rialo-mint/70 mb-2 uppercase">{mod.tagline}</p>
                <h3 className="text-2xl font-bold text-rialo-beige mb-3 tracking-tight">{mod.title}</h3>
                <p className="text-sm text-rialo-beige/40 leading-relaxed">{mod.desc}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </main>
  );
}