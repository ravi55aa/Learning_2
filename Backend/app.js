import express from "express";
const app = express();
import http from "http";

const server = http.createServer(app);
import { Server } from "socket.io";
import cors from "cors";
app.use(cors({origin: "*"}));

import path from "path";
import {fileURLToPath} from "url";

const io = new Server(server);

import dbConnect from "./DB/dbConnect.js";
import loginUserRouter from "./Router/Login/login.router.js";
import { handleError } from "./Middlewares/errorHandle.middleware.js";

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

io.on("connection", (socket) => {
    console.log("connected to", socket.id);
    socket.on("send name", (username) => {
        console.log("Name received", username);
        io.emit("send name", username);
    });

    socket.on("send message", (chat) => {
        console.log("message received", chat);
        io.emit("send message", chat);
    });

    socket.on("send emoji", (emoji) => {
        io.emit("send emoji", emoji);
    });

    socket.on("disconnect", () => {
        console.log("Connected disconnected", socket.id);
    });
});

dbConnect();

//routers
app.use("/auth", loginUserRouter);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("/api/test", (req, res) => {
    res.json({ message: "Backend connected successfully!" });
});


app.use(handleError);

server.listen(3000,()=>{
    console.log("http://localhost:3000");
})