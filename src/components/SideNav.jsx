"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import sideNavLink from '@/content/sidenav/SidenavLinks';
import { FaChevronDown } from 'react-icons/fa';

const SideNav = () => {

    const [isNavOpen, setIsNavOpen] = useState(true);

    return (
        <div className='bg-white shadow-2xl z-40'>
            <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="text-xl focus:outline-none inline w-10"
            >
                {isNavOpen ? '✕' : '☰'}
            </button>

            <div className={`${isNavOpen ? 'block' : 'hidden'}  min-h-screen p-4 space-y-10 lg:space-y-16`}>
                <h2 className="text-lg font-semibold mb-4">Parbo Amra</h2>

                <ul>
                    {sideNavLink.map((obj, indx) => (
                        <li key={indx}>
                            {obj.nestedRoutes ? (
                                <details>
                                    <summary className="flex items-center justify-between cursor-pointer">
                                        {obj.title}
                                        <FaChevronDown />
                                    </summary>
                                    <ul>
                                        {obj.nestedRoutes.map((nestedObj, nestedIndex) => (
                                            <li key={nestedIndex}>
                                                <Link href={nestedObj.path}>{nestedObj.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            ) : (
                                <Link href={obj.path}>{obj.title}</Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SideNav;