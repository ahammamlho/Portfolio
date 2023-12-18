'use client'
import { useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import ProjectCard from '@/app/components/ProjectCard';

interface projectsDto {
    title: string,
    description: string,
    urlImage: string,
    tag: string[],
    gitUrl: string,
    previewUrl: string,

}

const Projects = () => {
    const hadnleSubmit = async (event: any) => {
        event.preventDefault();
        const data: projectsDto = {
            title: event.target.title.value,
            description: event.target.description.value,
            urlImage: event.target.urlImage.value,
            gitUrl: event.target.urlGitHub.value,
            tag: tags,
            previewUrl: ""
        }
        console.log(data.tag)
        setProjects((prev) => {
            if (prev) return [...prev, data]
            else return [data]
        })
        setOpenAlert(false)
    }
    const [projects, setProjects] = useState<projectsDto[]>();
    const [tags, setTags] = useState<string[]>(['All']);
    const [element, setElement] = useState<string>("");
    const [openAlert, setOpenAlert] = useState(false);

    return (
        <section className='flex justify-center mt-5 '>
            <div className='w-1/2 max-w-xl'>
                <div >
                    <div className='flex items-center pb-2'>
                        <label htmlFor="message"
                            className='text-white block text-sm font-medium mr-2'
                        >Add Projects</label>
                        <IoIosAddCircle size={20} className='cursor-pointer' onClick={() => { setOpenAlert(true) }} />
                    </div>

                    {openAlert &&
                        <form className='flex flex-col gap-2' onSubmit={hadnleSubmit}>
                            <input type="text" id='title' required placeholder='Title'
                                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2'
                            />
                            <input type="text" id='urlImage' required placeholder='Url Image'
                                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2'
                            />
                            <input type="text" id='urlGitHub' required placeholder='Url GitHub'
                                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2'
                            />
                            <textarea
                                name='description'
                                id='description'
                                placeholder="Description ..."
                                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2'
                            />
                            <div className='flex items-center gap-2'>
                                <input type="text" placeholder='add tag' value={element}
                                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-md block p-0.5 pl-2 w-1/3'
                                    onChange={(e) => {
                                        setElement(e.target.value);
                                    }}
                                />
                                <IoIosAddCircle size={18} className='cursor-pointer' onClick={() => {
                                    setTags((pre) => [...pre, element.trim()]);
                                    setElement("");
                                }} />
                            </div>
                            <div>
                                <div className='text-sm'>Tags :</div>
                                <div className='flex flex-wrap  gap-2 mt-1'>
                                    {tags && tags.map((elm, index) =>
                                        <div key={index} className='text-sm bg-yellow-500 px-1 py-0.5 rounded-md flex items-center gap-1 w-min group'>
                                            <p>{elm}</p>
                                            <GiCancel size={16} className='hidden group-hover:block cursor-pointer text-red-600'
                                                onClick={() => {
                                                    setTags((pre) => {
                                                        const newSkills = [...pre];
                                                        newSkills.splice(index, 1);
                                                        return newSkills;

                                                    });

                                                }} />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className='flex items-center justify-center'>
                                <button
                                    type='submit'
                                    className='bg-yellow-500 hover:bg-yellow-600 
                             text-white font-medium py-1 px-3 rounded-lg'
                                >Add</button>
                            </div >
                        </form>

                    }

                    <div className='flex flex-wrap  gap-2 '>
                        {projects && projects.map((project, index) =>
                            <div key={index} className='w-full p-3 '>
                                <ProjectCard project={project} />
                            </div>
                        )}
                    </div>

                </div>

            </div>




        </section >
    )
}

export default Projects