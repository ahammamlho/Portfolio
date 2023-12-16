"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTags from './ProjectTags';

type projectsDto = {
    id: number,
    title: string,
    description: string,
    image: string,
    tag: string[],
    gitUrl: string,
    previewUrl: string,
};

const projectsData: projectsDto[] = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Project 1 description",
        image: "/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Potography Portfolio Website",
        description: "Project 2 description",
        image: "/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "E-commerce Application",
        description: "Project 3 description",
        image: "/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Food Ordering Application",
        description: "Project 4 description",
        image: "/projects/4.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "React Firebase Template",
        description: "Authentication and CRUD operations",
        image: "/projects/5.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "Full-stack Roadmap",
        description: "Project 5 description",
        image: "/projects/6.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
];

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    return (
        <div>
            <h2 className='text-center text-4xl font-bold text-white mt-4'>
                My Projects
            </h2>
            <div className='text-white flex justify-center items-center gap-2 py-6'>
                <ProjectTags name="All" onClick={() => {
                    setTag("All"); console.log("DSLKDSKJLSKJDLKS")
                }} isSelected={tag === "All"} />
                <ProjectTags name="Web" onClick={() => { setTag("Web") }} isSelected={tag === "Web"} />
                <ProjectTags name="Mobile" onClick={() => { setTag("Mobile") }} isSelected={tag === "Mobile"} />


            </div>
            <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap:12'>
                {projectsData.filter((elm) => elm.tag.includes(tag)).
                    map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}

            </div>
        </div>
    )
}

export default ProjectSection
