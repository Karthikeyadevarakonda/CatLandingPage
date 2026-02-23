"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const footerLinks = [
    {
      title: "Courses",
      links: ["Full Stack Dev", "Python", "Networking", "Advanced"],
    },
    { title: "Company", links: ["About Us", "Blog", "Careers", "Contact"] },
    {
      title: "Resources",
      links: ["Placement Stats", "Testimonials", "FAQ", "Support"],
    },
  ];

  return (
    <footer className=" flex items-center bg-black text-gray-300 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 items-start"
        >
          {/* Brand section */}

          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/catlogo.png"
                alt="CAT Computer Point"
                className="w-12 h-12 object-cover rounded-xl"
              />

              <div>
                <div className="font-semibold text-white leading-none tracking-tight">
                  CAT
                </div>
                <div className="text-xs text-orange-500 font-medium">
                  Computer Point
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Transforming careers through premium tech education and placement
              support.
            </p>

            <div className="space-y-3">{/* contact items unchanged */}</div>
          </motion.div>
          {/* Links sections */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col"
            >
              <h4 className="text-white font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent origin-left"
        />

        {/* Bottom section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="py-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <motion.p variants={itemVariants} className="text-sm text-gray-400">
            © 2026 CAT Computer Point. All rights reserved.
          </motion.p>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex gap-4">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-white/10 text-orange-500 hover:bg-orange-500 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Legal links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 text-sm text-gray-400"
          >
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
