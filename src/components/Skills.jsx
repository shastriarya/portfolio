import { skillGroups } from "@/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white" aria-label="Skills and technologies">
      <div className="max-w-[1100px] mx-auto">

        <p className="reveal text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-gray-400 mb-3">
          Skills
        </p>
        <h2 className="reveal delay-1 font-display text-[clamp(2rem,4.5vw,3.2rem)]
          font-extrabold tracking-tight leading-[1.1] text-ink mb-4">
          The full stack, top to bottom.
        </h2>
        <p className="reveal delay-2 text-[1.05rem] text-gray-500 leading-[1.8]
          max-w-[520px] mb-12">
          Every tool chosen for a reason — not for the resume, but because it solves
          the problem best.
        </p>

        {/*
          Gap-less grid: 1px gap + matching background
          creates the "divided panel" look used by Linear / Vercel
        */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-100
            border border-gray-100 rounded-2xl overflow-hidden"
        >
          {skillGroups.map((group, i) => (
            <div
              key={group.name}
              className={`reveal delay-${(i % 6) + 1} bg-white px-9 py-8`}
            >
              <p className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase
                text-gray-400 mb-5">
                {group.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="chip inline-flex items-center gap-[0.4rem] px-3
                      py-[0.38rem] bg-[#fafafa] border border-gray-200 rounded-md
                      text-[0.8rem] font-medium text-gray-700 cursor-default"
                  >
                    <span
                      aria-hidden="true"
                      className="chip-dot w-[5px] h-[5px] rounded-full bg-gray-300"
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}