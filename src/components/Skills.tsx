// src/components/Skills.tsx
// import React from "react";
// import { skills } from "../data/skills";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const Skills = () => (
//   <section id="skills" className="py-12 px-6 max-w-4xl mx-auto">
//     <h3 className="text-2xl font-bold mb-4">Skills</h3>
//     <Swiper
//       slidesPerView={2}
//       spaceBetween={20}
//       //   pagination={{ clickable: true }}
//       loop={true}
//       speed={5000} // Duration of each transition (ms)
//       autoplay={{
//         delay: 0,
//         disableOnInteraction: false,
//       }}
//       breakpoints={{
//         640: { slidesPerView: 3 },
//         768: { slidesPerView: 4 },
//         1024: { slidesPerView: 5 },
//       }}
//       modules={[Autoplay]}
//     >
//       {skills.map((skill, index) => (
//         <SwiperSlide key={index}>
//           <div className="flex flex-col items-center justify-center bg-blend-color bg-conic-150 rounded-xl shadow p-4">
//             <img
//               src={skill.image}
//               alt={skill.name}
//               className="w-16 h-16 object-contain mb-2"
//             />
//             <span className="text-sm font-medium">{skill.name}</span>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   </section>
// );

// export default Skills;

// import React from "react";
// import { skills } from "../data/skills";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// type Skill = {
//   name: string;
//   image: string;
// };

// const COLUMN_COUNT = 4;

// const Skills = () => {
//   // Split skills into COLUMN_COUNT arrays
//   const columns: Skill[][] = Array.from({ length: COLUMN_COUNT }, () => []);
//   skills.forEach((skill, index) => {
//     columns[index % COLUMN_COUNT].push(skill);
//   });

//   return (
//     <section id="skills" className="py-12 px-6 max-w-6xl mx-auto">
//       <h3 className="text-2xl font-bold mb-6 text-center">Skills</h3>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {columns.map((colSkills, colIndex) => (
//           <div key={colIndex} className="h-96 overflow-hidden">
//             <Swiper
//               direction="vertical"
//               slidesPerView="auto"
//               loop={true}
//               allowTouchMove={false}
//               speed={4000}
//               autoplay={{
//                 delay: 0,
//                 disableOnInteraction: false,
//                 reverseDirection: colIndex % 2 !== 0, // Snake-like direction
//               }}
//               modules={[Autoplay]}
//               className="h-full"
//             >
//               {[...colSkills, ...colSkills].map((skill, idx) => (
//                 <SwiperSlide key={`${colIndex}-${idx}`}>
//                   <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow p-4 mt-4 mb-4 pt-4 pb-4">
//                     <img
//                       src={skill.image}
//                       alt={skill.name}
//                       className="w-16 h-16 object-contain"
//                     />
//                     <span className="text-sm font-medium">{skill.name}</span>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React, { useEffect, useState } from "react";
import { skills } from "../data/skills";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type Skill = {
  name: string;
  image: string;
};

// const COLUMN_COUNT = 4;
const getColumnCount = (width: number): number => {
  if (width < 640) return 1; // mobile (sm)
  if (width < 768) return 2; // tablet (md)
  return 4; // desktop (lg and above)
};

const splitIntoColumns = (skills: Skill[], count: number): Skill[][] => {
  const columns: Skill[][] = Array.from({ length: count }, () => []);
  skills.forEach((skill, index) => {
    const colIndex = index % count;
    columns[colIndex].push(skill);
  });
  return columns;
};

const Skills = () => {
  const [columnCount, setColumnCount] = useState(
    getColumnCount(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setColumnCount(getColumnCount(window.innerWidth));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const columns = splitIntoColumns(skills, columnCount);

  return (
    <section id="skills" className="py-12 px-6 max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center">Technical Skills</h3>
      {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6"> */}
      <div
        className={`grid grid-cols-${columnCount} sm:grid-cols-2 md:grid-cols-4 gap-6`}
      >
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="h-96 overflow-hidden">
            <Swiper
              direction="vertical"
              slidesPerView={4}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: colIndex % 2 !== 0, // Snake effect
              }}
              speed={3000}
              modules={[Autoplay]}
              className="h-full"
            >
              {[...col, ...col].map((skill, i) => (
                <SwiperSlide key={`${colIndex}-${i}`}>
                  <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow p-4 mt-4 mb-4 pt-4 pb-4">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-16 h-16 object-contain"
                    />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

// import React, { useEffect, useRef, useState } from "react";
// import { skills } from "../data/skills";

// type Skill = {
//   name: string;
//   image: string;
// };

// const COLUMN_COUNT = 4;

// const Skills = () => {
//   const [columnData, setColumnData] = useState<Skill[][]>([]);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const scrollIndex = useRef(0);

//   // Distribute items across columns in a normal pattern
//   useEffect(() => {
//     const columns: Skill[][] = Array.from({ length: COLUMN_COUNT }, () => []);
//     skills.forEach((skill, index) => {
//       const colIndex = index % COLUMN_COUNT;
//       columns[colIndex].push(skill);
//     });
//     setColumnData(columns);
//   }, []);

//   // Snake-like vertical scrolling
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!containerRef.current) return;

//       const columns = containerRef.current.querySelectorAll(".scroll-col");
//       columns.forEach((col, index) => {
//         // Even index scrolls down, odd index scrolls up
//         const direction = index % 2 === 0 ? 1 : -1;
//         col.scrollTop += direction;

//         const scrollLimit = col.scrollHeight / 2;
//         if (direction === 1 && col.scrollTop >= scrollLimit) {
//           col.scrollTop = 0;
//         } else if (direction === -1 && col.scrollTop <= 0) {
//           col.scrollTop = scrollLimit;
//         }
//       });

//       scrollIndex.current += 1;
//     }, 16); // ~60fps

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="skills" className="py-12 px-6 max-w-6xl mx-auto">
//       <h3 className="text-2xl font-bold mb-6 text-center">Skills</h3>
//       <div
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
//         ref={containerRef}
//       >
//         {columnData.map((colSkills, i) => (
//           <div
//             key={i}
//             className="scroll-col overflow-hidden h-96 relative"
//             style={{ scrollBehavior: "smooth" }}
//           >
//             <div className="flex flex-col">
//               {/* Duplicate the list for infinite scroll effect */}
//               {[...colSkills, ...colSkills].map((skill, idx) => (
//                 <div
//                   key={`${i}-${idx}`}
//                   className="flex flex-col items-center justify-center bg-white rounded-xl shadow p-4 mb-4"
//                 >
//                   <img
//                     src={skill.image}
//                     alt={skill.name}
//                     className="w-16 h-16 object-contain mb-2"
//                   />
//                   <span className="text-sm font-medium">{skill.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;
