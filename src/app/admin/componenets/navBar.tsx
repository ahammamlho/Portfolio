"use client"
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { TbLogout } from "react-icons/tb";
const NavBarAdmin = () => {

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] '>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-1'>
                <Link href='/' className='text-xl md:text-3xl text-white font-semibold'>
                    LOGO
                </Link>
                <div className='m text-white'>

                    <TbLogout size={25} className="cursor-pointer text-slate-400 hover:text-white"
                        onClick={() => {
                            signOut({ callbackUrl: '/login' });
                        }} />

                </div>


            </div>
        </nav>
    )
}

export default NavBarAdmin
