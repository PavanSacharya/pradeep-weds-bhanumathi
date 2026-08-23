"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="px-6 pb-16 pt-10 text-center">
      <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent mb-6" />
      <p className="text-xs text-brass/70 tracking-wide">{t.note}</p>
    </footer>
  );
}
