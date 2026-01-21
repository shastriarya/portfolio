import React from "react";
import { projects } from "../data/projects";

const Projects = () => (
  <section id="projects" className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-4">{project.name}</h3>

            <p className="mb-4 text-gray-600 dark:text-gray-300 flex-grow">
              {project.desc}
            </p>

            <div className="mb-6">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-center"
                >
                 Live Demo
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition font-semibold text-center"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
