"use client";
import "./globals.css";
import Image from "next/image";
import NexusBackground from "../components/NexusBackground";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>RIALO ACADEMY | The Nexus</title>
      </head>
      <body className="antialiased bg-[#010101] selection:bg-[#A9DDD3] selection:text-[#010101]">
        <div className="fixed inset-0 z-0">
          <NexusBackground />
        </div>
        <div className="fixed inset-0 z-0 cyber-grid-overlay pointer-events-none opacity-50"></div>

        {/* --- GLOBAL HEADER --- */}
        <header className="fixed top-0 left-0 right-0 z-40 h-20 flex items-center justify-between px-8 bg-[#010101]/50 backdrop-blur-md border-b border-rialo-mint/10">
            <div className="flex items-center space-x-3">
                <div className="p-2 bg-rialo-mint/10 rounded-lg border border-rialo-mint/30 text-rialo-mint neon-border-glow">
                    <Cpu size={24} />
                </div>
                 <span className="text-2xl font-black tracking-tighter text-rialo-mint text-glow-mint italic">
                    RIALO <span className="text-rialo-beige font-thin">ACADEMY</span>
                </span>
            </div>
            <div className="font-mono text-xs text-rialo-mint/50 tracking-widest uppercase">
                SYSTEM STATUS: <span className="text-rialo-mint animate-pulse">OPERATIONAL</span>
            </div>
        </header>

        <div className="relative z-10 pt-20">
          {children}
        </div>

        {/* --- AI GUIDE AGENT (English Version) --- */}
        <div className="fixed bottom-8 right-8 z-50 flex items-end space-x-4 pointer-events-none">
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 1 }}
               className="agent-bubble p-4 rounded-xl max-w-xs mb-12 relative"
             >
                <p className="text-rialo-mint font-mono text-[10px] uppercase mb-2 tracking-widest">AI Guide // Mission Control</p>
                <p className="text-rialo-beige text-xs leading-relaxed font-medium">
                   "Welcome to the Nexus. I am your guide through the Rialo vertical stack. Select <strong className="text-rialo-mint">ECONOMICS</strong> to begin your initiation."
                </p>
             </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-32 h-32 md:w-44 md:h-44 drop-shadow-[0_0_30px_rgba(169,221,211,0.4)]"
            >
                <Image 
                src="/avatar.png" 
                alt="Rialo AI Guide" 
                width={176}
                height={176}
                className="object-contain"
                priority
                />
            </motion.div>
        </div>
      </body>
    </html>
  );
}