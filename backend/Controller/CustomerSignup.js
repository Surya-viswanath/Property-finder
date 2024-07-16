const bcrypt=require('bcrypt');
const Customer = require('./Customerschema');

const Customersignup = async(req,res)=>{
    const {name,email,phone,password}=req.body;
    const existingCustomer = await Customer.findOne({email});

if(existingCustomer){
    return res.status(400).json({error:'email alredy exist'})
}

    // const salt=await bcrypt.genSalt(10)
    // const hashedpassword =await bcrypt.hash(password,salt)
    
    const Customerdetails = await Customer.create({
       name,email,phone,password

})
res.json(Customerdetails)
}
module.exports=Customersignup