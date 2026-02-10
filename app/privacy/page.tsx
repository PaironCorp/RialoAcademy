"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Trophy, CheckCircle, Lock, Unlock, EyeOff, Fingerprint, Binary, Wifi, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import { useAcademy } from "../../context/AcademyContext";

export default function PrivacyMission() {
  const { setIsFocused, addLog } = useAcademy(); // Подключаем логи терминала
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEncrypting, setIsEncrypting] = useState(false);
  const [secretData, setSecretData] = useState("");
  const [isShielded, setIsShielded] = useState(false);
  const [alreadyClaimed, setAlreadyClaimed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("mission_05_complete");
    if (saved === "true") setAlreadyClaimed(true);
    return () => setIsFocused(false);
  }, [setIsFocused]);

  const handleEncrypt = () => {
    if (!secretData) return;
    
    setIsEncrypting(true);
    setIsFocused(true);
    
    // ОТПРАВЛЯЕМ ТЕХНИЧЕСКИЕ ЛОГИ В ТЕРМИНАЛ
    addLog(`[REX]: Initiating REX Shield for data string: "${secretData.slice(0, 3)}***"`);
    addLog("[ZK-VM]: Allocating constraints for circuit...");
    
    setTimeout(() => {
        addLog("[ZK-VM]: Prover generated non-interactive proof.");
        addLog("[CONSENSUS]: Verifying ZK-SNARK proof on Rialo L1...");
    }, 1000);

    setTimeout(() => {
      setIsEncrypting(false);
      setIsShielded(true);
      addLog("[SYSTEM]: REX Shield Active. Data is now cryptographically hidden.");
      addLog("[LEDGER]: Commit successful at Slot #582910");
    }, 2500);
  };

  const handleComplete = () => {
    if (!isShielded) return;
    if (!alreadyClaimed) {
        const currentXp = parseInt(localStorage.getItem("rialo_xp") || "0");
        localStorage.setItem("rialo_xp", (currentXp + 3000).toString());
        localStorage.setItem("mission_05_complete", "true");
        setAlreadyClaimed(true);
    }
    setIsCompleted(true);
    addLog("[ACADEMY]: Mission 05: Privacy Secured. +3,000 XP.");
  };

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10">
      
      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {isCompleted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-[#010101]/95 backdrop-blur-2xl flex items-center justify-center p-6 text-center">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-[#A9DDD3]/10 border border-[#A9DDD3]/30 p-12 rounded-[3.5rem] max-w-sm shadow-[0_0_60px_rgba(169,221,211,0.2)]">
                <ShieldCheck className="text-[#A9DDD3] mx-auto mb-6" size={80} />
                <h2 className="text-3xl font-black text-[#E8E3D5] italic mb-8 uppercase tracking-tighter">Confidentiality Secured</h2>
                <Link href="/"><button className="w-full py-5 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.3em] rounded-2xl">Return to Atrium</button></Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl w-full mb-12 flex justify-between items-center relative z-10">
        <Link href="/"><div className="flex items-center text-[#A9DDD3]/60 hover:text-[#A9DDD3] cursor-pointer font-mono text-[10px] uppercase tracking-[0.3em] transition-colors"><ArrowLeft className="mr-2" size={14} /> [ Back to Nexus ]</div></Link>
        <div className="bg-[#A9DDD3]/5 border border-[#A9DDD3]/20 px-5 py-2 rounded-full text-[#E8E3D5] font-mono text-[10px] uppercase tracking-widest shadow-[0_0_15px_rgba(169,221,211,0.1)]">Mission 05: <span className="text-[#A9DDD3] font-bold text-glow-mint">REX Computation</span></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10">
        <div className="lg:col-span-2 space-y-6">
            <motion.div layout className="bg-[#010101]/80 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden transition-all duration-500">
                <h1 className="text-5xl md:text-7xl font-black text-[#E8E3D5] mb-6 tracking-tighter italic uppercase leading-[0.9]">The <br/><span className="text-[#A9DDD3]">Invisible</span> Shield</h1>
                <p className="text-[#E8E3D5]/70 text-lg font-medium leading-relaxed max-w-xl mb-12 italic">Rialo uses <strong className="text-white">REX (Runtime Encrypted Execution)</strong> to process sensitive logic without exposing data to validators.</p>

                {/* --- ZK-ENCRYPTION SIMULATOR --- */}
                <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 relative overflow-hidden shadow-inner">
                    <div className="space-y-8 relative z-10">
                        <div className="space-y-4">
                            <label className="block font-mono text-[10px] text-[#A9DDD3] uppercase tracking-[0.3em] ml-2 font-black italic opacity-60">Neural Input // Secret Key</label>
                            <input 
                                type="text"
                                value={secretData}
                                onChange={(e) => setSecretData(e.target.value)}
                                placeholder="Enter confidential string..."
                                className="w-full bg-[#010101]/60 border border-white/10 rounded-2xl p-6 text-[#E8E3D5] focus:border-[#A9DDD3] outline-none transition-all font-mono text-sm tracking-wider"
                            />
                        </div>

                        <div className="flex items-center justify-center p-12 bg-white/[0.01] border border-white/5 rounded-3xl relative min-h-[160px]">
                           <AnimatePresence mode="wait">
                                {isEncrypting ? (
                                    <motion.div key="encrypting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center">
                                        <Binary className="text-[#A9DDD3] animate-pulse mb-4" size={48} />
                                        <p className="font-mono text-[10px] text-[#A9DDD3] animate-pulse uppercase tracking-[0.4em] font-black">Synthesizing ZK-Proof...</p>
                                    </motion.div>
                                ) : isShielded ? (
                                    <motion.div key="shielded" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center">
                                        <Fingerprint className="text-[#A9DDD3] mb-4" size={48} />
                                        <div className="text-center">
                                            <p className="font-mono text-[10px] text-[#A9DDD3] uppercase tracking-widest mb-1">State: Encrypted</p>
                                            <p className="font-mono text-[11px] text-white/30 break-all italic px-4">0x7f8c9b2a...d92a4e1f74b</p>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div key="idle" className="text-white/10 flex flex-col items-center opacity-30">
                                        <EyeOff size={48} className="mb-4" />
                                        <p className="font-mono text-[10px] uppercase tracking-widest italic font-bold">Waiting for Secure Entry</p>
                                    </motion.div>
                                )}
                           </AnimatePresence>
                        </div>

                        <button 
                            onClick={handleEncrypt}
                            disabled={!secretData || isEncrypting}
                            className={`w-full py-6 rounded-full font-mono text-[11px] uppercase tracking-[0.6em] transition-all duration-500 border-2 flex items-center justify-center space-x-3 font-black
                            ${isShielded ? 'bg-[#A9DDD3]/10 text-[#A9DDD3] border-[#A9DDD3]/20' : 'bg-[#A9DDD3] text-[#010101] border-[#A9DDD3] shadow-[0_0_30px_rgba(169,221,211,0.3)] hover:bg-white'}`}
                        >
                            {isShielded ? "REX SHIELD DEPLOYED" : isEncrypting ? "PROCESSING REX..." : "INITIALIZE REX COMPUTATION"}
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
            <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md">
                <div className="flex items-center space-x-3 mb-8"><Trophy className="text-[#A9DDD3]" size={20} /><h3 className="text-[#E8E3D5] font-black tracking-widest uppercase text-xs">Mission Loot</h3></div>
                <div className="space-y-6 mb-10">
                    <div className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${isShielded ? 'bg-[#A9DDD3]/5 border-[#A9DDD3]/20 shadow-lg shadow-[#A9DDD3]/5' : 'bg-white/5 border-white/5 opacity-40'}`}>
                        <div className="flex flex-col"><span className="text-[9px] font-mono text-[#A9DDD3]/60 uppercase mb-1">Experience</span><span className="text-base font-bold text-[#E8E3D5]">+3,000 XP</span></div>
                        <div className={`w-4 h-4 rounded-full bg-[#A9DDD3] ${isShielded ? 'animate-ping' : ''}`} />
                    </div>
                </div>
                <button 
                    onClick={handleComplete} 
                    disabled={!isShielded}
                    className={`w-full py-5 font-black uppercase text-xs tracking-[0.3em] rounded-xl transition-all flex items-center justify-center space-x-2
                    ${isShielded ? 'bg-[#A9DDD3] text-[#010101] hover:bg-white shadow-xl shadow-[#A9DDD3]/20' : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'}`}
                >
                    {isShielded ? <><Unlock size={14} /> <span>COMPLETE MISSION</span></> : <><Lock size={14} /> <span>REX LOCKED</span></>}
                </button>
            </div>
        </div>
      </div>
    </main>
  );
}