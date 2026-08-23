"use client";

import { motion } from "framer-motion";

type Host = {
  names: string;
  place: string;
  relation: string;
};

const groomHost: Host = {
  names: "Smt. Vinuta & Sri Prashant J. Acharya",
  place: "Mukkugudde, Shivamara",
  relation: "invite you to the wedding of their son, Pradeep Acharya",
};

// Bride-side host will be added here once details are shared.
// const brideHost: Host = { ... };

export default function HostedBy() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto max-w-md px-6 py-8 text-center"
    >
      <p className="text-[11px] uppercase tracking-[0.3em] text-brass mb-4">With Great Joy</p>
      <div className="rounded-2xl border border-gold/25 bg-white/60 px-6 py-6 backdrop-blur-sm">
        <p className="font-display text-xl text-maroonDark">{groomHost.names}</p>
        <p className="text-xs text-brass/80 mt-1">{groomHost.place}</p>
        <p className="mt-3 text-sm text-maroonDark/80 leading-relaxed">{groomHost.relation}</p>
      </div>
    </motion.section>
  );
}
