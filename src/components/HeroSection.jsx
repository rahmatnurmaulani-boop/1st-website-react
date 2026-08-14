import CounterNumber from "./CounterNumber";

export default function HeroSection({ stats = [] }) {
  const safeStats = stats || [];

  return (
    <>
      {/* HERO BANNER SECTION */}
      <section
        className="w-full min-h-130 md:min-h-150 flex items-center bg-cover bg-right md:bg-center bg-no-repeat px-6 md:px-12 py-16"
        style={{
          backgroundImage: "url('/src/assets/background-banner.webp')",
        }}
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="max-w-lg text-center md:text-left">
            <span className="inline-block text-rose-600 font-medium bg-white rounded-2xl px-4 py-1 shadow-md text-sm mb-3">
              Toko Bakery Favorit Keluarga
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rose-800 leading-tight">
              <span className="text-rose-900">D'Crumble</span> hadir
              <br />
              setiap hari!
            </h1>

            <p className="mt-4 font-semibold text-rose-900 text-base md:text-lg">
              Roti yang pas di rasa, pas di harga, dan pas di hati. Hadir di 41
              lokasi di dekatmu.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6">
              <button className="w-full sm:w-auto bg-rose-900 text-white px-6 py-2.5 rounded-2xl font-medium text-sm transition-all hover:bg-rose-700 hover:shadow-lg">
                Cari Outlet
              </button>
              <button className="w-full sm:w-auto border border-rose-900 text-rose-900 px-6 py-2.5 rounded-2xl font-medium text-sm transition-all hover:bg-rose-900 hover:text-white">
                Download Katalog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STAT SECTION */}
      <section className="bg-rose-100 border-y shadow-md border-rose-200 py-10">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-around text-center px-6 gap-6">
          {safeStats.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl px-5 py-4 shadow-md w-64 h-32 flex flex-col justify-center transition-transform hover:-translate-y-1"
            >
              <h3 className="text-3xl font-semibold text-rose-900">
                <CounterNumber targetText={item.title} />
              </h3>
              <p className="text-xs text-rose-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
