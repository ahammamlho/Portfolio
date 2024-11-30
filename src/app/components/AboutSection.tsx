'use client';
import React, { useEffect, useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { useGlobalContext } from '../context/store';
import Link from 'next/link';

const AboutSection = () => {
  const aboutme =
    "Hello there! 👋 I'm LHOUSSAINE, a student at 1337 School, currently honing my skills in FullStack development with a focus on JavaScript, Nest.js, Express.js, Next.js and PostgreSQL. I am always eager to learn new technologies and techniques to enhance my skills and stay up-to-date.";

  const tabData = [
    {
      title: 'Skills',
      id: 'skills',
      content: [
        { title: 'ReactJs', url: 'https://react.dev/' },
        { title: 'NextJs', url: 'https://nextjs.org/' },
        { title: 'NodeJs', url: 'https://nodejs.org/en' },
        { title: 'NestJs', url: 'https://nestjs.com/' },
        { title: 'PostgresQL', url: 'https://www.postgresql.org/' },
        { title: 'Prisma ORM', url: 'https://www.prisma.io/' },
        { title: 'Flutter', url: 'https://flutter.dev/' },
      ],
    },
    {
      title: 'Education',
      id: 'education',
      content: [
        { title: '1337 Coding School', url: 'https://1337.ma/en/' },
        { title: 'ENSEM Casablanca', url: 'https://portal.ensem.ac.ma/' },
        { title: 'CPGE Errachidia', url: 'https://www.cpge.ac.ma/' },
      ],
    },
    {
      title: 'Certifactions',
      id: 'certifications',
      content: [
        {
          title: 'Modern JavaScript (Complete guide, from Novice to Ninja)',
          url: 'https://www.udemy.com/course/modern-javascript-from-novice-to-ninja/',
        },
      ],
    },
  ];

  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8  py-8 px-4 xl:gasp-16 sm:p-10 ">
        <Image
          src="/about.png"
          className="hidden md:block rounded-xl"
          alt="image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0">
          <h2 className="text-4xl font-bold text-whit mb-4">About me</h2>
          <p className="text-base md:text-lg">{aboutme}</p>
          <div className="flex flex-row mt-8">
            {tabData.map((elm, index) => (
              <TabButton
                key={index}
                selectTap={() => handleTabChange(elm.id)}
                active={tab == elm.id}
              >
                {elm.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-4">
            {tabData
              .find((t) => t.id === tab)
              ?.content.map((elm, index) => (
                <Link key={index} href={elm.url} target="_blank">
                  <ul className="list-disc pl-2 hover:underline cursor-pointer">
                    <li className="">{elm.title}</li>
                  </ul>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
