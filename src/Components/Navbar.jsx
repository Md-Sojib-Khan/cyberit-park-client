'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from "next-auth/react";
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
    const { data: session } = useSession();
    const pathname = usePathname();
    const isActive = (path) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(path);
    };

    const links = <>
        <li><Link href={'/'} className={isActive('/') ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium' : ''}>Home</Link></li>
        <li><Link href={'/course'} className={isActive('/course') ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium' : ''}>Course</Link></li>
        <li><Link href={'/about-us'} className={isActive('/about-us') ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium' : ''}>About US</Link></li>
        <li><Link href={'/contact-us'} className={isActive('/contact-us') ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium' : ''}>Contact Us</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link href={'/'} className="font-bold text-2xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent whitespace-nowrap">CyberIT Park</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                {
                    session
                        ? <div className="dropdown dropdown-end dropdown-hover cursor-pointer">
                            <div tabIndex={0} role="button" >
                                <Image width={20} height={20} className='w-10 h-10 object-cover rounded-full border-2 border-white' src={session.user.image || "https://static.thenounproject.com/png/363639-200.png"} alt="" />
                            </div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-20 w-52 p-2 shadow-sm space-y-2">
                                <li><a className='font-medium'>{session.user.name}</a></li>
                                <li><Link href={'/add-course'} className='font-medium'>Add Course</Link></li>
                                <li><Link href={'/manage-course'} className='font-medium'>Manage Course</Link></li>
                                <li><button onClick={() => signOut()} className="btn btn-primary btn-sm rounded-full px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg border-0 text-white font-medium">LogOut</button></li>
                            </ul>
                        </div>

                        : <div className='flex items-center gap-2'>
                            <Link href={'/login'} className="btn btn-primary btn-sm rounded-full px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg border-0 text-white font-medium">Login</Link>
                            <Link href={'/register'} className="btn btn-primary btn-sm rounded-full px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg border-0 text-white font-medium">Register</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;