export default function CTA() {
  return (
    <section className='py-24 bg-white'>
      <div className='max-w-3xl mx-auto px-6 text-center'>
        <p className='font-mono text-xs text-red-600 tracking-[3px] uppercase mb-5'>Bergabung dengan YOTA Academy</p>
        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6'>
          Tertarik ikut kegiatan <span className='text-red-600'>YOTA Academy</span>?
        </h2>
        <p className='text-gray-500 text-lg leading-relaxed mb-10 max-w-xl mx-auto'>
          Kamu tidak perlu langsung menjadi anggota ORARI atau punya lisensi radio amatir. Hubungi kami untuk info kegiatan dan cara bergabung sebagai bagian dari YOTA Squad.
        </p>

        <a
          href='https://wa.me/6285111437373?text=Halo%2C%20saya%20tertarik%20dengan%20kegiatan%20YOTA%20Academy%20dan%20ingin%20tahu%20lebih%20banyak'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-4 rounded-full text-lg transition-colors shadow-lg shadow-red-200'
        >
          {/* WhatsApp icon */}
          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
          </svg>
          Tanya via WhatsApp
        </a>

        <p className='mt-4 text-xs text-gray-400 font-mono tracking-wider'>YOUNGSTERS ON THE AIR INDONESIA · YOTA ACADEMY · ORARI DAERAH RIAU</p>
      </div>
    </section>
  );
}
