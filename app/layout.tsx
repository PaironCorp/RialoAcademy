// Вставь это в блок AGENT в файле layout.tsx

<div className="fixed bottom-36 right-8 z-50 flex flex-col items-end pointer-events-none transform-gpu">
    <AnimatePresence mode="wait">
        <motion.div 
            key={getAgentMessage()}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="mb-6 pointer-events-auto"
        >
            {/* НОВОЕ ОКНО ЧАТА: Больше, контрастнее, информативнее */}
            <div className="relative p-6 rounded-[2rem] max-w-[280px] bg-[#080808] border-2 border-[#A9DDD3]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="absolute -bottom-3 right-10 w-6 h-6 bg-[#080808] border-r-2 border-b-2 border-[#A9DDD3]/20 rotate-45" />
                
                <p className="text-[#A9DDD3] font-mono text-[10px] uppercase mb-2 tracking-[0.2em] font-black italic">
                    Neural Mentor // v2.1
                </p>
                <p className="text-[#E8E3D5] text-[13px] leading-relaxed font-bold italic">
                    "{getAgentMessage()}"
                </p>
                
                {/* Индикатор "Мыслительного процесса" */}
                <div className="mt-4 flex space-x-1">
                    <div className="w-1 h-1 bg-[#A9DDD3] rounded-full animate-bounce" />
                    <div className="w-1 h-1 bg-[#A9DDD3] rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1 h-1 bg-[#A9DDD3] rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
            </div>
        </motion.div>
    </AnimatePresence>

    {/* АВАТАР: Теперь он реагирует на фокус (например, увеличивается) */}
    <motion.div 
        animate={{ 
            y: [0, -10, 0],
            rotate: isFocused ? [0, -2, 2, 0] : 0,
            scale: isFocused ? 1.1 : 1
        }} 
        transition={{ 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 0.5, repeat: isFocused ? Infinity : 0 }
        }}
        className="relative w-32 h-32 md:w-48 md:h-48 cursor-pointer pointer-events-auto filter drop-shadow-[0_0_20px_rgba(169,221,211,0.2)]"
        onClick={() => addLog("[MENTOR]: Analyzing current neural state...")}
    >
        <Image 
            src="/avatar.png" 
            alt="Rialo Mentor" 
            width={192} 
            height={192} 
            className="object-contain" 
            priority 
        />
        {/* Нимб или эффект энергии вокруг при активности */}
        {isFocused && (
            <motion.div 
                layoutId="glow"
                className="absolute inset-0 bg-[#A9DDD3]/20 blur-[40px] rounded-full -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            />
        )}
    </motion.div>
</div>