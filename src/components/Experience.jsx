import React from "react";
import { experiences } from "../data/experience";

const Experience = () => (
  <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
      <div className="relative">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`flex mb-12 ${idx % 2 ? "flex-row-reverse" : ""} items-center`}
          >
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-2xl font-bold">{exp.title}</h3>
              <p className="text-blue-600">
                {exp.company} | {exp.date}
              </p>
              <p>{exp.desc}</p>
            </div>
            <div className="w-1/2">
              <div className="bg-blue-600 h-3 rounded-full w-24 mb-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
