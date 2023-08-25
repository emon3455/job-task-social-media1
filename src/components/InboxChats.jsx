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
                    <img className="w-12 h-12 rounded-full mr-4" src={chat.userImage} alt={chat.userName} />
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
