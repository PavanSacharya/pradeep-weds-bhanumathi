"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function HostedBy() {
  const { lang } = useLanguage();
  const t = translations[lang].hostedBy;
  const fontCls = lang === "kn" ? "font-kannada" : "font-display";

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto max-w-md px-6 py-8 text-center"
    >
      <p className="text-[11px] uppercase tracking-[0.3em] text-brass mb-4">{t.eyebrow}</p>
      <div className="rounded-2xl border border-gold/25 bg-white/60 px-6 py-6 backdrop-blur-sm">
        <p className={`${fontCls} text-xl text-maroonDark`}>{t.names}</p>
        <p className="text-xs text-brass/80 mt-1">{t.place}</p>
        <p className="mt-3 text-sm text-maroonDark/80 leading-relaxed">{t.relation}</p>
      </div>
    </motion.section>
  );
}
