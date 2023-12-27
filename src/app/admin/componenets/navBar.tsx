'use client';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { TbLogout } from 'react-icons/tb';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
const NavBarAdmin = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] ">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-1">
        <Link href="/" className="text-xl md:text-3xl text-white font-semibold">
          <Image src="/logo.png" alt="image" width={50} height={50} />
        </Link>

        <div className="md:w-auto" id="navbar">
          <ul className="flex md:flex-row md:p-0 md:space-x-8 ">
            <Link
              href="/admin"
              className={`block sm:text-xl rounded md:p:0 
              ${
                pathname === '/admin'
                  ? 'text-white'
                  : 'text-[#ADB7BE] hover:text-white '
              }`}
            >
              Skills
            </Link>

            <Link
              href="/admin/inbox"
              className={`block sm:text-xl rounded md:p:0 ml-3
              ${
                pathname === '/admin/inbox'
                  ? 'text-white'
                  : 'text-[#ADB7BE] hover:text-white '
              }`}
            >
              Inbox
            </Link>
          </ul>
        </div>

        <div className="m text-white">
          <TbLogout
            size={25}
            className="cursor-pointer text-slate-400 hover:text-white"
            onClick={() => {
              signOut({ callbackUrl: '/login' });
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBarAdmin;
