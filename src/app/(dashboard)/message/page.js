import React from 'react';
import Inbox from '@/components/Inbox';
import ChatRoom from '@/components/ChatRoom';
import messages from '@/content/messages/messages';
import { newInbox, oldInbox } from '@/content/inbox/inbox';

const MessagePage = () => {
    return (
        <div className='w-full flex h-screen'>
            <Inbox newInbox={newInbox} oldInbox={oldInbox}/>
            <ChatRoom messages={messages}/>
        </div>
    );
};

export default MessagePage;