"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

type Props = {
  id: string;
  eventKey: "wedding" | "reception";
  mapHref: string;
};

export default function EventCard({ id, eventKey, mapHref }: Props) {
  const { lang } = useLanguage();
  const t = translations[lang][eventKey];
  const fontCls = lang === "kn" ? "font-kannada" : "font-display";

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto max-w-md px-6 py-6"
    >
      <div className="overflow-hidden rounded-3xl bg-white/70 shadow-xl shadow-maroon/5 backdrop-blur-sm">
        <div className="bg-gradient-to-br from-maroon to-maroonDark px-6 py-5 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-goldLight/90 mb-1">{t.eyebrow}</p>
          <h2 className={`${fontCls} text-2xl text-ivory`}>{t.title}</h2>
        </div>

        <div className="px-6 py-6 text-center">
          <p className={`${fontCls} text-3xl text-maroonDark`}>{t.day}</p>
          <p className="text-sm text-brass mt-0.5">{t.date}</p>
          <p className="mt-2 inline-block rounded-full bg-blush px-4 py-1 text-sm font-medium text-maroonDark">
            {t.time}
          </p>

          <div className="mt-6 rounded-2xl border border-gold/25 bg-ivory/80 p-4 text-left">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-maroon text-ivory">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-7-6.5-7-11.5A7 7 0 0 1 19 9.5C19 14.5 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-maroonDark">{t.venueName}</p>
                <p className="text-xs text-brass/80 mt-0.5">{t.venueAddress}</p>
              </div>
            </div>
            <a
              href={mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-maroon underline decoration-gold underline-offset-4"
            >
              {t.directions}
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
