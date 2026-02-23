"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, Briefcase, Zap } from "lucide-react";

export default function FeaturesGridPlus() {
  const features = [
    {
      icon: Zap,
      title: "Practical Training",
      description:
        "Hands-on projects and real-world assignments to build practical expertise and industry-ready skills",
      color: "text-blue-400",
    },
    {
      icon: Users,
      title: "Experienced Mentors",
      description:
        "Learn from industry professionals with years of real-world experience and proven track records",
      color: "text-orange-400",
    },
    {
      icon: Briefcase,
      title: "Placement Assistance",
      description:
        "Dedicated career support team helping you land interviews and secure your dream job",
      color: "text-green-400",
    },
    {
      icon: CheckCircle2,
      title: "Modern Labs",
      description:
        "State-of-the-art facilities and up-to-date technology stack to learn latest tools and frameworks",
      color: "text-purple-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className=" flex items-center relative py-20 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Typing animation header */}
        <motion.h2
          className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Everything You Need to Crack{" "}
          <span className="text-white">Tech Interviews</span>
        </motion.h2>

        {/* Grid layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* + grid divider */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            {/* Vertical dotted line */}
            <motion.div
              className="w-[2px] h-full opacity-30"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, #60a5fa 0, #60a5fa 4px, transparent 4px, transparent 8px)",
              }}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />

            {/* Horizontal dotted line */}
            <motion.div
              className="absolute w-full h-[2px] opacity-30"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, #f97316 0, #f97316 4px, transparent 4px, transparent 8px)",
              }}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>

          {/* Features */}
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Icon with subtle animation */}
                <motion.div
                  className={`mb-4 ${feature.color} w-10 h-10`}
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  <Icon size={32} />
                </motion.div>

                {/* Feature title */}
                <motion.h3
                  className="text-2xl font-semibold mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {feature.title}
                </motion.h3>

                {/* Feature description */}
                <motion.p
                  className="text-gray-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
