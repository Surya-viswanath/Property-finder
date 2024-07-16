const bcrypt=require('bcrypt');
const Admin = require('../Model/AdminSchema');



const Adminsignup = async(req,res)=>{
    const {name,email,phone,password}=req.body;
    const existingCustomer = await Admin.findOne({email});

if(existingCustomer){
    return res.status(400).json({error:'email alredy exist'})
}

    const salt=await bcrypt.genSalt(10)
    const hashedpassword =await bcrypt.hash(password,salt)
    
    const Customerdetails = await Admin.create({
       name,email,phone,password:hashedpassword

})
res.json(Customerdetails)
}
module.exports=Adminsignup