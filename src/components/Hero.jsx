"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center
        overflow-hidden px-6 pt-28 pb-20 text-center bg-white"
      aria-label="Introduction"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.35,
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Availability badge */}
      <div
        className="inline-flex items-center gap-2 px-[0.9rem] py-[0.35rem]
          bg-[#fafafa] border border-gray-100 rounded-full mb-10
          text-[0.75rem] font-medium text-gray-700 tracking-[0.01em]
          animate-fade-up"
        style={{ animationDelay: "0.1s" }}
      >
        <span
          aria-hidden="true"
          className="w-[7px] h-[7px] rounded-full bg-green-500 animate-dot-pulse"
        />
        Available for new projects
      </div>

      {/* Name + title */}
      <h1
        className="font-display text-[clamp(3.5rem,9vw,7.5rem)] font-extrabold
          tracking-tighter leading-[1] text-ink mb-5
          animate-fade-up"
        style={{ animationDelay: "0.18s" }}
      >
        Arya Kumar
        <br />
        Shastree
        <span
          className="block text-[clamp(1.1rem,2.8vw,2.1rem)] font-normal
            tracking-[-0.01em] text-gray-400 mt-3"
        >
          Full Stack Engineer
        </span>
      </h1>

      {/* Description */}
      <p
        className="max-w-[520px] text-[clamp(0.95rem,1.5vw,1.1rem)]
          text-gray-500 leading-[1.75] font-normal mt-2 mb-11
          animate-fade-up"
        style={{ animationDelay: "0.28s" }}
      >
        I build scalable, production-grade web applications — from real-time
        platforms to payment systems — using the MERN stack, Node.js, and modern
        cloud infrastructure.
      </p>

      {/* CTA buttons */}
      <div
        className="flex flex-wrap gap-3 justify-center animate-fade-up"
        style={{ animationDelay: "0.36s" }}
      >
        <a
          href="#projects"
          className="px-7 py-[0.7rem] bg-ink text-white rounded-lg text-[0.875rem]
            font-semibold tracking-tight hover:bg-gray-700 transition-colors
            duration-200 hover:-translate-y-px active:translate-y-0"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="px-7 py-[0.7rem] bg-transparent text-ink border border-gray-200
            rounded-lg text-[0.875rem] font-semibold tracking-tight
            hover:border-gray-400 hover:bg-gray-50 transition-all duration-200
            hover:-translate-y-px active:translate-y-0"
        >
          Get in touch
        </a>
        <a
          href="https://github.com/shastriarya"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-[0.7rem] bg-transparent text-ink border border-gray-200
            rounded-lg text-[0.875rem] font-semibold tracking-tight
            hover:border-gray-400 hover:bg-gray-50 transition-all duration-200
            hover:-translate-y-px active:translate-y-0"
        >
          GitHub ↗
        </a>
      </div>

      {/* Tech badges */}
      <div
        className="flex flex-wrap gap-2 justify-center mt-12 animate-fade-up"
        style={{ animationDelay: "0.44s" }}
      >
        {["React", "Next.js", "Node.js", "MongoDB", "WebRTC", "Socket.io", "Java"].map(
          (tech) => (
            <span
              key={tech}
              className="px-3 py-[0.3rem] bg-[#fafafa] border border-gray-100
                rounded-full text-[0.72rem] font-medium text-gray-500
                tracking-[0.01em]"
            >
              {tech}
            </span>
          )
        )}
      </div>

      {/* Scroll hint */}
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col
          items-center gap-2 animate-fade-in"
        style={{ animationDelay: "1s" }}
      >
        <span className="text-[0.7rem] font-medium tracking-[0.12em] uppercase text-gray-400">
          Scroll
        </span>
        <div className="relative w-px h-12 bg-gray-200 overflow-hidden">
          <div className="scroll-thumb top-[-100%]" />
        </div>
      </div>
    </section>
  );
}