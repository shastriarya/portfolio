import React from "react";
import { useInView } from "react-intersection-observer";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20"
      ref={ref}
    >
      <div
        className={`transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} transition-all duration-1000`}
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Arya Kumar Shastree
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Full Stack Developer | Java | MERN | Cloud
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-semibold"
          >
            Contact Me
          </a>
        </div>
        <ArrowDown className="mt-20 animate-bounce w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
