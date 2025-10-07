import { Navigate } from "react-router-dom";

export const RoomPR = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/" replace />;
};

export const LoginPR=({children})=>{
    const token=localStorage.getItem('token');
    return token ? <Navigate to="/room" replace/> : children;
}
