"use client";
// ... (остальные импорты)
import { AcademyProvider, useAcademy } from "../context/AcademyContext";

function GlobalUI({ children }: { children: React.ReactNode }) {
  const { isFocused } = useAcademy();

  return (
    <body className="antialiased bg-[#010101]">
      <header> {/* ... твой текущий хедер ... */} </header>
      
      <div className="relative z-10 pt-20">{children}</div>

      {/* --- ДИНАМИЧЕСКИЙ АВАТАР --- */}
      <div className="fixed bottom-8 right-8 z-50 flex items-end space-x-4 pointer-events-none">
          <motion.div 
            animate={{ 
              scale: isFocused ? 1.4 : 1, // Приближение к экрану
              x: isFocused ? -100 : 0,    // Сдвиг к центру
              y: isFocused ? -50 : 0 
            }}
            transition={{ type: "spring", stiffness: 100 }}
            className="relative w-32 h-32 md:w-44 md:h-44 drop-shadow-[0_0_30px_rgba(169,221,211,0.3)]"
          >
              <Image src="/avatar.png" alt="Rialo Guide" width={176} height={176} className="object-contain" priority />
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