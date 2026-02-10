"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Globe, Trophy, CheckCircle, Wifi, FastForward, Unlock, Lock, Share2 } from 'lucide-react';
import Link from 'next/link';
import { useAcademy } from "../../context/AcademyContext";

export default function EdgeMission() {
  const { setIsFocused, addLog } = useAcademy();
  const [isCompleted, setIsCompleted] = useState(false);
  const [isBridging, setIsBridging] = useState(false);
  const [isLinked, setIsLinked] = useState(false);

  useEffect(() => {
    addLog("[SYSTEM]: Rialo Edge Module v2.2 Active.");
    addLog("[INFO]: Native Oracle nodes standby.");
    return () => setIsFocused(false);
  }, [setIsFocused, addLog]);

  const startBridge = () => {
    setIsBridging(true);
    setIsFocused(true);
    addLog("[EDGE]: Establishing HTTPS handshake with Web2 feed...");
    
    setTimeout(() => {
      setIsBridging(false);
      setIsLinked(true);
      addLog("[CORE]: Native Bridge Active. Data flowing at L1 speed.");
    }, 2500);
  };

  const handleComplete = () => {
    // Начисляем XP
    const currentXp = parseInt(localStorage.getItem("rialo_xp") || "0");
    localStorage.setItem("rialo_xp", (currentXp + 1500).toString());
    localStorage.setItem("mission_02_complete", "true");
    
    setIsCompleted(true);
    addLog("[ACADEMY]: Edge connectivity verified. Proceeding to Velocity.");
  };

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10 transform-gpu overflow-hidden">
      
      {/* --- SUCCESS MODAL: ТЕПЕРЬ ВЕДЕТ НА VELOCITY --- */}
      <AnimatePresence>
        {isCompleted && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="fixed inset-0 z-[100] bg-[#010101] flex items-center justify-center p-6 text-center"
          >
            <motion.div 
              initial={{ scale: 0.9 }} 
              animate={{ scale: 1 }} 
              className="bg-[#050505] border border-[#A9DDD3]/30 p-12 rounded-[3.5rem] max-w-sm shadow-2xl"
            >
                <Globe className="text-[#A9DDD3] mx-auto mb-6 animate-pulse" size={80} />
                <h2 className="text-3xl font-black text-[#E8E3D5] italic mb-2 uppercase tracking-tighter leading-none">
                  Nexus <br/>Connected
                </h2>
                <p className="text-[#A9DDD3] font-mono text-[10px] tracking-widest uppercase mb-10 italic font-bold">Native Connectivity Established</p>
                
                {/* ИСПРАВЛЕННЫЙ ПЕРЕХОД: Mission 02 -> Mission 03 */}
                <Link href="/velocity">
                    <button className="w-full py-5 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.3em] rounded-2xl flex items-center justify-center group hover:bg-white transition-all shadow-xl">
                        Proceed to Velocity <FastForward className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </button>
                </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HEADER --- */}
      <div className="max-w-6xl w-full mb-12 flex justify-between items-center relative z-10">
        <Link href="/"><div className="flex items-center text-[#A9DDD3]/60 hover:text-[#A9DDD3] cursor-pointer font-mono text-xs uppercase tracking-widest transition-colors"><ArrowLeft className="mr-2" size={14} /> [ Back to Nexus ]</div></Link>
        <div className="bg-[#050505] border border-[#A9DDD3]/20 px-6 py-3 rounded-full text-[#E8E3D5] font-mono text-xs uppercase tracking-widest italic shadow-lg">
          Mission 02: <span className="text-[#A9DDD3] font-bold">Rialo Edge</span>
        </div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
        <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#050505] border border-white/10 rounded-[3.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden">
                <h1 className="text-6xl md:text-8xl font-black text-[#E8E3D5] mb-8 tracking-tighter italic uppercase leading-[0.85]">
                   Native <br/><span className="text-[#A9DDD3] text-glow-mint">Connectivity</span>
                </h1>
                
                <div className="space-y-8 mb-12">
                    <p className="text-[#E8E3D5]/60 text-lg md:text-xl font-medium leading-relaxed italic">
                      Rialo Edge eliminates the need for 3rd party oracles by building <strong className="text-[#A9DDD3]">HTTPS Handshakes</strong> directly into the L1 consensus layer.
                    </p>

                    {/* BRIDGE VISUALIZER */}
                    <div className="p-10 bg-black border border-white/5 rounded-[3rem] text-center relative overflow-hidden group">
                        <AnimatePresence mode="wait">
                            {isBridging ? (
                                <motion.div key="bridge" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-10 space-y-4">
                                    <Wifi className="text-[#A9DDD3] animate-pulse mx-auto" size={48} />
                                    <p className="font-mono text-[10px] text-[#A9DDD3] uppercase animate-pulse tracking-[0.4em] font-black italic">Synchronizing Feeds...</p>
                                </motion.div>
                            ) : isLinked ? (
                                <motion.div key="link" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-10 space-y-6">
                                    <div className="flex justify-center space-x-6">
                                        <div className="p-4 bg-[#A9DDD3]/10 border border-[#A9DDD3]/20 rounded-2xl"><Globe className="text-[#A9DDD3]" size={32} /></div>
                                        <div className="p-4 bg-[#A9DDD3]/10 border border-[#A9DDD3]/20 rounded-2xl"><Share2 className="text-[#A9DDD3]" size={32} /></div>
                                    </div>
                                    <p className="font-mono text-xs text-[#A9DDD3] uppercase font-black tracking-widest italic">Web2 $\leftrightarrow$ Rialo L1: Linked</p>
                                </motion.div>
                            ) : (
                                <div className="py-10 space-y-8 opacity-40">
                                    <Globe className="mx-auto" size={48} />
                                    <button onClick={startBridge} className="px-12 py-5 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.4em] rounded-full hover:bg-white transition-all shadow-xl">
                                        Initialize Native Bridge
                                    </button>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
            <div className="bg-[#050505] border border-white/10 rounded-[3rem] p-10 shadow-2xl">
                <div className="flex items-center space-x-3 mb-10 text-[#A9DDD3]"><Trophy size={20} /><h3 className="text-white font-black tracking-widest uppercase text-xs italic">Mission Loot</h3></div>
                <div className="p-6 bg-[#080808] border border-white/5 rounded-3xl mb-12">
                    <span className="text-[10px] font-mono text-[#A9DDD3]/60 uppercase block mb-2 tracking-widest italic font-bold">Reward</span>
                    <span className="text-2xl font-black text-white">+1,500 XP</span>
                </div>
                <button 
                  onClick={handleComplete} 
                  disabled={!isLinked} 
                  className={`w-full py-6 font-black uppercase text-xs tracking-[0.4em] rounded-2xl transition-all flex items-center justify-center space-x-2
                  ${isLinked ? 'bg-[#A9DDD3] text-[#010101] hover:bg-white shadow-[0_0_30px_rgba(169,221,211,0.3)]' : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'}`}
                >
                    {isLinked ? <><Unlock size={14} /> <span>COMPLETE MISSION</span></> : <span>BRIDGE REQUIRED</span>}
                </button>
            </div>
        </div>
      </div>
    </main>
  );
}