"use client";

import "./globals.css";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, BrainCircuit, Send } from "lucide-react";
// @ts-ignore
import { useChat } from "ai/react"; 
import { AcademyProvider, useAcademy } from "../context/AcademyContext";

function GlobalUI({ children }: { children: React.ReactNode }) {
  const { isFocused } = useAcademy();
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  const mentorMessages = messages.filter(m => m.role !== 'user');
  const mentorText = mentorMessages.length > 0 
    ? mentorMessages[mentorMessages.length - 1].content 
    : "Stay focused on the mission, Initiate.";

  return (
    <body className="antialiased bg-[#010101] text-[#E8E3D5] overflow-x-hidden font-sans">
      <div className="relative z-10">{children}</div>

      <div className="fixed bottom-36 right-8 z-50 flex flex-col items-end pointer-events-none transform-gpu">
          <AnimatePresence>
              <motion.div initial={{ opacity: 0, scale: 0.8, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="mb-6 pointer-events-auto">
                  
                  {/* ГЛАВНОЕ ОБЛАКО: Фиксированная ширина и макс. высота */}
                  <div className="relative p-7 rounded-[2.5rem] w-[450px] bg-[#080808]/95 backdrop-blur-xl border-2 border-[#A9DDD3]/30 shadow-[0_0_60px_rgba(169,221,211,0.15)] flex flex-col">
                      <div className="absolute -bottom-3 right-12 w-6 h-6 bg-[#080808] border-r-2 border-b-2 border-[#A9DDD3]/30 rotate-45" />
                      
                      <div className="flex items-center space-x-2 mb-4">
                        <BrainCircuit size={18} className="text-[#A9DDD3] animate-pulse" />
                        <span className="text-[#A9DDD3] font-mono text-[11px] uppercase tracking-[0.3em] font-black italic opacity-70">Neural Link Active</span>
                      </div>
                      
                      {/* КОНТЕЙНЕР ДЛЯ ТЕКСТА СО СКРОЛЛОМ */}
                      <div className="overflow-y-auto max-h-[350px] pr-4 custom-scrollbar">
                          <p className="text-[#E8E3D5] text-[20px] leading-relaxed font-bold italic tracking-tight">
                              "{mentorText}"
                          </p>
                      </div>
                      
                      <form onSubmit={handleSubmit} className="mt-6 flex items-center bg-black/60 border border-[#A9DDD3]/20 rounded-2xl p-3 group focus-within:border-[#A9DDD3]/50 transition-all shrink-0">
                        <input 
                          value={input}
                          onChange={handleInputChange}
                          placeholder="Ask the Forge..."
                          className="flex-1 bg-transparent border-none outline-none text-[15px] text-white px-3 italic font-bold"
                        />
                        <button type="submit" className="p-2 text-[#A9DDD3] hover:scale-125 transition-all">
                          {isLoading ? <div className="w-5 h-5 border-2 border-[#A9DDD3] border-t-transparent rounded-full animate-spin" /> : <Send size={20} />}
                        </button>
                      </form>
                  </div>
              </motion.div>
          </AnimatePresence>

          <motion.div animate={{ y: [0, -10, 0], scale: isFocused ? 1.1 : 1 }} transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }} className="relative w-32 h-32 md:w-48 md:h-48 cursor-pointer pointer-events-auto filter drop-shadow-[0_0_40px_rgba(169,221,211,0.25)]">
              <Image src="/avatar.png" alt="Mentor" width={192} height={192} className="object-contain" priority />
          </motion.div>
      </div>

      {/* СТИЛИ СКРОЛЛБАРА ПРЯМО В КОДЕ */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(169, 221, 211, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #A9DDD3;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #E8E3D5;
        }
      `}</style>
    </body>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <AcademyProvider>
        <GlobalUI>{children}</GlobalUI>
      </AcademyProvider>
    </html>
  );
}