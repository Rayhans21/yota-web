import Image from 'next/image';

const reasons = [
  {
    num: '01',
    title: 'Edukasi & Literasi Frekuensi',
    desc: 'Belajar menggunakan frekuensi radio dengan benar, aman, dan sesuai regulasi pemerintah.',
  },
  {
    num: '02',
    title: 'Pengembangan Skill Teknis',
    desc: 'Berlatih keahlian praktis: perakitan perangkat, pemformatan sistem, Fox Hunting, dan integrasi IoT.',
  },
  {
    num: '03',
    title: 'JOTA-JOTI & YOTA Camp',
    desc: 'YOTA Squad akan dibekali untuk menjadi pendamping dan fasilitator teknis bagi anggota Pramuka pada kegiatan tahunan JOTA-JOTI. Juga berkesempatan mengikuti International YOTA Camp IARU Region 3 bagi anggota yang aktif dan berprestasi.',
  },
  {
    num: '04',
    title: 'Komunikasi Darurat',
    desc: 'Dilatih kesiapsiagaan untuk menjadi relawan komunikasi saat terjadi bencana.',
  },
];

export default function WhyJoin() {
  return (
    <section id='kenapa' className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-16 items-start'>
          {/* Left sticky header */}
          <div className='lg:sticky lg:top-28'>
            <p className='font-mono text-xs text-red-600 tracking-[3px] uppercase mb-4'>Maksud &amp; Tujuan YOTA Academy</p>
            <h2 className='text-4xl font-bold text-gray-900 leading-tight mb-6'>
              Apa yang kamu pelajari di <span className='text-red-600'>YOTA Academy</span>?
            </h2>
            <p className='text-gray-500 text-lg leading-relaxed mb-10'>Melalui YOTA Academy, ORARI Daerah Riau memfasilitasi pelajar dan mahasiswa dalam kegiatan berikut ini.</p>

            {/* Foto kegiatan — ganti placeholder di bawah dengan foto asli, taruh filenya di /public/activities/ */}
            <div className='grid grid-cols-3 gap-3'>
              {[
                { title: 'Kontak Satelit LEO', src: '/activities/2.jpeg' },
                { title: 'YOTA Camp 2023', src: '/activities/1.jpeg' },
                { title: 'ARDF Fox Hunting', src: '/activities/5.jpeg' },
              ].map((photo) => (
                <div key={photo.title} className='relative aspect-square rounded-xl bg-gray-100 border border-gray-200 overflow-hidden group'>
                  {/* TODO: setelah foto tersedia, ganti div placeholder ini dengan
                      <Image src="/activities/xxx.jpg" alt={photo.title} fill sizes="150px" className="object-cover" /> */}
                  <Image src={photo.src} alt={photo.title} fill sizes='300px' className='object-cover' />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0' />

                  <span className='absolute bottom-1.5 left-1.5 right-1.5 text-[10px] font-mono text-white leading-tight'>{photo.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: reasons list */}
          <div className='flex flex-col gap-0 divide-y divide-gray-100'>
            {reasons.map((r) => (
              <div key={r.num} className='py-6 flex gap-5 group hover:bg-gray-50 px-2 rounded-xl transition-colors cursor-default'>
                <span className='font-mono text-sm text-red-400 shrink-0 pt-0.5 w-7'>{r.num}</span>
                <div>
                  <h3 className='font-bold text-gray-900 mb-1.5 group-hover:text-red-600 transition-colors'>{r.title}</h3>
                  <p className='text-gray-500 text-sm leading-relaxed'>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
