import React from "react";
import { certifications } from "../data/certifications";

const Certifications = () => (
  <section className="py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Certifications</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg text-center hover:scale-105 transition-transform"
          >
            <h3 className="font-bold text-xl mb-2">{cert.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {cert.issuer} - {cert.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
