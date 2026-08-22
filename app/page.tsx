import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyJoin from '@/components/WhyJoin';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className='min-h-screen bg-white text-gray-900 font-sans'>
      <Navbar />
      <Hero />
      <WhyJoin />
      <CTA />
      <Footer />
    </main>
  );
}
