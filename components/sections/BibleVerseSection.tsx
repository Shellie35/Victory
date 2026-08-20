import AnimatedSection from '@/components/ui/AnimatedSection';

export default function BibleVerseSection() {
  return (
    <section className="bg-church-navy section-padding relative overflow-hidden">
      {/* Decorative leaf shapes */}
      <svg
        className="absolute left-0 top-1/2 -translate-y-1/2 opacity-5 h-64 w-auto"
        viewBox="0 0 120 200"
        fill="none"
        aria-hidden="true"
      >
        <path d="M60 200 C20 160 0 120 20 80 C40 40 80 20 60 0 C40 20 80 40 100 80 C120 120 100 160 60 200Z" fill="#C8A45D"/>
      </svg>
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 h-64 w-auto rotate-180"
        viewBox="0 0 120 200"
        fill="none"
        aria-hidden="true"
      >
        <path d="M60 200 C20 160 0 120 20 80 C40 40 80 20 60 0 C40 20 80 40 100 80 C120 120 100 160 60 200Z" fill="#C8A45D"/>
      </svg>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <AnimatedSection>
          <div
            className="font-serif text-9xl text-church-gold/20 leading-none mb-4 select-none h-16 flex items-center justify-center"
            aria-hidden="true"
          >
            &ldquo;
          </div>

          <blockquote className="font-lora italic text-white text-2xl md:text-3xl leading-relaxed text-balance" cite="Matthew 11:28">
            Come unto me, all ye that labour and are heavy laden, and I will give you rest.
          </blockquote>

          <footer className="mt-6">
            <cite className="font-sans text-sm uppercase tracking-widest text-church-gold not-italic">
              Matthew 11:28 (KJV)
            </cite>
          </footer>
        </AnimatedSection>
      </div>
    </section>
  );
}
