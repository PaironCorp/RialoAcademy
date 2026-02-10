"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const AcademyContext = createContext<any>(null);

export function AcademyProvider({ children }: { children: React.ReactNode }) {
  const [isFocused, setIsFocused] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  // Инициализация логов только на клиенте, чтобы избежать белого экрана (Hydration error)
  useEffect(() => {
    setLogs(["[SYSTEM]: Neural Link Established", "[CORE]: SVM Runtime Active"]);
  }, []);

  const addLog = (msg: string) => {
    const timestamp = new Date().toLocaleTimeString('en-GB', { hour12: false });
    setLogs(prev => [`[${timestamp}] ${msg}`, ...prev].slice(0, 5));
  };

  return (
    <AcademyContext.Provider value={{ isFocused, setIsFocused, logs, addLog }}>
      {children}
    </AcademyContext.Provider>
  );
}

export const useAcademy = () => {
  const context = useContext(AcademyContext);
  if (!context) throw new Error("useAcademy must be used within AcademyProvider");
  return context;
};