"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { IoMdMenu } from "react-icons/io";
import { MdOutlineCancelPresentation } from "react-icons/md";
import MenuOverlay from './MenuOverlay';

const navLinks: { path: string, title: string }[] = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Conatct",
        path: "#contact"
    },
]
const NavBar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)


    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] '>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-1'>
                <Link href='/' className='text-xl md:text-3xl text-white font-semibold'>
                    LOGO
                </Link>
                <div className='mobile-menu block md:hidden text-white'>
                    {!navbarOpen ?
                        <IoMdMenu size={25} className="cursor-pointer text-slate-400 hover:text-white"
                            onClick={() => setNavbarOpen(true)} /> :
                        <MdOutlineCancelPresentation size={25} className="cursor-pointer text-slate-400 hover:text-white"
                            onClick={() => setNavbarOpen(false)} />}
                </div>
                <div className='menu hidden sm:block md:w-auto' id='navbar'>
                    <ul className='flex md:flex-row p-4 md:p-0 md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
            {navbarOpen && <MenuOverlay links={navLinks} />}
        </nav>
    )
}

export default NavBar
