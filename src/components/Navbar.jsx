import React from 'react';
import { FaBell, FaRocket, FaSearch } from 'react-icons/fa';

const Navbar = () => {

    return (
        <div className="w-full bg-white md:flex justify-between items-center shadow-2xl space-y-2 lg:space-y-0 p-4">
            <div className="w-full md:w-1/2 relative">
                <div className="hidden md:flex absolute inset-y-0 left-0 pl-3 items-center pointer-events-none">
                    <FaSearch className="text-gray-400" />
                </div>
                <input
                    type="text"
                    className="w-full md:w-2/3 lg:w-3/5 md:pl-10 md:pr-4 py-1 rounded-sm border-none focus:outline-none bg-gray-100"
                    placeholder="Search"
                />
            </div>

            <div className="w-full md:w-1/2 flex justify-center md:justify-end gap-x-4">
                <button className='bg-yellow-400 text-sm px-2 py-1  flex  items-center rounded-md gap-x-2'>
                    <FaRocket /> <span> Getting Started-0%</span>
                </button>
                <button className="text-xl"><FaBell /></button>
            </div>
        </div>
    );
};

export default Navbar;
