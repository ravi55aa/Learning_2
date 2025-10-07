const genRoomID=require("../Utils/nanoid");
const mongoose=require("mongoose");

const roomSchema = new mongoose.Schema({
    roomId: {
        type: String,
        unique: true,
        required: true,
        default: genRoomID, 
    },
    isEnded: {
        type: Boolean,
        default: false,
    },
    users: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        },
    ],
    messages: [
        {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        text: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
        },
    ],
});


const roomModel=mongoose.model("Room",roomSchema);

module.exports=roomModel;