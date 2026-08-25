const faqItems = [
  {
    question: 'Siapa yang bisa bergabung dengan YOTA Academy?',
    answer: 'Pelajar, mahasiswa, dan anak muda yang tertarik belajar radio amatir, teknologi komunikasi, satelit, elektronika dasar, dan kegiatan kerelawanan komunikasi.',
  },
  {
    question: 'Apakah harus berdomisili di Pekanbaru untuk bisa ikut YOTA Academy?',
    answer: 'Tidak harus. YOTA Academy menerima peserta dari seluruh Kabupaten/Kota se-Provinsi Riau, selama mereka tertarik dan siap untuk berpartisipasi dalam kegiatan.',
  },
  {
    question: 'Apakah harus sudah punya pengalaman radio amatir?',
    answer: 'Tidak harus. Materi YOTA Academy dirancang bertahap, mulai dari pengenalan regulasi, etika komunikasi, perangkat dasar, hingga praktik lapangan.',
  },
  {
    question: 'Kegiatan seperti apa yang akan diikuti peserta?',
    answer: 'Peserta dapat mengikuti pembinaan teknis seperti komunikasi satelit LEO, APRS, soldering, ARDF Fox Hunting, JOTA-JOTI, dan aktivitas komunitas ORARI Daerah Riau.',
  },
  {
    question: 'Apakah peserta yang sudah pernah mengikuti JOTA-JOTI bisa bergabung ke YOTA Academy?',
    answer: 'Tentu saja bisa. YOTA Academy justru terbuka bagi purna peserta JOTA-JOTI, pelajar, serta mahasiswa umum yang ingin mendalami lebih jauh dunia radio amatir.',
  },
  {
    question: 'Berapa batas usia untuk bergabung?',
    answer: 'YOTA (Youngsters On The Air) secara umum diperuntukkan bagi generasi muda di bawah usia 26 tahun, sesuai ketentuan program YOTA internasional di bawah IARU.',
  },
  {
    question: 'Bagaimana cara mendaftar atau bertanya lebih lanjut?',
    answer: 'Gunakan tombol kontak WhatsApp di bawah halaman ini. Kamu bisa menanyakan jadwal kegiatan, syarat bergabung, dan informasi pembinaan terbaru.',
  },
];

export default function FAQ() {
  return (
    <section id='faq' className='bg-[#f7f8fb] py-20 md:py-24'>
      <div className='mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16'>
        <div>
          <p className='mb-4 font-mono text-xs uppercase tracking-[3px] text-red-600'>FAQ</p>
          <h2 className='mb-5 text-3xl font-bold leading-tight text-gray-900 md:text-4xl'>Pertanyaan yang sering ditanyakan</h2>
        </div>

        <div className='divide-y divide-gray-200 border-y border-gray-200'>
          {faqItems.map((item) => (
            <details key={item.question} className='group py-5'>
              <summary className='flex cursor-pointer list-none items-start justify-between gap-6 text-left'>
                <span className='text-base font-semibold leading-snug text-gray-900 md:text-lg'>{item.question}</span>
                <span className='mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gray-300 text-gray-500 transition-colors group-open:border-red-200 group-open:bg-red-50 group-open:text-red-600'>
                  <span className='text-xl leading-none group-open:hidden'>+</span>
                  <span className='hidden text-xl leading-none group-open:block'>-</span>
                </span>
              </summary>
              <p className='mt-4 max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base'>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
