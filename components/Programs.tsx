const programs = [
  {
    icon: "📡",
    title: "Komunikasi Satelit",
    code: "SAT-01",
    desc: "Kontak langsung via satelit orbit rendah IO-86/SO-50 tanpa infrastruktur internet. Pembuktian komunikasi mandiri di kondisi darurat.",
    color: "blue",
  },
  {
    icon: "🗺️",
    title: "APRS & Tracking",
    code: "IOT-02",
    desc: "Integrasi GPS, radio, dan mikrokontroler untuk pelacakan posisi taktis secara real-time, bebas dari ketergantungan sinyal seluler.",
    color: "red",
  },
  {
    icon: "⚡",
    title: "Landslide Recorder",
    code: "IOT-03",
    desc: "Sensor deteksi dini tanah longsor berbasis frekuensi radio. Telemetri wireless ke posko darurat — relevan langsung dengan geografis Riau.",
    color: "gold",
  },
  {
    icon: "🦊",
    title: "ARDF Fox Hunting",
    code: "ARDF-04",
    desc: "Berburu pemancar tersembunyi di alam terbuka. Olahraga teknikal yang menggabungkan orientasi lapangan, sinyal RF, dan navigasi darat.",
    color: "green",
  },
  {
    icon: "·–·",
    title: "Kode Morse / CW",
    code: "CW-05",
    desc: "Continuous Wave — bahasa universal radio amatir. Digunakan dalam komunikasi kebencanaan dan kontes internasional.",
    color: "blue",
  },
  {
    icon: "🎓",
    title: "Bimbingan UNAR",
    code: "EDU-06",
    desc: "Ujian Negara Amatir Radio — lisensi resmi yang membuka akses ke spektrum frekuensi legal. Kami bimbing dari nol hingga lulus.",
    color: "red",
  },
];

const colorMap: Record<string, { bg: string; text: string; badge: string; badgeText: string }> = {
  blue: {
    bg: "bg-blue-50 hover:bg-blue-100/70",
    text: "text-blue-700",
    badge: "bg-blue-100",
    badgeText: "text-blue-600",
  },
  red: {
    bg: "bg-red-50 hover:bg-red-100/70",
    text: "text-red-700",
    badge: "bg-red-100",
    badgeText: "text-red-600",
  },
  gold: {
    bg: "bg-amber-50 hover:bg-amber-100/70",
    text: "text-amber-700",
    badge: "bg-amber-100",
    badgeText: "text-amber-600",
  },
  green: {
    bg: "bg-green-50 hover:bg-green-100/70",
    text: "text-green-700",
    badge: "bg-green-100",
    badgeText: "text-green-600",
  },
};

export default function Programs() {
  return (
    <section id="program" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs text-red-600 tracking-[3px] uppercase mb-4">
            Klaster Riset
          </p>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Enam jalur eksplorasi,<br />
            satu komunitas.
          </h2>
          <p className="text-gray-500 text-lg">
            Pilih bidang yang paling membuatmu penasaran. Atau coba semuanya.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((p) => {
            const c = colorMap[p.color];
            return (
              <div
                key={p.code}
                className={`${c.bg} rounded-2xl p-6 transition-colors border border-transparent hover:border-gray-200 cursor-pointer group`}
              >
                {/* Code badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-xs ${c.badgeText} ${c.badge} px-2.5 py-1 rounded-md tracking-widest`}>
                    {p.code}
                  </span>
                  <span className="text-2xl">{p.icon}</span>
                </div>

                <h3 className={`text-lg font-bold ${c.text} mb-2 group-hover:underline underline-offset-4`}>
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
