import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import Image from 'next/image';
import Link from 'next/link';
import { RiArrowRightLine } from 'react-icons/ri';

const blurDataURL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoH' +
  'BwYIDAoMCwsKCwsNCxAQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/wAARCAAKAAoDASIAAhEBAxEB/8QAFQ' +
  'ABAQAAAAAAAAAAAAAAAAAACAT/xAAcEAABBAMBAAAAAAAAAAAAAAAAAgEDBBESIf/EABQBAQAAAAAAAAAAAAAAAAAA' +
  'AAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCyocrFHMTdkq4hktAABTH4AAB//9k=';

const team = [
  {
    image:  '/images/team-pastor.jpg',
    name:   'Pastor John Smith',
    role:   'Leitender Pastor',
    bio:    'John Smith leitet Victory Baptist Church seit ihrer Gründung. Mit einem Herz für die internationale Gemeinschaft in Stuttgart predigt er leidenschaftlich aus dem Wort Gottes und liebt es, Menschen auf ihrem Glaubensweg zu begleiten.',
  },
  {
    image:  '/images/team-youth.jpg',
    name:   'Sarah Müller',
    role:   'Jugendarbeit & Gemeinschaft',
    bio:    'Sarah kümmert sich mit viel Energie und Kreativität um die Jugend und Gemeinschaftsveranstaltungen. Ihr Ziel ist es, einen Ort zu schaffen, an dem sich jeder willkommen und zugehörig fühlt.',
  },
  {
    image:  '/images/team-music.jpg',
    name:   'David Okonkwo',
    role:   'Musik & Anbetung',
    bio:    'David leitet den Lobpreisdienst mit Leidenschaft und musikalischem Talent. Er glaubt, dass Anbetung die Herzen für Gottes Gegenwart öffnet — auf Englisch, Deutsch und darüber hinaus.',
  },
];

export default function TeamSection() {
  return (
    <SectionWrapper id="team" bg="white">
      <AnimatedSection className="text-center mb-14">
        <span className="section-label block mb-3">Menschen hinter der Gemeinde</span>
        <h2 className="text-balance">Unser Team</h2>
        <p className="font-sans text-church-gray mt-4 max-w-xl mx-auto text-base md:text-lg">
          Lerne die Menschen kennen, die Victory Baptist Church mit Herz und Hingabe gestalten.
        </p>
      </AnimatedSection>

      <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member) => (
          <AnimatedItem key={member.name}>
            <article className="card-base p-8 text-center flex flex-col items-center">
              {/* Circular image */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden bg-church-navy/10 mb-5 ring-4 ring-church-gold/20 shrink-0">
                <Image
                  src={member.image}
                  alt={`Foto von ${member.name}`}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  sizes="112px"
                />
              </div>
              <h3 className="text-lg mb-1">{member.name}</h3>
              <span className="font-sans text-xs uppercase tracking-widest text-church-gold mb-4 block">
                {member.role}
              </span>
              <p className="font-sans text-church-gray text-sm leading-relaxed">
                {member.bio}
              </p>
            </article>
          </AnimatedItem>
        ))}
      </AnimatedSection>

      <AnimatedSection delay={0.4} className="text-center mt-10">
        <Link
          href="/ueber-uns"
          className="inline-flex items-center gap-2 font-sans font-medium text-church-gold hover:text-church-navy transition-colors duration-200 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded"
        >
          Lern uns kennen
          <RiArrowRightLine size={20} aria-hidden="true" />
        </Link>
      </AnimatedSection>
    </SectionWrapper>
  );
}
