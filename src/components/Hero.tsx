"use client";

import { motion } from "framer-motion";

const petals = Array.from({ length: 12 });

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-6 py-16 text-center">
      {/* soft gradient blobs */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blush/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-goldLight/30 blur-3xl" />

      {/* floating petals */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {petals.map((_, i) => (
          <span
            key={i}
            className="absolute top-0 block h-2 w-2 rounded-full bg-blushDark/60 animate-fall"
            style={{
              left: `${(i * 8.3) % 100}%`,
              animationDuration: `${9 + (i % 5) * 2}s`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/60 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-brass backdrop-blur-sm"
      >
        Save the Date · 31.08.2026
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        className="relative"
      >
        <h1 className="font-display text-balance text-5xl sm:text-7xl leading-[1.05] text-maroonDark">
          Pradeep
        </h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto my-4 h-px w-24 origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
        />
        <span className="font-display italic text-lg text-brass">&amp;</span>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto my-4 h-px w-24 origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
        />
        <h1 className="font-display text-balance text-5xl sm:text-7xl leading-[1.05] text-maroonDark">
          Bhanumathi
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        className="mt-8 max-w-xs text-sm text-maroonDark/70 leading-relaxed"
      >
        Together with their families, we're tying the knot — and we'd love for you to be there.
      </motion.p>

      <motion.a
        href="#details"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-maroon px-7 py-3 text-sm font-medium text-ivory shadow-lg shadow-maroon/20 transition-transform hover:scale-105 active:scale-95"
      >
        See the Details
      </motion.a>
    </section>
  );
}
