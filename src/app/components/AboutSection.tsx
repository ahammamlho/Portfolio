'use client'
import React, { useEffect, useState, useTransition } from 'react'
import Image from "next/image"
import TabButton from './TabButton'
import { useGlobalContext } from '../context/store'
import Link from 'next/link'



const AboutSection = () => {
    const { portfolioData } = useGlobalContext();
    const [tabData, SetTabData] = useState([
        {
            title: 'Skills',
            id: "skills",
            content: [{ title: "NextJs", url: "String" }]
        },
        {
            title: 'Education',
            id: "education",
            content: [{ title: "NextJs", url: "String" }]
        },
        {
            title: 'Certifactions',
            id: "certifications",
            content: [{ title: "NextJs", url: "String" }]
        }
    ])
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition();



    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        })
    }

    useEffect(() => {
        if (portfolioData) {
            SetTabData((pre) => {
                for (const el of pre) {
                    if (el.id === "skills")
                        el.content = portfolioData.skills
                    if (el.id === "education")
                        el.content = portfolioData.education
                    if (el.id === "certifications")
                        el.content = portfolioData.certifications
                }
                return pre;
            });
        }
    }, [portfolioData])


    if (!portfolioData) return <p className='bg-red-300'>wait</p>
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
                    <h2 className='text-4xl font-bold text-whit mb-4'  >About me</h2>
                    <p className='text-base md:text-lg'>
                        {portfolioData.aboutme}
                    </p>

                    <div className='flex flex-row mt-8'>
                        {tabData.map((elm, index) => (
                            <TabButton key={index} selectTap={() => handleTabChange(elm.id)} active={tab == elm.id}>{elm.title}</TabButton>
                        ))}
                    </div>
                    <div className='mt-4'>
                        {tabData.find((t) => t.id === tab)?.content.map((elm, index) => (
                            <Link href={elm.url} target="_blank">
                            <ul key={index} className='list-disc pl-2 hover:underline cursor-pointer'>
                                <li className=''>{elm.title}</li>
                            </ul>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
