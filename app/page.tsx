"use client"; // Добавляем эту строку для интерактивности в будущем

import React from 'react';

export default function RialoAtrium() {
  const classes = [
    { id: 1, title: "Экономика", icon: "💰" },
    { id: 2, title: "Rialo Edge", icon: "🌐" },
    { id: 3, title: "Скорость", icon: "⚡" },
    { id: 4, title: "Автоматизация", icon: "⚙️" },
    { id: 5, title: "Приватность", icon: "🛡️" },
    { id: 6, title: "Для Разработчиков", icon: "💻" },
    { id: 7, title: "ИИ Агенты", icon: "🤖" },
    { id: 8, title: "Сообщество", icon: "🤝" },
  ];

  return (
    <main className="min-h-screen bg-[#FFFBF5] flex flex-col items-center justify-center p-8 font-sans">
      {/* Шапка школы */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Атриум <span className="text-orange-500">Rialo Academy</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Добро пожаловать во двор будущего. Выбери одну из 8 дверей, чтобы изучить протокол Rialo.
        </p>
      </div>

      {/* Сетка дверей */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl">
        {classes.map((cls) => (
          <button 
            key={cls.id}
            className="group flex flex-col items-center transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Арочная дверь */}
            <div className="w-32 h-44 bg-white rounded-t-full border-b-4 border-slate-200 shadow-xl flex items-center justify-center text-4xl group-hover:shadow-orange-200 group-hover:border-orange-500 transition-all border-x-2 border-t-2">
              <span className="group-hover:scale-125 transition-transform duration-300">
                {cls.icon}
              </span>
            </div>
            {/* Название под дверью */}
            <span className="mt-4 font-bold text-slate-700 group-hover:text-orange-600 tracking-wide uppercase text-sm">
              {cls.title}
            </span>
          </button>
        ))}
      </div>

      {/* Центральный свет (Ядро) */}
      <div className="mt-20 relative">
        <div className="absolute inset-0 bg-orange-400 blur-3xl opacity-20 rounded-full animate-pulse"></div>
        <div className="w-4 h-4 bg-orange-500 rounded-full relative z-10"></div>
      </div>
    </main>
  );
}