import type { Metadata } from 'next';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import BibleVerseSection from '@/components/sections/BibleVerseSection';
import Button from '@/components/ui/Button';
import { RiBookOpenLine, RiTeamLine, RiGroupLine, RiMapPin2Line, RiArrowRightLine } from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Gottesdienste',
  description:
    'Unsere Gottesdienste bei Victory Baptist Church Stuttgart — Zeiten, Orte und alles, was du wissen musst.',
};

const services = [
  {
    icon:        RiBookOpenLine,
    day:         'Sonntag',
    time:        '10:00 Uhr',
    title:       'Hauptgottesdienst',
    description: 'Unser wöchentlicher Gemeindegottesdienst mit Lobpreis, Gebet und Bibelauslegung. Englischsprachig — alle herzlich willkommen.',
    extras:      ['Kinderbetreuung verfügbar', 'Übersetzung auf Anfrage', 'Gemeinschaftskaffee nach dem Gottesdienst'],
  },
  {
    icon:        RiTeamLine,
    day:         'Mittwoch',
    time:        '19:00 Uhr',
    title:       'Bibelstunde',
    description: 'Vertiefte Bibelstudien in kleiner Gruppe. Fragen sind erwünscht! Wir erforschen gemeinsam das Wort Gottes.',
    extras:      ['Offene Diskussion', 'Für Anfänger & Erfahrene', 'Ca. 75 Minuten'],
  },
  {
    icon:        RiGroupLine,
    day:         'Freitag',
    time:        '18:30 Uhr',
    title:       'Jugendgruppe',
    description: 'Ein Ort für Teens und junge Erwachsene (13–30 Jahre). Musik, Bibel, Gemeinschaft — authentisch und lebensnah.',
    extras:      ['Für 13–30 Jährige', 'Spiele & Austausch', 'Englisch & Deutsch'],
  },
];

const faqs = [
  {
    q: 'Muss ich mich anmelden?',
    a: 'Nein! Alle Gottesdienste sind offen für jeden — komm einfach vorbei, ohne Anmeldung.',
  },
  {
    q: 'In welcher Sprache wird der Gottesdienst gehalten?',
    a: 'Der Hauptgottesdienst ist auf Englisch. Auf Wunsch können Übersetzungen bereitgestellt werden.',
  },
  {
    q: 'Gibt es Kinderbetreuung?',
    a: 'Ja, während des Sonntagsgottesdienstes bieten wir Kinderbetreuung für Kinder bis 10 Jahre an.',
  },
  {
    q: 'Was soll ich anziehen?',
    a: 'Kein Dresscode — komm so, wie du bist. Wichtig ist, dass du dich wohlfühlst.',
  },
  {
    q: 'Wo kann ich parken?',
    a: 'Parkmöglichkeiten sind in der Nähe des Gemeindehauses vorhanden. Details auf Anfrage.',
  },
];

export default function GottesdiensteePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-church-navy section-padding pt-40">
        <div className="container-base text-center">
          <AnimatedSection>
            <span className="section-label block mb-4 text-church-gold">Zeiten & Orte</span>
            <h1 className="text-white text-5xl md:text-6xl mb-6">Gottesdienste</h1>
            <p className="font-lora italic text-white/80 text-xl max-w-2xl mx-auto">
              Wir laden dich herzlich ein — zu Anbetung, Gemeinschaft und Gottes Wort.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <SectionWrapper bg="cream">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label block mb-3">Regelmäßige Treffen</span>
          <h2 className="text-balance">Unsere Gottesdienste</h2>
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <AnimatedItem key={service.title}>
                <article className="card-base p-8 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-church-navy/8 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-church-navy" aria-hidden="true" />
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-church-gold/15 text-church-gold font-sans text-xs uppercase tracking-widest px-3 py-1 rounded-full">
                      {service.day} · {service.time}
                    </span>
                  </div>
                  <h3 className="mb-3">{service.title}</h3>
                  <p className="font-sans text-church-gray text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {service.extras.map((extra) => (
                      <li key={extra} className="flex items-center gap-2 font-sans text-xs text-church-olive">
                        <span className="w-1.5 h-1.5 rounded-full bg-church-olive shrink-0" aria-hidden="true" />
                        {extra}
                      </li>
                    ))}
                  </ul>
                </article>
              </AnimatedItem>
            );
          })}
        </AnimatedSection>
      </SectionWrapper>

      {/* Location */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <AnimatedSection>
            <span className="section-label block mb-3">Wo wir uns treffen</span>
            <h2 className="mb-6">Unser Versammlungsort</h2>
            <div className="flex items-start gap-3 mb-6">
              <RiMapPin2Line size={20} className="text-church-gold shrink-0 mt-1" aria-hidden="true" />
              <address className="font-sans text-church-gray not-italic text-lg">
                Musterstraße 12<br />70173 Stuttgart<br />Deutschland
              </address>
            </div>
            <p className="font-sans text-church-gray text-base md:text-lg mb-8">
              Unser Gemeindehaus liegt zentral in Stuttgart und ist gut mit öffentlichen
              Verkehrsmitteln erreichbar. Parkmöglichkeiten sind vorhanden.
            </p>
            <Button as="link" href="/kontakt" variant="primary" size="md">
              Kontakt & Wegbeschreibung
            </Button>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div
              className="rounded-2xl overflow-hidden h-80 bg-church-navy/8 flex items-center justify-center border border-gray-100"
              role="img"
              aria-label="Karte: Musterstraße 12, 70173 Stuttgart"
            >
              <div className="text-center text-church-gray">
                <RiMapPin2Line size={48} className="mx-auto mb-4 text-church-gold/60" aria-hidden="true" />
                <p className="font-sans text-sm">Google Maps Karte</p>
                <p className="font-sans text-xs text-church-gray/60 mt-1">Musterstraße 12, 70173 Stuttgart</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      <BibleVerseSection />

      {/* FAQ */}
      <SectionWrapper bg="cream">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label block mb-3">Häufige Fragen</span>
          <h2 className="text-balance">Alles, was du wissen musst</h2>
        </AnimatedSection>

        <AnimatedSection stagger className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <AnimatedItem key={faq.q}>
              <div className="card-base p-6 md:p-8">
                <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
                  <span className="text-church-gold font-bold" aria-hidden="true">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-sans text-church-gray text-sm leading-relaxed pl-5">{faq.a}</p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <p className="font-sans text-church-gray mb-4">Noch weitere Fragen?</p>
          <Button as="link" href="/kontakt" variant="outline">
            Schreib uns <RiArrowRightLine className="ml-1" aria-hidden="true" />
          </Button>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}
