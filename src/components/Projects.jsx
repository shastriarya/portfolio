import { projects } from "@/data";
import {
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";



export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-[#fafafa]"
      aria-label="Featured projects"
    >
      <div className="max-w-[1100px] mx-auto">
        <p className="reveal text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-gray-400 mb-3">
          Projects
        </p>

        <h2
          className="reveal delay-1 font-display text-[clamp(2rem,4.5vw,3.2rem)]
          font-extrabold tracking-tight leading-[1.1] text-ink mb-4"
        >
          Things I've built.
        </h2>

        <p
          className="reveal delay-2 text-[1.05rem] text-gray-500 leading-[1.8]
          max-w-[520px] mb-12"
        >
          Production applications, not side toys. Each one solving a real
          problem end to end.
        </p>

        <div
          className="flex flex-col gap-px bg-gray-100
          border border-gray-100 rounded-2xl overflow-hidden"
        >
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`reveal delay-${Math.min(
                i + 1,
                6
              )} project-row bg-white px-11 py-10
              grid md:grid-cols-[1fr_auto] gap-8 items-start`}
            >
              <div>
                <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-gray-400 mb-2">
                  {project.label}
                </p>

                <h3 className="font-display text-[1.45rem] font-bold tracking-tight text-ink mb-3 leading-[1.2]">
                  {project.title}
                </h3>

                <p className="text-[0.9rem] text-gray-500 leading-[1.75] mb-5 max-w-[580px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md border border-gray-200
                      bg-white text-[12px] font-medium text-gray-600
                      transition-all duration-300
                      hover:border-black hover:text-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex md:flex-col gap-3 pt-1 flex-shrink-0">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2
                    px-5 py-2.5 rounded-xl
                    bg-black text-white
                    text-sm font-semibold
                    transition-all duration-300
                    hover:bg-neutral-800"
                  >
                    <IconExternalLink
                      size={18}
                      stroke={2}
                    />
                    Live Demo
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2
                  px-5 py-2.5 rounded-xl
                  border border-gray-200
                  text-sm font-semibold text-gray-700
                  transition-all duration-300
                  hover:border-black hover:text-black"
                >
                  <IconBrandGithub
                    size={18}
                    stroke={2}
                  />
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}