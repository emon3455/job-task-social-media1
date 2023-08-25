import React from 'react';
import InboxChats from './InboxChats';
import { FaSearch } from 'react-icons/fa';

const Inbox = ({ newInbox, oldInbox }) => {
    return (
        <div className=" bg-white border-r border-gray-300 w-1/3">
            <div className="flex justify-between items-center">
                <div className="space-x-2">
                    <button className="px-4 py-2 bg-sky-50 hover:bg-sky-100 font-semibold text-indigo-800 text-center rounded-sm">Inbox</button>
                    <button className="px-4 py-2 hover:bg-sky-100 font-semibold text-gray-700 text-center rounded-sm">Group</button>
                </div>
                <button className="p-2">
                    <FaSearch className="text-gray-400 text-xl" />
                </button>
            </div>
            <div className="flex justify-between p-2">
                <p className='text-xs text-gray-600 cursor-pointer'>New</p>
                <p className='text-sm text-blue-600 cursor-pointer'>Mark All As Read</p>
            </div>
            <InboxChats chats={newInbox} />
            <div className="p-2">
                <p className='text-xs text-gray-600 cursor-pointer'>Older</p>
            </div>
            <InboxChats chats={oldInbox} />
        </div>
    );
};

export default Inbox;
