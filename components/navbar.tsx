"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = ["Courses", "About", "Contact", "Login"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * 0.3);
    y.set(offsetY * 0.3);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 w-full z-50 flex justify-center px-4"
    >
      <div
        className={`relative w-full max-w-6xl 
        transition-all duration-500 
        ${
          scrolled
            ? "bg-black/10 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        } 
        rounded-2xl px-8`}
      >
        {/* Subtle Glow */}
        {scrolled && (
          <div
            className="absolute inset-0 rounded-2xl 
                          bg-gradient-to-r from-orange-500/10 
                          via-transparent to-orange-500/10 
                          blur-xl opacity-40 pointer-events-none"
          />
        )}

        <div className="relative flex justify-between items-center h-16">
          {/* LOGO */}
          <a href="/" className="flex items-center gap-3">
            <img
              src={"/catlogo.png"}
              alt="CAT Computer Point"
              className="w-12 h-12 object-cover rounded-lg"
            />
            <span className="text-white font-semibold tracking-wide">
              CAT Computer Point
            </span>
          </a>

          {/* CENTER MENU */}
          <div className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-300 hover:text-white 
                           transition-colors duration-300 group"
              >
                {item}
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-0 
                             bg-orange-500 transition-all duration-300 
                             group-hover:w-full"
                />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <motion.button
              style={{ x: springX, y: springY }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-2.5 
                         bg-white text-black 
                         rounded-full font-medium 
                         transition-all duration-300"
            >
              Enroll Now
            </motion.button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-6 space-y-4"
            >
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-orange-500"
                >
                  {item}
                </a>
              ))}
              <button
                className="w-full py-3 rounded-full 
                           bg-white text-black font-medium"
              >
                Enroll Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
