import { useEffect, useState } from "react";
import { io } from "socket.io-client";
let socket = io("http://localhost:3000",{transports:["websocket"]}); 

const ChatApp = () => {
    const [username, setUsername] = useState("");
    const [chat, setChat] = useState("");
    const [messages, setMessages] = useState([]);

    // Listen for events
    useEffect(() => {
        
        socket.on("send name", (username) => {
            console.log("Name received:", username);
        });

        socket.on("send message", (chat) => {
        setMessages((prev) => [...prev, chat]);
        });

        return () => {
        socket.off("send name");
        socket.off("send message");
        };
    }, []);

    const handleSendName = () => {
        socket.emit("send name", username);
        setUsername("");
    };

    const handleSendMessage = () => {
        socket.emit("send message", { user: username || "Anonymous", text: chat });
        setChat("");
    };

    socket.on("connect", () => {
        console.log(" Connected:", socket.id);
    });

    return (
        <div className="p-4 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Chat App</h2>

        {/* Username */}
        <input
            type="text"
            value={username}
            placeholder="Enter your name"
            onChange={(e) => setUsername(e.target.value)}
            className="border px-2 py-1 rounded w-full mb-2"
        />
        <button
            onClick={handleSendName}
            className="bg-blue-500 text-white px-3 py-1 rounded mb-4"
        >
            Set Name
        </button>

        {/* Chat input */}
        <div className="flex gap-2">
            <input
            type="text"
            value={chat}
            placeholder="Enter message"
            onChange={(e) => setChat(e.target.value)}
            className="border px-2 py-1 rounded w-full"
            />
            <button
            onClick={handleSendMessage}
            className="bg-green-500 text-white px-3 py-1 rounded"
            >
            Send
            </button>
        </div>

        {/* Messages */}
        <ul className="mt-4 space-y-2">
            {messages.map((m, i) => (
            <li key={i} className="border p-2 rounded">
                <strong>{m.user}:</strong> {m.text}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default ChatApp;
