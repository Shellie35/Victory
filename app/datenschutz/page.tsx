import type { Metadata } from 'next';
import SectionWrapper from '@/components/ui/SectionWrapper';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Victory Baptist Church Stuttgart gemäß DSGVO.',
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <>
      <section className="bg-church-navy section-padding pt-40">
        <div className="container-base">
          <span className="section-label block mb-3 text-church-gold">Privacy</span>
          <h1 className="text-white text-4xl md:text-5xl">Datenschutzerklärung</h1>
        </div>
      </section>

      <SectionWrapper bg="cream">
        <div className="prose-church max-w-3xl">

          <h2>1. Verantwortliche Stelle</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p>
            <strong>Victory Baptist Church Stuttgart</strong><br />
            Schulze-Delitzsch-Straße 30<br />
            70565 Stuttgart<br />
            E-Mail:{' '}
            <a href="mailto:info@victorybaptist-stuttgart.de">
              info@victorybaptist-stuttgart.de
            </a>
          </p>

          <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>

          <h3>a) Server-Logfiles</h3>
          <p>
            Beim Besuch dieser Website übermittelt Ihr Browser automatisch Informationen an den
            Server, auf dem diese Website gehostet wird. Diese Informationen werden in sogenannten
            Server-Logfiles gespeichert und umfassen:
          </p>
          <ul>
            <li>IP-Adresse des anfragenden Geräts</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
            <li>Verwendeter Browser und ggf. das Betriebssystem</li>
          </ul>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an der Sicherheit und dem Betrieb der Website). Die Logfiles
            werden nach spätestens 30 Tagen gelöscht.
          </p>

          <h3>b) Kontaktformular</h3>
          <p>
            Wenn Sie uns über das Kontaktformular auf dieser Website eine Nachricht senden, werden
            folgende Daten verarbeitet:
          </p>
          <ul>
            <li>Name</li>
            <li>E-Mail-Adresse</li>
            <li>Betreff (Thema Ihrer Anfrage)</li>
            <li>Inhalt Ihrer Nachricht</li>
          </ul>
          <p>
            Die Verarbeitung erfolgt ausschließlich zur Bearbeitung Ihrer Anfrage auf Grundlage von
            Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen) bzw. Art. 6 Abs. 1
            lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten werden
            nicht an Dritte weitergegeben und nach Abschluss der Bearbeitung gelöscht, sofern keine
            gesetzlichen Aufbewahrungspflichten bestehen.
          </p>

          <h2>3. Cookies</h2>
          <p>
            Diese Website verwendet keine Tracking-Cookies oder Cookies zu Werbe- und
            Analysezwecken. Es werden ausschließlich technisch notwendige Cookies eingesetzt, die
            für den Betrieb der Website erforderlich sind (z. B. Sitzungscookies). Diese Cookies
            werden automatisch gelöscht, wenn Sie Ihren Browser schließen. Einer Einwilligung
            bedarf es hierfür nicht (Art. 6 Abs. 1 lit. f DSGVO).
          </p>

          <h2>4. Schriftarten</h2>
          <p>
            Diese Website verwendet Google Fonts. Die Schriftdateien werden jedoch beim
            Erstellen der Website heruntergeladen und auf unserem eigenen Server ausgeliefert
            (Self-Hosting). Es werden daher beim Laden der Seite <strong>keine Verbindungen zu
            Google-Servern</strong> hergestellt und keine Daten an Google übertragen.
          </p>

          <h2>5. Hosting</h2>
          <p>
            Diese Website wird bei einem externen Hosting-Anbieter betrieben. Personenbezogene
            Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters
            gespeichert. Die Verarbeitung erfolgt auf Grundlage eines Auftragsverarbeitungsvertrags
            (AVV) gemäß Art. 28 DSGVO.
            {/* TODO: Hosting-Anbieter und ggf. Serverstandort ergänzen */}
          </p>

          <h2>6. Ihre Rechte</h2>
          <p>Sie haben gegenüber uns folgende Rechte:</p>
          <ul>
            <li>
              <strong>Auskunftsrecht</strong> (Art. 15 DSGVO): Sie können Auskunft über die von
              uns verarbeiteten personenbezogenen Daten verlangen.
            </li>
            <li>
              <strong>Berichtigungsrecht</strong> (Art. 16 DSGVO): Sie können die Berichtigung
              unrichtiger Daten verlangen.
            </li>
            <li>
              <strong>Löschungsrecht</strong> (Art. 17 DSGVO): Sie können unter bestimmten
              Voraussetzungen die Löschung Ihrer Daten verlangen.
            </li>
            <li>
              <strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO): Sie können die
              Einschränkung der Verarbeitung Ihrer Daten verlangen.
            </li>
            <li>
              <strong>Widerspruchsrecht</strong> (Art. 21 DSGVO): Sie können der Verarbeitung
              Ihrer Daten widersprechen, soweit diese auf berechtigten Interessen beruht.
            </li>
            <li>
              <strong>Beschwerderecht</strong>: Sie haben das Recht, sich bei der zuständigen
              Datenschutz-Aufsichtsbehörde zu beschweren. In Baden-Württemberg ist dies der
              Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg
              (LfDI BW), Postfach 10 29 32, 70025 Stuttgart.
            </li>
          </ul>
          <p>
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
            <a href="mailto:info@victorybaptist-stuttgart.de">
              info@victorybaptist-stuttgart.de
            </a>
          </p>

          <h2>7. Aktualität dieser Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand August 2025. Durch die
            Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher
            Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
          </p>

        </div>
      </SectionWrapper>
    </>
  );
}
