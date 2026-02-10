"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Brain, Wallet, Zap, ShieldCheck, FastForward, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useAcademy } from "../../context/AcademyContext";

export default function AIAgentsAcademy() {
  const { addLog } = useAcademy();
  const [status, setStatus] = useState("IDLE"); // IDLE, DEPLOYING, ACTIVE
  const [isCompleted, setIsCompleted] = useState(false);

  const startDeployment = () => {
    setStatus("DEPLOYING");
    addLog("[AGENT]: Allocating sovereign wallet address...");
    setTimeout(() => {
      setStatus("ACTIVE");
      addLog("[AGENT]: Online. Executing native logic.");
    }, 2000);
  };

  return (
    <main className="min-h-screen p-6 md:p-12 lg:pt-32 flex flex-col items-center relative z-10">
      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {isCompleted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-[#010101] flex items-center justify-center p-6 text-center">
            <div className="bg-[#050505] border border-[#A9DDD3]/30 p-12 rounded-[3.5rem] max-w-sm">
                <CheckCircle className="text-[#A9DDD3] mx-auto mb-6" size={80} />
                <h2 className="text-3xl font-black text-[#E8E3D5] italic mb-8 uppercase">Agency Verified</h2>
                <Link href="/network">
                    <button className="w-full py-5 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.3em] rounded-2xl flex items-center justify-center">
                        Proceed to Final Module <FastForward className="ml-2" size={16} />
                    </button>
                </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#080808] border border-white/10 rounded-[3rem] p-10 md:p-14 shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-black text-[#E8E3D5] mb-8 uppercase italic leading-none">The <span className="text-[#A9DDD3]">Sovereign</span> Agent</h1>
          
          <div className="bg-black border border-white/5 rounded-3xl p-10 text-center">
             <AnimatePresence mode="wait">
                {status === "DEPLOYING" ? (
                  <motion.div key="dep" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-10">
                    <Brain className="text-[#A9DDD3] animate-pulse mx-auto mb-4" size={48} />
                    <p className="font-mono text-[10px] text-[#A9DDD3] uppercase animate-pulse">Neural Linking...</p>
                  </motion.div>
                ) : status === "ACTIVE" ? (
                  <motion.div key="act" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-10">
                    <div className="flex justify-center space-x-4 mb-6">
                        <Wallet className="text-[#A9DDD3]" size={32} />
                        <Zap className="text-[#A9DDD3]" size={32} />
                    </div>
                    <p className="font-mono text-xs text-[#A9DDD3] uppercase font-bold tracking-widest">Agent Active & Trading</p>
                  </motion.div>
                ) : (
                  <div className="py-10">
                    <Bot className="text-white/10 mx-auto mb-6" size={48} />
                    <button onClick={startDeployment} className="px-12 py-5 bg-[#A9DDD3] text-[#010101] font-black uppercase text-xs tracking-[0.3em] rounded-full hover:bg-white transition-all">Simulate Deployment</button>
                  </div>
                )}
             </AnimatePresence>
          </div>
        </div>

        <div className="bg-[#080808] border border-white/10 rounded-[2.5rem] p-10">
            <h3 className="text-[#E8E3D5] font-black tracking-widest uppercase text-xs mb-8">Loot</h3>
            <button onClick={() => setIsCompleted(true)} disabled={status !== "ACTIVE"} className={`w-full py-5 font-black uppercase text-xs tracking-[0.3em] rounded-xl transition-all ${status === "ACTIVE" ? "bg-[#A9DDD3] text-[#010101]" : "bg-white/5 text-white/20 cursor-not-allowed"}`}>Complete Mission</button>
        </div>
      </div>
    </main>
  );
}