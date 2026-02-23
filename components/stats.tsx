"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, Trophy, Zap } from "lucide-react";

export default function StatsFlowPremium() {
  const baseStats = [
    { icon: Users, label: "Students Trained", target: 5000, suffix: "+" },
    { icon: Trophy, label: "Years Experience", target: 31, suffix: "+" },
    { icon: Zap, label: "Success Rate", target: 98, suffix: "%" },
  ];

  // Dynamic Counter Animation
  const [counts, setCounts] = useState(baseStats.map(() => 0));

  useEffect(() => {
    baseStats.forEach((stat, index) => {
      let start = 0;
      const duration = 2000;
      const startTime = Date.now();

      const animate = () => {
        const progress = Math.min((Date.now() - startTime) / duration, 1);
        const value = Math.floor(progress * stat.target);

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = value;
          return updated;
        });

        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });
  }, []);

  const stats = baseStats.map((stat, i) => ({
    ...stat,
    value: counts[i].toLocaleString() + stat.suffix,
  }));

  const duplicatedStats = [...stats, ...stats];

  // Vertical Wave Motion
  const wave = useMotionValue(0);
  const time = useRef(0);

  useAnimationFrame((_, delta) => {
    time.current += delta * 0.001;
    wave.set(Math.sin(time.current * 1.5) * 10);
  });

  return (
    <section className="relative py-28 bg-black overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-4">
          Our Impact in Motion
        </h2>
        <p className="text-slate-500 text-lg">
          Real numbers. Real transformation.
        </p>
      </div>

      {/* Glass Strip Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-xl bg-white/[0.03] border-y border-white/10" />

        {/* Edge Fade */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          style={{ y: wave }}
          className="flex gap-28 py-14 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 28,
            ease: "linear",
          }}
        >
          {duplicatedStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                className="flex items-center gap-6 group transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {/* Icon */}
                <Icon
                  size={42}
                  className="text-orange-500/80 group-hover:text-orange-500 transition-colors duration-300"
                />

                <div>
                  {/* Animated Number */}
                  <motion.div
                    className="text-6xl font-extrabold tracking-tight text-slate-200 relative"
                    animate={{
                      textShadow: [
                        "0px 0px 0px rgba(249,115,22,0.0)",
                        "0px 0px 20px rgba(249,115,22,0.4)",
                        "0px 0px 0px rgba(249,115,22,0.0)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {stat.value}
                  </motion.div>

                  {/* Label */}
                  <div className="text-slate-500 text-lg group-hover:text-slate-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>

                {/* Subtle Motion Blur Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-orange-500/5 rounded-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
