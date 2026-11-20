import { useState, useEffect } from 'react';
import { Scene3D } from './components/3d/Scene3D';
import { CinematicIntro } from './components/CinematicIntro';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { TechEcosystem } from './components/TechEcosystem';
import { FounderSection } from './components/FounderSection';
import { AchievementsSection } from './components/AchievementsSection';
import { CreativeProcess } from './components/CreativeProcess';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [introCompleted, setIntroCompleted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [servicePreset, setServicePreset] = useState<string | undefined>(undefined);

  // Active section observer on scroll matching exact nav order:
  // HOME | ABOUT | SERVICES | OUR WORK | FOUNDER | CONTACT
  useEffect(() => {
    const sectionMapping = [
      { id: 'contact', navId: 'contact' },
      { id: 'process', navId: 'founder' },
      { id: 'achievements', navId: 'founder' },
      { id: 'founder', navId: 'founder' },
      { id: 'tech-ecosystem', navId: 'our-work' },
      { id: 'our-work', navId: 'our-work' },
      { id: 'services', navId: 'services' },
      { id: 'about', navId: 'about' },
      { id: 'home', navId: 'home' },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 240;

      for (const section of sectionMapping) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section.navId);
            return;
          }
        }
      }
      setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full max-w-full min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-[#FF172F] selection:text-white overflow-x-hidden font-sans">
      {/* 1. Cinematic Opening Intro Animation */}
      {!introCompleted && (
        <CinematicIntro onComplete={() => setIntroCompleted(true)} />
      )}

      {/* 2. Persistent Layered 3D Environment (Three.js / React Three Fiber) */}
      <Scene3D />

      {/* 3. Refined Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* 4. Main Content Sections in exact particulars */}
      <main className="relative z-10 flex flex-col w-full max-w-full overflow-x-hidden min-w-0">
        {/* 1. HOME */}
        <HeroSection />

        {/* 2. ABOUT */}
        <AboutSection />

        {/* 3. SERVICES */}
        <ServicesSection onSelectService={(s) => setServicePreset(s)} />

        {/* 4. OUR WORK (Featured Projects & Supporting Tech Ecosystem) */}
        <FeaturedProjects />
        <TechEcosystem />

        {/* 5. FOUNDER (The Human Behind The Technology, Achievements & Creative Process) */}
        <FounderSection />
        <AchievementsSection />
        <CreativeProcess />

        {/* 6. CONTACT */}
        <ContactSection selectedServicePreset={servicePreset} />
      </main>

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}

export default App;
