"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Send, X } from "lucide-react";
// @ts-ignore
import { useChat } from "ai/react"; 
import { useAcademy } from "../context/AcademyContext";
import NexusBackground from "../components/NexusBackground";

export default function GlobalClientUI({ children }: { children: React.ReactNode }) {
  const { isFocused } = useAcademy();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [initialMessages, setInitialMessages] = useState([]);
  
  // --- ЛОГИКА ПАМЯТИ ЧАТА ---
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
      
      {/* ФОН: НЕКСУС */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 md:opacity-40">
        <NexusBackground />
      </div>

      {/* ХЕДЕР: АТОМНЫЙ ЛОГОТИП */}
      <header className="fixed top-0 left-0 w-full p-6 md:p-10 z-40 flex justify-center md:justify-start pointer-events-none">
        <div className="relative flex items-center justify-center pointer-events-auto scale-75 md:scale-100">
            <div className="absolute hidden md:block w-[180px] h-[180px] border border-[#A9DDD3]/10 rounded-full animate-[spin_20s_linear_infinite]" />
            <Image src="/images/logo.png" alt="Rialo Logo" width={130} height={35} className="object-contain relative z-10" />
        </div>
      </header>

      {/* ОСНОВНОЙ КОНТЕНТ */}
      <main className="relative z-10 pt-32 md:pt-0">
        {children}
      </main>

      {/* --- ИНТЕРФЕЙС АГЕНТА (ВИДЖЕТ) --- */}
      <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-50 flex flex-col items-end transform-gpu">
          
          {/* ОБЛАКО ЧАТА */}
          <AnimatePresence>
              {isChatOpen && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="mb-4 w-[92vw] md:w-[450px] pointer-events-auto"
                >
                    <div className="relative p-6 md:p-8 rounded-[2rem] bg-[#080808]/95 backdrop-blur-2xl border-2 border-[#A9DDD3]/30 shadow-2xl">
                        <button onClick={() => setIsChatOpen(false)} className="absolute top-4 right-4 text-[#A9DDD3]/50 hover:text-[#A9DDD3]">
                          <X size={24} />
                        </button>

                        <div className="flex items-center space-x-2 mb-4">
                          <BrainCircuit size={16} className="text-[#A9DDD3] animate-pulse" />
                          <span className="text-[#A9DDD3] font-mono text-[10px] uppercase tracking-widest opacity-60">Neural Link Active</span>
                        </div>
                        
                        <div className="overflow-y-auto max-h-[250px] md:max-h-[400px] pr-2 custom-scrollbar">
                            <p className="text-[#E8E3D5] text-[18px] md:text-[20px] leading-relaxed font-bold italic">
                                "{mentorText}"
                            </p>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="mt-6 flex items-center bg-black/60 border border-[#A9DDD3]/20 rounded-2xl p-3">
                          <input 
                            value={input} 
                            onChange={handleInputChange} 
                            placeholder="Ask the Forge..." 
                            className="flex-1 bg-transparent border-none outline-none text-[15px] text-white px-2 font-bold" 
                          />
                          <button type="submit" className="text-[#A9DDD3]">
                            {isLoading ? <div className="w-5 h-5 border-2 border-[#A9DDD3] border-t-transparent rounded-full animate-spin" /> : <Send size={20} />}
                          </button>
                        </form>
                    </div>
                </motion.div>
              )}
          </AnimatePresence>

          {/* ТРИГГЕР: ВИКИНГ (СИЯНИЕ + ЛЕВИТАЦИЯ + НЕЙРО-ЧИП) */}
          <motion.div 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="relative cursor-pointer pointer-events-auto group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
              {/* 1. НЕЙРО-ЧИП (Появляется, когда чат закрыт) */}
              <AnimatePresence>
                {!isChatOpen && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, x: [0, 4, 0] }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute -top-4 -left-4 z-50 w-10 h-10 bg-[#080808] border-2 border-[#A9DDD3] rounded-xl flex items-center justify-center shadow-[0_0_15px_#A9DDD3] rotate-12"
                  >
                    <BrainCircuit size={20} className="text-[#A9DDD3] animate-pulse" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 2. ВИКИНГ С ЭФФЕКТАМИ */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0], // Левитация
                  filter: [
                    "drop-shadow(0 0 10px rgba(168, 85, 247, 0.4))", // Фиолетовое сияние
                    "drop-shadow(0 0 25px rgba(168, 85, 247, 0.7))", 
                    "drop-shadow(0 0 10px rgba(168, 85, 247, 0.4))"
                  ] 
                }}
                transition={{ 
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  filter: { duration: 2, repeat: Infinity, ease: "linear" }
                }}
                className={`relative transition-all duration-500 ${isChatOpen ? 'brightness-110 scale-90' : 'brightness-100'}`}
              >
                <Image 
                  src="/avatar.png" 
                  alt="Mentor" 
                  width={isChatOpen ? 100 : 80} 
                  height={isChatOpen ? 100 : 80} 
                  className="object-contain md:w-48 md:h-48 drop-shadow-[0_0_15px_rgba(168, 85, 247, 0.4)]" 
                  priority 
                />
                
                {/* 3. ФОНОВАЯ ПУЛЬСАЦИЯ ПОД ВИКИНГОМ */}
                {!isChatOpen && (
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full -z-10"
                  />
                )}
              </motion.div>
          </motion.div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #A9DDD3; border-radius: 10px; }
      `}</style>
    </body>
  );
}