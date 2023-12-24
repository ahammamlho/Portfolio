'use client';
import { useGlobalContext } from '@/app/context/store';
import { useState } from 'react';
import { GiCancel } from 'react-icons/gi';
import { IoIosAddCircle, IoIosLink } from 'react-icons/io';
import { updateData } from '../update/update';
import AlertAddElment from './AlertAddElment';

const AboutCertifactions = () => {
  const { portfolioData, setPortfolioData } = useGlobalContext();
  const [openAlert, setOpenAlert] = useState(false);
  if (!portfolioData || portfolioData._id === '-1') return <div>error</div>;
  return (
    <section className="flex justify-center mt-4">
      <div className="w-1/2 max-w-xl">
        <div>
          <div className="flex items-center pb-2">
            <label
              htmlFor="message"
              className="text-white block text-sm font-medium mr-2"
            >
              Certifactions
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
            {portfolioData.certifications.map((elm, index) => (
              <div
                key={index}
                className="text-sm bg-yellow-500 px-1 py-0.5 rounded-md flex items-center gap-1  group"
              >
                <p>{elm.title}</p>
                <IoIosLink
                  size={16}
                  className="cursor-pointer "
                  onClick={() => {
                    window.open(elm.url, '_blank');
                  }}
                />

                <GiCancel
                  size={16}
                  className="hidden group-hover:block cursor-pointer text-red-600"
                  onClick={() => {
                    setPortfolioData((pre) => {
                      const result = { ...pre };
                      result.certifications.splice(index, 1);
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
        name="Certification"
        myFunction={(elm: dataElmentDto) => {
          setPortfolioData((pre) => {
            const result = pre;
            result.certifications = [...pre.certifications, elm];
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

export default AboutCertifactions;
