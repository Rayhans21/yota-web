const reasons = [
  {
    num: "01",
    title: "Lab nyata, bukan simulasi",
    desc: "Eksperimen dengan perangkat keras sungguhan — transceiver, breadboard, antena, modul GPS, dan satelit orbit rendah yang benar-benar ada di luar angkasa.",
  },
  {
    num: "02",
    title: "Lisensi resmi UNAR gratis",
    desc: "Kami fasilitasi bimbingan dan biaya Ujian Negara Amatir Radio untuk anggota aktif. Callsign kamu sendiri adalah hak yang bisa kamu miliki.",
  },
  {
    num: "03",
    title: "Jaringan 150+ negara",
    desc: "Melalui JOTA-JOTI dan program IARU Region 3, kamu terhubung langsung dengan operator muda dari seluruh dunia — bukan sekadar teks di internet.",
  },
  {
    num: "04",
    title: "Potensi delegasi internasional",
    desc: "Anggota aktif YOTA Pekanbaru menjadi jalur satu-satunya untuk seleksi delegasi ke YOTA Camp Internasional. Kamu hanya bisa dipilih dari dalam komunitas ini.",
  },
  {
    num: "05",
    title: "Kolaborasi lintas institusi",
    desc: "Didukung ORARI Lokal Pekanbaru, Kwarcab Pramuka, sekolah, dan kampus. Ini bukan komunitas biasa — ada struktur resmi di baliknya.",
  },
  {
    num: "06",
    title: "Kontribusi nyata kebencanaan",
    desc: "Setiap alat yang kamu bangun — sensor longsor, APRS tracker, stasiun lapangan — punya potensi menyelamatkan nyata di bencana.",
  },
];

export default function WhyJoin() {
  return (
    <section id="kenapa" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left sticky header */}
          <div className="lg:sticky lg:top-28">
            <p className="font-mono text-xs text-red-600 tracking-[3px] uppercase mb-4">
              Kenapa Bergabung
            </p>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
              Tempat buat kamu yang penasarannya{" "}
              <span className="text-red-600">tidak bisa berhenti</span>.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              YOTA bukan untuk semua orang. Ini untuk pemuda 15–25 tahun yang
              ingin lebih dari sekadar menonton tutorial — mereka yang ingin
              menyolder, merakit, mencoba, gagal, dan mencoba lagi.
            </p>
            <a
              href="#daftar"
              className="inline-flex items-center gap-2 bg-[#0a1628] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-gray-800 transition-colors"
            >
              Daftar Anggota Pertama
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right: reasons list */}
          <div className="flex flex-col gap-0 divide-y divide-gray-100">
            {reasons.map((r) => (
              <div key={r.num} className="py-6 flex gap-5 group hover:bg-gray-50 px-2 rounded-xl transition-colors cursor-default">
                <span className="font-mono text-sm text-red-400 shrink-0 pt-0.5 w-7">{r.num}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-red-600 transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
