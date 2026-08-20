import type { Metadata } from 'next';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import BibleVerseSection from '@/components/sections/BibleVerseSection';
import Button from '@/components/ui/Button';
import { RiMapPin2Line, RiArrowRightLine, RiCarLine, RiBusLine } from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Join Victory Baptist Church Stuttgart — Sunday services at 10:45 AM, Sunday School at 10:20 AM, and Wednesday prayer meetings.',
};

const services = [
  {
    day:    'Sunday',
    time:   '9:00 AM',
    title:  'German Service',
    desc:   'A German-language service for our German-speaking friends. All are welcome.',
    sub:    'Auf Deutsch',
    muted:  true,
  },
  {
    day:    'Sunday',
    time:   '10:20 AM',
    title:  'Sunday School',
    desc:   'Separate classes for Ladies, Men, and Teens — in-depth Bible study in a smaller group setting before the main service.',
    sub:    'Ladies · Men · Teens',
    muted:  false,
  },
  {
    day:    'Sunday',
    time:   '10:45 AM',
    title:  'Morning Service',
    desc:   'Our main worship service featuring congregational singing, prayer, and pastoral preaching from the King James Bible. Nursery (0–3) and Junior Church (4–12) run simultaneously.',
    sub:    'Main Service · All Welcome',
    muted:  false,
  },
  {
    day:    'Sunday',
    time:   'Evening',
    title:  'Evening Service',
    desc:   'Biblical teaching and discipleship — a deeper study of God\'s Word to help believers grow in faith and knowledge.',
    sub:    'Teaching & Discipleship',
    muted:  false,
  },
  {
    day:    'Wednesday',
    time:   'Evening',
    title:  'Prayer Meeting',
    desc:   'The prayer meeting is the powerhouse of the church. We gather mid-week for corporate prayer, Bible reading, and fellowship.',
    sub:    'Prayer & Fellowship',
    muted:  false,
  },
];

const ministries = [
  { title: 'Nursery',                desc: 'Childcare for infants and toddlers ages 0–3, provided during all services.' },
  { title: 'Junior Church',          desc: 'A dedicated programme for children ages 4–12 running during the Sunday morning service at 10:45 AM.' },
  { title: 'Ladies Sunday School',   desc: 'Women\'s Bible class every Sunday at 10:20 AM.' },
  { title: 'Men\'s Sunday School',   desc: 'Men\'s Bible class every Sunday at 10:20 AM.' },
  { title: 'Teens Sunday School',    desc: 'Teenage class every Sunday at 10:20 AM.' },
  { title: 'Ladies\' Fellowship',    desc: 'Regular fellowship gatherings for the women of the church.' },
  { title: 'Men\'s Fellowship',      desc: 'Regular fellowship and discipleship for the men of the church.' },
  { title: 'School of the Bible',    desc: 'Online Bible institute meeting every 3rd Saturday of the month. Registration required.' },
  { title: 'Vacation Bible School',  desc: 'Summer VBS for children ages 4–12. Registration required.' },
];

const faqs = [
  { q: 'Do I need to register for Sunday services?', a: 'No — regular Sunday services are open to everyone with no registration required. Just come!' },
  { q: 'Is there childcare available?', a: 'Yes. We provide a nursery for children ages 0–3 and Junior Church for ages 4–12 during the Sunday morning service.' },
  { q: 'Are services in English?', a: 'Yes. All services are conducted in English. We also hold a German-language service at 9:00 AM on Sundays.' },
  { q: 'Is there a dress code?', a: 'No dress code — come as you are. What matters is that you feel welcome and at home.' },
  { q: 'How long is the Sunday morning service?', a: 'Approximately 75–90 minutes, including worship and preaching.' },
  { q: 'Is there parking?', a: 'Yes — free parking is available onsite. The nearest public transport stop is Lapp Kabel (S-Bahn / U-Bahn).' },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-church-navy section-padding pt-40">
        <div className="container-base text-center">
          <AnimatedSection>
            <span className="section-label block mb-4 text-church-gold">Times & Location</span>
            <h1 className="text-white text-5xl md:text-6xl mb-6">Services</h1>
            <p className="font-lora italic text-white/80 text-xl max-w-2xl mx-auto">
              Join us for worship, Bible preaching, and fellowship. All services in English.
            </p>
            <p className="font-sans text-white/60 text-base mt-4 font-medium">
              Sunday Morning Service · 10:45 AM · Schulze-Delitzsch-Straße 30, 70565 Stuttgart
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service schedule */}
      <SectionWrapper bg="cream">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label block mb-3">Weekly Schedule</span>
          <h2 className="text-balance">Our Services</h2>
        </AnimatedSection>

        <AnimatedSection stagger className="space-y-4 max-w-3xl mx-auto">
          {services.map((s) => (
            <AnimatedItem key={s.title}>
              <div className={`card-base p-6 flex flex-col sm:flex-row gap-5 items-start ${s.muted ? 'opacity-70' : ''}`}>
                <div className="shrink-0 text-center sm:text-left sm:w-28">
                  <span className="font-sans text-xs uppercase tracking-widest text-church-gold block">{s.day}</span>
                  <span className="font-serif font-bold text-church-navy text-xl">{s.time}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base mb-1">{s.title}</h3>
                  <p className="font-sans text-church-gray text-sm leading-relaxed">{s.desc}</p>
                  <span className="font-sans text-xs text-church-olive font-medium mt-2 block">{s.sub}</span>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </SectionWrapper>

      {/* Ministries */}
      <SectionWrapper bg="white">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label block mb-3">Get Involved</span>
          <h2 className="text-balance">Ministries & Programmes</h2>
          <p className="font-sans text-church-gray mt-4 max-w-xl mx-auto">
            There is a place for everyone at Victory Baptist Church — whatever your age or background.
          </p>
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ministries.map((m) => (
            <AnimatedItem key={m.title}>
              <div className="card-base p-6 h-full">
                <div className="w-7 h-1 bg-church-gold rounded-full mb-4" aria-hidden="true" />
                <h3 className="text-base mb-2">{m.title}</h3>
                <p className="font-sans text-church-gray text-sm leading-relaxed">{m.desc}</p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </SectionWrapper>

      {/* Location */}
      <SectionWrapper bg="cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <AnimatedSection>
            <span className="section-label block mb-3">Where We Meet</span>
            <h2 className="mb-6">Our Location</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <RiMapPin2Line size={20} className="text-church-gold shrink-0 mt-1" aria-hidden="true" />
                <address className="font-sans text-church-gray not-italic text-lg leading-relaxed">
                  Schulze-Delitzsch-Straße 30<br />70565 Stuttgart (Vaihingen)
                </address>
              </div>
              <div className="flex items-start gap-3">
                <RiCarLine size={20} className="text-church-gold shrink-0 mt-1" aria-hidden="true" />
                <p className="font-sans text-church-gray">Free parking available onsite</p>
              </div>
              <div className="flex items-start gap-3">
                <RiBusLine size={20} className="text-church-gold shrink-0 mt-1" aria-hidden="true" />
                <p className="font-sans text-church-gray">Nearest stop: <strong className="text-church-navy">Lapp Kabel</strong> (S-Bahn / U-Bahn)</p>
              </div>
            </div>
            <Button as="link" href="/contact" variant="primary" size="md">
              Get in Touch <RiArrowRightLine className="ml-1" aria-hidden="true" />
            </Button>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div
              className="rounded-2xl overflow-hidden h-80 bg-church-navy/8 flex items-center justify-center border border-gray-100"
              role="img"
              aria-label="Map: Schulze-Delitzsch-Straße 30, 70565 Stuttgart"
            >
              <div className="text-center">
                <RiMapPin2Line size={48} className="mx-auto mb-4 text-church-gold/60" aria-hidden="true" />
                <p className="font-sans text-sm font-medium text-church-navy">Schulze-Delitzsch-Straße 30</p>
                <p className="font-sans text-xs text-church-gray/60 mt-1">70565 Stuttgart · Vaihingen</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      <BibleVerseSection />

      {/* FAQ */}
      <SectionWrapper bg="cream">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label block mb-3">Common Questions</span>
          <h2 className="text-balance">FAQ</h2>
        </AnimatedSection>

        <AnimatedSection stagger className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <AnimatedItem key={faq.q}>
              <div className="card-base p-6 md:p-8">
                <h3 className="text-base font-semibold mb-2 flex items-start gap-2">
                  <span className="text-church-gold font-bold shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-sans text-church-gray text-sm leading-relaxed pl-5">{faq.a}</p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <p className="font-sans text-church-gray mb-4">Still have questions?</p>
          <Button as="link" href="/contact" variant="outline">Contact Us</Button>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}
