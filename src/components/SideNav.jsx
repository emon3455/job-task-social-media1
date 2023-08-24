"use client"

import React from 'react';
import Link from 'next/link';
import sideNavLink from '@/content/sidenav/SidenavLinks';
import { FaChevronDown } from 'react-icons/fa';
import { usePathname } from "next/navigation";

const SideNav = () => {

    const pathname = usePathname();

    return (
        <aside className="w-60 min-h-screen shadow-2xl">
            <div className="flex justify-between items-center p-4 bg-white shadow-md">
                <h2 className="text-lg font-semibold">Social Club</h2>
                <button className="text-2xl focus:outline-none">...</button>
            </div>

            <div className="p-4 space-y-10 lg:space-y-16 bg-white">
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