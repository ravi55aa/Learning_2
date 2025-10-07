const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/chat");
        console.log(" DB connected");
    } catch (err) {
        console.error(" DB connection error:", err.message);
    }
};

module.exports = connect;
