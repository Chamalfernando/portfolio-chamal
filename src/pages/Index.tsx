import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import LatestBlogs from '@/components/LatestBlogs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import FloatingFrap from '@/components/FloatingFrap';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Hero />
      <Skills />
      <Education />
      <Projects />
      <LatestBlogs />
      <Contact />
      <Footer />
      <ScrollToTop />
      <FloatingFrap />
    </main>
  );
};

export default Index;
