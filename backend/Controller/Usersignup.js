const bcrypt=require('bcrypt');
const Agent = require('./Userschema');

const Usersignup = async(req,res)=>{
    const {name,image,email,password}=req.body;
    const existingStudent = await Agent.findOne({Email});

if(existingStudent){
    return res.status(400).json({error:'email alredy exist'})
}

    const salt=await bcrypt.genSalt(10)
    const hashedpassword =await bcrypt.hash(password,salt)
    
    const agentdetails = await Agent.create({
       name,image,email,password :hashedpassword

})
res.json(agentdetails)
}
module.exports=Usersignup