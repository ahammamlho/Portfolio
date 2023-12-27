'use client';
import React from 'react';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { useGlobalContext } from '@/app/context/store';
import { updateData } from '../update/update';
import { ToastContainer, toast } from 'react-toastify';
const AboutMe = () => {
  const { portfolioData, setPortfolioData } = useGlobalContext();

  if (!portfolioData || portfolioData._id === '-1') return <div></div>;
  return (
    <section className="flex justify-center mt-16">
      <div className="w-1/2 max-w-xl">
        <div className="flex flex-col">
          <div className="mb-4 flex flex-col">
            <div className="flex items-center pb-2">
              <label className="text-white block mb-1 text-sm font-medium mr-2">
                About me
              </label>
              <IoCheckmarkDoneCircle
                size={20}
                className="cursor-pointer"
                onClick={() => {
                  updateData(portfolioData);
                }}
              />
            </div>

            <textarea
              value={portfolioData.aboutme}
              onChange={(e) => {
                setPortfolioData((pre) => {
                  return { ...pre, aboutme: e.target.value };
                });
              }}
              name="aboutme"
              id="aboutme"
              placeholder="Let's talk about..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg
                         block p-2 outline-none"
            />
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </section>
  );
};

export default AboutMe;
