const {nanoid}=require("nanoid");
let genNanoId=nanoid(6);

const genRandomIds=()=>{
    return genNanoId;
}  

module.exports=genRandomIds;