'use client';
import { useGlobalContext } from '@/app/context/store';
import { useEffect, useState } from 'react';
import { GiCancel } from 'react-icons/gi';
import { IoIosAddCircle } from 'react-icons/io';
import AlertAddElment from './AlertAddElment';
import { updateData } from '../update/update';

const AboutEducation = () => {
  const { portfolioData, setPortfolioData } = useGlobalContext();
  const [openAlert, setOpenAlert] = useState(false);

  if (!portfolioData || portfolioData._id === '-1') return <div></div>;
  return (
    <section className="flex justify-center mt-4">
      <div className="w-1/2 max-w-xl">
        <div>
          <div className="flex items-center pb-2">
            <label
              htmlFor="message"
              className="text-white block text-sm font-medium mr-2"
            >
              Education
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
            {portfolioData.education.map((elm, index) => (
              <div
                key={index}
                className="text-sm bg-purple-500 px-1 py-0.5 rounded-md flex items-center gap-1  group"
              >
                <p>{elm.title}</p>
                <GiCancel
                  size={16}
                  className="hidden group-hover:block cursor-pointer text-red-500"
                  onClick={() => {
                    const result = { ...portfolioData };
                    result.education.splice(index, 1);
                    setPortfolioData(result);
                    updateData(result);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <AlertAddElment
        name="Education"
        myFunction={(elm: dataElmentDto) => {
          const result = { ...portfolioData };
          result.education = [...portfolioData.education, elm];
          const res = updateData(result);
          console.log('resresresres=', res);
          setPortfolioData(result);
        }}
        openAlert={openAlert}
        setOpenAlert={setOpenAlert}
      />
    </section>
  );
};

export default AboutEducation;
