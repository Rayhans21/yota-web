import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative min-h-screen bg-[#0a1628] overflow-hidden flex items-center'>
      {/* Dot grid background */}
      <div className='absolute inset-0 dot-grid opacity-20' />

      {/* Red diagonal accent */}
      <div className='absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-red-700/20 to-transparent' />

      {/* Animated radio rings */}
      <div className='absolute right-16 top-1/2 -translate-y-1/2 hidden lg:block'>
        <div className='relative w-80 h-80 flex items-center justify-center'>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className='ripple-ring absolute rounded-full border border-red-500/40'
              style={{
                width: `${(i + 1) * 80}px`,
                height: `${(i + 1) * 80}px`,
                animationDelay: `${i * 0.8}s`,
              }}
            />
          ))}
          {/* Logo in center */}
          <div className='relative z-10 w-28 h-28 rounded-full overflow-hidden border-2 border-red-500/50 shadow-lg shadow-red-900/30'>
            <Image src='/logo-yota.png' alt='YOTA Indonesia' fill className='object-cover' />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 lg:pt-20'>
        <div className='max-w-2xl'>
          {/* Eyebrow */}
          <div className='fade-up inline-flex items-center gap-2 mb-6'>
            <span className='font-mono text-xs text-red-400 tracking-[3px] uppercase'>Youngsters on the Air</span>
            <span className='w-8 h-px bg-red-500' />
            <span className='font-mono text-xs text-blue-400 tracking-[2px] uppercase'>Indonesia</span>
          </div>

          {/* Headline */}
          <h1 className='fade-up-delay-1 text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight'>
            Di sini, <span className='text-red-500'>teknologi</span> bukan sekadar teori.{' '}
            <span className='relative inline-block'>
              Tapi petualangan.
              <span className='absolute -bottom-1 left-0 right-0 h-[3px] bg-red-600 rounded' />
            </span>
          </h1>

          {/* Subheadline */}
          <p className='fade-up-delay-2 text-lg text-gray-300 leading-relaxed mb-10 max-w-xl'>
            YOTA adalah tempat berkumpulnya anak muda kreatif yang haus akan eksplorasi. Kita tidak langsung bicara tentang keanggotaan formal, melainkan mengajakmu untuk merasakan serunya dunia{' '}
            <span className='text-white font-medium'>radio amatir, merakit elektronika, eksperimen komunikasi digital,</span> dan <span className='text-white font-medium'>teknologi STEM terapan</span> langsung dengan tanganmu sendiri!
          </p>

          {/* CTA buttons */}
          <div className='fade-up-delay-3 flex flex-col sm:flex-row gap-4' id='daftar'>
            <a href='#kenapa' className='bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-full text-center transition-colors inline-flex items-center justify-center gap-2'>
              Rasakan Keseruannya
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </a>
            <a href='#kegiatan' className='border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-full text-center transition-colors'>
              Lihat Dokumentasi Kegiatan
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent' />
    </section>
  );
}
