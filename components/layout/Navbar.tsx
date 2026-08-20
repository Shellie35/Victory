'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import Button from '@/components/ui/Button';

const navLinks = [
  { label: 'Home',      href: '/' },
  { label: 'Services',  href: '/services' },
  { label: 'Sermons',   href: '/sermons' },
  { label: 'About Us',  href: '/about' },
  { label: 'Contact',   href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navBg = scrolled
    ? 'bg-white shadow-md'
    : 'bg-white shadow-sm';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between" aria-label="Main navigation">

        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded">
          <span className="font-serif font-bold text-lg text-church-navy">
            Victory Baptist Church
          </span>
          <span className="font-sans text-xs text-church-gold tracking-widest uppercase">Stuttgart</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-sans text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded
                    ${active
                      ? 'text-church-gold underline underline-offset-4'
                      : 'text-church-navy hover:text-church-gold'
                    }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button as="link" href="/services" variant="primary" size="sm">
            Join Us
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold transition-colors text-church-navy"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <RiCloseLine size={26} /> : <RiMenuLine size={26} />}
        </button>
      </nav>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-church-navy flex flex-col pt-24 px-8 pb-12"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <ul className="flex flex-col gap-6 flex-1" role="list">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-serif text-3xl font-semibold transition-colors duration-200
                      ${active ? 'text-church-gold' : 'text-white hover:text-church-gold'}`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-8">
            <Button as="link" href="/services" variant="gold" fullWidth size="lg">
              Join Us Sunday
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
