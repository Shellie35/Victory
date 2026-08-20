import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import Image from 'next/image';
import { RiPlayCircleLine, RiArrowRightLine, RiMicLine } from 'react-icons/ri';

const blurDataURL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoH' +
  'BwYIDAoMCwsKCwsNCxAQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/wAARCAAIAAoDASIAAhEBAxEB/8QAFQ' +
  'ABAQAAAAAAAAAAAAAAAAAACAT/xAAcEAABBAMBAAAAAAAAAAAAAAAAAgEDBBESIf/EABQBAQAAAAAAAAAAAAAAAAAA' +
  'AAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCyocrFHMTdkq4hktAABTH4AAB//9k=';

const sermons = [
  {
    thumbnail:   '/images/sermon-1.jpg',
    date:        'July 21, 2024',
    title:       'The Peace of God',
    scripture:   'Philippians 4:7',
    pastor:      'Pastor John Smith',
    description: 'In a world full of anxiety and fear, God offers a peace that passes all human understanding. What does that mean for our daily lives?',
  },
  {
    thumbnail:   '/images/sermon-2.jpg',
    date:        'July 14, 2024',
    title:       'Trust in Dark Times',
    scripture:   'Psalm 23',
    pastor:      'Pastor John Smith',
    description: 'The 23rd Psalm may be the most beloved in the Bible — but what does it truly mean when life grows dark? A message of God\'s faithful care.',
  },
  {
    thumbnail:   '/images/sermon-3.jpg',
    date:        'July 7, 2024',
    title:       "The Lord's Prayer — Rediscovered",
    scripture:   'Matthew 6:9–13',
    pastor:      'Pastor John Smith',
    description: 'Almost everyone knows the Lord\'s Prayer — but how do we truly pray it? A journey through the greatest prayer school in the Bible.',
  },
];

export default function SermonsSection() {
  return (
    <SectionWrapper id="sermons" bg="cream">
      <AnimatedSection className="text-center mb-14">
        <span className="section-label block mb-3">Hear God&apos;s Word</span>
        <h2 className="text-balance">Sermons & Media</h2>
        <p className="font-sans text-church-gray mt-4 max-w-xl mx-auto text-base md:text-lg">
          Audio sermons available on podcast · Video recordings on YouTube · Live streaming every Sunday.
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
                  alt={`Sermon: ${sermon.title} — ${sermon.scripture}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-church-navy/30 group-hover:bg-church-navy/20 transition-colors duration-300" aria-hidden="true" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-church-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
                    <RiPlayCircleLine size={28} className="text-white" />
                  </div>
                </div>
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
                <div className="flex items-center gap-1.5 text-church-gray/60">
                  <RiMicLine size={12} aria-hidden="true" />
                  <p className="font-sans text-xs">{sermon.pastor}</p>
                </div>
              </div>
            </article>
          </AnimatedItem>
        ))}
      </AnimatedSection>

      <AnimatedSection delay={0.4} className="text-center mt-10">
        <Link
          href="/sermons"
          className="inline-flex items-center gap-2 font-sans font-medium text-church-gold hover:text-church-navy transition-colors duration-200 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded"
        >
          View All Sermons
          <RiArrowRightLine size={20} aria-hidden="true" />
        </Link>
      </AnimatedSection>
    </SectionWrapper>
  );
}
