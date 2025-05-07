import React from "react";

const Hero = () => (
  <section
    className="mt-20 text-center py-16 bg-gradient-to-b from-blue-100 to-white"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <h2 className="text-4xl font-bold mb-4">Hey, I'm Chamal 😎</h2>
    <p className="max-w-xl mx-auto text-lg">
      A passionate Computer Science undergraduate and a full-stack developer who
      loves building useful things.
    </p>
    <a
      href="#projects"
      className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      View My Work
    </a>
  </section>
);

export default Hero;
