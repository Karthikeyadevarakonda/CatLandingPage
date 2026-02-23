import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Stats from "@/components/stats";

import Features from "@/components/features";

import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Stats />
      {/* <Courses /> */}
      <Features />
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </main>
  );
}
