"use client"
import { setMenuToggle } from '@/redux/navSlice/sideNavSlice';
import React from 'react';
import { FaBell, FaRocket, FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {

    const dispatch = useDispatch();
    const sideNavToggle = useSelector(state=> state.sideNav.isOpen)
    console.log(sideNavToggle);

    return (
        <div className="w-full bg-white shadow-2xl flex justify-between p-4">

            <div className="w-full md:w-1/2 flex">
                <div className="flex justify-between items-center w-60">
                    <h2 className="text-lg font-semibold">Social Club</h2>
                    <button
                        onClick={() => dispatch(setMenuToggle(!sideNavToggle))}
                        className="text-xl focus:outline-none inline w-10"
                    >
                        {sideNavToggle ? "✕" : "☰"}
                    </button>
                </div>
                <div className="hidden md:block flex-grow relative">
                    <div className="flex absolute inset-y-0 left-0 pl-3 items-center">
                        <FaSearch className="text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="w-full md:w-2/3 lg:w-3/5 md:pl-10 md:pr-4 py-1 rounded-sm border-none focus:outline-none bg-gray-100"
                        placeholder="Search"
                    />
                </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-end gap-x-4">
                <button className='hidden md:flex bg-yellow-400  text-sm px-2 py-1   items-center rounded-md gap-x-2'>
                    <FaRocket /> <span> Getting Started-0%</span>
                </button>
                <button className="text-xl"> <FaBell /> </button>
            </div>

        </div>
    );
};

export default Navbar;
