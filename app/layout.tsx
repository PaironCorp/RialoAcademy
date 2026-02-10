"use client";

import "./globals.css";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, BrainCircuit, Send } from "lucide-react";
import { useChat } from "ai/react"; // Исправленный импорт для ai@latest
import { AcademyProvider, useAcademy } from "../context/AcademyContext";

function GlobalUI({ children }: { children: React.ReactNode }) {
  const { isFocused } = useAcademy();
  
  // Подключаем живой чат через хук из библиотеки ai
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  // Безопасно получаем последнее сообщение от ментора
  const mentorMessages = messages.filter(m => m.role !== 'user');
  const mentorText = mentorMessages.length > 0 
    ? mentorMessages[mentorMessages.length - 1].content 
    : "Stay focused on the mission, Initiate.";

  return (
    <body className="antialiased bg-[#010101] text-[#E8E3D5] overflow-x-hidden font-sans">
      <div className="relative z-10">{children}</div>

      {/* --- AVATAR & CHAT BUBBLE --- */}
      <div className="fixed bottom-36 right-8 z-50 flex flex-col items-end pointer-events-none transform-gpu">
          <AnimatePresence>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                className="mb-6 pointer-events-auto"
              >
                  <div className="relative p-6 rounded-[2.5rem] max-w-[340px] bg-[#080808] border-2 border-[#A9DDD3]/30 shadow-2xl">
                      <div className="absolute -bottom-3 right-12 w-6 h-6 bg-[#080808] border-r-2 border-b-2 border-[#A9DDD3]/30 rotate-45" />
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <BrainCircuit size={14} className="text-[#A9DDD3] animate-pulse" />
                        <span className="text-[#A9DDD3] font-mono text-[10px] uppercase tracking-[0.3em] font-black italic opacity-60">Neural Link Active</span>
                      </div>
                      
                      <p className="text-[#E8E3D5] text-[14px] leading-relaxed font-black italic tracking-tight">
                          "{mentorText}"
                      </p>
                      
                      <form onSubmit={handleSubmit} className="mt-4 flex items-center bg-black/60 border border-[#A9DDD3]/20 rounded-2xl p-2 group focus-within:border-[#A9DDD3]/50 transition-all">
                        <input 
                          value={input}
                          onChange={handleInputChange}
                          placeholder="Ask the Forge..."
                          className="flex-1 bg-transparent border-none outline-none text-[12px] text-white px-3 italic font-bold"
                        />
                        <button type="submit" className="p-2 text-[#A9DDD3] hover:scale-110 transition-all">
                          {isLoading ? (
                            <div className="w-4 h-4 border-2 border-[#A9DDD3] border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <Send size={16} />
                          )}
                        </button>
                      </form>
                  </div>
              </motion.div>
          </AnimatePresence>

          <motion.div 
            animate={{ y: [0, -10, 0], scale: isFocused ? 1.1 : 1 }} 
            transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }} 
            className="relative w-32 h-32 md:w-48 md:h-48 cursor-pointer pointer-events-auto"
          >
              <Image 
                src="/avatar.png" 
                alt="Mentor" 
                width={192} 
                height={192} 
                className="object-contain" 
                priority 
              />
          </motion.div>
      </div>
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