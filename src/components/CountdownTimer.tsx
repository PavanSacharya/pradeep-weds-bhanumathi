"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Wedding muhurtham: 31 Aug 2026, 11:00 AM IST
const TARGET_DATE = new Date("2026-08-31T11:00:00+05:30").getTime();

function getTimeLeft() {
  const diff = Math.max(TARGET_DATE - Date.now(), 0);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time?.days },
    { label: "Hours", value: time?.hours },
    { label: "Mins", value: time?.minutes },
    { label: "Secs", value: time?.seconds },
  ];

  return (
    <section className="px-6 py-10 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-brass mb-5">Counting down to the muhurtham</p>
      <div className="mx-auto flex max-w-sm justify-center gap-3 sm:gap-5">
        {units.map((u) => (
          <motion.div
            key={u.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex h-16 w-16 flex-col items-center justify-center rounded-full border border-gold/60 bg-maroon text-ivory sm:h-20 sm:w-20"
          >
            <span className="font-display text-xl sm:text-2xl leading-none">
              {u.value ?? "--"}
            </span>
            <span className="mt-1 text-[9px] uppercase tracking-wider text-goldLight">
              {u.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
