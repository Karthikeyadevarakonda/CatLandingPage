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
    <section ref={ref} className="relative lg:h-[150vh]">
      <motion.div
        style={{ y, opacity, scale }}
        className="
          w-full
          lg:sticky lg:top-0 lg:h-screen
        "
      >
        {children}
      </motion.div>
    </section>
  );
}
