"use client"
import React from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">

                <div className='col-span-7 place place-self-center  text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span> Hello, I'm </span>
                        <br />
                        {/* Lhoussaine */}
                        <TypeAnimation
                            sequence={[
                                'Lhoussaine',
                                1000,
                                'Web developer',
                                1000,
                                'Backend developer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iste optio debitis
                    </p>
                    <div>
                        <button className='w-full sm:w-fit px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>
                            Hire me
                        </button>
                        <button className='w-full sm:w-fit mt-4 sm:mt-0 px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white'>
                            Download CV
                        </button>
                    </div>
                </div>

                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] flex justify-center items-center
                        w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] '>
                        <Image
                            src="/hero-image.png"
                            alt="image"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HeroSection
