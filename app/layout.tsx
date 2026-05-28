import type { Metadata } from 'next';
import { Playfair_Display, Inter, Lora } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.victorybaptist-stuttgart.de'),
  title: {
    default: 'Victory Baptist Church Stuttgart',
    template: '%s | Victory Baptist Church Stuttgart',
  },
  description:
    'Eine englischsprachige, unabhängige Baptistengemeinde in Stuttgart. Gottesdienste sonntags um 10 Uhr. Alle sind willkommen.',
  keywords: ['Baptist', 'Stuttgart', 'Kirche', 'Church', 'englisch', 'Gottesdienst', 'Germany'],
  authors: [{ name: 'Victory Baptist Church Stuttgart' }],
  creator: 'Victory Baptist Church Stuttgart',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.victorybaptist-stuttgart.de',
    siteName: 'Victory Baptist Church Stuttgart',
    title: 'Victory Baptist Church Stuttgart',
    description:
      'Eine englischsprachige, unabhängige Baptistengemeinde in Stuttgart. Gottesdienste sonntags um 10 Uhr.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Victory Baptist Church Stuttgart',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Victory Baptist Church Stuttgart',
    description: 'Eine englischsprachige, unabhängige Baptistengemeinde in Stuttgart.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.victorybaptist-stuttgart.de',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable} ${lora.variable}`}>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Zum Hauptinhalt springen
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
