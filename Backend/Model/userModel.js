const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            default: "unknown",
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true, 
        },
        password: {
            type: String,
            minlength: 6,
            maxlength: 10,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        chats: [
        {
            senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            message: String,
            timestamp: { type: Date, default: Date.now },
        },
        ],
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
