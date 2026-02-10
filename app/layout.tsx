"use client";
// ... (все импорты остаются прежними)
import { useAcademy } from "../context/AcademyContext";
import { Terminal } from 'lucide-react';

function GlobalUI({ children }: { children: React.ReactNode }) {
  const { logs } = useAcademy();
  // ... (весь текущий код GlobalUI)

  return (
    <body className="antialiased bg-[#010101] text-[#E8E3D5]">
      {/* ... (весь текущий код Header и контента) */}
      <div className="relative z-10 pt-20 pb-40">{children}</div>

      {/* --- NEURAL TERMINAL --- */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] h-32 bg-[#010101]/90 backdrop-blur-2xl border-t border-[#A9DDD3]/20 p-4 font-mono">
          <div className="max-w-7xl mx-auto flex items-start space-x-6">
              <div className="flex items-center space-x-2 text-[#A9DDD3] opacity-50 shrink-0">
                  <Terminal size={14} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Live Node Logs</span>
              </div>
              <div className="flex-1 overflow-y-auto h-24 space-y-1">
                  {logs.map((log: string, i: number) => (
                      <motion.p 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }} 
                        animate={{ opacity: 1 - i * 0.2, x: 0 }} 
                        className="text-[10px] text-[#A9DDD3]/80 leading-none"
                      >
                        {log}
                      </motion.p>
                  ))}
              </div>
          </div>
      </div>
      
      {/* Аватар (теперь чуть выше, чтобы не перекрывать терминал) */}
      {/* Сдвинь bottom-8 на bottom-40 в коде аватара */}
    </body>
  );
}