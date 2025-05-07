// src/components/Projects.tsx
import React, { useState } from "react";
import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[0]
  >(null);

  const navigate = useNavigate();

  return (
    <section id="projects" className="py-12 px-6 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-6" data-aos="fade-down">
        Projects
      </h3>
      <div className="space-y-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-lg shadow cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h4
              className="font-semibold text-lg"
              onClick={() =>
                navigate(`/projects/${encodeURIComponent(proj.title)}`)
              }
            >
              {proj.title}
            </h4>
            <p className="text-sm" onClick={() => setSelectedProject(proj)}>
              {proj.overview}
            </p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white max-w-lg w-full p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <h4 className="text-xl font-bold mb-2">{selectedProject.title}</h4>
            <p className="text-gray-700 text-sm whitespace-pre-line">
              {selectedProject.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
