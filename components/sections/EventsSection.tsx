import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import Tag from '@/components/ui/Tag';
import Link from 'next/link';
import { RiArrowRightLine } from 'react-icons/ri';

const events = [
  {
    day:         '13',
    month:       'Jul',
    title:       'Sommergottesdienst im Freien',
    description: 'Gemeinsam unter freiem Himmel anbeten — mit Picknick und Gemeinschaft für die ganze Familie.',
    tag:         'Gottesdienst',
    tagColor:    'navy' as const,
  },
  {
    day:         '20',
    month:       'Jul',
    title:       'Familienabend',
    description: 'Ein gemütlicher Abend für Familien mit Spielen, Essen und herzlichen Gesprächen.',
    tag:         'Gemeinschaft',
    tagColor:    'olive' as const,
  },
  {
    day:         '27',
    month:       'Jul',
    title:       'Taufgottesdienst',
    description: 'Wir feiern gemeinsam das öffentliche Glaubensbekenntnis durch die Taufe.',
    tag:         'Gottesdienst',
    tagColor:    'navy' as const,
  },
  {
    day:         '4–8',
    month:       'Aug',
    title:       'Bibelwoche',
    description: 'Fünf Abende voller Bibelstudium, Anbetung und Gemeinschaft. Offene Einladung an alle.',
    tag:         'Studium',
    tagColor:    'gold' as const,
  },
];

export default function EventsSection() {
  return (
    <SectionWrapper id="veranstaltungen" bg="white">
      <AnimatedSection className="text-center mb-14">
        <span className="section-label block mb-3">Aktuell & Bald</span>
        <h2 className="text-balance">Veranstaltungen</h2>
        <p className="font-sans text-church-gray mt-4 max-w-xl mx-auto text-base md:text-lg">
          Von Gottesdiensten bis Gemeinschaftsabenden — es ist immer etwas los.
        </p>
      </AnimatedSection>

      {/* Scrollable on mobile, grid on desktop */}
      <AnimatedSection
        stagger
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {events.map((event) => (
          <AnimatedItem key={event.title}>
            <article className="card-base p-6 h-full flex flex-col group hover:shadow-md transition-shadow duration-200">
              {/* Date badge */}
              <div className="inline-flex items-baseline gap-1 bg-church-gold text-white rounded-full px-4 py-1.5 self-start mb-5">
                <span className="font-serif font-bold text-lg leading-none">{event.day}</span>
                <span className="font-sans text-xs uppercase tracking-wide">{event.month}</span>
              </div>

              <h3 className="text-base mb-2 flex-1 leading-snug">{event.title}</h3>

              <p className="font-sans text-church-gray text-sm leading-relaxed mb-4 line-clamp-2">
                {event.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <Tag color={event.tagColor}>{event.tag}</Tag>
                <Link
                  href="/gottesdienste"
                  className="font-sans text-sm text-church-gold hover:text-church-navy inline-flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded"
                  aria-label={`Mehr erfahren über: ${event.title}`}
                >
                  Mehr <RiArrowRightLine size={14} aria-hidden="true" />
                </Link>
              </div>
            </article>
          </AnimatedItem>
        ))}
      </AnimatedSection>
    </SectionWrapper>
  );
}
