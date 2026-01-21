import React from "react";

const About = () => (
  <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-lg mb-6 leading-relaxed">
          Self-taught developer from Baleswar, Odisha, passionate about full-stack
          web development. Specializing in MERN stack with strong foundations in
          Java and backend systems.
        </p>
        <p className="text-lg leading-relaxed">
          Continuous learner focusing on production-level applications, data
          structures, and cloud technologies. Balancing coding with music,
          movies, and cricket.
        </p>
      </div>
      <div className="text-center">
        <img
          src="../public/Arya.jpg"
          alt="Arya Kumar Shastree"
          className="w-80 h-80 rounded-full mx-auto shadow-2xl object-cover"
        />{" "}
      </div>
    </div>
  </section>
);

export default About;
