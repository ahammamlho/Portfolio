'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import LinkedinIcon from "../../../public/socials/linkedin-icon.svg"
import GitHubIcon from "../../../public/socials/github-icon.svg"
const EmailSection = () => {


    const hadnleSubmit = async (event: any) => { // React.FormEvent<HTMLFormElement>
        event.preventDefault();
        const data = {
            email: event.target.email.value,
            subject: event.target.subject.value,
            message: event.target.message.value
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send"
        console.log(data);
        console.log(JSONdata);

    }

    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
            <div>
                <h5 className='text-xl font-bold text-white my-2'>
                    Let's Connect
                </h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    I'm currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi,
                    I'll try my best to get back to you!
                </p>
                <div className='socials flex gap-2'>
                    <Link href="">
                        <Image src={LinkedinIcon} alt='Linkedin Icon' />
                    </Link>
                    <Link href="">
                        <Image src={GitHubIcon} alt='Linkedin Icon' />
                    </Link>
                </div>
            </div>

            <div>
                <form className='flex flex-col' onSubmit={hadnleSubmit}>
                    <div className='mb-4 flex flex-col'>
                        <label htmlFor="email"
                            className='text-white block mb-1 text-sm font-medium'
                        >Your email</label>
                        <input type="email" id='email' required placeholder='name@company.com'
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg
                        block p-2'
                        />
                    </div>

                    <div className='mb-4 flex flex-col'>
                        <label htmlFor="text"
                            className='text-white block mb-1 text-sm font-medium'
                        >Subject</label>
                        <input type="text" id='subject' required placeholder='Just saying hi!'
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg
                            block p-2'
                        />
                    </div>

                    <div className='mb-4 flex flex-col'>
                        <label htmlFor="message"
                            className='text-white block mb-1 text-sm font-medium'
                        >Message</label>
                        <textarea
                            name='message'
                            id='message'
                            placeholder="Let's talk about..."
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg
                         block p-2'
                        />
                    </div>
                    <div className='flex items-center justify-center'>
                        <button
                            type='submit'
                            className='bg-yellow-500 hover:bg-yellow-600 
                             text-white font-medium py-1.5 px-6 rounded-lg'
                        >Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default EmailSection
