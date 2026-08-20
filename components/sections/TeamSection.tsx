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
    role:   'Senior Pastor',
    bio:    'Pastor Smith leads Victory Baptist Church with a passion for faithful Gospel preaching and a heart for the international community in Stuttgart. He preaches from the King James Bible and is devoted to sound, independent Baptist doctrine.',
  },
  {
    image:  '/images/team-youth.jpg',
    name:   'Sarah Müller',
    role:   'Youth & Community',
    bio:    'Sarah oversees youth ministry and community outreach with energy and creativity. She is passionate about creating a place where every person — regardless of background or nationality — feels genuinely loved and welcome.',
  },
  {
    image:  '/images/team-music.jpg',
    name:   'David Okonkwo',
    role:   'Music & Worship',
    bio:    'David leads the worship ministry with a gift for music and a heart of praise. He believes that congregational worship opens hearts to God\'s presence — and brings the international body of Christ together in one voice.',
  },
];

export default function TeamSection() {
  return (
    <SectionWrapper id="team" bg="white">
      <AnimatedSection className="text-center mb-14">
        <span className="section-label block mb-3">The People Behind the Church</span>
        <h2 className="text-balance">Meet Our Team</h2>
        <p className="font-sans text-church-gray mt-4 max-w-xl mx-auto text-base md:text-lg">
          Dedicated, warm, and Gospel-focused — get to know the people who serve Victory Baptist Church.
        </p>
      </AnimatedSection>

      <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member) => (
          <AnimatedItem key={member.name}>
            <article className="card-base p-8 text-center flex flex-col items-center">
              <div className="relative w-28 h-28 rounded-full overflow-hidden bg-church-navy/10 mb-5 ring-4 ring-church-gold/20 shrink-0">
                <Image
                  src={member.image}
                  alt={`Photo of ${member.name}`}
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
          href="/about"
          className="inline-flex items-center gap-2 font-sans font-medium text-church-gold hover:text-church-navy transition-colors duration-200 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded"
        >
          Join Us
          <RiArrowRightLine size={20} aria-hidden="true" />
        </Link>
      </AnimatedSection>
    </SectionWrapper>
  );
}
