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
    <footer className="bg-black text-gray-300 relative overflow-hidden">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-16"
        >
          {/* Brand section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <div className="font-bold text-white leading-none">CAT</div>
                <div className="text-xs text-orange-500 font-semibold">
                  Computer Point
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Transforming careers through premium tech education and placement
              support.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <motion.a
                href="tel:+919876543210"
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={16} className="text-orange-500" />
                <span className="text-sm">+91 98765 43210</span>
              </motion.a>
              <motion.a
                href="mailto:info@catcomputerpoint.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={16} className="text-orange-500" />
                <span className="text-sm">info@catcomputerpoint.com</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <MapPin
                  size={16}
                  className="text-orange-500 mt-1 flex-shrink-0"
                />
                <span className="text-sm">Tech Plaza, Central City, India</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Links sections */}
          {footerLinks.map((section, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <h4 className="text-white font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5, color: "#ffffff" }}
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
