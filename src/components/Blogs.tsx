// src/components/Projects.tsx
import React from "react";
import { blogs } from "../data/blogs";

const Blogs = () => (
  <section id="projects" className="py-12 px-6 max-w-4xl mx-auto">
    <h3 className="text-2xl font-bold mb-6" data-aos="fade-down">
      blogs
    </h3>
    <div className="space-y-6">
      {blogs.map((proj, idx) => (
        <div
          key={idx}
          className="bg-white p-4 rounded-lg shadow"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h4 className="font-semibold text-lg">{proj.blogtitle}</h4>
          <p className="text-sm">{proj.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Blogs;
