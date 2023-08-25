"use client"

import React from 'react';
import Link from 'next/link';
import sideNavLink from '@/content/sidenav/SidenavLinks';
import { FaChevronDown } from 'react-icons/fa';
import { usePathname } from "next/navigation";
import { useSelector } from 'react-redux';

const SideNav = () => {

    const pathname = usePathname();
    const sideNavToggle = useSelector(state => state.sideNav.isOpen)
    
    return (
        <aside className={`${sideNavToggle ? "w-60" : "w-0 hidden"} min-h-screen shadow-2xl bg-white`}>

            <div className="p-4 lg:space-y-6 ">
                <ul className='space-y-1'>
                    {sideNavLink.map((obj, indx) => (
                        <li key={indx} className={`${obj.nestedRoutes ? "" : "hover:bg-violet-200"} transition-all duration-300 p-2 ${pathname === obj?.path
                            ? "bg-indigo-600 text-white hover:bg-indigo-700 rounded-sm"
                            : "bg-white"
                            }`}>

                            {
                                obj.nestedRoutes ? (
                                    <details>
                                        <summary className={`flex items-center justify-between cursor-pointer ${pathname === obj?.title
                                            ? "bg-blue-600 text-white"
                                            : "bg-white"
                                            }
                                            `}>
                                            {obj.title}
                                            <FaChevronDown />
                                        </summary>
                                        <ul className="ml-4 space-y-2">
                                            {obj.nestedRoutes.map((nestedObj, nestedIndex) =>
                                            (
                                                <li key={nestedIndex} className={`hover:bg-violet-200 p-2 transition-all duration-300 rounded mt-1
                                            ${pathname === nestedObj?.path
                                                        ? "bg-violet-200"
                                                        : "bg-white"
                                                    }
                                            `}>

                                                    <Link href={nestedObj.path} className=''>
                                                        <p className='w-full'> {nestedObj.title}</p>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                )
                                    :
                                    (
                                        <Link href={obj.path}> <p className='w-full'> {obj.title}</p></Link>
                                    )}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default SideNav;