import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import Image from 'next/image';
import { RiPlayCircleLine, RiArrowRightLine } from 'react-icons/ri';

const blurDataURL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoH' +
  'BwYIDAoMCwsKCwsNCxAQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/wAARCAAIAAoDASIAAhEBAxEB/8QAFg' +
  'ABAQEAAAAAAAAAAAAAAAAAAAYH/8QAHhAAAQQDAQEBAAAAAAAAAAAAAgEDBAURBhIh/8QAFAEBAAAAAAAAAAAAAAAA' +
  'AAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Ao2hbFsQ6zrs5IfGEAqoLENVmxXqgqWKJN' +
  'NAD//Z';

const sermons = [
  {
    thumbnail:   '/images/sermon-1.jpg',
    date:        '21. Juli 2024',
    title:       'Der Friede Gottes',
    scripture:   'Philipper 4:7',
    pastor:      'Pastor John Smith',
    description: 'Wie finden wir echten Frieden in einer unruhigen Welt? Eine Predigt über Gottes Frieden, der alles Verstehen übersteigt.',
  },
  {
    thumbnail:   '/images/sermon-2.jpg',
    date:        '14. Juli 2024',
    title:       'Vertrauen in dunklen Zeiten',
    scripture:   'Psalm 23',
    pastor:      'Pastor John Smith',
    description: 'Der gute Hirte führt uns auch durch das Tal des Schattens — eine Ermutigung für schwere Zeiten.',
  },
  {
    thumbnail:   '/images/sermon-3.jpg',
    date:        '7. Juli 2024',
    title:       'Das Vaterunser neu entdecken',
    scripture:   'Matthäus 6:9–13',
    pastor:      'Pastor John Smith',
    description: 'Das bekannteste Gebet der Christenheit — neu betrachtet, neu belebt, neu erlebt.',
  },
];

export default function SermonsSection() {
  return (
    <SectionWrapper id="predigten" bg="cream">
      <AnimatedSection className="text-center mb-14">
        <span className="section-label block mb-3">Hören & Wachsen</span>
        <h2 className="text-balance">Predigten & Medien</h2>
        <p className="font-sans text-church-gray mt-4 max-w-xl mx-auto text-base md:text-lg">
          Lass dich von Gottes Wort inspirieren — online oder vor Ort.
        </p>
      </AnimatedSection>

      <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sermons.map((sermon) => (
          <AnimatedItem key={sermon.title}>
            <article className="card-base overflow-hidden group">
              {/* Thumbnail */}
              <div className="relative h-48 bg-church-navy/10">
                <Image
                  src={sermon.thumbnail}
                  alt={`Predigtthumbnail: ${sermon.title}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-church-navy/30 group-hover:bg-church-navy/20 transition-colors duration-300" aria-hidden="true" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-church-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
                    <RiPlayCircleLine size={28} className="text-white" />
                  </div>
                </div>
                {/* Date */}
                <span className="absolute top-3 left-3 bg-white/90 text-church-navy font-sans text-xs px-3 py-1 rounded-full">
                  {sermon.date}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="font-sans text-xs uppercase tracking-widest text-church-gold mb-2 block">
                  {sermon.scripture}
                </span>
                <h3 className="text-base mb-2 leading-snug">{sermon.title}</h3>
                <p className="font-sans text-church-gray text-sm leading-relaxed mb-3 line-clamp-2">
                  {sermon.description}
                </p>
                <p className="font-sans text-xs text-church-gray/70">{sermon.pastor}</p>
              </div>
            </article>
          </AnimatedItem>
        ))}
      </AnimatedSection>

      <AnimatedSection delay={0.4} className="text-center mt-10">
        <Link
          href="/predigten"
          className="inline-flex items-center gap-2 font-sans font-medium text-church-gold hover:text-church-navy transition-colors duration-200 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded"
        >
          Alle Predigten ansehen
          <RiArrowRightLine size={20} aria-hidden="true" />
        </Link>
      </AnimatedSection>
    </SectionWrapper>
  );
}
