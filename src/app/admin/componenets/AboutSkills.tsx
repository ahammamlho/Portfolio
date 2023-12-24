'use client';
import React, { useEffect, useState } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { GiCancel } from 'react-icons/gi';
import AlertAddElment from './AlertAddElment';
import { useGlobalContext } from '@/app/context/store';
import { updateData } from '../update/update';

const AboutSkills = () => {
  const { portfolioData, setPortfolioData } = useGlobalContext();

  const [openAlert, setOpenAlert] = useState(false);

  if (!portfolioData || portfolioData._id === '-1') return <div>error</div>;

  return (
    <section className="flex justify-center mt-2">
      <div className="w-1/2 max-w-xl">
        <div>
          <div className="flex items-center pb-2">
            <label
              htmlFor="message"
              className="text-white block text-sm font-medium mr-2"
            >
              Skils
            </label>
            <IoIosAddCircle
              size={20}
              className="cursor-pointer"
              onClick={() => {
                setOpenAlert(true);
              }}
            />
          </div>
          <div className="flex flex-wrap  gap-2">
            {portfolioData.skills.map((elm, index) => (
              <div
                key={index}
                className="text-sm bg-yellow-500 px-1 py-0.5 rounded-md flex items-center gap-1  group"
              >
                <p>{elm.title}</p>
                <GiCancel
                  size={16}
                  className="hidden group-hover:block cursor-pointer text-red-600"
                  onClick={() => {
                    setPortfolioData((pre) => {
                      const result = { ...pre };
                      result.skills.splice(index, 1);
                      updateData(result);
                      return result;
                    });
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <AlertAddElment
        name="Skils"
        myFunction={(elm: dataElmentDto) => {
          setPortfolioData((pre) => {
            const result = { ...pre };
            result.skills = [...pre.skills, elm];
            updateData(result);
            return result;
          });
        }}
        openAlert={openAlert}
        setOpenAlert={setOpenAlert}
      />
    </section>
  );
};

export default AboutSkills;
