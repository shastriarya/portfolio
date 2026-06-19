import { services } from "@/data";

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6 bg-[#fafafa]"
      aria-label="Services"
    >
      <div className="max-w-[1100px] mx-auto">
        <p className="reveal text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-gray-400 mb-3">
          Services
        </p>

        <h2
          className="reveal delay-1 font-display text-[clamp(2rem,4.5vw,3.2rem)]
          font-extrabold tracking-tight leading-[1.1] text-ink mb-4"
        >
          What I can do for you.
        </h2>

        <p
          className="reveal delay-2 text-[1.05rem] text-gray-500 leading-[1.8]
          max-w-[520px] mb-12"
        >
          End-to-end engineering for teams who need someone who can own the
          problem, not just a task.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden"
        >
          {services.map((svc, i) => {
            const Icon = svc.icon;

            return (
              <div
                key={svc.name}
                className={`group reveal delay-${
                  (i % 6) + 1
                } service-card bg-white px-9 py-8`}
              >
                <div
                  className="svc-icon-wrap w-12 h-12 rounded-xl
                  bg-[#f8f8f8] border border-gray-200
                  flex items-center justify-center
                  mb-5 transition-all duration-300"
                  aria-hidden="true"
                >
                  <Icon
                    size={22}
                    stroke={1.8}
                    className="text-gray-700 transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3
                  className="svc-name font-display text-[1rem] font-bold
                  tracking-tight text-ink mb-[0.6rem]"
                >
                  {svc.name}
                </h3>

                <p className="svc-desc text-[0.83rem] text-gray-500 leading-[1.65]">
                  {svc.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}