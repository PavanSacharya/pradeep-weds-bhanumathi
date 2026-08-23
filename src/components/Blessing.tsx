"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Blessing() {
  const { lang } = useLanguage();
  const t = translations[lang].blessing;
  const fontCls = lang === "kn" ? "font-kannada" : "font-display";

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="px-6 py-14 text-center"
    >
      <p className={`${fontCls} text-2xl italic text-maroonDark max-w-sm mx-auto leading-relaxed text-balance`}>
        &ldquo;{t.quote}&rdquo;
      </p>
    </motion.section>
  );
}
