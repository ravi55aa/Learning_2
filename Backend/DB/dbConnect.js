const dotenv =require("dotenv");
dotenv.config(); 

const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(" DB connected");
    } catch (err) {
        console.error(" DB connection error:", err.message);
    }
};

module.exports = connect;
