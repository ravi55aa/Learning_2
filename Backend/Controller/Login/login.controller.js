const httpStatus = require("../../Utils/httpStatus");
const userModel=require("../../Model/userModel");

const handleRegister=async(req,res,next)=>{
    try{
        const {name,email,password}=req.body;
        const newUser=new userModel({name,email,password});
        await newUser.save({validateBeforeSave:true});
        return res.status(httpStatus.OK).json({success:true,message:"User created successfully",token:newUser});
    }catch(err){
        next(err);
    }
}

const handleLogin=async(req,res,next)=>{
    try{
        const {email}=req.body;
        const user=await userModel.findOne({email:email});
        
        if(!user){
            return res.status(httpStatus.UNAUTHORIZED).json({success:false,message:"user not find"});    
        }

        return res.status(httpStatus.OK).json({success:true,message:"User login successfully",token:user});
    }catch(err){
        next(err);
    }
}


module.exports={handleLogin,handleRegister}
