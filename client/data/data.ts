export const currentUser = {
    id: "me",
    name: "Sanmesh Desai",
    avatar: "https://i.pravatar.cc/150?img=12",
    status: "online",
};

export const users = [
    {
        id: "1",
        name: "John Doe",
        avatar: "https://i.pravatar.cc/150?img=1",
        status: "online",
    },
    {
        id: "2",
        name: "Emma Wilson",
        avatar: "https://i.pravatar.cc/150?img=5",
        status: "offline",
    },
];

export const conversations = [
    {
        id: "1",
        userId: "1",
        lastMessage: "See you tomorrow 👋",
        unread: 2,
        updatedAt: "10:45 AM",
    },
];

export const messages = [
    {
        id: "1",
        conversationId: "1",
        senderId: "1",
        text: "Hey!",
        createdAt: "10:30 AM",
    },
    {
        id: "2",
        conversationId: "1",
        senderId: "me",
        text: "Hello 👋",
        createdAt: "10:31 AM",
    },
];