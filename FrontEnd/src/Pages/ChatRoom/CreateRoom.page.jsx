import React, { useState } from "react";
import { useNavigate } from "react-router";
//import {io} from "socket.io-client";
//const socket = io("http://localhost:5000");

const CreateRoom = () => {
    const [roomName, setRoomName] = useState("");
    const [description, setDescription] = useState("");
    const [joinRoomCode, setJoinRoomCode] = useState("");
    const navigate=useNavigate();

    const handleCreate = (e) => {
        e.preventDefault();
        console.log("Creating room:", roomName, description);
        setRoomName("");
        setDescription("");
    };

    const handleJoin = (e) => {
        e.preventDefault();
        console.log("Joining room with code:", joinRoomCode);
        setJoinRoomCode("");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
            
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
            {/* Create Room */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Create a New Room</h2>
            <form onSubmit={handleCreate} className="space-y-4">
                <div>
                <label htmlFor="roomName" className="block font-medium mb-1">
                    Room Name
                </label>
                <input
                    type="text"
                    id="roomName"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    placeholder="Enter room name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                </div>

                <div>
                <label htmlFor="description" className="block font-medium mb-1">
                    Description (optional)
                </label>
                <textarea
                    id="description"
                    rows="3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter room description"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                </div>

                <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                >
                Create Room
                </button>
            </form>

                <br />
                <button
                    type="button"
                    onClick={()=>localStorage.clear()}
                    className="w-full bg-red-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                    >
                    logout
                </button>
                <br />
            </div>

            {/* Join Room */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Join a Room</h2>
            <form onSubmit={handleJoin} className="space-y-4">
                <div>
                <label htmlFor="joinRoomCode" className="block font-medium mb-1">
                    Room Code / Name
                </label>
                <input
                    type="text"
                    id="joinRoomCode"
                    value={joinRoomCode}
                    onChange={(e) => setJoinRoomCode(e.target.value)}
                    placeholder="Enter room code or name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                </div>

                <button
                type="submit"
                className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                >
                Join Room
                </button>
            </form>
            </div>

            <br /><br />
            <button
                type="button"
                onClick={()=>navigate("/room")}
                className="w-full bg-green-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                Join Random Room
            </button>
        </div>
        </div>
    );
};

export default CreateRoom;
