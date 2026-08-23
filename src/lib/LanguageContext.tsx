"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "kn";

type LanguageContextType = {
  lang: Lang;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggleLang = () => setLang((prev) => (prev === "en" ? "kn" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
