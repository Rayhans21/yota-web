const reasons = [
  {
    num: '01',
    title: 'Eksperimen Perangkat Nyata',
    desc: 'Bukan sekadar simulasi atau tutorial video. Di sini kamu bisa menyolder, merakit, dan mencoba langsung transceiver, antena, hingga modul satelit orbit rendah.',
  },
  {
    num: '02',
    title: 'Ngobrol Lintas Batas',
    desc: 'Hubungkan dirimu dengan anak muda lain di seluruh dunia melalui komunikasi gelombang radio. Rasakan sensasi menembus batas negara tanpa internet.',
  },
  {
    num: '03',
    title: 'Kembangkan Skill & Logika STEM',
    desc: 'Pelajari elektronika praktis, fisika propagasi udara, dan pemrograman komunikasi digital dengan cara yang santai dan penuh eksperimen seru.',
  },
  {
    num: '04',
    title: 'Buka Peluang Baru',
    desc: 'Dapatkan bimbingan gratis jika nantinya kamu tertarik mengambil sertifikasi resmi Amatir Radio (UNAR), serta peluang ikut serta dalam kegiatan kepemudaan internasional.',
  },
  {
    num: '05',
    title: 'Kolaborasi Komunitas',
    desc: 'Berkenalan dan belajar bareng mentor-mentor berpengalaman serta teman-teman sebaya yang memiliki antusiasme tinggi di bidang teknologi radio.',
  },
  {
    num: '06',
    title: 'Aksi Sosial Nyata',
    desc: 'Pelajari bagaimana teknologi radio amatir menjadi penyelamat komunikasi utama saat bencana alam melanda, sebuah kontribusi kemanusiaan yang sangat berharga.',
  },
];

export default function WhyJoin() {
  return (
    <section id='kenapa' className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-16 items-start'>
          {/* Left sticky header */}
          <div className='lg:sticky lg:top-28'>
            <p className='font-mono text-xs text-red-600 tracking-[3px] uppercase mb-4'>Kenapa Mencoba?</p>
            <h2 className='text-4xl font-bold text-gray-900 leading-tight mb-6'>
              Tempat buat kamu yang punya rasa ingin tahu <span className='text-red-600'>tanpa batas</span>.
            </h2>
            <p className='text-gray-500 text-lg leading-relaxed mb-10'>
              YOTA bukan sekadar tempat kumpul biasa. Ini adalah ruang bermain bagi mereka yang suka membongkar pasang alat, penasaran bagaimana sinyal bekerja, dan ingin mencoba hal baru yang tidak diajarkan di sekolah.
            </p>
            <a href='#kegiatan' className='inline-flex items-center gap-2 bg-[#0a1628] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-gray-800 transition-colors'>
              Lihat Keseruan Kami
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </a>
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
