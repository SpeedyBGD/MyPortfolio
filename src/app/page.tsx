import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import CareerSection from '@/components/CareerSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CareerSection />
      <ContactSection />
    </div>
  );
}
