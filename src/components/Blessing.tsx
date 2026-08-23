"use client";

import { motion } from "framer-motion";

export default function Blessing() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="px-6 py-14 text-center"
    >
      <p className="font-display text-2xl italic text-maroonDark max-w-sm mx-auto leading-relaxed text-balance">
        &ldquo;Two hearts, one journey — and it means the world to have you there with us.&rdquo;
      </p>
    </motion.section>
  );
}
