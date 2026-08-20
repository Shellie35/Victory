import type { Metadata } from 'next';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import TeamSection from '@/components/sections/TeamSection';
import BibleVerseSection from '@/components/sections/BibleVerseSection';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Victory Baptist Church Stuttgart — our mission, beliefs, and the people behind our congregation.',
};

const beliefs = [
  {
    title: 'The Holy Scriptures',
    text:  'The Holy Scriptures, both the Old and New Testaments, are given by God. Holy men of God spoke as they were moved by the Holy Ghost. The Bible is inerrant and preserved by God — the supreme authority in all matters of doctrine and life. We only use the King James Bible.',
  },
  {
    title: 'The Lord Jesus Christ',
    text:  'Jesus Christ is the only begotten Son of the Father, who exists eternally as Almighty God and was born of a virgin. He lived a sinless life, and His death on the cross was both sufficient and vicarious for the sins of the whole world. After atoning for sins with His own blood, He ascended to heaven with a glorified body. Today, He sits at the right hand of the Father and intercedes for His own.',
  },
  {
    title: 'Salvation',
    text:  'Salvation is by grace through faith. Christ\'s substitutionary death on the cross was all that was necessary to bring sinful man back to God. Every person must be born again to enter the kingdom of God. God accomplishes regeneration whenever a sinner places his trust in the finished work of Jesus Christ for the salvation of his soul.',
  },
  {
    title: 'The Local Church',
    text:  'The New Testament church is an autonomous, visible, called-out assembly of baptized believers who have voluntarily joined together to fulfil God\'s commission. The local church preaches the gospel to the lost, baptizes them, and teaches them to obey all that our Saviour has commanded. The Lord Jesus places shepherds over the church whose task is to protect, guide, and feed the sheep.',
  },
  {
    title: 'Creation',
    text:  'God created the heaven and the earth and all things therein in six literal days. We reject the modern-day teaching of evolution from one kind of living creature to another.',
  },
  {
    title: 'The Triune God',
    text:  'There is one, and only one, living and true God — an infinite, intelligent Spirit, the maker and supreme ruler of heaven and earth, inexpressibly glorious in holiness. In the unity of the Godhead there are three persons — the Father, the Son, and the Holy Ghost — equal in every divine perfection and executing distinct but harmonious offices in the great work of redemption.',
  },
  {
    title: 'Language in Worship',
    text:  'In our services, we only use languages that are understood by the congregation. Foreign languages are therefore allowed only when translation is provided. Our main services are conducted entirely in English.',
  },
  {
    title: 'The Resurrection & Second Coming',
    text:  'Christ rose bodily on the third day according to the Scriptures and ascended to the right hand of the throne of God. He alone is our merciful and faithful high priest. He shall return bodily, personally, and visibly. The dead in Christ shall rise first; the living saints shall be changed in a moment. Christ shall reign a thousand years in righteousness until He hath put all enemies under His feet.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-church-navy section-padding pt-40">
        <div className="container-base text-center">
          <AnimatedSection>
            <span className="section-label block mb-4 text-church-gold">Our Story & Beliefs</span>
            <h1 className="text-white text-5xl md:text-6xl mb-6">About Us</h1>
            <p className="font-lora italic text-white/80 text-xl max-w-2xl mx-auto text-balance">
              An English-speaking Baptist church with a heart for Stuttgart&apos;s international community.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Who we are */}
      <SectionWrapper bg="cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <AnimatedSection>
            <span className="section-label block mb-3">Our Mission</span>
            <h2 className="mb-6">Who We Are</h2>
            <div className="space-y-5 text-church-gray font-sans text-base md:text-lg leading-relaxed">
              <p>
                Victory Baptist Church exists to preach the Gospel of Salvation in Jesus Christ to the
                international community of Stuttgart. Our heartfelt prayer is for people to know the Lord
                Jesus Christ as their personal Saviour and become actively involved in a Bible-believing,
                Bible-preaching church that cares for them.
              </p>
              <p>
                We are an independent Baptist church — no denominations, no bishop hierarchies. The King
                James Bible is our sole authority. We hold to classical, sound Baptist doctrine with a
                traditional focus, while remaining warm and welcoming to all who come through our doors.
              </p>
              <p>
                Our congregation is truly international — expats, military personnel from nearby Patch
                Barracks and Kelley Barracks, foreign workers, students, and international families from
                across Stuttgart and the surrounding area. Every two to three Sundays, new faces walk
                through our doors. Everyone is welcome.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <blockquote className="bible-quote text-lg md:text-xl leading-relaxed mb-4" cite="Romans 1:16">
              For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation
              to every one that believeth; to the Jew first, and also to the Greek.
            </blockquote>
            <footer className="font-sans text-sm uppercase tracking-widest text-church-gold mt-3 mb-8">
              <cite>Romans 1:16 (KJV)</cite>
            </footer>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-sans text-church-gray text-sm leading-relaxed italic">
                &ldquo;Whether you are weak, discouraged, afraid, struggling, or unsure of yourself —
                we will love you as Christ has loved us.&rdquo;
              </p>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* What we believe */}
      <SectionWrapper bg="white">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label block mb-3">Our Foundation</span>
          <h2 className="text-balance">What We Believe</h2>
          <p className="font-sans text-church-gray mt-4 max-w-xl mx-auto text-base md:text-lg">
            Sound doctrine. Clear truth. The Bible alone.
          </p>
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {beliefs.map((belief) => (
            <AnimatedItem key={belief.title}>
              <div className="card-base p-7 h-full">
                <div className="w-8 h-1 bg-church-gold rounded-full mb-5" aria-hidden="true" />
                <h3 className="text-base mb-3 leading-snug">{belief.title}</h3>
                <p className="font-sans text-church-gray text-sm leading-relaxed">{belief.text}</p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="mt-10 text-center">
          <p className="font-sans text-church-gray text-sm mb-4">
            Want to know more about salvation and what the Bible teaches?
          </p>
          <Button as="link" href="/contact" variant="primary" size="md">
            Ask Us Anything
          </Button>
        </AnimatedSection>
      </SectionWrapper>

      {/* First-time visitor info */}
      <SectionWrapper bg="cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <AnimatedSection>
            <span className="section-label block mb-3">Planning Your Visit</span>
            <h2 className="mb-6">What to Expect</h2>
            <div className="space-y-4 text-church-gray font-sans text-base md:text-lg leading-relaxed">
              <p>
                Expect a blessed time among loving people. Our services are conducted entirely in
                English, with a warm and traditional Baptist style of worship.
              </p>
              <ul className="space-y-3 mt-4">
                {[
                  'Bring your children — there are activities for every age group',
                  'Nursery provided for children ages 0–3 during all services',
                  'Junior Church for children 4–12 during the Sunday morning service',
                  'Free parking available onsite — no need to worry about a space',
                  'No dress code — come as you are',
                  'Services are in English; German service at 9:00 AM',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-church-gold mt-2.5 shrink-0" aria-hidden="true" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-church-navy text-white rounded-2xl p-8 md:p-10">
              <span className="section-label block mb-4 text-church-gold">German Speakers</span>
              <h3 className="text-white text-xl mb-4">Sprechen Sie Deutsch?</h3>
              <p className="font-sans text-white/80 text-sm leading-relaxed mb-6">
                We hold a German-language service every Sunday at <strong className="text-white">9:00 AM</strong>.
                German-speaking visitors are also warmly referred to our sister church:
              </p>
              <a
                href="https://www.wgg-baptisten.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-church-gold text-church-gold hover:bg-church-gold hover:text-white transition-colors font-sans font-medium rounded-full px-6 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Wort Gottes Gemeinde →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      <TeamSection />
      <BibleVerseSection />

      {/* CTA */}
      <SectionWrapper bg="cream">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <span className="section-label block mb-3">You Are Invited</span>
          <h2 className="mb-6 text-balance">Come and See for Yourself</h2>
          <p className="font-sans text-church-gray text-base md:text-lg mb-8">
            No registration needed. Just come on Sunday at 10:45 AM to Schulze-Delitzsch-Straße 30,
            70565 Stuttgart — and we will take care of the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/services" variant="primary" size="md">
              Service Times & Location
            </Button>
            <Button as="link" href="/contact" variant="outline" size="md">
              Contact Us
            </Button>
          </div>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}
