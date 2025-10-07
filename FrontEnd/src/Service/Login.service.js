import api from "../Axios/axios";

export const handleRegister=async(credent)=>{
    const response=await api.post("/auth/register",credent);
    return response;
}

export const handleLogin=async(credent)=>{
    const response=await api.post("/auth/login",credent);
    return response;
}

