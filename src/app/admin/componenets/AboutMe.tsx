'use client'
import Link from 'next/link'
import React from 'react'
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { GiCancel } from "react-icons/gi";

const AboutMe = () => {


    const hadnleSubmit = async (event: any) => {
        event.preventDefault();
        const data = {
            email: event.target.email.value,
            subject: event.target.subject.value,
            message: event.target.message.value
        }
        const JSONdata = JSON.stringify(data);
    }

    return (
        <section className='flex justify-center mt-4'>

            <div className='w-1/2 max-w-xl'>
                <div className='flex flex-col' onSubmit={hadnleSubmit}>
                    <div className='mb-4 flex flex-col'>
                        <div className='flex items-center pb-2'>
                            <label htmlFor="message"
                                className='text-white block mb-1 text-sm font-medium mr-2'
                            >About me</label>
                            <IoCheckmarkDoneCircle size={20} className='cursor-pointer' />
                        </div>
                        <textarea
                            name='message'
                            id='message'
                            placeholder="Let's talk about..."
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg
                         block p-2'
                        />
                    </div>

                </div>

            </div>


        </section>
    )
}

export default AboutMe
