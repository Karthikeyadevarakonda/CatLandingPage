"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function ScrollSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.3, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  // 🔹 MOBILE → Normal Scroll
  if (!isDesktop) {
    return <section className="w-full">{children}</section>;
  }

  // 🔹 DESKTOP → Cinematic Scroll
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
