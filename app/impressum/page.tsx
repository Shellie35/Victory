import type { Metadata } from 'next';
import SectionWrapper from '@/components/ui/SectionWrapper';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der Victory Baptist Church Stuttgart gemäß § 5 TMG.',
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <>
      <section className="bg-church-navy section-padding pt-40">
        <div className="container-base">
          <span className="section-label block mb-3 text-church-gold">Legal Notice</span>
          <h1 className="text-white text-4xl md:text-5xl">Impressum</h1>
        </div>
      </section>

      <SectionWrapper bg="cream">
        <div className="prose-church max-w-3xl">

          <h2>Angaben gemäß § 5 TMG</h2>

          <p>
            <strong>Victory Baptist Church Stuttgart</strong><br />
            Schulze-Delitzsch-Straße 30<br />
            70565 Stuttgart<br />
            Deutschland
          </p>

          <h2>Kontakt</h2>
          <p>
            E-Mail:{' '}
            <a href="mailto:info@victorybaptist-stuttgart.de">
              info@victorybaptist-stuttgart.de
            </a>
            <br />
            {/* TODO: Telefonnummer eintragen */}
            Telefon: [Telefonnummer eintragen]
          </p>

          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            {/* TODO: Name des Pastors / Vorstands eintragen */}
            [Name des Verantwortlichen]<br />
            Schulze-Delitzsch-Straße 30<br />
            70565 Stuttgart
          </p>

          <h2>Rechtlicher Hinweis</h2>
          <p>
            Victory Baptist Church Stuttgart ist eine unabhängige Baptistengemeinde. Sie ist keine
            Körperschaft des öffentlichen Rechts.{' '}
            {/* TODO: Falls als e.V. eingetragen, hier ergänzen:
                Eingetragen im Vereinsregister beim Amtsgericht [Ort], VR [Nummer] */}
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr
            übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
            diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
            übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
            bzw. Erstellers.
          </p>

        </div>
      </SectionWrapper>
    </>
  );
}
