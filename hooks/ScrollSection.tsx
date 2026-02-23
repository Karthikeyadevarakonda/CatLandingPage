"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.3, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={ref} className="h-[150vh] relative">
      <motion.div
        style={{ y, opacity, scale }}
        className="sticky top-0 h-screen w-full"
      >
        {children}
      </motion.div>
    </section>
  );
}
