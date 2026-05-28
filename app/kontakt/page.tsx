import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ContactSection from '@/components/sections/ContactSection';
import BibleVerseSection from '@/components/sections/BibleVerseSection';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontaktiere Victory Baptist Church Stuttgart — wir freuen uns von dir zu hören.',
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-church-navy section-padding pt-40">
        <div className="container-base text-center">
          <AnimatedSection>
            <span className="section-label block mb-4 text-church-gold">Wir freuen uns von dir zu hören</span>
            <h1 className="text-white text-5xl md:text-6xl mb-6">Kontakt</h1>
            <p className="font-lora italic text-white/80 text-xl max-w-2xl mx-auto">
              Fragen, Gebetsanliegen oder ein einfaches Hallo — meld dich bei uns!
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection />
      <BibleVerseSection />
    </>
  );
}
