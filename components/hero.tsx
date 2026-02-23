"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Zap } from "lucide-react";
import HeroRightAnimation from "./HeroRightAnimation";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen pt-24 bg-black overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] 
                    [background-size:32px_32px] opacity-10"
      />

      {/* Ambient Glows */}
      <div
        className="absolute top-20 right-20 w-[400px] h-[400px] 
                    bg-orange-500/10 rounded-full blur-[120px]"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] 
                    bg-orange-600/5 rounded-full blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-96px)]"
        >
          {/* LEFT CONTENT */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 
                          bg-orange-500/10 px-4 py-2 
                          rounded-full border border-orange-500/30 
                          backdrop-blur-md"
            >
              <Zap size={16} className="text-orange-500" />
              <span className="text-sm font-medium text-orange-400 tracking-wide">
                Job-Ready Training Programs
              </span>
            </div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl 
                       font-extrabold leading-[1.05] 
                       text-white"
            >
              Build Your{" "}
              <span
                className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 
                             bg-clip-text text-transparent"
              >
                Career in Tech
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-400 
                       leading-relaxed max-w-xl"
            >
              Learn from industry experts, build real-world projects, and
              transform your skills into high-paying tech careers.
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-12 pt-6">
              {[
                { label: "Students Trained", value: "5000+" },
                { label: "Success Rate", value: "98%" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-4xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5 pt-8"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 60px rgba(249,115,22,0.35)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 
                         bg-gradient-to-r from-orange-500 to-orange-600
                         rounded-xl font-semibold text-lg text-white 
                         flex items-center justify-center gap-2
                         transition-all duration-300"
              >
                Start Learning <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 
                         rounded-xl text-lg font-semibold 
                         border border-white/15 
                         bg-white/5 text-white 
                         backdrop-blur-md
                         hover:bg-white/10 transition-all"
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT ANIMATION */}
          <div className="relative hidden lg:flex justify-center items-center">
            <HeroRightAnimation />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
