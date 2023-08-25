import React from 'react';


const ChatRoom = ({messages}) => {
    return (
        <div className="bg-gray-100 w-2/3">
        <div className="w-full bg-white rounded-lg p-6">
            <h1 className="text-2xl font-semibold mb-4">Messenger Inbox</h1>
            <div className="space-y-4">
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