"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ===============================
   FULL CODE STRING
================================= */

const fullCode = `int sum = 0;
foreach(int num in arr){
   sum += num;
}
Console.WriteLine(sum);`;

export default function HeroRightAnimation() {
  /* ===============================
     3D MOUSE TILT
  =============================== */

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      x.set(e.clientX - innerWidth / 2);
      y.set(e.clientY - innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  /* ===============================
     ORBIT SYSTEM
  =============================== */

  const time = useRef(0);

  const orbit1X = useMotionValue(0);
  const orbit1Y = useMotionValue(0);

  const orbit2X = useMotionValue(0);
  const orbit2Y = useMotionValue(0);

  const orbit3X = useMotionValue(0);
  const orbit3Y = useMotionValue(0);

  const orbit4X = useMotionValue(0);
  const orbit4Y = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    time.current += delta * 0.0004;

    const radius1 = 170;
    const radius2 = 140;
    const radius3 = 200;
    const radius4 = 50;

    const angle1 = time.current;
    const angle2 = time.current + (Math.PI * 2) / 3;
    const angle3 = time.current + (Math.PI * 4) / 3;
    const angle4 = time.current + (Math.PI * 6) / 3;

    orbit1X.set(Math.cos(angle1) * radius1);
    orbit1Y.set(Math.sin(angle1) * radius1 * 0.6);

    orbit2X.set(Math.cos(angle2) * radius2);
    orbit2Y.set(Math.sin(angle2) * radius2 * 0.6);

    orbit3X.set(Math.cos(angle3) * radius3);
    orbit3Y.set(Math.sin(angle3) * radius3 * 0.6);

    orbit4X.set(Math.cos(angle4) * radius4);
    orbit4Y.set(Math.sin(angle4) * radius4 * 0.6);
  });
  /* ===============================
     REALISTIC IDE TYPING
  =============================== */

  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function type() {
      if (indexRef.current < fullCode.length) {
        const currentChar = fullCode[indexRef.current];
        setDisplayed((prev) => prev + currentChar);
        indexRef.current++;

        // Human-like typing delay
        let delay = 20 + Math.random() * 40;

        if (currentChar === "\n") delay = 800;
        if (currentChar === "{") delay = 900;

        timeoutRef.current = setTimeout(type, delay);
      } else {
        timeoutRef.current = setTimeout(() => {
          setDisplayed("");
          indexRef.current = 0;
          type();
        }, 5500);
      }
    }

    type();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  /* ===============================
     COMPONENT
  =============================== */

  return (
    <div
      className="relative w-full h-[550px] flex items-center justify-center 
                  bg-gradient-to-b from-black via-[#0b1120] to-black 
                  overflow-hidden perspective-[1400px]"
    >
      {/* Ambient Background Glow */}
      <div
        className="absolute w-[600px] h-[600px] bg-orange-500/10 
                    rounded-full blur-[120px]"
      />

      <motion.div
        style={{ rotateX, rotateY }}
        className="relative w-[420px] h-[420px] flex items-center justify-center"
      >
        {/* ===============================
          PROFESSIONAL IDE CARD
      =============================== */}
        <motion.div
          className="relative bg-gradient-to-b from-[#0f172a] to-[#0b1220]
                   rounded-2xl p-6 w-[400px] h-[270px]
                   border border-white/10
                   shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                   backdrop-blur-xl"
          animate={{ rotate: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* macOS Window Controls */}
          <div className="flex gap-2 mb-4">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          {/* Code Area */}
          <pre
            className="text-green-400 text-sm whitespace-pre-wrap 
                        leading-relaxed font-mono tracking-wide relative"
          >
            {displayed}
            <span
              className="inline-block w-[2px] h-[18px] 
                           bg-orange-500 ml-1 
                           animate-pulse rounded-sm"
            />
          </pre>
        </motion.div>

        {/* ===============================
          ORBIT BADGES
      =============================== */}

        <motion.div style={{ x: orbit1X, y: orbit1Y }} className="absolute">
          <ProfileBadge
            name="Karthikeya"
            job="CodeDale.tech"
            img={"/kar.png"}
          />
        </motion.div>

        <motion.div style={{ x: orbit2X, y: orbit2Y }} className="absolute">
          <ProfileBadge
            name="stayse"
            job="Placed at Infosys"
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpKlYIQ8XzwrIACoNnoR2Hcdwi62t76TiQlQ&s"
            }
          />
        </motion.div>

        <motion.div style={{ x: orbit3X, y: orbit3Y }} className="absolute">
          <ProfileBadge name="Gwen" job="Placed at Infosys" img={"/lr.png"} />
        </motion.div>

        <motion.div style={{ x: orbit4X, y: orbit4Y }} className="absolute">
          <ProfileBadge
            name="Anirudh"
            job="Full Stack Developer"
            img={"/ani.png"}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

function ProfileBadge({
  name,
  job,
  img,
}: {
  name: string;
  job: string;
  img: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="bg-white/5 backdrop-blur-md 
                 rounded-full px-4 py-2 flex items-center gap-3 
                 border border-white/10 
                 shadow-lg"
    >
      <img
        src={img}
        alt="student"
        className="w-9 h-9 rounded-full 
                   object-cover 
                   ring-2 ring-orange-500/60"
      />
      <div className="leading-tight">
        <p className="text-white text-sm font-medium">{name}</p>
        <p className="text-gray-400 text-xs">{job}</p>
      </div>
    </motion.div>
  );
}
