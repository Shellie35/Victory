'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { RiMapPin2Line, RiTimeLine, RiMailLine, RiFacebookFill, RiInstagramLine, RiYoutubeFill } from 'react-icons/ri';
import Button from '@/components/ui/Button';
import { useState, FormEvent } from 'react';

const inputClass =
  'w-full rounded-xl border border-gray-200 bg-white px-5 py-4 font-sans text-base text-church-navy placeholder-church-gray/60 ' +
  'focus:outline-none focus:border-church-navy focus:ring-2 focus:ring-church-gold/30 transition-all duration-200 min-h-[52px]';

const socialLinks = [
  { icon: RiFacebookFill, label: 'Facebook',  href: '#' },
  { icon: RiInstagramLine, label: 'Instagram', href: '#' },
  { icon: RiYoutubeFill,  label: 'YouTube',   href: '#' },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 800);
  }

  return (
    <SectionWrapper id="kontakt" bg="cream">
      <AnimatedSection className="text-center mb-14">
        <span className="section-label block mb-3">Wir freuen uns von dir zu hören</span>
        <h2 className="text-balance">Kontakt</h2>
        <p className="font-sans text-church-gray mt-4 max-w-xl mx-auto text-base md:text-lg">
          Fragen, Gebetsanliegen oder einfach ein Hallo — schreib uns gerne.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* Left: Form */}
        <AnimatedSection>
          {submitted ? (
            <div className="card-base p-10 text-center">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="mb-3">Danke für deine Nachricht!</h3>
              <p className="font-sans text-church-gray">
                Wir melden uns so bald wie möglich bei dir. Bis bald!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="card-base p-7 md:p-10 space-y-5"
              noValidate
            >
              <div>
                <label htmlFor="name" className="font-sans text-sm font-medium text-church-navy mb-2 block">
                  Name <span className="text-church-gold" aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Dein vollständiger Name"
                  className={inputClass}
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="font-sans text-sm font-medium text-church-navy mb-2 block">
                  E-Mail <span className="text-church-gold" aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="deine@email.de"
                  className={inputClass}
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="subject" className="font-sans text-sm font-medium text-church-navy mb-2 block">
                  Betreff
                </label>
                <select
                  id="subject"
                  name="subject"
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="" disabled>Bitte wählen…</option>
                  <option value="allgemein">Allgemeine Anfrage</option>
                  <option value="gottesdienst">Gottesdienst</option>
                  <option value="gebet">Gebetsanliegen</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="font-sans text-sm font-medium text-church-navy mb-2 block">
                  Nachricht <span className="text-church-gold" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Deine Nachricht…"
                  className={`${inputClass} min-h-[120px] resize-y`}
                  aria-required="true"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={loading}
                aria-label="Nachricht absenden"
              >
                {loading ? 'Wird gesendet…' : 'Nachricht senden'}
              </Button>

              <p className="font-sans text-xs text-church-gray/60 text-center">
                Deine Daten werden vertraulich behandelt und nicht weitergegeben.
              </p>
            </form>
          )}
        </AnimatedSection>

        {/* Right: Info card */}
        <AnimatedSection delay={0.2}>
          <div className="bg-church-navy text-white rounded-2xl p-8 md:p-10 h-full flex flex-col">
            <h3 className="font-serif font-semibold text-xl text-white mb-8">Besuche uns</h3>

            <ul className="space-y-6 flex-1" role="list">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <RiMapPin2Line size={18} className="text-church-gold" aria-hidden="true" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-widest text-church-gold block mb-1">Adresse</span>
                  <address className="font-sans text-white/85 not-italic text-sm leading-relaxed">
                    Musterstraße 12<br />70173 Stuttgart
                  </address>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <RiTimeLine size={18} className="text-church-gold" aria-hidden="true" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-widest text-church-gold block mb-1">Gottesdienst</span>
                  <p className="font-sans text-white/85 text-sm">Sonntags, 10:00 Uhr</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <RiMailLine size={18} className="text-church-gold" aria-hidden="true" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-widest text-church-gold block mb-1">E-Mail</span>
                  <a
                    href="mailto:info@victorybaptist-stuttgart.de"
                    className="font-sans text-white/85 text-sm hover:text-church-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded"
                  >
                    info@victorybaptist-stuttgart.de
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/15">
              <p className="font-sans text-xs text-white/50 mb-4 uppercase tracking-widest">Folge uns</p>
              <div className="flex gap-3" role="list" aria-label="Social Media">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-church-gold flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
