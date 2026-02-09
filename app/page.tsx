"use client";

import React from 'react';
// Импортируем библиотеку для анимаций
import { motion } from 'framer-motion';
// Импортируем красивые иконки из Lucide
import { 
  Coins, Globe, Zap, Cog, ShieldAlert, Code2, Bot, Users 
} from 'lucide-react';

export default function RialoAtrium() {
  // Список классов теперь с компонентами иконок, а не эмодзи
  const classes = [
    { id: 1, title: "Экономика", icon: Coins, description: "Проблема двойной маржинализации" },
    { id: 2, title: "Rialo Edge", icon: Globe, description: "Прямой доступ к Web2 по HTTPS" },
    { id: 3, title: "Скорость", icon: Zap, description: "Блоки по 50мс и параллельное исполнение" },
    { id: 4, title: "Автоматизация", icon: Cog, description: "Смарт-контракты на автопилоте" },
    { id: 5, title: "Приватность", icon: ShieldAlert, description: "Конфиденциальные вычисления (REX)" },
    { id: 6, title: "Для Девів", icon: Code2, description: "Лёгкий переезд с Solana/Rust" },
    { id: 7, title: "ИИ Агенты", icon: Bot, description: "Инфраструктура для автономного AI" },
    { id: 8, title: "Сообщество", icon: Users, description: "Вступай в Rialo Raid Army" },
  ];

  // Настройки анимации для появления карточек по очереди
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Задержка между появлением каждой двери
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    // motion.main - позволяет анимировать весь контейнер
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden"
    >
       {/* Фоновый декоративный элемент - теплое свечение */}
       <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-orange-300 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
       <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-blue-300 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      {/* Шапка школы */}
      <div className="text-center mb-16 relative z-10">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight"
        >
          Атриум <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Rialo Academy</span>
        </motion.h1>
        <motion.p 
           initial={{ y: -20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.4 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          Добро пожаловать в цифровой двор будущего. Выбери портал, чтобы начать погружение в «Full-stack» блокчейн.
        </motion.p>
      </div>

      {/* Сетка дверей с анимацией */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl relative z-10"
      >
        {classes.map((cls) => (
          // motion.button - анимированная кнопка
          <motion.button 
            key={cls.id}
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5 }} // Эффект при наведении
            whileTap={{ scale: 0.98 }} // Эффект при клике
            className="group relative flex flex-col items-center text-left bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl hover:border-orange-300 transition-all duration-300"
          >
            {/* Иконка с градиентным фоном */}
            <div className="mb-4 p-4 bg-gradient-to-br from-orange-100 to-amber-50 rounded-2xl text-orange-500 group-hover:text-orange-600 group-hover:from-orange-200 group-hover:to-amber-100 transition-colors">
              <cls.icon size={32} strokeWidth={1.5} />
            </div>
            {/* Текст */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">
                {cls.title}
              </h3>
              <p className="text-sm text-slate-500 font-medium">
                {cls.description}
              </p>
            </div>
            
            {/* Светящаяся полоска внизу при наведении */}
            <div className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></div>
          </motion.button>
        ))}
      </motion.div>
    </motion.main>
  );
}