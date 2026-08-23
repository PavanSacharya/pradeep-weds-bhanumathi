"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="fixed right-4 top-4 z-50 flex items-center gap-1 rounded-full border border-gold/40 bg-white/80 px-3 py-1.5 text-xs font-medium text-maroonDark shadow-md backdrop-blur-sm transition-transform hover:scale-105 active:scale-95"
      aria-label="Toggle language"
    >
      <span className={lang === "en" ? "text-maroon" : "text-maroonDark/40"}>EN</span>
      <span className="text-brass/50">/</span>
      <span className={lang === "kn" ? "text-maroon" : "text-maroonDark/40"}>ಕ</span>
    </button>
  );
}
