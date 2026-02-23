import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Features from "@/components/features";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import ScrollSection from "@/hooks/ScrollSection";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />

      <ScrollSection>
        <Hero />
      </ScrollSection>

      <ScrollSection>
        <Stats />
      </ScrollSection>

      <ScrollSection>
        <Features />
      </ScrollSection>

      <ScrollSection>
        <CTA />
      </ScrollSection>

      <Footer />
    </main>
  );
}
