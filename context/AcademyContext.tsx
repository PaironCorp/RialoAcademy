"use client";
import React, { createContext, useContext, useState } from 'react';

const AcademyContext = createContext<any>(null);

export const AcademyProvider = ({ children }: { children: React.ReactNode }) => {
  const [isFocused, setIsFocused] = useState(false); // Для приближения аватара
  const [agentSpeech, setAgentSpeech] = useState("");

  return (
    <AcademyContext.Provider value={{ isFocused, setIsFocused, agentSpeech, setAgentSpeech }}>
      {children}
    </AcademyContext.Provider>
  );
};

export const useAcademy = () => useContext(AcademyContext);