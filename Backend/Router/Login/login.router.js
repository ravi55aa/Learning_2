const router=require('express').Router();
const {handleLogin,handleRegister} =require("../../Controller/Login/login.controller");

router.post("/register",handleRegister);
router.post("/login",handleLogin); //todo write login code;

module.exports=router;