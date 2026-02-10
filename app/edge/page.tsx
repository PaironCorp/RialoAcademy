// ... (начало файла без изменений)

                {/* --- УЛУЧШЕННЫЙ ИНТЕРАКТИВНЫЙ ВИЗУАЛИЗАТОР --- */}
                <div className="mt-16 bg-white/[0.02] border border-white/5 rounded-[3rem] p-12 text-center relative overflow-hidden shadow-inner">
                    <div className="flex justify-around items-center mb-16 relative z-10">
                        
                        {/* Web2 World Node */}
                        <div className="flex flex-col items-center">
                            <motion.div 
                                animate={isBridgeActive ? { scale: [1, 1.1, 1], rotate: 360 } : {}}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className={`p-6 rounded-full border transition-all duration-700 ${isBridgeActive ? 'border-rialo-mint text-rialo-mint shadow-[0_0_40px_rgba(169,221,211,0.4)]' : 'border-white/10 text-white/10'}`}
                            >
                                <Globe size={40} />
                            </motion.div>
                            <span className="mt-4 font-mono text-[10px] uppercase tracking-widest text-rialo-beige/40 italic">Global Web2 Data</span>
                        </div>

                        {/* Animated Bridge Connector */}
                        <div className="flex-1 px-8 relative">
                            <div className="h-[2px] w-full bg-white/5 relative">
                                <AnimatePresence>
                                    {isBridgeActive && (
                                        <>
                                            {/* Энергетический луч */}
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                className="absolute inset-0 bg-rialo-mint shadow-[0_0_15px_#A9DDD3]"
                                            />
                                            {/* Летящие "пакеты" данных */}
                                            {[...Array(5)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ x: "-10%", opacity: 0 }}
                                                    animate={{ x: "110%", opacity: [0, 1, 0] }}
                                                    transition={{ 
                                                        duration: 1.5, 
                                                        repeat: Infinity, 
                                                        delay: i * 0.3,
                                                        ease: "easeInOut"
                                                    }}
                                                    className="absolute top-[-4px] w-2 h-2 bg-rialo-mint rounded-full blur-[1px]"
                                                />
                                            ))}
                                        </>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Rialo Core Node */}
                        <div className="flex flex-col items-center">
                            <motion.div 
                                animate={isBridgeActive ? { boxShadow: ["0 0 20px rgba(169,221,211,0.2)", "0 0 50px rgba(169,221,211,0.5)", "0 0 20px rgba(169,221,211,0.2)"] } : {}}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="p-6 rounded-full border border-rialo-mint/30 text-rialo-mint bg-rialo-mint/5"
                            >
                                <Cpu size={40} />
                            </motion.div>
                            <span className="mt-4 font-mono text-[10px] uppercase tracking-widest text-rialo-mint">Sovereign L1 Core</span>
                        </div>
                    </div>
                    
                    <button 
                        onClick={() => setIsBridgeActive(!isBridgeActive)}
                        className={`px-12 py-5 rounded-full font-mono text-[11px] uppercase tracking-[0.4em] transition-all duration-500 border-2 ${isBridgeActive ? 'bg-rialo-mint text-rialo-black border-rialo-mint shadow-[0_0_40px_rgba(169,221,211,0.3)]' : 'bg-transparent text-rialo-mint border-rialo-mint/40 hover:bg-rialo-mint/10'}`}
                    >
                        {isBridgeActive ? "SYNCING REAL-TIME" : "ESTABLISH HTTPS BRIDGE"}
                    </button>
                </div>

// ... (остаток файла без изменений)