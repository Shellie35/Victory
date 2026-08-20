import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { RiBookOpenLine, RiTeamLine, RiMoonLine, RiHeartLine, RiMapPin2Line, RiBusLine, RiCarLine } from 'react-icons/ri';

const services = [
  {
    icon:        RiTeamLine,
    title:       'Sunday School',
    time:        'Sunday · 10:20 AM',
    description: 'Classes for Ladies, Men, and Teens meet before the main service for in-depth Bible study and fellowship.',
    tag:         'Ladies · Men · Teens',
  },
  {
    icon:        RiBookOpenLine,
    title:       'Sunday Morning Service',
    time:        'Sunday · 10:45 AM',
    description: 'Pastoral preaching from the King James Bible, congregational worship, and warm fellowship. Nursery (0–3) and Junior Church (4–12) available.',
    tag:         'Main Service',
  },
  {
    icon:        RiMoonLine,
    title:       'Sunday Evening',
    time:        'Sunday · Evening',
    description: 'Biblical teaching and discipleship for spiritual growth. A deeper dive into God\'s Word for believers seeking to grow in their faith.',
    tag:         'Teaching & Discipleship',
  },
  {
    icon:        RiHeartLine,
    title:       'Wednesday Prayer Meeting',
    time:        'Wednesday · Evening',
    description: 'The prayer meeting is the powerhouse of the church. Join us for corporate prayer, fellowship, and encouragement mid-week.',
    tag:         'Prayer & Fellowship',
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper id="services" bg="cream">
      <AnimatedSection className="text-center mb-14">
        <span className="section-label block mb-3">Times & Location</span>
        <h2 className="text-balance">Services & Times</h2>
        <p className="font-sans text-church-gray mt-4 max-w-xl mx-auto text-base md:text-lg">
          All services are in English. No registration needed — just come as you are.
        </p>
      </AnimatedSection>

      {/* Service cards */}
      <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <AnimatedItem key={service.title}>
              <article className="card-base p-6 h-full flex flex-col">
                <div className="w-11 h-11 rounded-xl bg-church-navy/8 flex items-center justify-center mb-4 shrink-0">
                  <Icon size={22} className="text-church-navy" aria-hidden="true" />
                </div>
                <div className="inline-block bg-church-gold/15 text-church-gold font-sans text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3 self-start">
                  {service.time}
                </div>
                <h3 className="text-base mb-2">{service.title}</h3>
                <p className="font-sans text-church-gray text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="font-sans text-xs text-church-olive font-medium">{service.tag}</span>
                </div>
              </article>
            </AnimatedItem>
          );
        })}
      </AnimatedSection>

      {/* Address + practical info */}
      <AnimatedSection delay={0.3}>
        <div className="bg-white rounded-2xl shadow-sm p-7 md:p-10">
          <div className="flex flex-col lg:flex-row gap-10 items-start">

            {/* Address block */}
            <div className="lg:w-80 shrink-0 space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <RiMapPin2Line size={18} className="text-church-gold" aria-hidden="true" />
                  <span className="font-serif font-semibold text-church-navy">Our Location</span>
                </div>
                <address className="font-sans text-church-gray not-italic text-sm leading-relaxed pl-6">
                  Schulze-Delitzsch-Straße 30<br />
                  70565 Stuttgart<br />
                  (Vaihingen district)
                </address>
              </div>

              <div className="flex items-start gap-2">
                <RiCarLine size={18} className="text-church-gold shrink-0 mt-0.5" aria-hidden="true" />
                <p className="font-sans text-church-gray text-sm">Free parking available onsite</p>
              </div>

              <div className="flex items-start gap-2">
                <RiBusLine size={18} className="text-church-gold shrink-0 mt-0.5" aria-hidden="true" />
                <p className="font-sans text-church-gray text-sm">
                  Nearest S-Bahn / U-Bahn stop:<br />
                  <strong className="text-church-navy">Lapp Kabel</strong>
                </p>
              </div>

              <Button as="link" href="/contact" variant="outline" size="sm">
                Get Directions
              </Button>
            </div>

            {/* Map placeholder */}
            <div className="flex-1 w-full">
              <div
                className="rounded-2xl overflow-hidden h-64 bg-church-navy/8 flex items-center justify-center border border-gray-100"
                role="img"
                aria-label="Map: Schulze-Delitzsch-Straße 30, 70565 Stuttgart"
              >
                <div className="text-center text-church-gray">
                  <RiMapPin2Line size={40} className="mx-auto mb-3 text-church-gold/60" aria-hidden="true" />
                  <p className="font-sans text-sm font-medium text-church-navy">Schulze-Delitzsch-Straße 30</p>
                  <p className="font-sans text-xs text-church-gray/60 mt-1">70565 Stuttgart · Vaihingen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* German service note */}
      <AnimatedSection delay={0.4} className="mt-6">
        <div className="bg-church-navy/5 border border-church-navy/10 rounded-xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <span className="font-sans text-xs uppercase tracking-widest text-church-navy/50 shrink-0">Auf Deutsch</span>
          <p className="font-sans text-church-gray text-sm">
            We also hold a German-language service at <strong>9:00 AM</strong> on Sundays.
            German-speaking visitors are also warmly referred to our sister church{' '}
            <a
              href="https://www.wgg-baptisten.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-church-navy underline underline-offset-2 hover:text-church-gold transition-colors"
            >
              Wort Gottes Gemeinde
            </a>.
          </p>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
