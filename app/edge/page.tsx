"use client";
import { useAcademy } from "../../context/AcademyContext";
// ... (остальные импорты)

export default function RialoEdgeMission() {
  const { setIsFocused } = useAcademy();
  const [isBridgeActive, setIsBridgeActive] = useState(false);

  const toggleBridge = () => {
    const newState = !isBridgeActive;
    setIsBridgeActive(newState);
    setIsFocused(newState); // Викинг двигается к пользователю!
  };

  return (
    <main className="min-h-screen p-6 relative z-10">
      {/* ... (навигация) ... */}

      <div className="mt-16 bg-[#010101]/40 border border-rialo-mint/20 rounded-[3rem] p-12 text-center relative overflow-hidden">
          {/* Поток данных */}
          <div className="flex justify-around items-center mb-16 relative">
              <div className="z-10"><Globe size={50} className={isBridgeActive ? "text-rialo-mint" : "text-white/10"} /></div>
              
              <div className="flex-1 px-10 relative h-20 flex items-center">
                  <div className="w-full h-[1px] bg-white/10" />
                  <AnimatePresence>
                    {isBridgeActive && [...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 400, opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        className="absolute h-1 w-4 bg-rialo-mint shadow-[0_0_10px_#A9DDD3] rounded-full"
                      />
                    ))}
                  </AnimatePresence>
              </div>

              <div className="z-10"><Cpu size={50} className="text-rialo-mint" /></div>
          </div>

          <button 
            onClick={toggleBridge}
            className="px-12 py-5 bg-rialo-mint text-rialo-black font-black rounded-full shadow-[0_0_30px_rgba(169,221,211,0.4)]"
          >
            {isBridgeActive ? "TERMINATE SYNC" : "ESTABLISH HTTPS BRIDGE"}
          </button>
      </div>

      {/* Live Speech Bubble (только когда активен мост) */}
      <AnimatePresence>
        {isBridgeActive && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed bottom-40 right-60 z-[100] p-6 bg-rialo-mint text-rialo-black rounded-2xl max-w-xs font-bold italic shadow-2xl"
          >
            "Data ingestion active! We're pulling Web2 packets directly into the Rialo L1 Core. No oracles, zero lag!"
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}