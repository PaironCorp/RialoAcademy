"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Coins, TrendingDown, Layers, Calculator } from 'lucide-react';
import Link from 'next/link';

export default function EconomicsLesson() {
  const [cost, setCost] = useState(100);

  return (
    <main className="min-h-screen bg-[#FFFBF5] p-6 md:p-12 font-sans relative">
      {/* Кнопка назад */}
      <Link href="/">
        <motion.div whileHover={{ x: -5 }} className="flex items-center text-slate-500 hover:text-orange-600 cursor-pointer mb-8">
          <ArrowLeft className="mr-2" size={20} /> Назад во двор
        </motion.div>
      </Link>

      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-orange-100 relative overflow-hidden">
          
          {/* Декор: Оранжевый блик */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-50 -mr-16 -mt-16"></div>

          <div className="flex items-center mb-10">
            <div className="p-4 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl text-white mr-6 shadow-lg shadow-orange-200">
              <Coins size={36} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">Экономика Rialo</h1>
              <p className="text-orange-500 font-bold uppercase text-sm tracking-widest">Класс 01: Битва с налогами</p>
            </div>
          </div>

          <section className="space-y-6 text-slate-700 text-lg leading-relaxed">
            <p className="font-medium text-xl text-slate-800">
              «В обычном Web3 разработчик платит "невидимый налог" каждому посреднику.»
            </p>
            
            <p>
              Представь: ты создаешь DeFi-приложение. Тебе нужен блокчейн (газ), оракулы (данные) и боты (автоматизация). Каждый из них — монополист, который накидывает свою маржу. Это и есть <strong>двойная маржинализация</strong>.
            </p>

            {/* ИНТЕРАКТИВНЫЙ КАЛЬКУЛЯТОР */}
            <div className="my-12 p-8 bg-slate-900 rounded-[1.5rem] text-white shadow-inner">
              <h3 className="text-xl font-bold mb-6 flex items-center text-orange-400">
                <Calculator className="mr-3" /> Калькулятор Rialo-эффекта
              </h3>
              <div className="space-y-6">
                <label className="block">
                  <span className="text-slate-400 text-sm uppercase font-bold">Текущие затраты на middleware ($):</span>
                  <input 
                    type="range" min="10" max="1000" value={cost} 
                    onChange={(e) => setCost(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500 mt-4"
                  />
                  <div className="mt-2 font-mono text-2xl">${cost}</div>
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-slate-800">
                  <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                    <span className="text-xs uppercase text-red-400 font-bold">Старый Web3 (Middleware)</span>
                    <div className="text-2xl font-black text-red-500">${(cost * 0.9).toFixed(0)} <span className="text-sm font-normal text-slate-400">уходит посредникам</span></div>
                  </div>
                  <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                    <span className="text-xs uppercase text-green-400 font-bold">С Rialo (Вертикальная интеграция)</span>
                    <div className="text-2xl font-black text-green-500">${(cost * 0.1).toFixed(0)} <span className="text-sm font-normal text-slate-400">реальные затраты</span></div>
                  </div>
                </div>
              </div>
            </div>

            <p>
              Путем объединения оракулов и автоматизации прямо в ядро сети, Rialo устраняет <strong>«трагедию общих ресурсов»</strong>. Это позволяет снизить расходы на инфраструктуру до <strong>90%</strong>.
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
}