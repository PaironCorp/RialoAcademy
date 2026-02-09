"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Coins, Globe, Zap, Cog, ShieldAlert, Code2, Bot, Users 
} from 'lucide-react';

export default function RialoAtrium() {
  const classes = [
    { id: 1, title: "Экономика", icon: Coins, desc: "Битва с налогами Web3", path: "/economics", color: "from-orange-500 to-amber-500" },
    { id: 2, title: "Rialo Edge", icon: Globe, desc: "Связь с Интернетом", path: "#", color: "from-blue-500 to-cyan-500" },
    { id: 3, title: "Скорость", icon: Zap, desc: "50ms Инновации", path: "#", color: "from-yellow-400 to-orange-500" },
    { id: 4, title: "Workflows", icon: Cog, desc: "Автопилот dApps", path: "#", color: "from-purple-500 to-pink-500" },
    { id: 5, title: "Приватность", icon: ShieldAlert, desc: "Магия REX", path: "#", color: "from-emerald-500 to-teal-500" },
    { id: 6, title: "Для Девов", icon: Code2, desc: "SVM & Rust Стак", path: "#", color: "from-indigo-500 to-blue-500" },
    { id: 7, title: "ИИ Агенты", icon: Bot, desc: "Разум в Сети", path: "#", color: "from-red-500 to-rose-500" },
    { id: 8, title: "Армия", icon: Users, desc: "Rialo Raid Army", path: "#", color: "from-slate-400 to-slate-600" },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* 1. Футуристический фон: Цифровая сетка и туман */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#f97316 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent blur-3xl pointer-events-none"></div>

      {/* 2. Шапка Школы */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">
          ATRIUM <span className="bg-gradient-to-r from-orange-400 to-amber-600 bg-clip-text text-transparent italic">RIALO</span>
        </h1>
        <p className="text-slate-400 font-mono tracking-widest uppercase text-sm">
          Система вертикальной интеграции блокчейна :: Статус: ОНЛАЙН
        </p>
      </motion.div>
      
      {/* 3. Сетка Порталов */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full relative z-10">
        {classes.map((cls) => (
          <Link href={cls.path} key={cls.id}>
            <motion.div 
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group relative h-64 cursor-pointer"
            >
              {/* Эффект свечения портала при наведении */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cls.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}></div>
              
              {/* Сама карточка-портал */}
              <div className="h-full bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all group-hover:border-orange-500/50 relative z-10">
                
                {/* Иконка-артефакт */}
                <div className={`mb-6 p-4 rounded-full bg-gradient-to-br ${cls.color} text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] group-hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] transition-all`}>
                  <cls.icon size={32} />
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                  {cls.title}
                </h3>
                <p className="text-xs text-slate-500 font-mono uppercase tracking-widest leading-tight">
                  {cls.desc}
                </p>

                {/* Декоративная линия прогресса */}
                <div className="absolute bottom-6 left-8 right-8 h-[1px] bg-white/5 overflow-hidden">
                   <div className={`h-full bg-gradient-to-r ${cls.color} w-1/3 group-hover:w-full transition-all duration-700`}></div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* 4. Центральное "Ядро" Протокола */}
      <div className="mt-20 relative flex items-center justify-center">
        <div className="absolute w-40 h-40 bg-orange-500/20 blur-[60px] rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_15px_#f97316]"></div>
      </div>
    </main>
  );
}