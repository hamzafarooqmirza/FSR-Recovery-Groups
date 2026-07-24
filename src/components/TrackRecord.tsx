import Image from "next/image";

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "3k+", label: "Vehicles Assisted" },
  { value: "15+", label: "Service Areas Covered" },
];

export function TrackRecord() {
  return (
    <section className="relative overflow-hidden bg-navy py-20">
      <Image
        src="/images/trackrecord-bg.jpg"
        alt=""
        fill
        className="object-cover opacity-40"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1100px] px-6 text-center">
        <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
          Our Proven Track Record<span className="text-red">!</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] text-white/70">
          With 15 years in business, 3,000+ vehicles assisted, and services
          spanning 15 areas, FSR Recovery Group has built a reputation for
          reliability, professionalism, and excellence in vehicle recovery and
          transport.
        </p>

        <div className="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-6">
          <svg
            viewBox="0 0 700 60"
            className="pointer-events-none absolute left-1/2 top-6 hidden w-[70%] -translate-x-1/2 sm:block"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M10,10 C 130,70 220,70 350,30 C 480,-10 570,-10 690,45"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeDasharray="9 9"
              strokeLinecap="round"
            />
          </svg>

          {stats.map((s) => (
            <div key={s.label} className="relative">
              <p className="font-heading text-5xl font-extrabold text-white sm:text-6xl">
                {s.value}
              </p>
              <p className="mt-2 text-[15px] text-white/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
