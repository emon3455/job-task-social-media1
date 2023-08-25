// import React from 'react';

// const InboxChats = ({ chats }) => {
//     return (
//         <ul className="space-y-2 w-full">
//             {chats.map((chat, index) => (
//                 <li key={index} className="flex items-center hover:bg-sky-100 cursor-pointer p-2">
//                     <img className="w-12 h-12 rounded-full mr-4" src={chat.userImage} alt={chat.userName} />
//                     <div className="flex-grow">
//                         <h3 className="text-md font-semibold">{chat.userName}</h3>
//                         <p className="text-xs text-gray-500 truncate">{chat.lastMessage}</p>
//                     </div>
//                     <p className="text-xs text-gray-400">{chat.timeAgo}</p>
//                 </li>
//             ))}
//         </ul>
//     );
// };

// export default InboxChats;
import React from 'react';

const InboxChats = ({ chats }) => {
    return (
        <ul className="space-y-2 w-full">
            {chats.map((chat, index) => (
                <li
                    key={index}
                    className={`flex items-center p-2 hover:bg-sky-100 cursor-pointer`}
                >

                    <div className='mr-4 relative'>
                        <div className='w-12 h-12 relative'>
                            <img className="w-full h-full rounded-full" src={chat.userImage} alt={chat.userName} />
                            <div
                                className={`${chat?.active ? 'bg-green-500' : ''
                                    } w-3 h-3 rounded-full absolute top-9 right-0 bottom-0`}
                            ></div>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-md font-semibold">
                            {chat.userName}
                            {chat.unread && (
                                <span className=" text-xs px-2 py-1 ml-2 rounded-full bg-sky-400 text-white">2</span>
                            )}
                        </h3>
                        <p className={`text-xs ${chat.unread ? 'text-blue-600' : 'text-gray-500'} truncate`}>
                            {chat.lastMessage}
                        </p>
                    </div>
                    <p className="text-xs text-gray-400">{chat.timeAgo}</p>
                </li>
            ))}
        </ul>
    );
};

export default InboxChats;
