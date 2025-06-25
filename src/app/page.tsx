import Navbar from '@/app/Components/Navbar';
import Hero from '@/app/Components/Hero';
import Projects from '@/app/Components/Projects';
import Experience from '@/app/Components/Experience';
import Footer from '@/app/Components/Footer';
import Ach from '@/app/Components/Ach';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Ach />
      <Footer />
    </main>
  );
}
