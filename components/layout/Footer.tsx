import Link from 'next/link';
import { RiFacebookFill, RiInstagramLine, RiYoutubeFill, RiMapPin2Line, RiTimeLine, RiMailLine } from 'react-icons/ri';

const quickLinks = [
  { label: 'Gottesdienste', href: '/gottesdienste' },
  { label: 'Predigten',     href: '/predigten' },
  { label: 'Über uns',      href: '/ueber-uns' },
  { label: 'Kontakt',       href: '/kontakt' },
];

const socialLinks = [
  { icon: RiFacebookFill, label: 'Facebook',  href: '#' },
  { icon: RiInstagramLine, label: 'Instagram', href: '#' },
  { icon: RiYoutubeFill,  label: 'YouTube',   href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-church-navy text-white" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Col 1: Logo + tagline */}
          <div>
            <Link href="/" className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded">
              <span className="font-serif font-bold text-xl text-white block">Victory Baptist Church</span>
              <span className="font-sans text-xs text-church-gold tracking-widest uppercase mt-1 block">Stuttgart</span>
            </Link>
            <p className="font-sans text-sm text-white/60 mt-4 leading-relaxed">
              Eine englischsprachige, unabhängige Baptistengemeinde.<br />
              Alle sind willkommen.
            </p>
            <p className="font-lora italic text-church-gold/80 text-sm mt-5 tracking-wide">
              Gemeinschaft · Glaube · Hoffnung
            </p>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h3 className="font-sans text-sm uppercase tracking-widest text-church-gold mb-5 not-italic text-base">
              Schnellzugriff
            </h3>
            <ul className="space-y-3" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-white/80 hover:text-church-gold transition-colors duration-200 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Address + social */}
          <div>
            <h3 className="font-sans text-sm uppercase tracking-widest text-church-gold mb-5 not-italic text-base">
              Besuche uns
            </h3>
            <ul className="space-y-3 text-white/80 text-sm" role="list">
              <li className="flex items-start gap-3">
                <RiMapPin2Line className="shrink-0 mt-0.5 text-church-gold" size={16} aria-hidden="true" />
                <span>Musterstraße 12, 70173 Stuttgart</span>
              </li>
              <li className="flex items-start gap-3">
                <RiTimeLine className="shrink-0 mt-0.5 text-church-gold" size={16} aria-hidden="true" />
                <span>Sonntags, 10:00 Uhr</span>
              </li>
              <li className="flex items-start gap-3">
                <RiMailLine className="shrink-0 mt-0.5 text-church-gold" size={16} aria-hidden="true" />
                <a
                  href="mailto:info@victorybaptist-stuttgart.de"
                  className="hover:text-church-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded"
                >
                  info@victorybaptist-stuttgart.de
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-6" role="list" aria-label="Social Media">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-church-gold flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-sans text-white/40 text-xs">
            © {new Date().getFullYear()} Victory Baptist Church Stuttgart. Alle Rechte vorbehalten.
          </p>
          <p className="font-sans text-white/30 text-xs">
            Sola Scriptura · Sola Fide · Sola Gratia
          </p>
        </div>
      </div>
    </footer>
  );
}
