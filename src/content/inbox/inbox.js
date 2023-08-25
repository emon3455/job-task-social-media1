const newInbox = [
    {
        userId: "1",
        userName: "Ariyan Emon",
        userImage: "https://i.ibb.co/jw2Z9R8/emon11.png",
        lastMessage: "Sure, I'll see you there! Looking forward to...",
        timestamp: Date.now() - 520000,
        active: true,
    },
    {
        userId: "2",
        userName: "Jane Smith",
        userImage: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
        lastMessage: "Looking your task bro...",
        timestamp: Date.now() - 720000,
        unread: true,
        active: true,
    },
    {
        userId: "3",
        userName: "John Doe",
        userImage: "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
        lastMessage: "Hey, how's it going? I wanted to talk about...",
        timestamp: Date.now() - 300000,
        active: false,
    },
    // Add more user entries as needed
];

const oldInbox = [
    {
        userId: "4",
        userName: "Emma Davis",
        userImage: "https://randomuser.me/api/portraits/men/32.jpg",
        lastMessage: "Remember that event we attended?",
        timestamp: Date.now() - 86400000,
        active: false,
    },
    {
        userId: "5",
        userName: "Mark Johnson",
        userImage: "https://randomuser.me/api/portraits/men/78.jpg",
        lastMessage: "It's been a while, how have you been?",
        timestamp: Date.now() - 2592000000,
        active: false,
    },
    {
        userId: "6",
        userName: "Adam Johnson",
        userImage: "https://randomuser.me/api/portraits/men/43.jpg",
        lastMessage: "okay Done?",
        timestamp: Date.now() - 2592000000,
        active: false,
    },
    // Add more user entries as needed
];

const formatTimeAgo = (timestamp) => {
    const now = Date.now();
    const elapsed = now - timestamp;

    if (elapsed < 3600000) {
        const minutes = Math.floor(elapsed / 60000);
        return `${minutes}M`;
    } else if (elapsed < 86400000) {
        const hours = Math.floor(elapsed / 3600000);
        return `${hours}h`;
    } else {
        const date = new Date(timestamp);
        const month = date.toLocaleString("default", { month: "short" });
        const day = date.getDate();
        return `${day}${month}`;
    }
};

newInbox.forEach((item) => {
    item.timeAgo = formatTimeAgo(item.timestamp);
});

oldInbox.forEach((item) => {
    item.timeAgo = formatTimeAgo(item.timestamp);
});

export { newInbox, oldInbox };
