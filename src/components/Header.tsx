// import React from "react";

// const Header = () => (
//   <header className="bg-white shadow-md">
//     <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold">Chamal Fernando</h1>
//       <nav className="space-x-4">
//         <a href="#about" className="hover:text-blue-600">
//           About
//         </a>
//         <a href="#skills" className="hover:text-blue-600">
//           Skills
//         </a>
//         <a href="#projects" className="hover:text-blue-600">
//           Projects
//         </a>
//         <a href="#contact" className="hover:text-blue-600">
//           Contact
//         </a>
//       </nav>
//     </div>
//   </header>
// );

// export default Header;

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0); // Track last scroll position
  //   const lastDirection = useRef(""); // Track scroll direction (up/down)
  const headerRef = useRef<HTMLElement | null>(null); // Reference to the header element
  const mouseNearTop = useRef(false); // Track if mouse is near the top of the page
  const hideTimeout = useRef<number | null>(null); // For hiding with delay
  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (headerRef.current) {
  //       headerRef.current.focus();
  //     }
  //   }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const headerHeight = headerRef.current?.offsetHeight || 0; // Get the header height

      // If scrolling down and mouse isn't near top, hide header.
      if (currentScrollY > lastScrollY.current && !mouseNearTop.current) {
        setVisible(false);
      }

      // If scrolling up, show header (only when we're above its original position)
      if (
        currentScrollY < lastScrollY.current &&
        currentScrollY < headerHeight
      ) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY; // Update last scroll position
    };

    const handleMouseMove = (e: MouseEvent) => {
      const nearTop = e.clientY <= 50; // When mouse is near top of the page
      mouseNearTop.current = nearTop;

      if (nearTop) {
        // Clear any pending hide timeout and show header immediately.
        if (hideTimeout.current) {
          clearTimeout(hideTimeout.current);
          hideTimeout.current = null;
        }
        setVisible(true);
      } else {
        // When the mouse moves away, wait briefly before hiding.
        if (window.scrollY > 100) {
          if (hideTimeout.current) {
            clearTimeout(hideTimeout.current);
          }
          hideTimeout.current = window.setTimeout(() => {
            setVisible(false);
          }, 300); // Delay hiding by 300ms
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      //   tabIndex={-1} // 👈 Make the element programmatically focusable
      className={`fixed top-0 bottom-1/5 left-0 w-full z-50 bg-white shadow-md transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Chamal Fernando</h1>
        <nav className="space-x-4">
          <a
            href="#about"
            className="hover:text-blue-600"
            onClick={() => navigate(`/`)}
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-blue-600"
            onClick={() => navigate(`/`)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-blue-600"
            onClick={() => navigate(`/`)}
          >
            Projects
          </a>
          <a
            href="#contactFooter"
            className="hover:text-blue-600"
            onClick={() => navigate(`/`)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
