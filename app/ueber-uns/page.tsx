import type { Metadata } from 'next';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import TeamSection from '@/components/sections/TeamSection';
import BibleVerseSection from '@/components/sections/BibleVerseSection';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Lerne Victory Baptist Church Stuttgart kennen — unsere Geschichte, unsere Werte und die Menschen hinter der Gemeinde.',
};

const beliefs = [
  {
    title: 'Die Heilige Schrift',
    text:  'Wir glauben, dass die Bibel das inspirierte, unfehlbare Wort Gottes ist — die einzige und vollständige Autorität für Glauben und Leben.',
  },
  {
    title: 'Der dreieinige Gott',
    text:  'Wir glauben an einen Gott in drei Personen: Vater, Sohn und Heiliger Geist — ewig, allwissend und allgegenwärtig.',
  },
  {
    title: 'Die Erlösung durch Christus',
    text:  'Wir glauben, dass Jesus Christus durch seinen Tod und seine Auferstehung die Sünde der Welt überwunden hat. Allein durch den Glauben an ihn werden wir gerettet.',
  },
  {
    title: 'Die Gemeinschaft der Gläubigen',
    text:  'Wir glauben an die lokale Kirchengemeinde als Ort der Anbetung, der Gemeinschaft, der Seelsorge und der Verkündigung des Evangeliums.',
  },
  {
    title: 'Der Missionsauftrag',
    text:  'Wir sind berufen, das Evangelium in alle Welt zu tragen — beginnend in unserer Nachbarschaft in Stuttgart.',
  },
  {
    title: 'Die Hoffnung der Wiederkunft',
    text:  'Wir leben in der gesegneten Hoffnung auf die Wiederkunft Jesu Christi und das ewige Leben bei Gott.',
  },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-church-navy section-padding pt-40">
        <div className="container-base text-center">
          <AnimatedSection>
            <span className="section-label block mb-4 text-church-gold">Unsere Geschichte & Werte</span>
            <h1 className="text-white text-5xl md:text-6xl mb-6">Über uns</h1>
            <p className="font-lora italic text-white/80 text-xl max-w-2xl mx-auto text-balance">
              Eine englischsprachige Gemeinde mit Herz — mitten in Stuttgart.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Who we are */}
      <SectionWrapper bg="cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <AnimatedSection>
            <span className="section-label block mb-3">Unsere Geschichte</span>
            <h2 className="mb-6">Wer wir sind</h2>
            <div className="space-y-5 text-church-gray font-sans text-base md:text-lg leading-relaxed">
              <p>
                Victory Baptist Church wurde gegründet, um der internationalen Gemeinschaft
                in Stuttgart einen Ort der Anbetung, der Gemeinschaft und des Wachstums im
                Glauben zu bieten. Als englischsprachige, unabhängige Baptistengemeinde
                richten wir uns an alle, die Gott in ihrer Muttersprache begegnen möchten.
              </p>
              <p>
                Unsere Gemeinde setzt sich aus Menschen aus aller Welt zusammen — Expats,
                Studenten, Familien und Stuttgarter, die eine englische Gemeinde suchen.
                Bei uns treffen verschiedene Kulturen aufeinander und sind vereint durch
                einen gemeinsamen Glauben.
              </p>
              <p>
                Wir sind unabhängig baptistisch — das bedeutet: keine Hierarchien, kein
                Bischofssystem. Die Bibel allein ist unsere Autorität, und die Gemeinde
                trägt gemeinsam Verantwortung.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <blockquote className="bible-quote text-lg md:text-xl leading-relaxed mb-4" cite="1. Petrus 2:9">
              Ihr aber seid ein auserwähltes Geschlecht, eine königliche Priesterschaft,
              ein heiliges Volk, ein Volk zum Eigentum, damit ihr die Tugenden dessen
              verkündigt, der euch aus der Finsternis zu seinem wunderbaren Licht berufen hat.
            </blockquote>
            <footer className="font-sans text-sm uppercase tracking-widest text-church-gold mt-3">
              <cite>1. Petrus 2:9</cite>
            </footer>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* What we believe */}
      <SectionWrapper bg="white">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label block mb-3">Unser Fundament</span>
          <h2 className="text-balance">Was wir glauben</h2>
          <p className="font-sans text-church-gray mt-4 max-w-xl mx-auto text-base md:text-lg">
            Unsere Glaubensgrundsätze — klar, biblisch, zeitlos.
          </p>
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beliefs.map((belief) => (
            <AnimatedItem key={belief.title}>
              <div className="card-base p-7 h-full">
                <div className="w-8 h-1 bg-church-gold rounded-full mb-5" aria-hidden="true" />
                <h3 className="text-base mb-3 leading-snug">{belief.title}</h3>
                <p className="font-sans text-church-gray text-sm leading-relaxed">{belief.text}</p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </SectionWrapper>

      {/* Team */}
      <TeamSection />

      {/* Bible verse */}
      <BibleVerseSection />

      {/* CTA */}
      <SectionWrapper bg="cream">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <span className="section-label block mb-3">Komm vorbei</span>
          <h2 className="mb-6 text-balance">Du bist eingeladen</h2>
          <p className="font-sans text-church-gray text-base md:text-lg mb-8">
            Lerne uns persönlich kennen! Komm einfach zu einem unserer Gottesdienste —
            kein Anmelden nötig, kein Dresscode. Nur Herz und Offenheit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/gottesdienste" variant="primary" size="md">
              Gottesdienste ansehen
            </Button>
            <Button as="link" href="/kontakt" variant="outline" size="md">
              Kontakt aufnehmen
            </Button>
          </div>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}
