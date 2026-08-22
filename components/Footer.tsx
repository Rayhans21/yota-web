export default function Footer() {
  return (
    <footer className='bg-[#0a1628] border-t border-white/5 py-12'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid md:grid-cols-2 gap-10 mb-10'>
          {/* Brand */}
          <div>
            <div className='font-bold text-white mb-1'>YOTA Indonesia</div>
            <div className='font-mono text-xs text-red-400 tracking-widest mb-4'>YOUNGSTERS ON THE AIR</div>
            <p className='text-gray-500 text-sm leading-relaxed'>
              YOTA Academy — wadah resmi pembinaan amatir radio muda Indonesia di bawah ORARI Daerah Riau, bernaung pada program IARU Region 3. Anggota terlatihnya tergabung dalam YOTA Squad.
            </p>
          </div>

          {/* Links */}
          {/* <div>
            <div className='font-mono text-xs text-gray-500 tracking-widest uppercase mb-4'>Navigasi</div>
            <div className='flex flex-col gap-2'>
              {['Tentang YOTA', 'Program & Klaster', 'Kenapa Bergabung', 'Roadmap 2026'].map((l) => (
                <a key={l} href='#' className='text-sm text-gray-400 hover:text-white transition-colors'>
                  {l}
                </a>
              ))}
            </div>
          </div> */}

          {/* Contact */}
          <div>
            <div className='font-mono text-xs text-gray-500 tracking-widest uppercase mb-4'>Kontak</div>
            <div className='flex flex-col gap-2 text-sm text-gray-400'>
              <div>📍 Lantai II Gedung ORARI Daerah Riau</div>
              <div>Jl. DR. Sutomo No. 17, Pekanbaru</div>
              {/* TODO: ganti dengan email resmi ORARI Daerah Riau — email lama (orlokpku@) singkatan "ORARI LOKal PeKanbaru" jadi sudah tidak sesuai */}
              <a href='mailto:orlokpku@gmail.com' className='hover:text-white transition-colors'>
                ✉ orlokpku@gmail.com
              </a>
              {/* TODO: konfirmasi apakah IG @yota.pku tetap dipakai, atau pindah ke akun IG ORARI Daerah Riau */}
              <a href='https://instagram.com/yota.pku' className='hover:text-white transition-colors'>
                📷 @yota.pku
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className='border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3'>
          {/* TODO: konfirmasi callsign resmi ORARI Daerah Riau — YH5NL sebelumnya adalah callsign level Lokal Pekanbaru */}
          <p className='font-mono text-xs text-gray-600 tracking-wider'>© 2026 ORARI DAERAH RIAU · YOTA ACADEMY · YOTA INDONESIA</p>
          <p className='font-mono text-xs text-gray-700 tracking-wider'>IARU REGION 3 · YOUNGSTERS ON THE AIR</p>
        </div>
      </div>
    </footer>
  );
}
