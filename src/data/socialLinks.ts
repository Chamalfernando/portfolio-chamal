// src/data/socailLinks.ts
import React from "react";
// import { IconType } from "react-icons";
import { FaLinkedin, FaFacebook, FaWhatsapp, FaGithub } from "react-icons/fa";

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/chamal-fernando/",
    icon: "FaLinkedin",
  },
  // {
  //   name: "Facebook",
  //   url: "https://www.facebook.com/",
  //   icon: React.createElement(FaFacebook),
  // },
  {
    name: "WhatsApp",
    url: "https://wa.me/+94711944422",
    icon: "FaWhatsapp",
  },
  {
    name: "GitHub",
    url: "https://github.com/Chamalfernando",
    icon: "FaGithub",
  },
];
