import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Programs from "@/components/Programs";
import WhyJoin from "@/components/WhyJoin";
import Activities from "@/components/Activities";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Programs />
      <WhyJoin />
      <Activities />
      <CTA />
      <Footer />
    </main>
  );
}
