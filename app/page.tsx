import HeroSection     from '@/components/sections/HeroSection';
import AboutSection    from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import EventsSection   from '@/components/sections/EventsSection';
import BibleVerseSection from '@/components/sections/BibleVerseSection';
import SermonsSection  from '@/components/sections/SermonsSection';
import TeamSection     from '@/components/sections/TeamSection';
import ContactSection  from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <EventsSection />
      <BibleVerseSection />
      <SermonsSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
