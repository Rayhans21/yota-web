const timeline = [
  {
    period: "Mei – Jun 2026",
    title: "Pendaftaran Anggota Perdana",
    desc: "Masa rekrutmen terbuka. Bergabunglah sebagai Generasi Pertama YOTA Pekanbaru.",
    status: "open",
  },
  {
    period: "Jun 2026",
    title: "Welcoming Gathering",
    desc: "Pertemuan perdana, pemetaan minat dan bakat, pengenalan lab dan peralatan.",
    status: "upcoming",
  },
  {
    period: "Jun – Jul 2026",
    title: "Kelas Pembinaan Dasar",
    desc: "Elektronika, assembly APRS, dasar komunikasi radio, dan bimbingan UNAR kolektif.",
    status: "upcoming",
  },
  {
    period: "Okt 2026",
    title: "JOTA-JOTI Internasional",
    desc: "16–18 Oktober 2026. Debutkan Kwarcab Kota Pekanbaru di panggung radio internasional.",
    status: "upcoming",
  },
  {
    period: "Agt – Sep 2026",
    title: "Seleksi Delegasi YOTA Camp",
    desc: "IARU Region 3 YOTA Camp 2026 di Jawa Tengah. Hanya dari anggota aktif YOTA.",
    status: "upcoming",
  },
];

export default function Activities() {
  return (
    <section id="kegiatan" className="py-24 bg-[#0a1628] relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs text-red-400 tracking-[3px] uppercase mb-4">
            Roadmap 2026
          </p>
          <h2 className="text-4xl font-bold text-white leading-tight mb-4">
            Apa yang terjadi,{" "}
            <span className="text-red-400">dan kapan.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Dari pendaftaran pertama hingga panggung internasional — semuanya
            ada di sini, terstruktur dan terukur.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-red-900/50 md:-translate-x-px" />

          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => (
              <div
                key={item.title}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-1.5 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-red-500 bg-[#0a1628] z-10" />

                {/* Card */}
                <div
                  className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-red-400 tracking-widest">{item.period}</span>
                      {item.status === "open" && (
                        <span className="font-mono text-[10px] bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full tracking-wider">
                          BUKA
                        </span>
                      )}
                    </div>
                    <h3 className="text-white font-bold mb-1.5">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
