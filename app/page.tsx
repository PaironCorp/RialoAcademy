"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Coins, Globe, Zap, Cog, ShieldAlert, Code2, Bot, Users 
} from 'lucide-react';

export default function RialoAtrium() {
  const nexusModules = [
    { 
      id: 1, 
      title: "ECONOMICS", 
      icon: Coins, 
      tagline: "VERTICAL INTEGRATION",
      desc: "Solving Double Marginalization by eliminating the 90% middleware tax.",
      path: "/economics", 
      color: "from-orange-500 to-amber-600" 
    },
    { 
      id: 2, 
      title: "RIALO EDGE", 
      icon: Globe, 
      tagline: "NATIVE CONNECTIVITY",
      desc: "Direct HTTPS-bridge to Web2 without fragmented oracle latency.",
      path: "#", 
      color: "from-blue-500 to-cyan-500" 
    },
    { 
      id: 3, 
      title: "VELOCITY", 
      icon: Zap, 
      tagline: "50MS BLOCKTIME",
      desc: "Internet-scale responsiveness through high-performance execution layers.",
      path: "#", 
      color: "from-yellow-400 to-orange-500" 
    },
    { 
      id: 4, 
      title: "WORKFLOWS", 
      icon: Cog, 
      tagline: "NATIVE AUTOMATION",
      desc: "Autonomous smart contracts triggered by real-world events natively.",
      path: "#", 
      color: "from-purple-500 to-pink-500" 
    },
    { 
      id: 5, 
      title: "PRIVACY", 
      icon: ShieldAlert, 
      tagline: "REX COMPUTATION",
      desc: "Confidential off-chain execution with verifiable on-chain proofs.",
      path: "#", 
      color: "from-emerald-500 to-teal-500" 
    },
    { 
      id: 6, 
      title: "DEVELOPERS", 
      icon: Code2, 
      tagline: "SVM & RUST STACK",
      desc: "Seamless migration for Solana devs with full-stack enhancements.",
      path: "#", 
      color: "from-indigo-500 to-blue-500" 
    },
    { 
      id: 7, 
      title: "AI AGENTS", 
      icon: Bot, 
      tagline: "AUTONOMOUS INTELLIGENCE",
      desc: "Enabling AI agents to transact and interact with the physical world.",
      path: "#", 
      color: "from-red-500 to-rose-500" 
    },
    { 
      id: 8, 
      title: "COMMUNITY", 
      icon: Users, 
      tagline: "RIALO RAID ARMY",
      desc: "Join the collective building the future of real-world blockchain.",
      path: "#", 
      color: "from-slate-400 to-slate-600" 
    },
  ];

  return (
    <main className="min-h-screen bg-[#020202] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      
      {/* Background Cyber-Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20 relative z-10"
      >
        <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter italic italic">
          THE <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">RIALO</span> NEXUS
        </h1>
        <div className="flex items-center justify-center space-x-4">
           <span className="h-[1px] w-12 bg-orange-500/50"></span>
           <p className="text-slate-400 font-mono tracking-[0.3em] uppercase text-xs">
             System Status: <span className="text-green-500 animate-pulse">Operational</span> // Full-Stack Protocol
           </p>
           <span className="h-[1px] w-12 bg-orange-500/50"></span>
        </div>
      </motion.div>
      
      {/* Portal Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full relative z-10">
        {nexusModules.map((mod) => (
          <Link href={mod.path} key={mod.id}>
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative h-72 cursor-pointer transition-all"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${mod.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}></div>
              
              {/* Main Card */}
              <div className="h-full bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[2rem] p-8 flex flex-col items-start justify-between transition-all group-hover:border-orange-500/30 group-hover:bg-slate-900/60 shadow-2xl">
                
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${mod.color} text-white shadow-lg`}>
                  <mod.icon size={28} strokeWidth={2} />
                </div>

                <div>
                  <p className="text-[10px] font-mono tracking-widest text-orange-500 mb-1 uppercase opacity-80">
                    {mod.tagline}
                  </p>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">
                    {mod.desc}
                  </p>
                </div>

                {/* Cyber line */}
                <div className="w-full h-[1px] bg-white/5 mt-4 relative overflow-hidden">
                   <motion.div 
                    className={`h-full bg-gradient-to-r ${mod.color} w-full`}
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.5 }}
                   />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Core Pulse */}
      <div className="mt-24 relative">
        <div className="w-1 h-1 bg-orange-500 rounded-full shadow-[0_0_20px_#f97316] animate-ping"></div>
      </div>
    </main>
  );
}