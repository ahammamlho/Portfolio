'use client';
import { useState } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { GiCancel } from 'react-icons/gi';
import ProjectCard from '@/app/components/ProjectCard';
import { useGlobalContext } from '@/app/context/store';
import { updateData } from '../update/update';

const Projects = () => {
  const { portfolioData, setPortfolioData } = useGlobalContext();

  const hadnleSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      title: event.target.title.value,
      urlImg: event.target.urlImage.value,
      description: event.target.description.value,
      urlGithub: event.target.urlGitHub.value,
      tags: tags,
    };

    setPortfolioData((pre) => {
      const result = pre;
      result.projects = [...pre.projects, data];
      updateData(result);
      return result;
    });
    setTags([]);
    setOpenAlert(false);
  };

  const [tags, setTags] = useState<string[]>([]);
  const [element, setElement] = useState<string>('');
  const [openAlert, setOpenAlert] = useState(false);

  if (!portfolioData || portfolioData._id === '-1') return <div>error</div>;
  return (
    <section className="flex justify-center mt-5 ">
      <div className="w-1/2 max-w-xl">
        <div>
          <div className="flex items-center pb-2">
            <label
              htmlFor="message"
              className="text-white block text-sm font-medium mr-2"
            >
              Add Projects
            </label>
            <IoIosAddCircle
              size={20}
              className="cursor-pointer"
              onClick={() => {
                setOpenAlert(true);
              }}
            />
          </div>

          {openAlert && (
            <form className="flex flex-col gap-2" onSubmit={hadnleSubmit}>
              <input
                type="text"
                id="title"
                required
                placeholder="Title"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2 outline-none"
              />
              <input
                type="text"
                id="urlImage"
                required
                placeholder="Url Image"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2 outline-none"
              />
              <input
                type="text"
                id="urlGitHub"
                required
                placeholder="Url GitHub"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2 outline-none"
              />
              <textarea
                name="description"
                id="description"
                placeholder="Description ..."
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2 outline-none"
              />
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="add tags"
                  value={element}
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-md block p-0.5 pl-2 w-1/3 outline-none"
                  onChange={(e) => {
                    setElement(e.target.value);
                  }}
                />
                <IoIosAddCircle
                  size={18}
                  className="cursor-pointer"
                  onClick={() => {
                    if (element.trim()) {
                      setTags((pre) => [...pre, element.trim()]);
                      setElement('');
                    }
                  }}
                />
              </div>
              <div>
                <div className="flex flex-wrap  gap-2 mt-1">
                  {tags &&
                    tags.map((elm, index) => (
                      <div
                        key={index}
                        className="text-sm bg-purple-500 px-1 py-0.5 rounded-md flex items-center gap-1 w-min group"
                      >
                        <p>{elm}</p>
                        <GiCancel
                          size={16}
                          className="hidden group-hover:block cursor-pointer text-red-600"
                          onClick={() => {
                            setTags((pre) => {
                              const newSkills = [...pre];
                              newSkills.splice(index, 1);
                              return newSkills;
                            });
                          }}
                        />
                      </div>
                    ))}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-purple-500 hover:bg-purple-400 w-[10rem]
                             text-white font-medium py-1 rounded-lg"
                >
                  Add
                </button>
              </div>
            </form>
          )}

          <div className="flex flex-wrap  gap-2 ">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="w-full p-3">
                <div className="relative">
                  <ProjectCard project={project} />
                  <div className="absolute top-2 right-2 cursor-pointer">
                    <GiCancel
                      size={18}
                      onClick={() => {
                        const result = { ...portfolioData };
                        result.projects.splice(index, 1);
                        updateData(result);
                        setPortfolioData(result);
                      }}

                      // result.projects.splice(index, 1);
                      // updateData(result);
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
