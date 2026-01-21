import React from "react";
import { Code, Palette, Database, Server } from "lucide-react";

const skills = [
  {
    category: "Programming Languages",
    items: ["C", "Java", "Python", "JavaScript"],
    icon: Code,
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "Tailwind", "React"],
    icon: Palette,
  },
  { category: "Backend", items: ["Java", "Node.js", "Express"], icon: Server },
  { category: "Databases", items: ["MySQL", "MongoDB"], icon: Database },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Docker", "Cloud Basics"],
    icon: Code,
  },
];

const Skills = () => (
  <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
        Skills & Technologies
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <Icon className="w-12 h-12 text-blue-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-4 text-center">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center text-lg">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
