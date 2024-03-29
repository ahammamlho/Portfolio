'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { IoMdMenu } from 'react-icons/io';
import { MdOutlineCancelPresentation } from 'react-icons/md';
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';

const navLinks: { path: string; title: string }[] = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];
const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] mr-4">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-1">
        <Link href="/" className="text-xl md:text-3xl text-white font-semibold">
          <Image src="/logo.png" alt="image" width={50} height={50} />
        </Link>
        <div className="mobile-menu block md:hidden text-white">
          {!navbarOpen ? (
            <IoMdMenu
              size={35}
              className="cursor-pointer text-slate-400 hover:text-white"
              onClick={() => setNavbarOpen(true)}
            />
          ) : (
            <MdOutlineCancelPresentation
              size={35}
              className="cursor-pointer text-slate-400 hover:text-white"
              onClick={() => setNavbarOpen(false)}
            />
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex md:flex-row p-4 md:p-0 md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
     <div className=''>
     {navbarOpen && <MenuOverlay links={navLinks} />}
     </div>
    </nav>
  );
};

export default NavBar;
