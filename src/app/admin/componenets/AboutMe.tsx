'use client'
import React, { useEffect, useState } from 'react'
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useGlobalContext } from '@/app/context/store';

const AboutMe = () => {

    const { portfolioData } = useGlobalContext();

    const [about, setAbout] = useState('');

    useEffect(() => {
        if (portfolioData) {
            setAbout(portfolioData.aboutme);
        }
    }, [portfolioData])

    const updateAbout = async (id: String, txt: string) => {
        try {
            const res = await fetch(`/api/data?id=${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ aboutme: txt })
            })
        } catch (error) {
        }
    }
    if (!portfolioData || portfolioData._id === '-1') return (<div>error</div>)
    return (
        <section className='flex justify-center mt-10'>

            <div className='w-1/2 max-w-xl'>
                <div className='flex flex-col'  >
                    <div className='mb-4 flex flex-col'>

                        <div className='flex items-center pb-2'>
                            <label className='text-white block mb-1 text-sm font-medium mr-2'
                            >About me</label>
                            <IoCheckmarkDoneCircle size={20} className='cursor-pointer'
                                onClick={() => {
                                    updateAbout(portfolioData._id, about)
                                }} />
                        </div>

                        <textarea
                            value={about}
                            onChange={(e) => { setAbout(e.target.value) }}
                            name='aboutme'
                            id='aboutme'
                            placeholder="Let's talk about..."
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg
                         block p-2'
                        />
                    </div>

                </div>

            </div>


        </section >
    )
}

export default AboutMe
