"use client";
import React, { createContext, useContext, useState } from 'react';

const AcademyContext = createContext<any>(null);

export const AcademyProvider = ({ children }: { children: React.ReactNode }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [logs, setLogs] = useState<string[]>(["[SYSTEM]: Neural Link Established", "[CORE]: SVM Runtime Active"]);

  const addLog = (msg: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [`[${timestamp}] ${msg}`, ...prev].slice(0, 5));
  };

  return (
    <AcademyContext.Provider value={{ isFocused, setIsFocused, logs, addLog }}>
      {children}
    </AcademyContext.Provider>
  );
};

export const useAcademy = () => useContext(AcademyContext);