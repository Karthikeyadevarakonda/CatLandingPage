"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Features from "@/components/features";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import ScrollSection from "@/hooks/ScrollSection";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const SectionWrapper = ({ children }: { children: React.ReactNode }) =>
    isDesktop ? <ScrollSection>{children}</ScrollSection> : <>{children}</>;

  return (
    <main className="bg-black">
      <Navbar />

      <SectionWrapper>
        <Hero />
      </SectionWrapper>

      <SectionWrapper>
        <Stats />
      </SectionWrapper>

      <SectionWrapper>
        <Features />
      </SectionWrapper>

      <SectionWrapper>
        <CTA />
      </SectionWrapper>

      <Footer />
    </main>
  );
}
