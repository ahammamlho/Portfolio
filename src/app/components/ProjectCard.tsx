import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

type projectsDto = {
  id: number;
  title: string;
  description: string;
  urlImage: string;
  tags: string[];
  gitUrl: string;
  // previewUrl: string,
};

const ProjectCard = ({ project }: { project: projectsDto }) => {
  return (
    <div className="hover:border-[1px] hover:border-white border-[1px] border-black rounded-xl ">
      <div
        className=" rounded-t-xl relative group h-52 md:h-72"
        // style={{
        //     background: `url(${project.urlImg})`,
        //     backgroundSize: "cover",
        // }}
      >
        <Image
          className="h-52 md:h-72 rounded-t-xl  w-full"
          src={project.urlImage}
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div
          className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden items-center justify-center rounded-t-xl
                group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 "
        >
          <Link
            href={project.gitUrl || 'https://github.com/ahammamlho'}
            target="_blank"
            className="h-10 w-10 ml-1 border-2 relative rounded-full 
                    border-[#ADB7BE] hover:border-white flex items-center justify-center group/link"
          >
            <FaGithub className="h-5 w-5 text-[#ADB7BE]  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 h-[18rem]">
        <div className="flex flex-wrap  gap-2 mt-1  ">
          {project.tags.map((elm, index) => (
            <div
              key={index}
              className="text-sm  border-purple-500 px-1.5 rounded-xl flex items-center gap-1 border   hover:border-white"
            >
              <p>{elm}</p>
            </div>
          ))}
        </div>
        <h5 className="text-xl font-semibold mb-2 mt-3">{project.title}</h5>
        <p className="text-[#ADB7BE]">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
