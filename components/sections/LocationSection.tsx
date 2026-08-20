import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { RiMapPin2Line, RiCarLine, RiBusLine, RiTimeLine, RiArrowRightLine } from 'react-icons/ri';

const infoItems = [
  {
    icon:  RiTimeLine,
    label: 'Sunday Service',
    value: '10:45 AM',
    sub:   'Sunday School at 10:20 AM',
  },
  {
    icon:  RiMapPin2Line,
    label: 'Address',
    value: 'Schulze-Delitzsch-Straße 30',
    sub:   '70565 Stuttgart — Vaihingen',
  },
  {
    icon:  RiBusLine,
    label: 'Public Transport',
    value: 'Lapp Kabel',
    sub:   'S-Bahn / U-Bahn',
  },
  {
    icon:  RiCarLine,
    label: 'Parking',
    value: 'Free onsite',
    sub:   'No need to search for a space',
  },
];

export default function LocationSection() {
  return (
    <section className="bg-church-navy section-padding relative overflow-hidden" id="location" aria-label="Location">

      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-church-gold/5" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-church-gold/4" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <AnimatedSection className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-sans text-sm uppercase tracking-widest text-church-gold mb-3 block">
                Find Us
              </span>
              <h2 className="text-white text-3xl md:text-4xl font-bold font-serif">
                Where We Meet
              </h2>
            </div>
            <Button as="link" href="/contact" variant="gold" size="md">
              Get in Touch <RiArrowRightLine className="ml-1" aria-hidden="true" />
            </Button>
          </div>
        </AnimatedSection>

        {/* Main grid: info + map */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* Left: info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="bg-white/8 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/12 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-church-gold/15 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-church-gold" aria-hidden="true" />
                    </div>
                    <span className="font-sans text-xs uppercase tracking-widest text-church-gold/70 block mb-1">
                      {item.label}
                    </span>
                    <p className="font-serif font-semibold text-white text-lg leading-snug">
                      {item.value}
                    </p>
                    <p className="font-sans text-white/55 text-sm mt-1">{item.sub}</p>
                  </div>
                );
              })}
            </div>

            {/* Right: map placeholder */}
            <div
              className="rounded-2xl bg-white/6 border border-white/10 flex flex-col items-center justify-center min-h-64 lg:min-h-0 p-8 text-center"
              role="img"
              aria-label="Map location: Schulze-Delitzsch-Straße 30, 70565 Stuttgart Vaihingen"
            >
              <RiMapPin2Line size={52} className="text-church-gold/50 mb-4" aria-hidden="true" />
              <p className="font-serif font-semibold text-white text-xl">
                Schulze-Delitzsch-Straße 30
              </p>
              <p className="font-sans text-white/55 text-sm mt-1 mb-6">
                70565 Stuttgart · Vaihingen
              </p>
              <a
                href="https://maps.google.com/?q=Schulze-Delitzsch-Straße+30,+70565+Stuttgart"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-church-gold/40 text-church-gold hover:bg-church-gold hover:text-white transition-colors font-sans font-medium rounded-full px-5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold"
              >
                Open in Google Maps <RiArrowRightLine size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* German service note */}
        <AnimatedSection delay={0.2} className="mt-6">
          <div className="border border-white/10 rounded-xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/5">
            <span className="font-sans text-xs uppercase tracking-widest text-church-gold/60 shrink-0">
              Auf Deutsch
            </span>
            <p className="font-sans text-white/65 text-sm leading-relaxed">
              We also hold a German-language service every Sunday at{' '}
              <strong className="text-white/85">9:00 AM</strong>.
              German-speaking visitors are also warmly referred to our sister church{' '}
              <a
                href="https://www.wgg-baptisten.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-church-gold hover:text-church-goldLight underline underline-offset-2 transition-colors"
              >
                Wort Gottes Gemeinde
              </a>.
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
