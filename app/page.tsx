"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Coins, Globe, Zap, Cog, ShieldAlert, Code2, Bot, Users } from 'lucide-react';

export default function RialoAtrium() {
  const classes = [
    { id: 1, title: "Экономика", icon: Coins, description: "Проблема двойной маржинализации", path: "/economics" },
    { id: 2, title: "Rialo Edge", icon: Globe, description: "Прямой доступ к Web2", path: "#" },
    { id: 3, title: "Скорость", icon: Zap, description: "Блоки по 50мс", path: "#" },
    { id: 4, title: "Автоматизация", icon: Cog, description: "Смарт-контракты 2.0", path: "#" },
    { id: 5, title: "Приватность", icon: ShieldAlert, description: "REX вычисления", path: "#" },
    { id: 6, title: "Для Девов", icon: Code2, description: "Solana VM & Rust", path: "#" },
    { id: 7, title: "ИИ Агенты", icon: Bot, description: "Инфраструктура AI", path: "#" },
    { id: 8, title: "Сообщество", icon: Users, description: "Rialo Raid Army", path: "#" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center py-20 px-4 bg-[#FFFBF5]">
      {/* Заголовок */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-6xl font-black text-slate-900 mb-6 tracking-tight">
          Атриум <span className="text-orange-500">Rialo Academy</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Добро пожаловать в цифровой двор будущего. Выбери портал, чтобы начать погружение.
        </p>
      </motion.div>

      {/* Сетка - теперь она будет 4 в ряд на компе и 2 на телефоне */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl w-full">
        {classes.map((cls) => (
          <Link href={cls.path} key={cls.id}>
            <motion.div 
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card p-8 rounded-[2.5rem] flex flex-col items-center text-center shadow-sm hover:shadow-2xl hover:shadow-orange-200 transition-all cursor-pointer border-b-4 border-orange-100"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                <cls.icon size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{cls.title}</h3>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">{cls.description}</p>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Ядро внизу */}
      <div className="mt-20 w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
    </main>
  );
}