"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AcademyContext = createContext<any>(null);

export function AcademyProvider({ children }: { children: React.ReactNode }) {
  const [isFocused, setIsFocused] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    setLogs(["[SYSTEM]: Neural Link Established", "[CORE]: SVM Runtime Active"]);
  }, []);

  // Используем useCallback, чтобы функция не создавалась заново при каждом рендере
  const addLog = useCallback((msg: string) => {
    setLogs(prev => {
      const newLogs = [`[${new Date().toLocaleTimeString('en-GB', { hour12: false })}] ${msg}`, ...prev];
      return newLogs.slice(0, 3); // Строго только 3 последние записи
    });
  }, []);

  return (
    <AcademyContext.Provider value={{ isFocused, setIsFocused, logs, addLog }}>
      {children}
    </AcademyContext.Provider>
  );
}

export const useAcademy = () => useContext(AcademyContext);