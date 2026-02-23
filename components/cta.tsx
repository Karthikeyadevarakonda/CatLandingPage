'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-orange-600 to-orange-500 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: -100, y: -100, opacity: 0 }}
            whileInView={{ x: 100 + i * 50, y: 50 + i * 30, opacity: 0.5 }}
            transition={{ delay: i * 0.2, duration: 2 }}
            className="absolute w-40 h-40 bg-white rounded-full blur-3xl"
            style={{
              left: `${i * 20}%`,
              top: `${i * 15}%`,
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30"
        >
          <Sparkles size={18} className="text-white" />
          <span className="text-white font-semibold">Limited Time Offer</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Ready to Transform Your Career?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-white/90 max-w-2xl mx-auto mb-10"
        >
          Join thousands of successful students who have launched their tech careers with CAT Computer Point. Enroll today and get ₹5,000 off!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(249, 115, 22, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-orange-600 rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-shadow group"
          >
            Enroll Now
            <ArrowRight
              size={20}
              className="group-hover:translate-x-2 transition-transform"
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
          >
            Schedule Call
          </motion.button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-white/80 text-sm"
        >
          {['✓ 100% Money Back Guarantee', '✓ 24/7 Student Support', '✓ Job Placement Guarantee'].map(
            (badge, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                {badge}
              </motion.span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
