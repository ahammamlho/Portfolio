'use client';
import React, { useState, useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { animate, motion, useAnimation, useInView } from 'framer-motion';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useGlobalContext } from '../context/store';
type projectsDto = {
  id: number;
  title: string;
  description: string;
  urlImage: string;
  tags: string[];
  gitUrl: string;
  // previewUrl: string,
};

const boxVariant = {
  visible: { opacity: 1, scale: 2 },
  hidden: { opacity: 0, scale: 0 },
};

const ProjectSection = () => {
  const { portfolioData } = useGlobalContext();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [search, setSearch] = useState('');

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="pt-6">
      <div className="flex items-center justify-center gap-2 mt-6 mb-4">
        <h2 className="text-center text-4xl font-bold text-white">
          My Project
        </h2>
      </div>

      <div className="flex justify-center">
        <div
          className="flex bg-[#18191E] items-center justify-between
       border border-[#33353F] placeholder-[#9CA2A9]   rounded-lg
       sm:w-[20rem] w-[12rem] pr-2 mb-5"
        >
          <input
            type="text"
            placeholder="Search by Tool"
            value={search}
            className="outline-none text-gray-100 bg-[#18191E]  sm:w-[15rem] w-[9rem] p-1 rounded-lg text-sm"
            onChange={(e) => setSearch(e.target.value)}
          />
          <BiSearchAlt2 size={20} />
        </div>
      </div>

      <ul
        ref={ref}
        className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap:12"
      >
        {portfolioData?.projects
          .filter((elm) => {
            for (const tag of elm.tags) {
              if (tag.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                return true;
            }
            if (search === '') return true;
            return false;
          })

          .map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              transition={{ duration: 0.2, delay: index * 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
