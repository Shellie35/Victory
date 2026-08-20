import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import { RiBookOpenLine, RiTeamLine, RiMoonLine, RiHeartLine } from 'react-icons/ri';

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

    </SectionWrapper>
  );
}
