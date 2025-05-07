import React from "react";
import { socialLinks } from "../data/socialLinks";
const Footer = () => (
  <footer id="contactFooter" className="bg-white py-12 shadow-inner">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <p className="mb-4">📧 chamaldeshitha2001@gmail.com</p>

      <ul className="flex justify-center space-x-6 mb-6 text-2xl">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
              title={link.name}
            >
              {React.createElement(link.icon)}
              {/* <link.icon size={24} /> */}
            </a>
          </li>
        ))}
      </ul>

      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Chamal Fernando. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
