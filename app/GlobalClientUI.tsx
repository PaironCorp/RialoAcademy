"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Send, X, MessageSquare } from "lucide-react";
// @ts-ignore
import { useChat } from "ai/react"; 
import { useAcademy } from "../context/AcademyContext";
import NexusBackground from "../components/NexusBackground";

export default function GlobalClientUI({ children }: { children: React.ReactNode }) {
  const { isFocused } = useAcademy();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [initialMessages, setInitialMessages] = useState([]);
  
  useEffect(() => {
    const saved = localStorage.getItem("rialo-chat-history");
    if (saved) setInitialMessages(JSON.parse(saved));
  }, []);

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    initialMessages,
    onFinish: (message) => {
      const history = [...messages, message];
      localStorage.setItem("rialo-chat-history", JSON.stringify(history));
    }
  });

  const mentorMessages = messages.filter(m => m.role !== 'user');
  const mentorText = mentorMessages.length > 0 
    ? mentorMessages[mentorMessages.length - 1].content 
    : "Stay focused on the mission, Initiate. The Nexus is watching.";

  return (
    <body className="antialiased bg-[#010101] text-[#E8E3D5] overflow-x-hidden font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 md:opacity-40">
        <NexusBackground />
      </div>

      <header className="fixed top-0 left-0 w-full p-6 md:p-10 z-40 flex justify-center md:justify-start pointer-events-none">
        <div className="relative flex items-center justify-center pointer-events-auto scale-75 md:scale-100">
            <div className="absolute hidden md:block w-[180px] h-[180px] border border-[#A9DDD3]/10 rounded-full animate-[spin_20s_linear_infinite]" />
            <Image src="/images/logo.png" alt="Rialo Logo" width={130} height={35} className="object-contain relative z-10" />
        </div>
      </header>

      <main className="relative z-10 pt-32 md:pt-0">
        {children}
      </main>

      <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-50 flex flex-col items-end transform-gpu">
          <AnimatePresence>
              {isChatOpen && (
                <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="mb-4 w-[92vw] md:w-[450px] pointer-events-auto">
                    <div className="relative p-6 md:p-8 rounded-[2rem] bg-[#080808]/95 backdrop-blur-2xl border-2 border-[#A9DDD3]/30 shadow-2xl">
                        <button onClick={() => setIsChatOpen(false)} className="absolute top-4 right-4 text-[#A9DDD3]/50 hover:text-[#A9DDD3]"><X size={24} /></button>
                        <div className="flex items-center space-x-2 mb-4">
                          <BrainCircuit size={16} className="text-[#A9DDD3] animate-pulse" /><span className="text-[#A9DDD3] font-mono text-[10px] uppercase tracking-widest opacity-60">Neural Link Active</span>
                        </div>
                        <div className="overflow-y-auto max-h-[250px] md:max-h-[400px] pr-2 custom-scrollbar">
                            <p className="text-[#E8E3D5] text-[18px] md:text-[20px] leading-relaxed font-bold italic">"{mentorText}"</p>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-6 flex items-center bg-black/60 border border-[#A9DDD3]/20 rounded-2xl p-3">
                          <input value={input} onChange={handleInputChange} placeholder="Ask the Forge..." className="flex-1 bg-transparent border-none outline-none text-[15px] text-white px-2 font-bold" />
                          <button type="submit" className="text-[#A9DDD3]">{isLoading ? <div className="w-5 h-5 border-2 border-[#A9DDD3] border-t-transparent rounded-full animate-spin" /> : <Send size={20} />}</button>
                        </form>
                    </div>
                </motion.div>
              )}
          </AnimatePresence>

          <motion.div onClick={() => setIsChatOpen(!isChatOpen)} className="relative cursor-pointer pointer-events-auto">
              <Image src="/avatar.png" alt="Mentor" width={isChatOpen ? 100 : 70} height={isChatOpen ? 100 : 70} className={`object-contain transition-all md:w-40 md:h-40 ${!isChatOpen && 'brightness-50'}`} />
          </motion.div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #A9DDD3; border-radius: 10px; }
      `}</style>
    </body>
  );
}