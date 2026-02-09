"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Coins, Globe, Zap, Cog, ShieldAlert, Code2, Bot, Users 
} from 'lucide-react';

export default function RialoAtrium() {
  const classes = [
    { id: 1, title: "Экономика", icon: Coins, desc: "Двойная маржинализация", path: "/economics" },
    { id: 2, title: "Rialo Edge", icon: Globe, desc: "Web2 Connection", path: "#" },
    { id: 3, title: "Скорость", icon: Zap, desc: "50ms Blocks", path: "#" },
    { id: 4, title: "Автоматизация", icon: Cog, desc: "Native Workflows", path: "#" },
    { id: 5, title: "Приватность", icon: ShieldAlert, desc: "REX Privacy", path: "#" },
    { id: 6, title: "Девелоперам", icon: Code2, desc: "SVM & Rust", path: "#" },
    { id: 7, title: "AI Агенты", icon: Bot, desc: "AI Infrastructure", path: "#" },
    { id: 8, title: "Сообщество", icon: Users, desc: "Join the Army", path: "#" },
  ];

  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">
          Атриум <span className="text-orange-500">Rialo Academy</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">
          Выбери портал, чтобы начать обучение архитектуре реального мира.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {classes.map((cls) => (
          <Link href={cls.path} key={cls.id}>
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-xl flex flex-col items-center text-center cursor-pointer hover:border-orange-400 transition-all h-full"
            >
              <div className="mb-4 p-4 bg-orange-50 rounded-2xl text-orange-500">
                <cls.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">{cls.title}</h3>
              <p className="text-xs text-slate-400 mt-2 uppercase tracking-tighter font-bold">{cls.desc}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </main>
  );
}