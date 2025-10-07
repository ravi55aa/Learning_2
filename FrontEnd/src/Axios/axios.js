import axios from "axios";

const api = axios.create({
    baseURL: "https://learning-2-10.onrender.com",
});

export default api;
