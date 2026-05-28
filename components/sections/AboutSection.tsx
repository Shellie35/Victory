import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';

const values = [
  { icon: '📖', label: 'Bibel',        color: 'text-church-olive' },
  { icon: '🤝', label: 'Gemeinschaft', color: 'text-church-olive' },
  { icon: '🌱', label: 'Wachstum',     color: 'text-church-olive' },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="ueber-uns" bg="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* Left: text */}
        <AnimatedSection>
          <span className="section-label block mb-3">Wer wir sind</span>
          <h2 className="mb-6 text-balance">
            Eine Gemeinschaft, gegründet auf Glauben
          </h2>

          <div className="space-y-5 text-church-gray">
            <p className="font-sans text-base md:text-lg leading-relaxed">
              Victory Baptist Church ist eine englischsprachige, unabhängige Baptistengemeinde
              mit Herz für die internationale Gemeinschaft in Stuttgart. Wir freuen uns über
              jeden, der Gott kennenlernen oder seinen Glauben vertiefen möchte.
            </p>
            <p className="font-sans text-base md:text-lg leading-relaxed">
              Unser Fundament ist die Bibel — das unveränderliche Wort Gottes. Wir glauben
              an die erlösende Gnade Jesu Christi und laden Menschen aus allen Nationen und
              Kulturen ein, Teil unserer Gemeinschaft zu werden.
            </p>
            <p className="font-sans text-base md:text-lg leading-relaxed">
              Ob du neu in der Stadt bist, nach einer Kirchenheimat suchst oder einfach neugierig
              bist — bei uns bist du herzlich willkommen. Komm so, wie du bist.
            </p>
          </div>

          {/* Value chips */}
          <div className="flex flex-wrap gap-3 mt-8" role="list" aria-label="Unsere Werte">
            {values.map(({ icon, label, color }) => (
              <div
                key={label}
                role="listitem"
                className="inline-flex items-center gap-2 bg-church-olive/10 text-church-olive rounded-full px-4 py-2 font-sans text-sm font-medium"
              >
                <span aria-hidden="true">{icon}</span>
                <span className={color}>{label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Right: decorative Bible verse card */}
        <AnimatedSection delay={0.2}>
          <div className="bg-church-cream rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden">
            {/* Decorative large quote mark */}
            <span
              className="absolute -top-4 -left-2 font-serif text-8xl text-church-gold/20 leading-none select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote className="bible-quote relative z-10 text-lg md:text-xl leading-relaxed" cite="Römer 1:16">
              Denn ich schäme mich des Evangeliums nicht; denn es ist eine Kraft Gottes zur
              Seligkeit für jeden, der glaubt, für den Juden zuerst und auch für den Griechen.
            </blockquote>
            <footer className="mt-4 font-sans text-sm uppercase tracking-widest text-church-gold">
              <cite>Römer 1:16</cite>
            </footer>

            {/* Decorative accent */}
            <div className="mt-8 pt-8 border-t border-church-gold/20">
              <p className="font-sans text-sm text-church-gray italic">
                Gegründet auf das unveränderte Wort Gottes seit unseren ersten Gottesdiensten
                in Stuttgart.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
