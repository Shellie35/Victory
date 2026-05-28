import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { RiBookOpenLine, RiTeamLine, RiGroupLine, RiMapPin2Line } from 'react-icons/ri';

const services = [
  {
    icon:        RiBookOpenLine,
    title:       'Sonntagsgottesdienst',
    time:        'Sonntag, 10:00 Uhr',
    description: 'Gemeinsame Anbetung, Predigt aus der Bibel und Gemeinschaft in einem offenen und herzlichen Umfeld.',
    tag:         'Predigt & Anbetung',
  },
  {
    icon:        RiTeamLine,
    title:       'Bibelstunde',
    time:        'Mittwoch, 19:00 Uhr',
    description: 'Vertiefendes Bibelstudium in kleiner Gruppe — Fragen stellen, gemeinsam forschen und glauben.',
    tag:         'Gemeinsames Bibelstudium',
  },
  {
    icon:        RiGroupLine,
    title:       'Jugendgruppe',
    time:        'Freitag, 18:30 Uhr',
    description: 'Ein Ort für Teens und junge Erwachsene, um Glauben zu entdecken, Freundschaften zu schließen und zu wachsen.',
    tag:         'Teens & Junge Erwachsene',
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper id="gottesdienste" bg="cream">
      <AnimatedSection className="text-center mb-14">
        <span className="section-label block mb-3">Zeiten & Orte</span>
        <h2 className="text-balance">Gottesdienste & Zeiten</h2>
        <p className="font-sans text-church-gray mt-4 max-w-xl mx-auto text-base md:text-lg">
          Wir treffen uns regelmäßig — und jeder ist eingeladen, mitzukommen.
        </p>
      </AnimatedSection>

      {/* Cards */}
      <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <AnimatedItem key={service.title}>
              <article className="card-base p-7 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-church-navy/8 flex items-center justify-center mb-5 shrink-0">
                  <Icon size={24} className="text-church-navy" aria-hidden="true" />
                </div>
                <div className="inline-block bg-church-gold/15 text-church-gold font-sans text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3 self-start">
                  {service.time}
                </div>
                <h3 className="mb-3">{service.title}</h3>
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

      {/* Address + Map */}
      <AnimatedSection delay={0.3}>
        <div className="bg-white rounded-2xl shadow-sm p-7 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-72 shrink-0">
              <div className="flex items-center gap-3 mb-3">
                <RiMapPin2Line size={20} className="text-church-gold" aria-hidden="true" />
                <span className="font-serif font-semibold text-church-navy text-lg">Unser Standort</span>
              </div>
              <address className="font-sans text-church-gray not-italic text-sm leading-relaxed mb-5">
                Musterstraße 12<br />
                70173 Stuttgart<br />
                Deutschland
              </address>
              <Button as="link" href="/kontakt" variant="outline" size="sm">
                Weg planen
              </Button>
            </div>
            {/* Map placeholder */}
            <div className="flex-1 w-full">
              <div
                className="rounded-2xl overflow-hidden h-64 bg-church-navy/8 flex items-center justify-center border border-gray-100"
                role="img"
                aria-label="Karte: Musterstraße 12, 70173 Stuttgart"
              >
                <div className="text-center text-church-gray">
                  <RiMapPin2Line size={40} className="mx-auto mb-3 text-church-gold/60" aria-hidden="true" />
                  <p className="font-sans text-sm">Google Maps — Karte wird hier eingebettet</p>
                  <p className="font-sans text-xs text-church-gray/60 mt-1">Musterstraße 12, 70173 Stuttgart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
