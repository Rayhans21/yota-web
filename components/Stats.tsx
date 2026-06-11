const stats = [
  { value: "15–25", label: "Rentang Usia", unit: "tahun" },
  { value: "2017", label: "JOTA-JOTI Riau", unit: "sejak" },
  { value: "6+", label: "Klaster Riset", unit: "bidang" },
  { value: "150+", label: "Negara Peserta JOTA", unit: "dunia" },
];

export default function Stats() {
  return (
    <section className="bg-[#0a1628] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center md:items-start md:px-10 first:md:pl-0 last:md:pr-0">
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-bold text-white tracking-tight">{s.value}</span>
                <span className="font-mono text-xs text-red-400 tracking-widest uppercase">{s.unit}</span>
              </div>
              <div className="text-sm text-gray-400 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
