const timeline = [
  {
    period: 'Tahap 1',
    title: 'Gathering & Mobile Station Satelit',
    desc: 'Latihan komunikasi via satelit orbit rendah (LEO) IO-86 atau SO-50 menggunakan transceiver genggam sederhana.',
  },
  {
    period: 'Tahap 2',
    title: 'Solder Bareng & Perakitan APRS',
    desc: 'Menyolder komponen elektronika dasar dan merakit pemancar APRS (Automatic Packet Reporting System) yang terintegrasi GPS.',
  },
  {
    period: 'Tahap 3',
    title: 'ARDF Fox Hunting & Navigasi',
    desc: 'Melacak sinyal pemancar radio tersembunyi menggunakan penerima khusus, dipadukan dengan teknik navigasi darat.',
  },
  {
    period: 'Tahap 4',
    title: 'JOTA-JOTI & YOTA Camp',
    desc: 'Berpartisipasi dalam JOTA-JOTI sebagai fasilitator bagi anggota Pramuka. Anggota YOTA Squad yang aktif dan berprestasi berkesempatan diproyeksikan mengikuti YOTA Camp IARU Region 3.',
  },
];

const galleryPhotos = [
  {
    title: 'Kontak Satelit LEO',
    desc: 'Latihan komunikasi suara melalui satelit orbit rendah IO-86.',
  },
  {
    title: 'Perakitan Node APRS & Telemetri',
    desc: 'Menyolder modul GPS, mikrokontroler, dan pemancar radio untuk sistem pelacakan.',
  },
  {
    title: 'ARDF Fox Hunting & Hiking',
    desc: 'Mencari arah datangnya sinyal radio pemancar tersembunyi di lapangan.',
  },
];

export default function Activities() {
  return (
    <section id='kegiatan' className='py-24 bg-[#0a1628] relative overflow-hidden'>
      <div className='absolute inset-0 dot-grid opacity-10' />

      <div className='relative z-10 max-w-7xl mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-16 items-start mb-20'>
          <div>
            <p className='font-mono text-xs text-red-400 tracking-[3px] uppercase mb-4'>Kegiatan</p>
            <h2 className='text-4xl font-bold text-white leading-tight mb-4'>Kegiatan YOTA Academy</h2>
            <p className='text-gray-400 text-lg'>Beberapa kegiatan yang dijalankan dalam pembinaan YOTA Squad, ORARI Daerah Riau.</p>
          </div>
        </div>

        {/* Documentation / Gallery Slot */}
        <div className='mb-24'>
          <p className='font-mono text-xs text-gray-400 tracking-[3px] uppercase mb-8'>DOKUMENTASI KEGIATAN</p>
          <div className='grid md:grid-cols-3 gap-6'>
            {galleryPhotos.map((photo, index) => (
              <div key={index} className='bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/40 transition-all group'>
                <div className='relative h-48 bg-slate-900 flex items-center justify-center p-8'>
                  {/* Photo Placeholder/Icon rendering since actual photographic assets are dynamic */}
                  <div className='absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-80 z-10' />
                  <div className='w-12 h-12 text-red-400 opacity-60 group-hover:scale-110 group-hover:text-red-500 transition-all z-20'>
                    <svg fill='none' stroke='currentColor' viewBox='0 0 24 24' className='w-full h-full'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={1.5}
                        d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'
                      />
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15 13a3 3 0 11-6 0 3 3 0 016 0z' />
                    </svg>
                  </div>
                  <span className='absolute bottom-4 left-4 font-mono text-[10px] text-gray-500 z-20 uppercase tracking-widest'>Aktivitas #{index + 1}</span>
                </div>
                <div className='p-6'>
                  <h3 className='text-white font-bold text-lg mb-2 group-hover:text-red-400 transition-colors'>{photo.title}</h3>
                  <p className='text-gray-400 text-sm leading-relaxed'>{photo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline / Alur Pembinaan */}
        <div>
          <p className='font-mono text-xs text-gray-400 tracking-[3px] uppercase mb-10'>ALUR PEMBINAAN</p>
          <div className='relative'>
            {/* Vertical line */}
            <div className='absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-red-900/50 md:-translate-x-px' />

            <div className='flex flex-col gap-10'>
              {timeline.map((item, i) => (
                <div key={item.title} className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className='absolute left-0 md:left-1/2 top-1.5 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-red-500 bg-[#0a1628] z-10' />

                  {/* Card */}
                  <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className='bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors'>
                      <span className='font-mono text-xs text-red-400 tracking-widest'>{item.period}</span>
                      <h3 className='text-white font-bold mb-1.5 mt-2'>{item.title}</h3>
                      <p className='text-gray-400 text-sm leading-relaxed'>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
