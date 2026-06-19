import Image from "next/image";
import { stats } from "@/data";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#fafafa]"
      aria-label="About me"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left Column */}
          <div>
            <p className="reveal text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-gray-400 mb-3">
              About
            </p>

            <h2
              className="reveal delay-1 font-display
              text-[clamp(2rem,4.5vw,3.2rem)]
              font-extrabold tracking-tight
              leading-[1.1] text-ink mb-5"
            >
              Self-taught.
              <br />
              Obsessively craft-focused.
            </h2>

            <p className="reveal delay-2 text-[1.05rem] text-gray-500 leading-[1.8] mb-5">
              Developer from Bhubaneswar, Odisha. I went from C fundamentals to
              building real-time video calling platforms and payment systems —
              entirely through relentless self-study and shipping real products.
            </p>

            <p className="reveal delay-3 text-[0.93rem] text-gray-400 leading-[1.8] mb-10">
              My approach is simple: understand the problem deeply, architect it
              cleanly, and build it to last. I care about performance,
              maintainability, and the experience of everyone who touches the
              software — users and engineers alike.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div
                  key={s.number}
                  className={`reveal from-scale delay-${i + 2}
                  p-6 bg-white border border-gray-100 rounded-xl`}
                >
                  <span className="block font-display text-3xl font-extrabold tracking-tight text-ink mb-1">
                    {s.number}
                  </span>

                  <span className="text-xs text-gray-400 leading-5">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="reveal from-left delay-2 flex justify-center">
            <div className="relative w-full max-w-[380px]">

              {/* Image */}
              <div
                className="relative aspect-[4/5]
                overflow-hidden rounded-2xl
                border border-gray-200
                bg-gray-100
                shadow-sm
                transition-transform duration-500
                hover:scale-[1.02]"
              >
                <Image
                  src="/images/arya.jpeg"
                  alt="Arya Kumar Shastree"
                  fill
                  priority
                  sizes="(max-width:768px) 100vw, 380px"
                  className="object-cover"
                />
              </div>

              {/* Floating Card */}
              <div
                className="absolute -bottom-5 -left-6
                bg-white
                border border-gray-200
                rounded-xl
                px-5 py-4
                shadow-lg"
              >
                <p className="text-[11px] uppercase tracking-[0.12em] text-gray-400 mb-1">
                  Location
                </p>

                <p className="font-semibold text-sm text-ink">
                  Bhubaneswar, Odisha 🇮🇳
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}