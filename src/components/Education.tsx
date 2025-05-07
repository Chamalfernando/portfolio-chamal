// src/components/Educations.tsx
import React from "react";
import "aos/dist/aos.css";
import { educations } from "../data/educations";
import { useScrollDirection } from "../hooks/useScrollDirection";

const Educations = () => {
  const scrollDirection = useScrollDirection();

  return (
    <section id="educations" className="py-16 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-bold text-center mb-12">
        Education Timeline
      </h3>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1 w-1 bg-blue-500 h-full" />

        {/* Timeline Items */}
        {educations.map((edu, index) => {
          const isLeft = index % 2 === 0;

          // Animation variants based on scroll direction
          const aosAnimation =
            scrollDirection === "down" ? "fade-up" : "fade-down";

          return (
            <div
              key={index}
              data-aos={aosAnimation}
              className={`mb-12 flex flex-col md:flex-row items-center ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div
                className={`md:w-1/2 px-4 py-4 rounded-lg shadow-md bg-white border border-gray-200 ${
                  isLeft ? "md:mr-8 text-left" : "md:ml-8 text-left"
                }`}
              >
                <div className="text-3xl mb-2">{edu.icon}</div>
                <h4 className="text-xl font-semibold">{edu.title}</h4>
                <span className="text-sm text-gray-500 block">
                  {edu.institution}
                </span>
                <span className="text-xs text-gray-400">{edu.duration}</span>
                <p className="mt-2 text-gray-600">{edu.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Educations;
