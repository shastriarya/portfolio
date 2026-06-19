import { experiences } from "@/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white" aria-label="Experience">
      <div className="max-w-[1100px] mx-auto">

        <div className="grid md:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

          {/* Left: header */}
          <div>
            <p className="reveal text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-gray-400 mb-3">
              Experience
            </p>
            <h2 className="reveal delay-1 font-display text-[clamp(1.8rem,3.5vw,2.5rem)]
              font-extrabold tracking-tight leading-[1.1] text-ink">
              A trajectory built on shipping.
            </h2>
          </div>

          {/* Right: timeline */}
          <div className="relative">
            {/* Vertical track */}
            <div className="absolute left-[5px] top-2 bottom-0 w-px bg-gray-200" aria-hidden="true" />

            {experiences.map((exp, i) => (
              <div
                key={exp.period}
                className={`reveal delay-${i + 1} relative pl-9 pb-10 last:pb-0 group`}
              >
                {/* Dot */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-[5px] w-[11px] h-[11px] rounded-full
                    border-2 border-white bg-gray-300 z-10
                    group-hover:bg-ink transition-colors duration-300"
                />

                <p className="text-[0.72rem] font-semibold tracking-[0.08em] uppercase
                  text-gray-400 mb-[0.35rem]">
                  {exp.period}
                </p>
                <h3 className="font-display text-[1rem] font-bold tracking-tight
                  text-ink mb-1">
                  {exp.role}
                </h3>
                <p className="text-[0.83rem] text-gray-500 font-medium mb-[0.6rem]">
                  {exp.company}
                </p>
                <p className="text-[0.83rem] text-gray-400 leading-[1.65]">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}