"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Trophy, CheckCircle, Lock, Unlock, EyeOff, Fingerprint, Binary, FastForward } from 'lucide-react';
import Link from 'next/link';
import { useAcademy } from "../../context/AcademyContext";

export default function PrivacyAcademy() {
  const { setIsFocused, addLog } = useAcademy();
  const [isCompleted, setIsCompleted] = useState(false);
  const [status, setStatus] = useState("IDLE"); // IDLE, ENCRYPTING, SHIELDED
  const [secretData, setSecretData] = useState("");

  useEffect(() => {
    addLog("[SYSTEM]: REX Privacy Module Active.");
    return () => setIsFocused(false);
  }, [setIsFocused, addLog]);

  const handleEncrypt = () => {
    if (!secretData) return;
    setStatus("ENCRYPTING");
    setIsFocused(true);
    addLog(`[REX]: Shrouding neural data sequence...`);
    
    setTimeout(() => {
      setStatus("SHIELDED");
      addLog("[CONSENSUS]: ZK-Proof verified. State: SECURE.");
    }, 2000);
  };

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10 transform-gpu">
      
      {/* SUCCESS MODAL: Без размытия для стабильности */}
      <AnimatePresence>
        {isCompleted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-[#010101] flex items-center justify-center p-6 text-center">
            <div className="bg-[#050505] border border-[#A9DDD3]/30 p-12 rounded-[3.5rem] max-w-sm shadow-2xl">
                <ShieldCheck className="text-[#A9DDD3] mx-auto mb-6" size={80} />
                <h2 className="text-3xl font-black text-[#E8E3D5] italic mb-8 uppercase">Confidentiality Secured</h2>
                <Link href="/developers">
                    <button className="w-full py-5 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.3em] rounded-2xl flex items-center justify-center group">
                        Proceed to Developers <FastForward className="ml-2" size={16} />
                    </button>
                </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl w-full mb-12 flex justify-between items-center relative z-10">
        <Link href="/"><div className="flex items-center text-[#A9DDD3]/60 hover:text-[#A9DDD3] cursor-pointer font-mono text-[10px] uppercase tracking-widest"><ArrowLeft className="mr-2" size={14} /> [ Back ]</div></Link>
        <div className="bg-[#A9DDD3]/5 border border-[#A9DDD3]/20 px-5 py-2 rounded-full text-[#E8E3D5] font-mono text-[10px] uppercase tracking-widest">REX Architecture</div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10">
        <div className="lg:col-span-2 space-y-6">
            {/* ГЛАВНЫЙ БЛОК: Замена blur на solid background */}
            <div className="bg-[#080808] border border-white/10 rounded-[3rem] p-10 md:p-14 shadow-2xl overflow-hidden">
                <h1 className="text-5xl md:text-7xl font-black text-[#E8E3D5] mb-8 tracking-tighter italic uppercase leading-[0.9]">The <br/><span className="text-[#A9DDD3]">Invisible</span> Shield</h1>
                <p className="text-[#E8E3D5]/60 text-lg leading-relaxed max-w-xl mb-12 italic font-medium">
                  Rialo utilizes <strong className="text-[#A9DDD3]">REX (Runtime Encrypted Execution)</strong> to process logic without exposing raw data to the network.
                </p>

                {/* SIMULATOR: Упрощенный дизайн */}
                <div className="bg-black border border-white/5 rounded-[3rem] p-10 space-y-8">
                    <div className="space-y-4">
                        <label className="block font-mono text-[10px] text-[#A9DDD3] uppercase tracking-[0.3em] font-bold opacity-50">Confidential Input</label>
                        <input 
                            type="text" value={secretData} onChange={(e) => setSecretData(e.target.value)} 
                            placeholder="Enter neural string..." 
                            className="w-full bg-[#050505] border border-white/10 rounded-2xl p-6 text-[#E8E3D5] focus:border-[#A9DDD3] outline-none font-mono" 
                        />
                    </div>
                    
                    <div className="flex items-center justify-center p-12 bg-white/[0.01] border border-white/5 rounded-3xl min-h-[160px]">
                       <AnimatePresence mode="wait">
                            {status === "ENCRYPTING" ? (
                                <motion.div key="enc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center">
                                    <Binary className="text-[#A9DDD3] animate-pulse mb-4" size={48} />
                                    <p className="font-mono text-[10px] text-[#A9DDD3] animate-pulse uppercase tracking-[0.4em]">Synthesizing Proof...</p>
                                </motion.div>
                            ) : status === "SHIELDED" ? (
                                <motion.div key="sh" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center">
                                    <Fingerprint className="text-[#A9DDD3] mb-4" size={48} />
                                    <p className="font-mono text-[10px] text-white/30 italic">0x7f8c9b...d92a4e1f</p>
                                </motion.div>
                            ) : (
                                <div className="text-white/10 flex flex-col items-center"><EyeOff size={48} className="mb-4" /><p className="font-mono text-[10px] uppercase tracking-widest font-bold">Awaiting Input</p></div>
                            )}
                       </AnimatePresence>
                    </div>

                    <button 
                        onClick={handleEncrypt} disabled={!secretData || status === "ENCRYPTING"} 
                        className={`w-full py-6 rounded-full font-mono text-[11px] uppercase tracking-[0.6em] transition-all border-2 font-black 
                        ${status === "SHIELDED" ? 'bg-[#A9DDD3]/10 text-[#A9DDD3] border-[#A9DDD3]/20' : 'bg-[#A9DDD3] text-[#010101] border-[#A9DDD3] hover:bg-white shadow-xl'}`}
                    >
                        {status === "SHIELDED" ? "REX SHIELD DEPLOYED" : status === "ENCRYPTING" ? "PROCESSING..." : "INITIALIZE REX SHIELD"}
                    </button>
                </div>
            </div>
        </div>

        {/* SIDEBAR: Чистая информация */}
        <div className="space-y-6">
            <div className="bg-[#080808] border border-white/10 rounded-[2.5rem] p-10 shadow-xl">
                <h3 className="text-[#E8E3D5] font-black tracking-widest uppercase text-xs mb-8">Protocol Analysis</h3>
                <div className="space-y-6 mb-10">
                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3">
                        <p className="text-[10px] font-mono text-[#A9DDD3] uppercase font-bold tracking-widest">Technology</p>
                        <p className="text-sm text-[#E8E3D5]/70 italic">ZK-SNARKs allow nodes to verify data validity without seeing the data itself.</p>
                    </div>
                </div>
                <button 
                    onClick={() => setIsCompleted(true)} disabled={status !== "SHIELDED"} 
                    className={`w-full py-5 font-black uppercase text-xs tracking-[0.3em] rounded-xl transition-all 
                    ${status === "SHIELDED" ? 'bg-[#A9DDD3] text-[#010101] hover:bg-white' : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'}`}
                >
                    COMPLETE MISSION
                </button>
            </div>
        </div>
      </div>
    </main>
  );
}