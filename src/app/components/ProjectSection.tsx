"use client"
import React, { useState, useRef, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTags from './ProjectTags';
import { animate, motion, useInView } from "framer-motion"
import { useGlobalContext } from '../context/store';
type projectsDto = {
    id: number,
    title: string,
    description: string,
    urlImage: string,
    tags: string[],
    // gitUrl: string,
    // previewUrl: string,
};

const ProjectSection = () => {

    const { portfolioData } = useGlobalContext();

    const [tag, setTag] = useState("All");
    const [allTags, setAllTags] = useState<string[]>(["All"]);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (portfolioData) {
            setAllTags((pre) => {
                let result: string[] = ['All'];
                for (const project of portfolioData.projects) {
                    for (const tg of project.tags) {
                        if (!result.includes(tg))
                            result.push(tg);
                    }
                }
                return result;
            })
        }
    }, [portfolioData]);
    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    }
    return (
        <section id="projects" >
            <h2 className='text-center text-4xl font-bold text-white mt-4'>
                My Projects
            </h2>
            <div className='text-white flex justify-center items-center gap-2 py-6'>
                {allTags.map((tg, index) => (
                    <ProjectTags key={index} name={tg} onClick={() => { setTag(tg) }} isSelected={tag === tg} />
                ))}
            </div>

            <ul ref={ref} className='grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap:12'>
                {portfolioData?.projects.filter((elm) => elm.tags.includes(tag)).
                    map((project, index) => (
                        <motion.li key={index}
                            variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"}
                            transition={{ duration: 0.2, delay: index * 0.3 }}>
                            <ProjectCard project={project} />
                        </motion.li>
                    ))}

            </ul>
        </section>
    )
}

export default ProjectSection
