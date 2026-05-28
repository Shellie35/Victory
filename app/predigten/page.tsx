import type { Metadata } from 'next';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import BibleVerseSection from '@/components/sections/BibleVerseSection';
import Image from 'next/image';
import { RiPlayCircleLine } from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Predigten',
  description:
    'Höre die Predigten von Victory Baptist Church Stuttgart — online als Audio und Video verfügbar.',
};

const blurDataURL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoH' +
  'BwYIDAoMCwsKCwsNCxAQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/wAARCAAIAAoDASIAAhEBAxEB/8QAFQ' +
  'ABAQAAAAAAAAAAAAAAAAAACAT/xAAcEAABBAMBAAAAAAAAAAAAAAAAAgEDBBESIf/EABQBAQAAAAAAAAAAAAAAAAAA' +
  'AAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCyocrFHMTdkq4hktAABTH4AAB//9k=';

const sermons = [
  {
    thumbnail:  '/images/sermon-1.jpg',
    date:       '21. Juli 2024',
    series:     'Gottes Frieden',
    title:      'Der Friede Gottes',
    scripture:  'Philipper 4:4–7',
    pastor:     'Pastor John Smith',
    duration:   '38 Min.',
    description: 'In einer Welt voller Unruhe und Angst bietet Gott einen Frieden an, der alles menschliche Verstehen übersteigt. Was bedeutet das praktisch für unser Leben?',
  },
  {
    thumbnail:  '/images/sermon-2.jpg',
    date:       '14. Juli 2024',
    series:     'Psalmen des Vertrauens',
    title:      'Vertrauen in dunklen Zeiten',
    scripture:  'Psalm 23',
    pastor:     'Pastor John Smith',
    duration:   '42 Min.',
    description: 'Der 23. Psalm ist vielleicht der bekannteste der Bibel. Aber was bedeutet er, wenn das Leben wirklich dunkel wird? Eine Predigt über Gottes Fürsorge.',
  },
  {
    thumbnail:  '/images/sermon-3.jpg',
    date:       '7. Juli 2024',
    series:     'Das Leben im Gebet',
    title:      'Das Vaterunser neu entdecken',
    scripture:  'Matthäus 6:9–13',
    pastor:     'Pastor John Smith',
    duration:   '45 Min.',
    description: 'Das Vaterunser kennt fast jeder. Aber wie beten wir es wirklich? Pastor John nimmt uns mit auf eine Reise durch die tiefste Gebetsschule der Bibel.',
  },
  {
    thumbnail:  '/images/sermon-1.jpg',
    date:       '30. Juni 2024',
    series:     'Gottes Frieden',
    title:      'Freude als Entscheidung',
    scripture:  'Philipper 4:1–3',
    pastor:     'Pastor John Smith',
    duration:   '36 Min.',
    description: 'Freude ist nicht von Umständen abhängig — sie ist eine Entscheidung, die im Glauben verwurzelt ist. Was Paulus uns aus dem Gefängnis lehrte.',
  },
  {
    thumbnail:  '/images/sermon-2.jpg',
    date:       '23. Juni 2024',
    series:     'Psalmen des Vertrauens',
    title:      'Gott, der Fels meines Herzens',
    scripture:  'Psalm 73',
    pastor:     'Pastor John Smith',
    duration:   '40 Min.',
    description: 'Wenn Gerechte leiden und Ungerechte gedeihen — eine ehrliche Predigt über Zweifel, Glaube und die Zuflucht zu Gott.',
  },
  {
    thumbnail:  '/images/sermon-3.jpg',
    date:       '16. Juni 2024',
    series:     'Das Leben im Gebet',
    title:      'Wenn Gott schweigt',
    scripture:  'Markus 14:32–42',
    pastor:     'Pastor John Smith',
    duration:   '44 Min.',
    description: 'Jesus betete im Garten Gethsemane — und der Himmel schien zu schweigen. Was lernen wir über Gebet, wenn Gott nicht sofort antwortet?',
  },
];

const series = [
  { title: 'Gottes Frieden',         count: 3, color: 'bg-church-navy/10 text-church-navy' },
  { title: 'Psalmen des Vertrauens', count: 3, color: 'bg-church-olive/10 text-church-olive' },
  { title: 'Das Leben im Gebet',     count: 3, color: 'bg-church-gold/10 text-church-gold' },
];

export default function PredigtenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-church-navy section-padding pt-40">
        <div className="container-base text-center">
          <AnimatedSection>
            <span className="section-label block mb-4 text-church-gold">Hören & Wachsen</span>
            <h1 className="text-white text-5xl md:text-6xl mb-6">Predigten</h1>
            <p className="font-lora italic text-white/80 text-xl max-w-2xl mx-auto">
              Lass dich von Gottes Wort inspirieren — online und jederzeit.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Series filter */}
      <SectionWrapper bg="cream">
        <AnimatedSection className="mb-10">
          <span className="section-label block mb-4">Predigtreihen</span>
          <div className="flex flex-wrap gap-3">
            <button className="font-sans text-sm font-medium px-5 py-2.5 rounded-full bg-church-navy text-white min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold">
              Alle Predigten
            </button>
            {series.map((s) => (
              <button
                key={s.title}
                className={`font-sans text-sm font-medium px-5 py-2.5 rounded-full min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold ${s.color} hover:opacity-80 transition-opacity`}
              >
                {s.title} ({s.count})
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sermons.map((sermon) => (
            <AnimatedItem key={sermon.title}>
              <article className="card-base overflow-hidden group cursor-pointer h-full flex flex-col">
                {/* Thumbnail */}
                <div className="relative h-48 bg-church-navy/10 shrink-0">
                  <Image
                    src={sermon.thumbnail}
                    alt={`Predigt: ${sermon.title} — ${sermon.scripture}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-church-navy/30 group-hover:bg-church-navy/20 transition-colors duration-300" aria-hidden="true" />
                  <button
                    className="absolute inset-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
                    aria-label={`Predigt abspielen: ${sermon.title}`}
                  >
                    <div className="w-14 h-14 rounded-full bg-church-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
                      <RiPlayCircleLine size={28} className="text-white" />
                    </div>
                  </button>
                  <span className="absolute top-3 left-3 bg-white/90 text-church-navy font-sans text-xs px-3 py-1 rounded-full">
                    {sermon.date}
                  </span>
                  <span className="absolute top-3 right-3 bg-church-navy/80 text-white font-sans text-xs px-3 py-1 rounded-full">
                    {sermon.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-sans text-xs uppercase tracking-widest text-church-gold">{sermon.scripture}</span>
                    <span className="text-church-gray/40">·</span>
                    <span className="font-sans text-xs text-church-olive">{sermon.series}</span>
                  </div>
                  <h3 className="text-base mb-2 leading-snug flex-1">{sermon.title}</h3>
                  <p className="font-sans text-church-gray text-sm leading-relaxed mb-3 line-clamp-2">
                    {sermon.description}
                  </p>
                  <p className="font-sans text-xs text-church-gray/60 mt-auto">{sermon.pastor}</p>
                </div>
              </article>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </SectionWrapper>

      <BibleVerseSection />

      {/* Subscription CTA */}
      <SectionWrapper bg="white">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <span className="section-label block mb-3">Nie eine Predigt verpassen</span>
          <h2 className="mb-6">Abonniere unseren Podcast</h2>
          <p className="font-sans text-church-gray text-base md:text-lg mb-8">
            Unsere Predigten sind bald auch als Podcast verfügbar — auf Spotify, Apple Podcasts
            und Google Podcasts. Bleib dran!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-church-navy text-white font-sans font-medium rounded-full px-8 py-4 min-h-[52px] hover:bg-church-navyLight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold"
              aria-label="Auf Spotify abonnieren (demnächst verfügbar)"
            >
              Spotify (demnächst)
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 border-2 border-church-navy text-church-navy font-sans font-medium rounded-full px-8 py-4 min-h-[52px] hover:bg-church-navy hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold"
              aria-label="Auf Apple Podcasts abonnieren (demnächst verfügbar)"
            >
              Apple Podcasts (demnächst)
            </a>
          </div>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}
