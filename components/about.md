import Image from 'next/image';

export default function About() {
  return (
    <section id='tentang' className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left: text */}
          <div>
            <p className='font-mono text-xs text-red-600 tracking-[3px] uppercase mb-4'>Tentang YOTA</p>
            <h2 className='text-4xl font-bold text-gray-900 leading-tight mb-6'>
              Bukan sekadar komunitas,
              <br />
              <span className='text-red-600'>YOTA</span> adalah wadah eksplorasi bagi generasi muda.
            </h2>
            <p className='text-gray-600 leading-relaxed mb-6 text-lg'>
              YOTA (Youngsters On The Air) adalah program internasional di bawah IARU yang menghubungkan anak muda pecinta teknologi dari seluruh dunia melalui radio amatir. Di Riau, pembinaan generasi muda direalisasikan dalam bentuk{' '}
              <span className='font-semibold text-gray-900'>YOTA Academy</span> ORARI Daerah Riau. Dengan kader muda terlatih yang disebut <span className='font-semibold text-gray-900'>YOTA Squad</span>.
            </p>
            <p className='text-gray-600 leading-relaxed mb-10'>
              Kami percaya bahwa antena bukan sekadar kabel dan logam — ia adalah jembatan antara penasaran dan penemuan. Di YOTA Academy, kami bereksperimen dengan satelit amatir, membangun sensor kebencanaan dari nol, dan berbicara
              langsung dengan operator radio dari 340 entitas negara.
            </p>

            {/* Badges */}
            <div className='flex flex-wrap gap-2'>
              {['S.T.E.M', 'Radio Amatir', 'IoT Terapan', 'Satelit', 'ARDF', 'Morse Code'].map((tag) => (
                <span key={tag} className='font-mono text-xs bg-gray-100 text-gray-700 border border-gray-200 px-3 py-1.5 rounded-full'>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: logo + decorative */}
          <div className='relative flex items-center justify-center'>
            <div className='relative'>
              {/* Background circle decoration */}
              <div className='absolute inset-0 rounded-full bg-gradient-to-br from-red-50 to-blue-50 scale-110' />
              <div className='absolute inset-0 rounded-full border-2 border-dashed border-red-200 scale-125 animate-spin' style={{ animationDuration: '30s' }} />

              {/* Logo */}
              <div className='relative w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white'>
                <Image src='/logo-yota.png' alt='Logo YOTA Indonesia' fill className='object-cover' />
              </div>
            </div>

            {/* Floating badge */}
            <div className='absolute -bottom-4 -right-4 bg-red-600 text-white rounded-2xl px-5 py-3 shadow-xl'>
              <div className='font-mono text-xs tracking-widest opacity-80 mb-0.5'>EST.</div>
              <div className='font-bold text-xl leading-none'>IARU</div>
              <div className='font-mono text-[10px] tracking-widest opacity-80'>REGION 3</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
