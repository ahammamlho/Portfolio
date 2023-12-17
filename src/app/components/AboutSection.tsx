'use client'
import React, { useState, useTransition } from 'react'
import Image from "next/image"
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: 'Skills',
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>NodeJs</li>
                <li>ExpressJs</li>
                <li>PostgressSQL</li>
                <li>JavaScript</li>
                <li>ReactJs</li>
                <li>NestJs</li>
                <li>NextJs</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>1337 School</li>
                <li>ENSEM</li>
                <li>CPGE</li>
            </ul>
        )
    },
    {
        title: 'Certifactions',
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Fullsatck Academy of code</li>
                <li>python</li>
                <li>flutter</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        })
    }
    return (
        <section className='text-white' id="about">
            <div className='md:grid md:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 sm:px-16'>
                <Image
                    src="/about-image.png"
                    alt="image"
                    width={500}
                    height={500}
                />
                <div className='mt-4 md:mt-0'>
                    <h2 className='text-4xl font-bold text-whit mb-4'>About me</h2>
                    <p className='text-base md:text-lg'>
                        I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
                    </p>

                    <div className='flex flex-row mt-8'>
                        {TAB_DATA.map((elm, index) => (
                            <TabButton key={index} selectTap={() => handleTabChange(elm.id)} active={tab == elm.id}>{elm.title}</TabButton>
                        ))}
                    </div>
                    <div className='mt-4'>
                        {TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
