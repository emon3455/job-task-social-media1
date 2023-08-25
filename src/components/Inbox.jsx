import React from 'react';
import InboxChats from './InboxChats';

const Inbox = ({ newInbox, oldInbox }) => {
    return (
        <div className=" bg-white border-r border-gray-300 p-2 w-1/3">
            <div className="">
                <div className="">

                </div>
                <div className="">
                    
                </div>
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
