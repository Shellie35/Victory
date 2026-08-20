import type { Metadata } from 'next';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import BibleVerseSection from '@/components/sections/BibleVerseSection';
import Image from 'next/image';
import { RiPlayCircleLine, RiMicLine, RiYoutubeFill, RiHeadphoneLine, RiLiveLine } from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Sermons',
  description:
    'Listen to sermons from Victory Baptist Church Stuttgart — available as audio podcast, video on YouTube, and live streamed every Sunday.',
};

const blurDataURL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoH' +
  'BwYIDAoMCwsKCwsNCxAQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/wAARCAAIAAoDASIAAhEBAxEB/8QAFQ' +
  'ABAQAAAAAAAAAAAAAAAAAACAT/xAAcEAABBAMBAAAAAAAAAAAAAAAAAgEDBBESIf/EABQBAQAAAAAAAAAAAAAAAAAA' +
  'AAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCyocrFHMTdkq4hktAABTH4AAB//9k=';

const sermons = [
  { thumbnail: '/images/sermon-1.jpg', date: 'July 21, 2024', series: 'The Peace of God', title: 'The Peace of God', scripture: 'Philippians 4:4–7', pastor: 'Pastor John Smith', duration: '38 min.', description: 'In a world of anxiety and fear, God offers a peace that surpasses all human understanding. What does this mean in practice for daily life?' },
  { thumbnail: '/images/sermon-2.jpg', date: 'July 14, 2024', series: 'Psalms of Trust', title: 'Trust in Dark Times', scripture: 'Psalm 23', pastor: 'Pastor John Smith', duration: '42 min.', description: 'The 23rd Psalm is perhaps the most beloved in the Bible. But what does it truly mean when life becomes genuinely dark?' },
  { thumbnail: '/images/sermon-3.jpg', date: 'July 7, 2024', series: 'A Life of Prayer', title: "The Lord's Prayer — Rediscovered", scripture: 'Matthew 6:9–13', pastor: 'Pastor John Smith', duration: '45 min.', description: 'Almost everyone knows the Lord\'s Prayer. But how do we truly pray it? A journey through the greatest prayer school in the Bible.' },
  { thumbnail: '/images/sermon-1.jpg', date: 'June 30, 2024', series: 'The Peace of God', title: 'Joy as a Choice', scripture: 'Philippians 4:1–3', pastor: 'Pastor John Smith', duration: '36 min.', description: 'Joy is not dependent on circumstances — it is a decision rooted in faith. What Paul taught us from prison.' },
  { thumbnail: '/images/sermon-2.jpg', date: 'June 23, 2024', series: 'Psalms of Trust', title: 'God, the Rock of My Heart', scripture: 'Psalm 73', pastor: 'Pastor John Smith', duration: '40 min.', description: 'When the righteous suffer and the wicked prosper — an honest sermon about doubt, faith, and finding refuge in God.' },
  { thumbnail: '/images/sermon-3.jpg', date: 'June 16, 2024', series: 'A Life of Prayer', title: 'When God Seems Silent', scripture: 'Mark 14:32–42', pastor: 'Pastor John Smith', duration: '44 min.', description: 'Jesus prayed in Gethsemane — and heaven seemed silent. What do we learn about prayer when God does not answer immediately?' },
];

const mediaChannels = [
  { icon: RiYoutubeFill,    label: 'YouTube',  desc: 'Video recordings of every sermon, available after each service.', href: '#' },
  { icon: RiHeadphoneLine,  label: 'Podcast',  desc: 'Audio sermons available on all major podcast platforms.', href: '#' },
  { icon: RiLiveLine,       label: 'Live Stream', desc: 'Watch our Sunday morning service live every week online.', href: '#' },
];

export default function SermonsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-church-navy section-padding pt-40">
        <div className="container-base text-center">
          <AnimatedSection>
            <span className="section-label block mb-4 text-church-gold">Hear God&apos;s Word</span>
            <h1 className="text-white text-5xl md:text-6xl mb-6">Sermons</h1>
            <p className="font-lora italic text-white/80 text-xl max-w-2xl mx-auto">
              Faithful, expository preaching from the King James Bible — online and on-demand.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Media channels */}
      <SectionWrapper bg="cream">
        <AnimatedSection className="text-center mb-12">
          <span className="section-label block mb-3">Listen & Watch</span>
          <h2>How to Access Our Sermons</h2>
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {mediaChannels.map((ch) => {
            const Icon = ch.icon;
            return (
              <AnimatedItem key={ch.label}>
                <a href={ch.href} className="card-base p-7 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-200 group">
                  <div className="w-14 h-14 rounded-2xl bg-church-navy/8 flex items-center justify-center mb-4 group-hover:bg-church-gold/10 transition-colors">
                    <Icon size={28} className="text-church-navy group-hover:text-church-gold transition-colors" aria-hidden="true" />
                  </div>
                  <h3 className="text-base mb-2">{ch.label}</h3>
                  <p className="font-sans text-church-gray text-sm leading-relaxed">{ch.desc}</p>
                </a>
              </AnimatedItem>
            );
          })}
        </AnimatedSection>
      </SectionWrapper>

      {/* Sermon archive */}
      <SectionWrapper bg="white">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label block mb-3">Recent Sermons</span>
          <h2>Sermon Archive</h2>
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sermons.map((sermon) => (
            <AnimatedItem key={sermon.title}>
              <article className="card-base overflow-hidden group cursor-pointer h-full flex flex-col">
                <div className="relative h-48 bg-church-navy/10 shrink-0">
                  <Image
                    src={sermon.thumbnail}
                    alt={`Sermon: ${sermon.title} — ${sermon.scripture}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-church-navy/30 group-hover:bg-church-navy/20 transition-colors duration-300" aria-hidden="true" />
                  <button
                    className="absolute inset-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
                    aria-label={`Play sermon: ${sermon.title}`}
                  >
                    <div className="w-14 h-14 rounded-full bg-church-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
                      <RiPlayCircleLine size={28} className="text-white" />
                    </div>
                  </button>
                  <span className="absolute top-3 left-3 bg-white/90 text-church-navy font-sans text-xs px-3 py-1 rounded-full">{sermon.date}</span>
                  <span className="absolute top-3 right-3 bg-church-navy/80 text-white font-sans text-xs px-3 py-1 rounded-full">{sermon.duration}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-sans text-xs uppercase tracking-widest text-church-gold">{sermon.scripture}</span>
                    <span className="text-church-gray/40">·</span>
                    <span className="font-sans text-xs text-church-olive">{sermon.series}</span>
                  </div>
                  <h3 className="text-base mb-2 leading-snug flex-1">{sermon.title}</h3>
                  <p className="font-sans text-church-gray text-sm leading-relaxed mb-3 line-clamp-2">{sermon.description}</p>
                  <div className="flex items-center gap-1.5 text-church-gray/60 mt-auto">
                    <RiMicLine size={12} aria-hidden="true" />
                    <p className="font-sans text-xs">{sermon.pastor}</p>
                  </div>
                </div>
              </article>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </SectionWrapper>

      <BibleVerseSection />
    </>
  );
}
