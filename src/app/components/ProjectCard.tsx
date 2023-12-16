import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

type projectsDto = {
    id: number,
    title: string,
    description: string,
    image: string,
    tag: string[],
    gitUrl: string,
    previewUrl: string,
};

const ProjectCard = ({ project }: { project: projectsDto }) => {
    return (
        <div>
            <div className='h-52 md:h-72 rounded-t-xl relative group'
                style={{
                    background: `url(${project.image})`,
                    backgroundSize: "cover"
                }}>
                <div className='overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden items-center justify-center
                group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 '>
                    <Link href={project.previewUrl} className='h-14 w-14 mr-1 border-2 relative rounded-full 
                    border-[#ADB7BE] hover:border-white flex items-center justify-center group/link'>
                        <FaExternalLinkAlt className="h-6 w-6 text-[#ADB7BE]  cursor-pointer group-hover/link:text-white" />
                    </Link>

                    <Link href={project.gitUrl} className='h-14 w-14 ml-1 border-2 relative rounded-full 
                    border-[#ADB7BE] hover:border-white flex items-center justify-center group/link'>
                        <FaGithub className="h-6 w-6 text-[#ADB7BE]  cursor-pointer group-hover/link:text-white" />
                    </Link>
                </div>
            </div>
            <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
                <h5 className='text-xl font-semibold mb-2'>{project.title}</h5>
                <p className='text-[#ADB7BE]'>{project.description}</p>
            </div>
        </div>
    )
}

export default ProjectCard
