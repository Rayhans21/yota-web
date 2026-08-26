import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative flex min-h-[100svh] items-center overflow-hidden bg-[#0a1628] md:min-h-screen'>
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
          <div className='relative'>
            {/* Background circle decoration */}
            <div className='absolute inset-0 rounded-full border-2 border-dashed border-red-200 scale-100 animate-spin' style={{ animationDuration: '30s' }} />

            {/* Logo */}
            <div className='relative w-48 h-48 rounded-full overflow-hidden shadow-2xl'>
              <Image src='/logo-yota-128.png' alt='Logo YOTA Indonesia' fill sizes='192px' loading='lazy' decoding='async' quality={70} className='object-cover' />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='relative z-10 mx-auto max-w-7xl px-6 pb-14 pt-24 sm:pb-16 lg:pt-20'>
        <div className='max-w-2xl'>
          {/* Eyebrow */}
          <div className='fade-up inline-flex items-center gap-2 mb-6'>
            <span className='font-mono text-xs text-red-400 tracking-[3px] uppercase'>Youngsters on the Air</span>
            <span className='w-8 h-px bg-red-500' />
            <span className='font-mono text-xs text-blue-400 tracking-[2px] uppercase'>Indonesia</span>
          </div>

          {/* Headline */}
          <h1 className='mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl'>
            <span className='text-red-500'>YOTA</span> adalah wadah eksplorasi bagi generasi muda
            <span className='relative inline-block'>
              <span className='absolute -bottom-1 left-0 right-0 h-[3px] bg-red-600 rounded' />
            </span>
          </h1>

          {/* Subheadline */}
          <p className='fade-up-delay-2 text-lg text-gray-300 leading-relaxed mb-10 max-w-xl'>
            YOTA adalah program internasional di bawah IARU yang menghubungkan anak muda pecinta teknologi dari seluruh dunia melalui radio amatir. Di Riau, pembinaan generasi muda direalisasikan dalam bentuk{' '}
            <span className='font-semibold text-red-500'>YOTA Academy Riau</span>. Dengan kader muda terlatih yang disebut <span className='font-semibold text-red-500'>YOTA Squad</span>.
          </p>

          {/* CTA buttons */}
          <div className='fade-up-delay-3 flex flex-col sm:flex-row gap-4' id='daftar'>
            <a href='https://bit.ly/YOTARiau' className='bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-full text-center transition-colors inline-flex items-center justify-center gap-2'>
              Bergabung Sekarang!
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </a>
            <a href='#kenapa' className='border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-full text-center transition-colors'>
              Apa yang Dipelajari?
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent' />
    </section>
  );
}
