'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  function downloadPdf(url: string, filename = 'ahammam_cv.pdf') {
    fetch(
      'https://drive.google.com/uc?export=download&id=17OQnP8pPFSvW6AqS3DzMpvqea3POBfJH',
      { mode: 'no-cors' },
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.blob();
      })
      .then((blob) => {
        // Handle the blob (e.g., render it in the UI)
      })
      .catch((error) => {
        console.error('Error fetching file:', error);
      });
  }
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place place-self-center  text-left order-2 sm:order-1 mr-[1rem]"
        >
          <h1 className="text-white mb-4 text-2xl sm:text-3xl lg:text-6xl font-extrabold">
            <span> Hello, I&apos;m </span>
            <br />
            <TypeAnimation
              sequence={[
                'Lhoussaine',
                2000,
                'Web developer',
                2000,
                'Mobile developer',
                2000,
              ]}
              wrapper="span"
              speed={19}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Welcome to my Website where ideas come to life, one line at a time.
          </p>
          <div>
            <Link
              href="https://ma.linkedin.com/in/lhoussaine-ahammam-966831182?trk=people_directory"
              target="_blank"
            >
              <button className="w-full sm:w-fit px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
                Hire me
              </button>
            </Link>
            <button
              className="w-full sm:w-fit mt-4 sm:mt-0 px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white"
              onClick={() => {
                const pdfUrl =
                  'https://drive.google.com/uc?export=download&id=17OQnP8pPFSvW6AqS3DzMpvqea3POBfJH'; // Replace with your PDF URL
                const filename = 'cv.pdf'; // Name for the downloaded file
                downloadPdf(pdfUrl, filename);
              }}
            >
              Download CV
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0 order-1 sm:order-2"
        >
          <div
            className="rounded-full bg-[#181818] flex justify-center items-center
                        w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] "
          >
            <Image src="/me2.png" alt="image" width={300} height={300} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
