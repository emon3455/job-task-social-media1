import React from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { MdVideocam, MdCall } from 'react-icons/md';
import user from '@/content/user/user';

const ChatRoom = ({ messages }) => {
    return (
        <div className="bg-gray-100 w-2/3 min-h-screen relative">
            <div className="w-full bg-white rounded-lg">
                <div className="shadow-2xl mb-2 flex justify-between items-center sticky z-50 w-full bg-white">
                    <div className="p-2 flex items-center space-x-2">
                        <div className="relative">
                            <img
                                src={user.img}
                                alt={user.name}
                                className="w-14 h-14 rounded-xl"
                            />
                            <div className="">
                                <div
                                    className={`${user.active ? 'bg-green-500' : 'bg-gray-300'
                                        } w-3 h-3 rounded-full absolute top-100 right-0 bottom-0`}
                                ></div>
                            </div>
                        </div>
                        <p className="text-gray-lg text-xl font-semibold">
                            {user.name} 
                        </p>
                    </div>
                    <div className="p-2 space-x-3">
                        <button className="text-2xl font-medium text-gray-500">
                            <FaUserPlus />
                        </button>
                        <button className="text-2xl font-medium text-gray-500">
                            <MdVideocam />
                        </button>
                        <button className="text-2xl font-medium text-gray-500">
                            <MdCall />
                        </button>
                    </div>
                </div>
                <div className="space-y-4 p-2">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex items-start space-x-4 ${message.user.id === 101 ? 'justify-start' : 'justify-end'
                                }`}
                        >
                            {message.user.id === 101 ? (
                                <img
                                    src={message.user.img}
                                    alt={message.user.name}
                                    className="w-10 h-10 rounded-full"
                                />
                            ) : null}
                            <div
                                className={`${message.user.id === 101
                                    ? 'bg-sky-100 text-white'
                                    : 'bg-gray-100'
                                    } p-3 rounded-lg max-w-md`}
                            >
                                <p className="text-gray-800">{message.text}</p>
                            </div>
                            {message.user.id !== 101 ? (
                                <img
                                    src={message.user.img}
                                    alt={message.user.name}
                                    className="w-10 h-10 rounded-full"
                                />
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChatRoom;
