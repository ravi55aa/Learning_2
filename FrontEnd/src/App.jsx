import { Route,Routes } from "react-router";

import './App.css';
import Login from "./Pages/Login/Login.page";
import CreateRoom from "./Pages/ChatRoom/CreateRoom.page";
import Room from "./Pages/ChatRoom/Room.page";

import {LoginPR,RoomPR} from "@/ProtectedRouter/login.protectedRouter.jsx";


function App() {

  return (
    <div>

      <Routes>
        <Route path="/" element={ <LoginPR> <Login/> </LoginPR>} 
        />

        <Route path="/createRoom" element={<RoomPR><CreateRoom/></RoomPR>} />

        <Route path="/room" element={<RoomPR> <Room/> </RoomPR>} />
      </Routes>
    </div>
  )
}

export default App
